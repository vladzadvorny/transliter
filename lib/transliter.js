var charmap = require('./charmap.json');

module.exports = function(text) {
  text = text
    .split('')
    .map(function(char) {
      return charmap[char.toString()] || char;
    })
    .join('');
  return text;
};
