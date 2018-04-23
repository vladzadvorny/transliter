(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var transliter = require('./transliter');
var slugify = require('./slugify');
var isCyrillic = require('./isCyrillic');

function bindGlobal(obj) {
  obj.transliter = transliter;
  obj.slugify = slugify;
  obj.isCyrillic = isCyrillic;
  obj.transliter.noConflict = function() {
    var tr = obj.transliter;
    delete obj.transliter;
    return tr;
  };
  obj.slugify.noConflict = function() {
    var sl = slugify;
    delete obj.slugify;
    return sl;
  };
  obj.isCyrillic.noConflict = function() {
    var isCyr = isCyrillic;
    delete obj.isCyrillic;
    return isCyr;
  };
}

// for react native bug https://github.com/facebook/react-native/issues/5747
try {
  // AMD
  if (typeof define === 'function' && define.amd) {
    define('transliter', function() {
      return transliter;
    });
    define('slugify', function() {
      return slugify;
    });
    define('isCyrillic', function() {
      return isCyrillic;
    });
    // obj
  } else if (
    typeof window !== undefined &&
    typeof window.document === 'object'
  ) {
    bindGlobal(window);
    // Webworker
  } else if (typeof WorkerobjScope !== undefined && typeof self !== undefined) {
    bindGlobal(self);
  }
} catch (e) {}

// CommonJS
if (typeof module !== undefined && module.exports) {
  exports.transliter = transliter;
  exports.slugify = slugify;
  exports.isCyrillic = isCyrillic;
}

},{"./isCyrillic":3,"./slugify":4,"./transliter":5}],2:[function(require,module,exports){
module.exports={
  "а": "a",
  "б": "b",
  "в": "v",
  "г": "g",
  "ѓ": "g`",
  "ґ": "g`",
  "д": "d",
  "ђ": "d",
  "е": "e",
  "ё": "yo",
  "є": "ye",
  "ж": "zh",
  "з": "z",
  "ѕ": "z`",
  "и": "i",
  "й": "j",
  "ј": "j",
  "і": "i`",
  "ї": "yi",
  "к": "k",
  "ќ": "k`",
  "л": "l",
  "љ": "l`",
  "м": "m",
  "н": "n",
  "њ": "n`",
  "о": "o",
  "п": "p",
  "р": "r",
  "с": "s",
  "т": "t",
  "ћ": "c",
  "у": "u",
  "ў": "u`",
  "ф": "f",
  "х": "kh",
  "ц": "cz",
  "ч": "ch",
  "џ": "dh",
  "ш": "sh",
  "щ": "shh",
  "ъ": "``",
  "ы": "y`",
  "ь": "`",
  "э": "e`",
  "ю": "yu",
  "я": "ya",
  "’": "'",
  "ѣ": "ye",
  "ѳ": "fh",
  "ѵ": "yh",
  "ѫ": "o`",
  "№": "#",
  "А": "A",
  "Б": "B",
  "В": "V",
  "Г": "G",
  "Ѓ": "G`",
  "Ґ": "G`",
  "Д": "D",
  "Ђ": "D",
  "Е": "E",
  "Ё": "Yo",
  "Є": "Ye",
  "Ж": "Zh",
  "З": "Z",
  "Ѕ": "Z`",
  "И": "I",
  "Й": "J",
  "Ј": "J",
  "І": "I`",
  "Ї": "Yi",
  "К": "K",
  "Ќ": "K`",
  "Л": "L",
  "Љ": "L`",
  "М": "M",
  "Н": "N",
  "Њ": "N`",
  "О": "O",
  "П": "P",
  "Р": "R",
  "С": "S",
  "Т": "T",
  "Ћ": "C",
  "У": "U",
  "Ў": "U`",
  "Ф": "F",
  "Х": "Kh",
  "Ц": "Cz",
  "Ч": "Ch",
  "Џ": "Dh",
  "Ш": "Sh",
  "Щ": "Shh",
  "Ъ": "``",
  "Ы": "Y`",
  "Ь": "`",
  "Э": "E`",
  "Ю": "Yu",
  "Я": "Ya",
  "Ѣ": "Ye",
  "Ѳ": "Fh",
  "Ѵ": "Yh",
  "Ѫ": "O`"
}

},{}],3:[function(require,module,exports){
module.exports = function(term) {
  return /[а-яА-ЯЁё]/.test(term);
};

},{}],4:[function(require,module,exports){
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

},{"./transliter":5}],5:[function(require,module,exports){
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

},{"./charmap.json":2}]},{},[1]);
