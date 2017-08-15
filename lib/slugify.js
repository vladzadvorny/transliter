var transliter = require('./transliter');

module.exports = function(text) {
  text = transliter(text);
  return text.replace(/ /g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
};
