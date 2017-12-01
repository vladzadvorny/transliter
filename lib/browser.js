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
