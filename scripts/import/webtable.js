/**
  input: []
  params:
    - name: url
      label: 'URL'
      value:
        - control: 'textbox'
          value: 'https://news.ycombinator.com/'
          lazy: true
    - name: text
      label: 'Table Text'
      value:
        - control: 'textbox'
          value: '1.'
          lazy: true
    - name: hasHeader
      label: 'Has Header'
      value:
        - control: 'select'
          value: 'yes'
          values:
            - name: 'yes'
              label: Yes
            - name: 'no'
              label: No
    - name: scrollIters
      label: 'Scroll Iterations'
      value:
        - control: 'number'
          value: 2
          lazy: true
    - name: scrollClick
      label: 'Scroll Click'
      value:
        - control: 'textbox'
          value: ''
          lazy: true
  output:
    - data
    - screenshot
    - log
  environment: worker
  deps: ['https://cdnjs.cloudflare.com/ajax/libs/d3/6.2.0/d3.min.js']
  cache: true
**/

const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--lang=en-US'
  ]
});

const page = await browser.newPage();
const width = 1440;
const height = 820;

await page.setRequestInterception(false);
await page.setDefaultNavigationTimeout(0);
await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36');
await page.setViewport({
  width: width,
  height: height,
  // reduce scale factor to reduce screenshot size
  deviceScaleFactor: 0.5,
});

await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US' });
await page.goto(url, {
  waitUntil: 'domcontentloaded',
});

var log = [];
page.on('console', message => log.push(message.text().toString()));

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
while(!scrollClick && scrollIters > 1) {
  await page.evaluate((scrollClick) => {
    window.scrollTo(0, document.documentElement.scrollTop + document.body.offsetHeight/2);
  });

  scrollIters = scrollIters - 1;
  await sleep(100);
}

async function extractTable() {
  return page.evaluate((text, hasHeader) => {
    try {
      var element = [...document.querySelectorAll('*')].find(el => el.innerText && el.innerText.trim() === text.trim());

      if (!element) {
        console.log('Could not find table with exact text in given row');
        element = [...document.querySelectorAll('*')].find(el => el.children.length == 0 && el.innerText && el.innerText.includes(text.trim()));

        if (!element) {
          console.log('Could not find table with exact text in given leaf node');
          element = [...document.querySelectorAll('*')].filter(el => el.innerText && el.innerText.includes(text.trim()));
          
          if (element.length == 0) {
            console.log('Could not find table with the given text');
            return [ '' ];
          }

          element = element[element.length - 1];
        }
      };

      if (element.tagName === 'TD' || element.tagName === 'TH') {
        console.log('There is an actual table in html code');

        const table = element.closest('table');
        if (!table) {
          console.log('Could not find closest table');
          return [ '' ];
        }

        var [header, ...rows] = [...table.querySelectorAll('tr')];
        if (!hasHeader) {
          rows = [...table.querySelectorAll('tr')];

          if (rows.length > 0) {
            console.log('Header has ' + rows[0].querySelectorAll('td, th').length + ' columns');
          }
        }

        const colsMax = Math.max(...rows.map(row => row.querySelectorAll('td, th').length));
        const colsIndexes = Array.from(Array(colsMax).keys());

        const tableRows = rows
          .map(row => [...row.querySelectorAll('td, th')].map(el => {
            const img = el.querySelector('img');
            return img ? img.src : el.innerText.replace(/\n/g, ' ');
          }))
          .filter(r => r.length > 0)
        
        console.log('Found ' + tableRows.length + ' rows in table');

        var textHeader = [...header.querySelectorAll('td, th')]
          .map(el => el.innerText.replace(/\n/g, ' '))
          .join('§');
        if (!hasHeader && tableRows.length > 0) {
          textHeader = colsIndexes.map((i) => 'column' + (i+1)).join('§');
        }

        return [ textHeader + '\n' + tableRows.map(e => e.join('§')).join('\n') ];
      } else {
        console.log('Text is not inside a td element so we want to guess the table structure for ' + element.nodeName);

        const textClassName = element.classList[0];

        if (!textClassName) {
          console.log('Tables without classes are unsupported');
          return [ '' ];
        }

        console.log('Using class ' + textClassName + ' to extract data');

        // Get all desired elements and their parents structure
        const allElements = [...document.querySelectorAll(`${element.tagName}.${textClassName}`)];
        const headless = allElements.length === 1 || allElements[0].className === allElements[1].className;
        let fullStructure = allElements.map(el => {
          const nodes = [];
          while(el.parentNode) {
            nodes.unshift(el.parentNode);
            el = el.parentNode;
          }
          return nodes;
        });

        // If structure is of different length then filter by most common one
        const structureLength = fullStructure.reduce((res, { length }) => {
          if (res[length]) res[length] += 1;
          else res[length] = 1;
          return res;
        }, {});
        const sortedStructureLength = Object.keys(structureLength)
          .sort((a, b) => structureLength[b] - structureLength[a]);

        fullStructure = fullStructure.filter(el => el.length === parseInt(sortedStructureLength[0]));

        // Get all direct desired children
        const sliceIndex = fullStructure[0].reduce((res, _, i) => {
          const array = fullStructure.map(el => el[i]);
          const hasEquals = array.some((val, j) => array.indexOf(val) !== j);

          if (hasEquals) res = i;
          return res;
        }, 0);
        const structure = fullStructure.map(sel => sel[sliceIndex + 1]);

        // Go from top to bottom to get full structure on end nodes
        const getChildren = (res, node) => {
          if (node.children.length) {
            [...node.children].forEach(child => getChildren(res, child));
            return res;
          } else {
            if (node.className) {
              res.push({
                tag: node.tagName,
                class: node.className,
                value: node.tagName === 'IMG' ? node.src : node.parentNode.innerText,
              });
            }
            return res;
          }
        };

        const resultStructure = structure.map(sel => {
          return getChildren([], sel).filter((value, index, self) =>
            value.class && self.findIndex(v => v.value === value.value) === index);
        });

        // Map the structure to rows and columns of the result table
        const uniqueStructure = resultStructure.reduce((res, rel) => {
          rel.forEach(el => {
            const prop = `${el.tag}-${el.class}`;
            if (!res[prop]) {
              res[prop] = new Array(resultStructure.length);
              res[prop].fill('');
            }
          });
          return res;
        }, {});

        // Fill the result structure
        resultStructure.forEach((rel, i) => {
          rel.forEach(el => {
            const prop = `${el.tag}-${el.class}`;
            if (!uniqueStructure[prop][i]) uniqueStructure[prop][i] = el.value;
          });
        });

        let csv = '';

        if (headless) {
          csv += Object.keys(uniqueStructure).map((_, i) => `-${i}-`).join('§') + '\n';
        }

        csv += resultStructure.map((_, i) => {
          return Object.keys(uniqueStructure).map(key => {
            return (uniqueStructure[key][i] || '').replace(/§/g, ' ').replace(/\n/g, ' ');
          }).join('§');
        }).join('\n');

        return [ csv ];
      }
    }
    catch(e) {
      console.log(e.toString());
      return [ '', e.toString() ];
    }
  }, text, hasHeader == 'yes')
}

await sleep(1000);

var [ table, error ]  = await extractTable();
if (scrollClick) {
  scrollIters = scrollIters - 1;
  
  while(scrollIters > 0) {
    var stop = await page.evaluate((scrollClick) => {
      var click = document.getElementsByClassName(scrollClick);
      var end = click.length == 0 || click[0].disabled == true;

      if (!end) click[0].click();
      return end;
    }, scrollClick);
    if (stop) break;

    await sleep(1000);

    var [ tableIter, error ]  = await extractTable();
    if (error) break;

    tableIter = tableIter.split('\n').slice(1).join('\n');
    table = table + '\n' + tableIter;

    scrollIters = scrollIters - 1;
    await sleep(100);
  }
}

if (error) throw error;

await page.screenshot({ path: `screenshot.jpg`, fullPage: true });

await page.close();
await browser.close();

const dsvParser = d3.dsvFormat('§');
data = dsvParser.parse(table);

const contents = fs.readFileSync('screenshot.jpg', {encoding: 'base64'});
screenshot = 'data:image/jpg;base64,' + contents;
