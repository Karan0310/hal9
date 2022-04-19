const languageInfo = {
  markdown: {
    html: true,
    height: 'auto'
  },
  html: {
    html: true,
    height: 'auto'
  },
  python: {
    html: false,
  },
  r: {
    html: false,
  },
  pyodide: {
    html: false
  },
  plumber: {
    html: false
  },
}

export const getLanguageInfo = (lang) => {
  return languageInfo[lang] ? languageInfo[lang] : {
    html: false
  };
}
