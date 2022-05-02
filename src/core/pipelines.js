// @flow

// import scripts
import graphqltxt from '../../scripts/import/graphql.txt.js';
import imagestxt from '../../scripts/import/images.txt.js';
import importcsvtxt from '../../scripts/import/csv.txt.js';
import importexceltxt from '../../scripts/import/excel.txt.js';
import importjsontxt from '../../scripts/import/json.txt.js';
import iristxt from '../../scripts/import/iris.txt.js';
import mysqltxt from '../../scripts/import/mysql.txt.js';
import stockstxt from '../../scripts/import/stocks.txt.js';
import videoframestxt from '../../scripts/import/videoframes.txt.js';
import webcamtxt from '../../scripts/import/webcam.txt.js';
import sqlitetxt from '../../scripts/import/sqlite.txt.js';

// webscraping scripts
import webimagestxt from '../../scripts/import/webimages.txt.js';
import webselectortxt from '../../scripts/import/webselector.txt.js';
import webtablestxt from '../../scripts/import/webtable.txt.js';

// transform scripts
import assigntxt from '../../scripts/transforms/assign.txt.js';
import columntxt from '../../scripts/transforms/column.txt.js';
import converttxt from '../../scripts/transforms/convert.txt.js';
import derivetxt from '../../scripts/transforms/derive.txt.js';
import droptxt from '../../scripts/transforms/drop.txt.js';
import explodetxt from '../../scripts/transforms/explode.txt.js';
import fetchtxt from '../../scripts/transforms/fetch.txt.js';
import filtertxt from '../../scripts/transforms/filter.txt.js';
import foldtxt from '../../scripts/transforms/fold.txt.js';
import imputetxt from '../../scripts/transforms/impute.txt.js';
import jointxt from '../../scripts/transforms/join.txt.js';
import pivottxt from '../../scripts/transforms/pivot.txt.js';
import rangetxt from '../../scripts/transforms/range.txt.js';
import rollingsumtxt from '../../scripts/transforms/rollingsum.txt.js';
import sampletxt from '../../scripts/transforms/sample.txt.js';
import selecttxt from '../../scripts/transforms/select.txt.js';
import slicetxt from '../../scripts/transforms/slice.txt.js';
import sorttxt from '../../scripts/transforms/sort.txt.js';
import subsprevtxt from '../../scripts/transforms/subsprev.txt.js';
import summarizetxt from '../../scripts/transforms/summarize.txt.js';

// chart scripts
import barcharttxt from '../../scripts/charts/barchart.txt.js';
import boxplotcharttxt from '../../scripts/charts/boxplotchart.txt.js';
import dotplotcharttxt from '../../scripts/charts/dotplotchart.txt.js';
import violinplotcharttxt from '../../scripts/charts/violinplotchart.txt';
import errorbarcharttxt from '../../scripts/charts/errorbarchart.txt.js';
import heatmapcharttxt from '../../scripts/charts/heatmapchart.txt.js';
import histogramcharttxt from '../../scripts/charts/histogramchart.txt.js';
import linecharttxt from '../../scripts/charts/linechart.txt.js';
import sankeycharttxt from '../../scripts/charts/sankeychart.txt.js';
import scattercharttxt from '../../scripts/charts/scatterchart.txt.js';
import treemapcharttxt from '../../scripts/charts/treemapchart.txt.js';

// visualization scripts
import bubblestxt from '../../scripts/visualizations/bubbles.txt.js';
import funneltxt from '../../scripts/visualizations/funnel.txt.js';
import gallerytxt from '../../scripts/visualizations/gallery.txt';
import mapcharttxt from '../../scripts/visualizations/map.txt.js';
import networktxt from '../../scripts/visualizations/network.txt.js';
import plotlychartstxt from '../../scripts/visualizations/plotlycharts.txt.js';
import radialbarstxt from '../../scripts/visualizations/radialbars.txt.js';
import simpletabletxt from '../../scripts/visualizations/simpletable.txt';
import threejstxt from '../../scripts/visualizations/three.txt.js';
import wafflecharttxt from '../../scripts/visualizations/waffle.txt.js';
import waterfallcharttxt from '../../scripts/visualizations/waterfall.txt.js';
import wordcloudtxt from '../../scripts/visualizations/wordcloud.txt.js';

// prediction scripts
import movenettxt from '../../scripts/predict/movenet.txt.js';
import knntxt from '../../scripts/predict/knn.txt.js';
import mobilenettxt from '../../scripts/predict/mobilenet.txt.js';
import regressionpredicttxt from '../../scripts/predict/regression.txt.js';
import sentimenttxt from '../../scripts/predict/sentiment.txt.js';

// prediction / timeseries scripts
import autoregressivetxt from '../../scripts/timeseries/autoregressive.py';
import lstmtxt from '../../scripts/timeseries/lstm.txt.js';
import movingaveragetxt from '../../scripts/timeseries/movingaverage.txt.js';
import prophettxt from '../../scripts/timeseries/prophet.py';
import seasonalitytxt from '../../scripts/timeseries/seasonality.py';

// train scripts
import predicttxt from '../../scripts/train/predict.py';
import linearregressiontxt from '../../scripts/train/linearregression.py';
import logisiticregressiontxt from '../../scripts/train/logisticregression.py';
import pycarettxt from '../../scripts/train/pycaret.py';
import traintesttxt from '../../scripts/train/traintest.py';

// stats scripts
import shapirotxt from '../../scripts/stats/shapiro.txt.js';
import abtesttxt from '../../scripts/stats/abtest.txt.js';

// util scripts
import copytxt from '../../scripts/utils/copy.txt.js';
import pastetxt from '../../scripts/utils/paste.txt.js';
import tojsontxt from '../../scripts/utils/tojson.txt.js';
import ziptomaptxt from '../../scripts/utils/ziptomap.txt.js';
import citytomaptxt from '../../scripts/utils/citytomap.txt.js';

// export scripts
import exportcsvtxt from '../../scripts/export/csv.txt.js';
import exporttexttxt from '../../scripts/export/text.txt.js';

// service scripts
import airbnbtxt from '../../scripts/services/airbnb.txt.js';
import bigquerytxt from '../../scripts/services/bigquery.txt.js';
import datagrabiotxt from '../../scripts/services/datagrabio.txt';
import googlesheetstxt from '../../scripts/services/googlesheets.txt.js';
import powerbitxt from '../../scripts/services/powerbi.txt';
import reddittxt from '../../scripts/services/reddit.txt.js';
import tableautxt from '../../scripts/services/tableau.txt';
import twittertxt from '../../scripts/services/twitter.txt.js';

// language scripts
import htmltxt from '../../scripts/languages/html.txt';
import javascripttxt from '../../scripts/languages/javascript.txt';
import markdowntxt from '../../scripts/languages/markdown.txt';
import pyodidetxt from '../../scripts/languages/pyodide.txt.js';
import pythontxt from '../../scripts/languages/python.txt';
import rtxt from '../../scripts/languages/r.txt';

// framework scripts
import pyscripttxt from '../../scripts/frameworks/pyscript.txt';
import reacttxt from '../../scripts/frameworks/react.txt';
import vuetxt from '../../scripts/frameworks/vue.txt';

// control scripts
import spreadsheetctrltxt from '../../scripts/controls/spreadsheet.txt';
import websitectrltxt from '../../scripts/controls/website.txt.js';

// business scripts
import churntxt from '../../scripts/business/churn.txt.js';

import * as snippets from './snippets';
import * as operations from './utils/operations';
import * as dataframe from './utils/dataframe';
import clone from './utils/clone';
import * as environment from './utils/environment'

import * as executors from './executors/executors';

import * as store from './pipelinestore.js';
import * as api from './api.js';

import * as languages from './interpreters/languages'

import * as datatable from '../../libs/jedit/jedit.js';
import datatablecss from "../../libs/jedit/jedit.css";

import { debugIf } from './utils/debug'

/*::
type paramid = number;
type param = { id: paramid, name: string, label: string, value: Array<Object> };
type params = { [key: string]: param };
type step = { id: number, name: string, language: string };
type stepid = number;
type steps = Array<step>;
type output = { id: number, name: string, label: string };
type outputs = { [id: string]: output };
type source = { id: number, name: string, label: string };
type sources = { [id: string]: source };
type context = { html: Object };
type pipeline = { params: params, steps: steps, sources: sources, ... };
type pipelineid = string;
type metadata = { params: params, deps: Array<string>, environment: string };
type block = { id: number, name: string, params: params, error: string, metadata: metadata, script: string };
type blocks = Array<block>;
*/

const scripts = {
  // import
  graphql: { script: graphqltxt, language: 'javascript' },
  images: { script: imagestxt, language: 'javascript' },
  importcsv: { script: importcsvtxt, language: 'javascript' },
  importexcel: { script: importexceltxt, language: 'javascript' },
  importjson: { script: importjsontxt, language: 'javascript' },
  iris: { script: iristxt, language: 'javascript' },
  mysql: { script: mysqltxt, language: 'javascript' },
  stocks: { script: stockstxt, language: 'javascript' },
  videoframes: { script: videoframestxt, language: 'javascript' },
  webcam: { script: webcamtxt, language: 'javascript' },
  sqlite: { script: sqlitetxt, language: 'javascript' },

  // webscraping
  webimages: { script: webimagestxt, language: 'javascript' },
  webselector: { script: webselectortxt, language: 'javascript' },
  webtables: { script: webtablestxt, language: 'javascript' },

  // transforms
  assign: { script: assigntxt, language: 'javascript' },
  column: { script: columntxt, language: 'javascript' },
  convert: { script: converttxt, language: 'javascript' },
  derive: { script: derivetxt, language: 'javascript' },
  drop: { script: droptxt, language: 'javascript' },
  explode: { script: explodetxt, language: 'javascript' },
  filter: { script: filtertxt, language: 'javascript' },
  fold: { script: foldtxt, language: 'javascript' },
  impute: { script: imputetxt, language: 'javascript' },
  join: { script: jointxt, language: 'javascript' },
  pivot: { script: pivottxt, language: 'javascript' },
  range: { script: rangetxt, language: 'javascript' },
  rollingsum: { script: rollingsumtxt, language: 'javascript' },
  sample: { script: sampletxt, language: 'javascript' },
  select: { script: selecttxt, language: 'javascript' },
  slice: { script: slicetxt, language: 'javascript' },
  sort: { script: sorttxt, language: 'javascript' },
  subsprev: { script: subsprevtxt, language: 'javascript' },
  summarize: { script: summarizetxt, language: 'javascript' },

  // charts
  barchart: { script: barcharttxt, language: 'javascript' },
  boxplotchart: { script: boxplotcharttxt, language: 'pyodide' },
  dotplotchart: { script: dotplotcharttxt, language: 'javascript' },
  errorbarchart: { script: errorbarcharttxt, language: 'javascript' },
  heatmapchart: { script: heatmapcharttxt, language: 'javascript' },
  histogramchart: { script: histogramcharttxt, language: 'javascript' },
  violinchart: { script: violinplotcharttxt, language: 'pyodide' },
  linechart: { script: linecharttxt, language: 'javascript' },
  sankeychart: { script: sankeycharttxt, language: 'javascript' },
  scatterchart: { script: scattercharttxt, language: 'javascript' },
  treemapchart: { script: treemapcharttxt, language: 'javascript' },

  // visualizations
  bubbles: { script: bubblestxt, language: 'javascript' },
  funnel: { script: funneltxt, language: 'javascript' },
  gallery: { script: gallerytxt, language: 'html' },
  mapchart: { script: mapcharttxt, language: 'javascript' },
  network: { script: networktxt, language: 'javascript' },
  plotlycharts: { script: plotlychartstxt, language: 'javascript' },
  radialbars: { script: radialbarstxt, language: 'javascript' },
  threejs: { script: threejstxt, language: 'javascript' },
  wafflechart: { script: wafflecharttxt, language: 'javascript' },
  wordcloud: { script: wordcloudtxt, language: 'javascript' },
  waterfallchart: { script: waterfallcharttxt, language: 'javascript' },
  table: { script: simpletabletxt, language: 'html' },

  // predictions
  bodypix: { script: movenettxt, language: 'javascript' },
  movenet: { script: movenettxt, language: 'javascript' },
  knn: { script: knntxt, language: 'javascript' },
  mobilenet: { script: mobilenettxt, language: 'javascript' },
  regressionpredict: { script: regressionpredicttxt, language: 'javascript' },
  sentiment: { script: sentimenttxt, language: 'javascript' },

  // prediction / time
  timeauto: { script: autoregressivetxt, language: 'python' },
  timelstm: { script: lstmtxt, language: 'javascript' },
  timemovingaverage: { script: movingaveragetxt, language: 'javascript' },
  timeprophet: { script: prophettxt, language: 'python' },
  timeseasonality: { script: seasonalitytxt, language: 'pyodide' },

  // train
  predict: { script: predicttxt, language: 'python' },
  linearregression: { script: linearregressiontxt, language: 'python' },
  traintest: { script: traintesttxt, language: 'python' },
  logisiticregression: { script: logisiticregressiontxt, language: 'python' },
  pycaret: { script: pycarettxt, language: 'python' },

  // stats
  shapiro: { script: shapirotxt, language: 'pyodide' },
  abtest: { script: abtesttxt, language: 'pyodide' },

  // utils
  copy: { script: copytxt, language: 'javascript' },
  paste: { script: pastetxt, language: 'javascript' },
  tojson: { script: tojsontxt, language: 'javascript' },
  fetch: { script: fetchtxt, language: 'javascript' },
  ziptomap: { script: ziptomaptxt, language: 'javascript' },
  citytomap: { script: citytomaptxt, language: 'javascript' },

  // export
  exportcsv: { script: exportcsvtxt, language: 'javascript' },
  exporttext: { script: exporttexttxt, language: 'javascript' },

  // services
  airbnb: { script: airbnbtxt, language: 'javascript' },
  bigquery: { script: bigquerytxt, language: 'javascript' },
  datagrabio: { script: datagrabiotxt, language: 'html' },
  googlesheets: { script: googlesheetstxt, language: 'javascript' },
  powerbi: { script: powerbitxt, language: 'html' },
  reddit: { script: reddittxt, language: 'javascript' },
  tableau: { script: tableautxt, language: 'html' },
  twitter: { script: twittertxt, language: 'javascript' },

  // languages
  html: { script: htmltxt, language: 'html' },
  javascript: { script: javascripttxt, language: 'javascript' },
  markdown: { script: markdowntxt, language: 'markdown' },
  pyodide: { script: pyodidetxt, language: 'pyodide' },
  python: { script: pythontxt, language: 'python' },
  r: { script: rtxt, language: 'r' },

  // frameworks
  pyscript: { script: pyscripttxt, language: 'html' },
  react: { script: reacttxt, language: 'html' },
  vue: { script: vuetxt, language: 'html' },

  // controls
  spreadsheet: { script: spreadsheetctrltxt, language: 'html' },
  website: { script: websitectrltxt, language: 'javascript' },

  // controls
  churn: { script: churntxt, language: 'pyodide' },
}

var pipelinesStateCount = 0;
var pipelinesState = {};
var pipelinesCallbacks = {};

var fetchedScripts = {};

const scriptFromStep = (pipeline /* pipeline */, step /*: step */) /*: string */ => {
  var language = step.language;
  var text = undefined;

  if (pipeline.scripts[step.id])
    text = pipeline.scripts[step.id];
  else if (fetchedScripts[step.url])
    text = fetchedScripts[step.url];
  else if (scripts[step.name]) {
    text = scripts[step.name].script;
    language = scripts[step.name].language;
  }
  else
    text = '';

  return { script: text, language: language };
}

const paramsFromStep = (pipeline /* pipeline */, step /*: step */) /*: params */ => {
  if (pipeline.params[step.id]) return clone(pipeline.params[step.id]);
  return clone(paramsFromScript(scriptFromStep(pipeline, step).script));
}

const paramsFromScript = (script /*: string */) /*: params */ => {
  var codeparams = snippets.parseParams(script);

  var idx = 0;
  var retparams = Object.fromEntries(codeparams.map((e) => {
    if (typeof (e) === 'string')
      return [e, { id: idx++, name: e, label: e, static: false, value: [] }];
    else if (e === null)
      return ['', { id: idx++, static: false, value: [] }];
    else {
      if (e.value) {
        e.value.map(e => Object.assign(e, { id: idx++ }));
      }
      return [e.name, Object.assign({ id: idx++, static: !!e.value, value: [] }, e)]
    }
  }));

  return retparams;
}

const metadataFromScript = (script /*: string */) /* metadata */ => {
  var header = snippets.parseHeader(script);

  var id = 0;
  if (header.params) {
    header.params = header.params.map(e => {
      if (typeof (e) === 'string')
        return { name: e, label: e };
      else {
        if (e.value) {
          e.value.map(e => Object.assign(e, { id: id++ }));
        }
        return e;
      }
    })
  }

  return header;
}

const metadataFromStepScript = (pipeline /* pipeline */, step /*: step */) /* metadata */ => {
  return metadataFromScript(scriptFromStep(pipeline, step).script);
}

const createInt = (steps /*: steps */, previous /*: pipeline */) /*: pipeline */ => {
  steps = clone(steps);

  var newscripts = previous && previous.scripts ? previous.scripts : {},
    newscripts = Object.fromEntries(Object.entries(newscripts).filter(([k, v]) => steps.map(e => e.id.toString()).includes(k)));

  const pipeline = {
    id: previous.id ? previous.id : Math.floor(Math.random() * 10000000),
    steps: [],
    params: {},
    outputs: {},
    errors: {},
    scripts: newscripts,
    globals: {},
    error: undefined,
    version: '0.0.1',
    metadata: clone(previous.metadata),
  };

  pipeline.steps = steps;

  steps.forEach((step, idx) => {
    var params = paramsFromStep(pipeline, step);

    if (!step.language || step.language == 'js') step.language = 'javascript';

    if (step.params) {
      params = step.params;
    }

    if (step.id === undefined) {
      step.id = idx;
    }

    if (previous.params && previous.params[step.id]) {
      params = Object.assign(params, previous.params[step.id]);
    }

    setParamsInt(pipeline, step.id, params);

    const preStep = previous.steps ? previous.steps.filter(e => e.id === pipeline.steps[idx].id) : [];
    pipeline.steps[idx].language = preStep.length == 1 ? preStep[0].language : undefined;
  });

  return pipeline;
}

export const create = (steps /*: steps */) /*: pipelineid */ => {
  const pipeline = createInt(steps, {});
  const pipelineid = store.add(pipeline);
  return pipelineid;
}

const fetchScripts = async (steps /*: steps */) => {
  if (!steps) return;
  await Promise.all(steps.map(step => {
    return (async (step) => {
      if (step.url && !fetchedScripts[step.url]) {
        const fullUrl = step.url.startsWith('http://') || step.url.startsWith('https://');
        const url = fullUrl ? step.url : 'https://raw.githubusercontent.com/hal9ai/hal9ai/main/scripts/' + step.url;
        const response = await fetch(url);
        fetchedScripts[step.url] = await response.text();
      }
    })(step);
  }));
}

export const update = (pipelineid /*: pipelineid */, steps /*: steps */) /*: void */ => {
  const pipelineold = store.get(pipelineid);
  const pipelinenew = createInt(steps, pipelineold);
  pipelinenew.version = pipelineold.version;
  store.update(pipelineid, pipelinenew);
}

export const remove = (pipelineid /*: pipelineid */) /*: void */ => {
  store.remove(pipelineid);
}

const stepGetDefinition = (pipeline, step) => {
  step = Object.assign({}, step);
  Object.assign(step, {
    params: paramsFromStep(pipeline, step)
  });

  if (pipeline.scripts[step.id])
    step.script = pipeline.scripts[step.id];

  return step;
}

export const runStep = async (pipelineid /*: pipeline */, sid /*: number */, context /* context */, partial) /*: boolean */ => {
  var pipeline = store.get(pipelineid);

  if (pipeline.aborted) throw 'Pipeline stopped before finishing'

  const step = stepFromId(pipeline, sid);
  var result = {};

  var globals = getGlobalsInt(pipeline);
  var state = getState(pipelineid, step.id);
  var callbacks = getCallbacks(pipelineid, step.id);
  var details = {};
  var resultNames = [];

  var error = '';
  try {
    const metadata = metadataFromStepScript(pipeline, step);
    if (metadata.invalid) {
      throw 'Script header is invalid: ' + metadata.invalid;
    }

    var input = {}

    // assign only globals being used to prevent cache invalidations
    for (var inputidx in metadata.input) {
      const inputName = metadata.input[inputidx];
      input[inputName] = undefined;
      if (typeof (globals[inputName]) !== 'undefined') input[inputName] = globals[inputName];
    }

    // upgrade old pipelines, can be removed eventually
    if (!pipeline.version) {
      for (var paramidx in metadata.params) {
        const param = metadata.params[paramidx];
        if (typeof (globals[param.name]) !== 'undefined') input[param.name] = globals[param.name];
      }
    }

    var params = pipeline.params[step.id] ? clone(pipeline.params[step.id]) : {};

    // add default parameters
    var paramsDefault = paramsFromScript(scriptFromStep(pipeline, step).script);
    Object.keys(paramsDefault).forEach(param => {
      if (!Object.keys(params).includes(param)) params[param] = clone(paramsDefault[param]);
    });

    if (context.params) {
      var paramIdx = Object.keys(params).length > 0 ? Math.max(...Object.keys(params).map(e => params[e].id ? params[e].id : 0)) : 0;
      Object.keys(context.params).forEach(param => {
        if (input[param]) {
          console.log('Param ' + param + ' of type ' + typeof(input[param]) + ' matched with input in step ' + step.name + '/' + step.id)

          input[param] = clone(context.params[param]);
          delete context.params[param];
        }
        else if (params[param]) {
          console.log('Param ' + param + ' of type ' + typeof(input[param]) + ' matched with param in step ' + step.name + '/' + step.id)

          params[param] = {
            id: paramIdx++, name: param, label: param, value: [{
              value: clone(context.params[param])
            }]
          };
          delete context.params[param];
        }
      });
    }

    const deps = {};

    // add hal9 api to deps
    deps['hal9'] = api.create(pipelineid, sid, context, params, input);

    const script = scriptFromStep(pipeline, step);
    const executor = executors.executorFromMetadata(
      metadata,
      input,
      step,
      context,
      script.script,
      params,
      deps,
      state,
      script.language,
      callbacks,
      context.pipelinepath);

    result = await executor.runStep();

    // truncate data if needed
    if (result && result.data && Array.isArray(result.data) && context.maxRows && result.data.length && result.data.length > context.maxRows) {
      details.truncated = { truncation: context.maxRows };

      result.data.splice(context.maxRows);
      if (result.state && result.state.cache && result.state.cache.result && result.state.cache.result.data) {
        result.state.cache.result.data.splice(context.maxRows + 1);
      }
    }

    for (var resultname in result) {
      if (resultname === 'state') continue;

      var resultentry = result[resultname];

      if (step.output && step.output[resultname]) {
        resultname = step.output[resultname];
      }

      resultNames.push(resultname);
      globals[resultname] = resultentry;
    }
  }
  catch (e) {
    console.log(e);
    error = e;
  }

  if (result.error) error = result.error;

  setErrors(pipeline, step.id, error);
  if (result.state) setState(pipelineid, step.id, Object.assign(state ? state : {}, result.state));
  setGlobals(pipeline, globals);

  var outputs = undefined;
  if (result.data) {
    outputs = dataframe.columns(result.data).map((col, idx) => {
      return { id: idx, name: col, label: col };
    });
  }
  setOutputs(pipeline, step.id, outputs);

  const visibleResults = resultNames.filter(e => e != 'state');
  const resultsMap = Object.fromEntries(visibleResults.map(e => [e, e]));
  partial(pipelineid, step, resultsMap, error, details);

  return error === '';
}

const stepHasHtml = (pipeline, step) => {
  const langInfo = languages.getLanguageInfo(step.language);
  if (langInfo.html) return true;

  var header = snippets.parseHeader(scriptFromStep(pipeline, step).script);
  return header && header.output && header.output.filter(e => e == 'html').length > 0;
}

const preparePartial = (pipeline, context, partial, renderid) => {
  var html = context.html;
  if (typeof (html) === 'object') {
    const isFullView = renderid === null || renderid === undefined;

    const oneHasHtml = pipeline.steps.map(step => stepHasHtml(pipeline, step)).filter(e => e).length > 0;

    // add support for viewing data tables
    if (!isFullView || !oneHasHtml) {
      if (!oneHasHtml) {
        renderid = pipeline.steps[pipeline.steps.length - 1].id;
      }

      var step = stepFromId(pipeline, renderid);
      var header = snippets.parseHeader(scriptFromStep(pipeline, step).script);
      const hasHtml = stepHasHtml(pipeline, step);
      if (!hasHtml) {
        return function (pipeline, step, result, error, details) {
          html = html.shadowRoot ? html.shadowRoot : html;
          html.innerHTML = '';

          var style = document.createElement('style');
          style.innerHTML = datatablecss;
          style.id = 'hal9__datatable__style';
          html.appendChild(style);

          var area = document.createElement('div');
          area.style.width = area.style.maxWidth = "100%";
          area.style.overflow = 'hidden';

          var tabs = document.createElement('div');
          tabs.style.width = tabs.style.maxWidth = "100%";
          tabs.style.overflow = 'hidden';

          tabs.style.display = 'flex';
          tabs.style.flexDirection = 'row';
          html.appendChild(tabs);
          if (Object.keys(result).length > 1) {
            Object.keys(result).forEach((r, tabIdx) => {
              var tab = document.createElement('a');
              tab.href = '#';
              tab.target = '_self';
              tab.style.paddingRight = '6px';
              tab.style.textDecoration = 'none';
              tab.style.color = '#528efd';
              tab.innerText = r;
              tab.onclick = () => {
                for (let i = 0; i < area.children.length; i++) area.children[i].style.display = 'none';
                area.children[tabIdx].style.display = 'block';
              };

              tabs.appendChild(tab);
            });
          }

          html.appendChild(area);
          Object.keys(result).forEach((r, idx) => {
            var output = document.createElement('div');
            if (idx > 0) output.style.display = 'none';
            area.appendChild(output);

            datatable.build(output, getGlobal(pipeline, result[r]));
          });

          partial(pipeline, step, result, error, details);
        }
      }
    }
  }

  return partial;
}

const prepareContext = (pipeline, context, stepstopid) => {
  var parent = context.html;

  if (typeof (parent) === 'object') {
    const height = parent.offsetHeight;

    parent.innerHTML = '';
    const html = parent.shadowRoot ? parent.shadowRoot : (context.shadow === false ? parent : parent.attachShadow({ mode: 'open' }));
    html.innerHTML = '';

    const isFullView = stepstopid === null || stepstopid === undefined;

    // add support for generating html blocks
    context.html = (step) => {
      var header = snippets.parseHeader(scriptFromStep(pipeline, step).script);
      var hasHtml = header && header.output && header.output.filter(e => e == 'html').length > 0;

      const langInfo = languages.getLanguageInfo(step.language);
      if (langInfo.html) hasHtml = true;

      if (isFullView && hasHtml) {
        const output = html.querySelector(':scope .hal9-step-' + step.id);
        if (output) return output;

        var container = document.createElement('div');
        container.className = 'hal9-step-' + step.id;
        container.style.width = '100%';

        if (langInfo.height) {
          container.style.height = langInfo.height;
        }
        else {
          container.style.height = height + 'px';
        }

        html.appendChild(container);

        return container;
      }
      else if (stepstopid == step.id) {
        const output = html.querySelector(':scope .hal9-step-' + step.id);
        if (output) return output;

        var container = document.createElement('div');
        container.className = 'hal9-step-' + step.id;
        container.style.width = '100%';
        container.style.height = '100%';

        html.appendChild(container);

        return container;
      }
      else {
        const sandbox = html.querySelector(':scope .hal9-step-sandbox');
        if (sandbox) {
          sandbox.innerHTML = '';
          return sandbox;
        }

        var container = document.createElement('div');
        container.className = 'hal9-step-sandbox';
        container.style.width = '0';
        container.style.height = '0';
        container.style.position = 'absolute';
        container.style.display = 'none';
        html.appendChild(container);

        return container;
      }
    }
  }
}

export const run = async (pipelineid /*: pipeline */, context /* context */, partial, stepstopid /* stepid */) /*: void */ => {
  debugIf('run');

  var pipeline = store.get(pipelineid);
  pipeline.aborted = undefined;

  if (!pipeline || pipeline.length == 0) return;

  await fetchScripts(pipeline.steps);

  if (typeof (context.html) === 'string') {
    context.html = document.getElementById(context.html);
  }

  partial = preparePartial(pipeline, context, partial, stepstopid);
  prepareContext(pipeline, context, stepstopid);

  pipeline.errors = {};
  pipeline.error = undefined;
  setGlobals(pipeline, {});

  // add context parameters
  if (typeof (window) != 'undefined' && window.hal9 && window.hal9.params) {
    console.log('Pipeline contains parameters: ' + Object.keys(window.hal9.params))
    context.params = window.hal9.params;
  }

  for (var idx = 0; idx < pipeline.steps.length; idx++) {
    const step = pipeline.steps[idx];

    const success = await runStep(pipelineid, step.id, context, partial);

    if (!success) {
      pipeline.error = pipeline.errors[step.id];
      break;
    }

    if (stepstopid != undefined && step.id === stepstopid) break;
  };

  return pipelineid;
}

export const getError = (pipelineid /*: pipelineid */) => {
  var pipeline = store.get(pipelineid);
  return pipeline.error;
}

export const getParams = (pipelineid /*: pipelineid */, sid /*: stepid */) /*: params */ => {
  var pipeline = store.get(pipelineid);
  return clone(pipeline.params[sid]);
}

const setParamsInt = (pipeline /*: pipeline */, sid /*: stepid */, params /*: params */) /*: void */ => {
  pipeline.params[sid] = clone(params);

  const stepIdx = stepIdxFromId(pipeline, sid);
  if (stepIdx !== -1) pipeline.steps[stepIdx].params = clone(params);
}

export const setParams = (pipelineid /*: pipelineid */, sid /*: stepid */, params /*: params */) /*: void */ => {
  var pipeline = store.get(pipelineid);
  setParamsInt(pipeline, sid, params);
}

export const stepIdFromIdx = (pipelineid /*: pipelineid */, index /*: number */) /*: number */ => {
  var pipeline = store.get(pipelineid);
  return pipeline.steps[index].id;
}

export const mergeParams = (pipelineid /*: pipelineid */, sid /*: stepid */, params /*: params */) /*: void */ => {
  if (!params) return;

  var pipeline = store.get(pipelineid);
  pipeline.params[sid] = Object.assign(pipeline.params[sid] ? pipeline.params[sid] : {}, clone(params));
}

const paramNameFromId = (pipeline /*: pipeline */, sid /*: stepid */, pid /*: paramid */) /*: number */ => {
  return Object.keys(pipeline.params[sid]).filter(key => pipeline.params[sid][key].id == pid)[0];
}

const mergeParam = (pipelineid /*: pipelineid */, sid /*: stepid */, pid /*: paramid */, field /*: Object */) /*: void */ => {
  var pipeline = store.get(pipelineid);

  field = clone(field);
  var pname = paramNameFromId(pipeline, sid, pid);
  var value = pipeline.params[sid][pname].value;
  const valueIdx = value.length == 1 ? 0 : value.findIndex(x => x.id == field.id);

  if (field.sid !== undefined) delete field.sid;
  if (field.pid !== undefined) delete field.pid;
  pipeline.params[sid][pname].value[valueIdx] = field;
}

const updateParamField = (pipelineid /*: pipelineid */, sid /*: stepid */, param /*: string */, fidx /* number */, update /*: param */) => {
  var pipeline = store.get(pipelineid);
  pipeline.params[sid][param].value[fidx] = Object.assign(pipeline.params[sid][param].value[fidx], update);
}

const getFields = (pipelineid /*: pipelineid */) => {
  var pipeline = store.get(pipelineid);

  return pipeline.steps.flatMap(step => {
    if (!pipeline.params[step.id]) return [];

    return Object.entries(pipeline.params[step.id]).flatMap(([paramname, param]) => {
      return param.value.map(field => {
        return Object.assign({
          sid: step.id,
          label: param.label,
          pid: param.id
        }, clone(field));
      });
    });
  });
}

export const getSteps = (pipelineid /*: pipelineid */) /*: steps */ => {
  var pipeline = store.get(pipelineid);
  return clone(pipeline.steps);
}

const stepIdxFromId = (pipeline /*: pipeline */, sid /*: stepid */) => {
  return Object.keys(pipeline.steps).findIndex(key => pipeline.steps[key].id == sid)
}

export const updateStep = (pipelineid /*: pipelineid */, step /*: step */) /*: void */ => {
  var pipeline = store.get(pipelineid);
  const stepidx = stepIdxFromId(pipeline, step.id);
  pipeline.steps[stepidx] = clone(step);
}

export const addStep = (pipelineid /*: pipelineid */, step /*: step */) /*: step */ => {
  step = clone(step);
  var pipeline = store.get(pipelineid);

  var maxId = getMaxId(pipelineid);
  if (typeof (step.id) === 'undefined' || step.id <= maxId) {
    step.id = maxId + 1;
  }

  // avoid overlaping with library scripts defined in pipeline.vue
  if (step.id < 10000) {
    step.id = step.id + 10000
  }

  if (step.id < maxId) {
    step.id = maxId + 1;
  }

  if (typeof (step.name) === 'undefined') {
    step.name = 'unnamed';
  }

  if (typeof (step.label) === 'undefined') {
    step.label = step.name;
  }

  var params = paramsFromStep(pipeline, step);
  step.params = params;

  if (step.params) {
    pipeline.params[step.id] = step.params;
  }

  const scriptInfo = scriptFromStep(pipeline, step);
  step.script = scriptInfo.script;
  step.language = scriptInfo.language;

  pipeline.steps.push(step);

  return step;
}

export const removeStep = (pipelineid /*: pipelineid */, step /*: step */) /*: void */ => {
  var pipeline = store.get(pipelineid);

  pipeline.steps = pipeline.steps.filter(e => e.id != step.id)
}

export const moveStep = (pipelineid /*: pipelineid */, stepid /*: stepid */, change /* number */) /*: void */ => {
  var pipeline = store.get(pipelineid);
  if (![1, -1].includes(change)) throw 'Operation is not supported';

  const index = stepIdxFromId(pipeline, stepid);
  if (change < 0 && index > 0) {
    var step = pipeline.steps[index - 1];
    pipeline.steps[index - 1] = pipeline.steps[index];
    pipeline.steps[index] = step;
  }
  else if (change > 0 && index < pipeline.steps.length - 1) {
    var step = pipeline.steps[index + 1];
    pipeline.steps[index + 1] = pipeline.steps[index];
    pipeline.steps[index] = step;
  }

  return step;
}

export const getNested = (pipelineid /*: pipelineid */) /*: blocks */ => {
  var pipeline = store.get(pipelineid);
  return clone(
    pipeline.steps.map(step => {
      const script = scriptFromStep(pipeline, step);
      return Object.assign(step, {
        params: paramsFromStep(pipeline, step),
        error: pipeline.errors[step.id] ? pipeline.errors[step.id] : '',
        metadata: metadataFromStepScript(pipeline, step),
        script: script.script,
        language: script.language
      })
    })
  );
}

const getDefinition = (pipeline /*: pipeline */) /*: steps */ => {
  return clone(pipeline.steps.map(step => stepGetDefinition(pipeline, step)));
}

const setOutputs = (pipeline /*: pipeline */, sid /*: number */, outputs /*: outputs */) /*: void */ => {
  pipeline.outputs[sid] = clone(outputs);
}

const stepFromId = (pipeline /*: pipeline */, sid /*: number */, offset = 0 /* number */) /* step */ => {
  const index = stepIdxFromId(pipeline, sid) + offset;
  return index >= 0 && index < pipeline.steps.length ? pipeline.steps[index] : null;
}

export const getStep = (pipelineid /*: pipelineid */, sid /*: number */) /* step */ => {
  var pipeline = store.get(pipelineid);
  return stepFromId(pipeline, sid);
}

const prevStep = (pipelineid /*: pipelineid */, sid /*: number */) /* step */ => {
  var pipeline = store.get(pipelineid);
  return clone(stepFromId(pipeline, sid, -1));
}

export const getSources = (pipelineid /*: pipelineid */, sid /*: number */) /*: sources */ => {
  var pipeline = store.get(pipelineid);

  var prev = null;
  var previd = sid;

  // search backwards for the block that has column outputs
  do {
    prev = prevStep(pipelineid, previd);
    if (prev != null) previd = prev.id;
  } while (prev != null && pipeline.outputs[previd] == undefined)

  return prev ? (pipeline.outputs[previd] ? clone(pipeline.outputs[previd]) : undefined) : undefined;
}

const setErrors = (pipeline /*: pipeline */, sid /*: number */, error /*: string */) /*: void */ => {
  pipeline.errors[sid] = error;
}

export const getStepError = (pipelineid /*: pipelineid */, sid /*: number */) /*: string */ => {
  var pipeline = store.get(pipelineid);
  return clone(pipeline.errors[sid]);
}

export const setScript = (pipelineid /*: pipelineid */, sid /*: number */, script /*: string */) /*: void */ => {
  var pipeline = store.get(pipelineid);
  const step = stepFromId(pipeline, sid);

  const oldscript = scriptFromStep(pipeline, step).script;
  const oldmeta = JSON.stringify(metadataFromScript(oldscript));
  const newmeta = JSON.stringify(metadataFromScript(script));

  if (oldmeta != newmeta) {
    // only override params when the script metadata been changed
    setParamsInt(pipeline, sid, paramsFromScript(script));
  }

  pipeline.scripts[sid] = script;
}

export const getScript = (pipelineid /*: pipelineid */, sid /*: number */) /*: string */ => {
  var pipeline = store.get(pipelineid);
  const step = stepFromId(pipeline, sid);
  return scriptFromStep(pipeline, step).script;
}

export const getHashable = (pipelineid /*: pipelineid */) /*: string */ => {
  var pipeline = store.get(pipelineid);
  return JSON.stringify({ definition: getDefinition(pipeline), stateId: pipelinesStateCount });
}

export const setState = (pipelineid /*: pipelineid */, sid /*: number */, state /*: Object */) /*: void */ => {
  if (!pipelinesState[pipelineid]) pipelinesState[pipelineid] = { steps: {} };
  pipelinesState[pipelineid].steps[sid] = state;
  pipelinesStateCount++;
}

export const getState = (pipelineid /*: pipelineid */, sid /*: number */) /*: Object */ => {
  if (!pipelinesState[pipelineid]) return {};
  return pipelinesState[pipelineid].steps[sid];
}

const clearState = (pipelineid /*: pipelineid */) /*: void */ => {
  pipelinesState[pipelineid] = { steps: {} };
  pipelinesStateCount++;
}

export const setCallback = (pipelineid /*: pipelineid */, sid /*: number */, name /* string */, callback /*: Object */) /*: void */ => {
  if (!pipelinesCallbacks[pipelineid]) pipelinesCallbacks[pipelineid] = { steps: {} };
  if (!pipelinesCallbacks[pipelineid].steps[sid]) pipelinesCallbacks[pipelineid].steps[sid] = {}
  pipelinesCallbacks[pipelineid].steps[sid][name] = callback;
}

const getCallback = (pipelineid /*: pipelineid */, sid /*: number */) /*: Object */ => {
  if (!pipelinesCallbacks[pipelineid]) return null;
  if (!pipelinesCallbacks[pipelineid].steps[sid]) return null;
  return pipelinesCallbacks[pipelineid].steps[sid][name];
}

const getCallbacks = (pipelineid /*: pipelineid */, sid /*: number */) /*: Object */ => {
  if (!pipelinesCallbacks[pipelineid]) return {};
  if (!pipelinesCallbacks[pipelineid].steps[sid]) return {};
  return pipelinesCallbacks[pipelineid].steps[sid];
}

export const getSaveText = (pipelineid /*: pipelineid */, padding /* number */) /*: string */ => {
  var from = store.get(pipelineid);
  var pipeline = {}

  const skip = [
    // no point in saving global state since it's always recreated when running the pipeline
    'globals',
  ];

  for (var key in from) {
    if (skip.includes(key)) continue;
    pipeline[key] = clone(from[key]);
  }

  pipeline.state = pipelinesState[pipelineid];

  if (pipeline.state) {
    for (var stepid in pipeline.state.steps) {
      const step = getStep(pipelineid, stepid);
      if (!step) {
        delete pipeline.state.steps[stepid]
        continue;
      }

      const meta = metadataFromStepScript(pipeline, step);
      if (meta.state == 'session') {
        delete pipeline.state.steps[stepid];
      }

      // serialize dataframes
      if (pipeline.state.steps[stepid]) {
        var state = pipeline.state.steps[stepid];

        Object.keys(state).forEach(name => {
          if (dataframe.isDataFrame(state[name])) {
            state[name] = dataframe.serialize(pipeline.state[name]);
          }
        });
      }
    }
  }

  return JSON.stringify(pipeline, null, padding === undefined ? 2 : padding);
}

export const load = async (pipeline /*: pipeline */) /*: pipelineid */ => {
  var pipelineid = store.add(pipeline);

  // deserialize dataframes
  if (pipeline.state && pipeline.state.steps) {
    for (const step of Object.keys(pipeline.state.steps)) {
      var stepState = pipeline.state.steps[step];
      for (const name of Object.keys(stepState)) {
        if (name === 'cache' && stepState['cache'].result) {
          var stepResults = stepState['cache'].result;
          for (const name of Object.keys(stepResults)) {
            if (await dataframe.isSerialized(stepResults[name])) {
              stepResults[name] = await dataframe.deserialiaze(stepResults[name]);
            }
          };
        }
        else if (name === 'api') {
          for (const apiname of Object.keys(stepState['api'])) {
            if (await dataframe.isSerialized(stepState['api'][apiname])) {
              stepState['api'][apiname] = await dataframe.deserialiaze(stepState['api'][apiname]);
            }
          };
        }
        else {
          if (await dataframe.isSerialized(stepState[name])) {
            stepState[name] = await dataframe.deserialiaze(stepState[name]);
          }
        }
      };
    };

    pipelinesState[pipelineid] = pipeline.state;
    pipelinesStateCount++;
  }

  return pipelineid;
}

export const getMaxId = (pipelineid /*: pipelineid */) /*: number */ => {
  var pipeline = store.get(pipelineid);

  var max = 0
  const maxid = (max, arr) => {
    const arrIds = arr.map(e => e.id);
    return Math.max(max, arrIds.length == 0 ? 0 : Math.max(...arrIds));
  }

  const paramIds = Object.keys(pipeline.params).map(e => parseInt(e));
  if (pipeline.params) max = !paramIds || paramIds.length == 0 ? 0 : Math.max(...paramIds);

  if (pipeline.steps) max = maxid(max, pipeline.steps);

  const scriptIds = Object.keys(pipeline.scripts).map(e => parseInt(e));
  if (pipeline.scripts) max = !scriptIds || scriptIds.length == 0 ? max : Math.max(max, Math.max(...scriptIds));

  return max;
}

export const getGlobal = (pipelineid /*: pipelineid */, name /*: string */) => /*: Object */ {
  var pipeline = store.get(pipelineid);
  return pipeline.globals[name];
}

export const setGlobal = (pipelineid /*: pipelineid */, name /*: string */, data /*: Object */) => /*: void */ {
  var pipeline = store.get(pipelineid);
  pipeline.globals[name] = data;
}

const getGlobalsInt = (pipeline /*: pipeline */) => /*: Object */ {
  return pipeline.globals;
}

export const getGlobals = (pipelineid /*: pipelineid */) => /*: Object */ {
  var pipeline = store.get(pipelineid);
  return getGlobalsInt(pipeline);
}

export const getGlobalNames = (pipelineid /* pipelineid */) => /*: Array<string> */ {
  var pipeline = store.get(pipelineid);
  return Object.keys(pipeline.globals);
}

const setGlobals = (pipeline /*: pipeline */, globals /*: Object */) => {
  pipeline.globals = globals;
}

export const invalidateStep = (pipelineid /*: pipelineid */, sid /*: number */) => {
  const step = getStep(pipelineid, sid);
  step.invalidate = step.invalidate !== undefined ? step.invalidate + 1 : 1;
  updateStep(pipelineid, step);
}

export const getHtml = (pipelineid /* pipelineid */) /* string */ => {
  const libraryUrl = environment.getLibraryUrl();
  return `<script src="${libraryUrl}"></script>
<div id='hal9app' style="min-width: 600px; min-height: 400px;"></div>
<script>
  var raw = '` + btoa(unescape(encodeURIComponent(getSaveText(pipelineid, 0)))) + `';

  hal9.run(hal9.load(raw), { html: document.getElementById('hal9app') });
</script>`;
}

export const getHtmlRemote = (pipelinepath /* pipelinepath */) /* string */ => {
  const libraryUrl = environment.getLibraryUrl();
  const env = environment.getId();
  const setenv = env != 'prod' ? `\n    hal9.environment.setEnv('${env}')` : '';

  return `<script src="${libraryUrl}"></script>
<div id='hal9app' style="min-width: 600px; min-height: 400px;"></div>
<script>${setenv}
  (async function() {
    var raw = await hal9.fetch('` + pipelinepath + `');
    hal9.run(await hal9.load(raw), { html: document.getElementById('hal9app') });
  })();
</script>`;
}

export const updateMetadata = (pipelineid /*: pipelineid */, metadata /*: object */) /*: void */ => {
  var pipeline = store.get(pipelineid);
  pipeline.metadata = metadata;
}

export const getMetadata = (pipelineid /*: pipelineid */) /*: object */ => {
  var pipeline = store.get(pipelineid);
  return clone(pipeline.metadata);
}

export const abort = async (pipelineid /*: pipelineid */) /*: void */ => {
  var pipeline = store.get(pipelineid);
  pipeline.aborted = true;
}

export const isAborted = async (pipelineid /*: pipelineid */) /*: boolean */ => {
  var pipeline = store.get(pipelineid);
  return pipeline.aborted === true;
}
