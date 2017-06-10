var tables = require('require-dir')('./data');

var defaultTables = {
  all: 'iso9-system-b',
  ru: 'gost7.79-2000',
  ua: '55-2010-p'
};

var defaultOptions = {
  lang: 'all',
  table: defaultTables.all,
  url: false
};

module.exports = function(text, options) {
  // default arguments
  options = options || {};

  if (options.lang && options.table === undefined) {
    if (defaultTables[options.lang]) {
      options.table = defaultTables[options.lang];
    } else {
      options.table = defaultOptions.table;
      options.lang = defaultOptions.all;
    }
  }

  for (var key in defaultOptions) {
    if (options[key] === undefined) {
      options[key] = defaultOptions[key];
    }
  }

  var table = tables[`${options.lang}_${options.table}`];

  var res = text
    .split('')
    .map(function(char) {
      return table[char] || char;
    })
    .join('');

  if (options.url) {
    return res.replace(/ /g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
  }
  return res;
};
