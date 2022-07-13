<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<div class="powerBI" style="display: flex;">
<div>
  <h2>Step 1</h2>
  <p>
    Export your data from <a href="https://app.powerbi.com/home" target="_blank">Power BI</a> as a CSV file.
  </p>

  <h2>Step 2</h2>
  <p>
    Import your CSV file from PowerBI here:
  </p>
  <label class="btn btn-warning" style="width:190px">
    Import File
    <input style="opacity:0; max-height: 0" type="file" @change="onFileChange">
  </label>
  <p v-if="hasData" style="margin-top: 10px">
    Your data was imported.
  </p>
</div>

<script src="https://cdn.jsdelivr.net/npm/hal9-utils@latest/dist/hal9-utils.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script src="https://cdn.jsdelivr.net/npm/arquero@latest"></script>
<script>
  /**
    output: [ data, html ]
    cache: true
  **/

  var state = hal9.getState();
  state = state ? state : {};
  const hasData = state && state.data;
  data = hasData ? state.data : [];

  if (!hal9.isDocument()) {
    (async () => {

      var app = new Vue({
        el: html.querySelector('.powerBI'),
        data: {
          hasData: hasData
        },
        methods: {
          onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!(files.length)) {
              return;
            }
            let file = files[0];
            let reader = new FileReader();
            reader.onload = function () {
              let dataAsString = reader.result;
              if (file.name.endsWith('.csv')) {
                state.data = aq.fromCSV(dataAsString);
                hal9.setState(state);
              }
              app.hasData = true;
              hal9.invalidate();
            }
            reader.readAsText(file);
          },
        }
      });
    }
    )();
  }
  else {
    html.querySelector('.powerBI').innerHTML = ''
  }
</script>
