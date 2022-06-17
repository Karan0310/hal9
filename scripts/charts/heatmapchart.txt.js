/**
  output: [html]
  params:
    - x
    - y
    - value
    - name: palette
      label: D3 Palette
      value:
        - control: paletteSelect
          value: blue
          type: gradient
          values:
            - name: blue
              colors: ['#ffffff', '#4e79a7']
            - name: orange
              colors: ['#ffffff', '#f28e2c']
            - name: red
              colors: ['#ffffff', '#e15759']
            - name: green
              colors: ['#ffffff', '#59a14f']
            - name: violet
              colors: ['#ffffff', '#af7aa1']
    - name: fontsize
      label: Font Size
      value:
        - control: range
          value: 16
          min: 5
          max: 20
    - name: marginleft
      label: Margin left
      value:
        - control: range
          value: 40
          min: 20
          max: 200
    - name: marginbottom
      label: Margin Bottom
      value:
        - control: range
          value: 30
          min: 20
          max: 200
  deps:
    - https://cdn.jsdelivr.net/npm/hal9-utils@latest/dist/hal9-utils.min.js
    - https://cdn.jsdelivr.net/npm/d3@6
    - https://cdn.jsdelivr.net/npm/@observablehq/plot@0.1
**/

data = await hal9.utils.toRows(data);

if (data.length > 10000) {
  throw(`Up to 10,000 data points are supported for this visualization, but ${data.length} were provided.`);
}

// calculate counts to get mean value between duplicates
const countsdata = x && y && value
  ? data.reduce((res, v) => {
      const vx = hal9.utils.convert(v[x]);
      const vy = hal9.utils.convert(v[y]);
      const vv = hal9.utils.convert(v[value]);
      const key = `${vx}_${vy}`;

      res[key] = res[key] || { x: vx, y: vy, value: 0, count: 0 };
      res[key].value += vv;
      res[key].count += 1;

      return res;
    }, {})
  : {};

const chartdata = Object.keys(countsdata).map(key => ({
  x: countsdata[key].x,
  y: countsdata[key].y,
  value: isNaN(countsdata[key].value) ? 0 : countsdata[key].value / countsdata[key].count,
}));

const getTitle = d => {
  const x = typeof d.x === 'string' ? d.x.toLocaleString() : d.x;
  const y = typeof d.y === 'string' ? d.y.toLocaleString() : d.y;
  const v = Math.round(d.value * 100) / 100;

  return `x: ${x}\ny: ${y}\nvalue: ${v}`;
}

const marks = x && y && value ? [
  Plot.cell(chartdata, { x: 'x', y: 'y', fill: 'value', stroke: '#fff', title: d => getTitle(d) }),
  Plot.text(chartdata, { x: 'x', y: 'y', text: d => d.value?.toFixed(1), fill: '#222', title: d => getTitle(d) })
] : [];

const paletteMap = {
  blue: ['#ffffff', '#4e79a7'],
  orange: ['#ffffff', '#f28e2c'],
  red: ['#ffffff', '#e15759'],
  green: ['#ffffff', '#59a14f'],
  violet: ['#ffffff', '#af7aa1'],
};

html.appendChild(Plot.plot({
  marks,
  color: {
    range: paletteMap[palette],
    interpolate: 'hsl',
  },
  grid: true,
  padding: 0.05,
  width: html.clientWidth,
  height: html.clientHeight,
  marginTop: 30,
  marginLeft: parseInt(marginleft),
  marginBottom: parseInt(marginbottom),
  style: {
    background: hal9.isDark() ? '#222' : '',
    color: hal9.isDark() ? 'white' : '',
    fontSize: parseInt(fontsize),
  },
}));

