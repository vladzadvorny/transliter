var transliter = require('./transliter');

module.exports = function(text, separator) {
  separator = separator || '-';
  text = transliter(text);
  return text
    .trim()
    .replace(/ +(?= )/g, '')
    .replace(/ /g, separator)
    .replace(/[^a-zA-Z0-9-_]/g, '')
    .toLowerCase();
};
