/**
  params: [ gather ]
  deps:
    - https://cdn.jsdelivr.net/npm/hal9-utils@latest/dist/hal9-utils.min.js
    - https://cdn.jsdelivr.net/npm/arquero@latest
**/
data = await hal9.utils.toArquero(data);

if (!gather) gather = Object.keys(data.columns())

data = data.fold(gather)