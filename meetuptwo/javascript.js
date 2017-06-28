
//PRACTICE 1.
// ES6
function tag(str, ...stuffed){
console.log(...str.filter(string => string != ""),...stuffed)
}
tag`pretzels are${"woof"}${"and"}${"bark"}${"me"}`


// ES5
"use strict";

var _templateObject = _taggedTemplateLiteral(["pretzels are", "", "", "", ""], ["pretzels are", "", "", "", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function tag(str) {
  var _console;

  for (var _len = arguments.length, stuffed = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    stuffed[_key - 1] = arguments[_key];
  }

  (_console = console).log.apply(_console, _toConsumableArray(str.filter(function (string) {
    return string != "";
  })).concat(stuffed));
}
tag(_templateObject, "woof", "and", "bark", "me");

//PRACTICE 2.

//ES6
function tag(strings, a, b, c){
console.log(strings,a,b,c)
}
tag`pretzels are ${"woof"} ${"and"} ${"bark"}`


//ES5
"use strict";

var _templateObject = _taggedTemplateLiteral(["pretzels are ", " ", " ", ""], ["pretzels are ", " ", " ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function tag(strings, a, b, c) {
  console.log(strings, a, b, c);
}
tag(_templateObject, "woof", "and", "bark");