var transliter =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var charmap = __webpack_require__(2);

module.exports = function(text) {
  text = text
    .split('')
    .map(function(char) {
      return charmap[char] || char;
    })
    .join('');

  return text;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

window.transliter = __webpack_require__(0);
window.slugify = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"а":"a","б":"b","в":"v","г":"g","ѓ":"g`","ґ":"g`","д":"d","ђ":"d","е":"e","ё":"yo","є":"ye","ж":"zh","з":"z","ѕ":"z`","и":"i","й":"j","ј":"j","і":"i`","ї":"yi","к":"k","ќ":"k`","л":"l","љ":"l`","м":"m","н":"n","њ":"n`","о":"o","п":"p","р":"r","с":"s","т":"t","ћ":"c","у":"u","ў":"u`","ф":"f","х":"kh","ц":"cz","ч":"ch","џ":"dh","ш":"sh","щ":"shh","ъ":"``","ы":"y`","ь":"`","э":"e`","ю":"yu","я":"ya","’":"'","ѣ":"ye","ѳ":"fh","ѵ":"yh","ѫ":"o`","№":"#","А":"A","Б":"B","В":"V","Г":"G","Ѓ":"G`","Ґ":"G`","Д":"D","Ђ":"D","Е":"E","Ё":"Yo","Є":"Ye","Ж":"Zh","З":"Z","Ѕ":"Z`","И":"I","Й":"J","Ј":"J","І":"I`","Ї":"Yi","К":"K","Ќ":"K`","Л":"L","Љ":"L`","М":"M","Н":"N","Њ":"N`","О":"O","П":"P","Р":"R","С":"S","Т":"T","Ћ":"C","У":"U","Ў":"U`","Ф":"F","Х":"Kh","Ц":"Cz","Ч":"Ch","Џ":"Dh","Ш":"Sh","Щ":"Shh","Ъ":"``","Ы":"Y`","Ь":"`","Э":"E`","Ю":"Yu","Я":"Ya","Ѣ":"Ye","Ѳ":"Fh","Ѵ":"Yh","Ѫ":"O`"}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var transliter = __webpack_require__(0);

module.exports = function(text) {
  text = transliter(text);
  return text.replace(/ /g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
};


/***/ })
/******/ ]);
//# sourceMappingURL=transliter.js.map