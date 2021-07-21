var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/uri-js/dist/es5/uri.all.js
var require_uri_all = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/uri-js/dist/es5/uri.all.js"(exports2, module2) {
    (function(global, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.URI = global.URI || {});
    })(exports2, function(exports3) {
      "use strict";
      function merge2() {
        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
        }
        if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join("");
        } else {
          return sets[0];
        }
      }
      function subexp(str) {
        return "(?:" + str + ")";
      }
      function typeOf(o) {
        return o === void 0 ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
      }
      function toUpperCase(str) {
        return str.toUpperCase();
      }
      function toArray(obj) {
        return obj !== void 0 && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
      }
      function assign(target, source) {
        var obj = target;
        if (source) {
          for (var key in source) {
            obj[key] = source[key];
          }
        }
        return obj;
      }
      function buildExps(isIRI2) {
        var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$2 = merge2(DIGIT$$, "[A-Fa-f]"), LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$2 = subexp(subexp("%[EFef]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%" + HEXDIG$$2 + HEXDIG$$2)), GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge2(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI2 ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", IPRIVATE$$ = isIRI2 ? "[\\uE000-\\uF8FF]" : "[]", UNRESERVED$$2 = merge2(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge2(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$2 + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$2 + "|" + PCT_ENCODED$2) + "+"), IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + ZONEID$), IPVFUTURE$ = subexp("[vV]" + HEXDIG$$2 + "+\\." + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), REG_NAME$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge2("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
        return {
          NOT_SCHEME: new RegExp(merge2("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge2("[^\\%\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge2("[^\\%\\[\\]\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge2("[^\\%\\/\\:\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge2("[^\\%\\/\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge2("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge2("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge2("[^]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$2, "g"),
          OTHER_CHARS: new RegExp(merge2("[^\\%]", UNRESERVED$$2, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$2, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$")
        };
      }
      var URI_PROTOCOL = buildExps(false);
      var IRI_PROTOCOL = buildExps(true);
      var slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var toConsumableArray = function(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
          return arr2;
        } else {
          return Array.from(arr);
        }
      };
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7E]/;
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
      var errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var baseMinusTMin = base - tMin;
      var floor = Math.floor;
      var stringFromCharCode = String.fromCharCode;
      function error$1(type) {
        throw new RangeError(errors[type]);
      }
      function map(array, fn) {
        var result = [];
        var length = array.length;
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      var ucs2encode = function ucs2encode2(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
      };
      var basicToDigit = function basicToDigit2(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      };
      var digitToBasic = function digitToBasic2(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      };
      var adapt = function adapt2(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      var decode = function decode2(input) {
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;
        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (var j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error$1("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (var index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          var oldi = i;
          for (var w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error$1("invalid-input");
            }
            var digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error$1("overflow");
            }
            i += digit * w;
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            var baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error$1("overflow");
            }
            w *= baseMinusT;
          }
          var out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error$1("overflow");
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
      };
      var encode = function encode2(input) {
        var output = [];
        input = ucs2decode(input);
        var inputLength = input.length;
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _currentValue2 = _step.value;
            if (_currentValue2 < 128) {
              output.push(stringFromCharCode(_currentValue2));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          var m = maxInt;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = void 0;
          try {
            for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var currentValue = _step2.value;
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error$1("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = void 0;
          try {
            for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _currentValue = _step3.value;
              if (_currentValue < n && ++delta > maxInt) {
                error$1("overflow");
              }
              if (_currentValue == n) {
                var q = delta;
                for (var k = base; ; k += base) {
                  var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  var qMinusT = q - t;
                  var baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      };
      var toUnicode = function toUnicode2(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      };
      var toASCII = function toASCII2(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
      };
      var punycode = {
        "version": "2.1.0",
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      var SCHEMES = {};
      function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16)
          e = "%0" + c.toString(16).toUpperCase();
        else if (c < 128)
          e = "%" + c.toString(16).toUpperCase();
        else if (c < 2048)
          e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        else
          e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
      }
      function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
          } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
              var c2 = parseInt(str.substr(i + 4, 2), 16);
              newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
              newStr += str.substr(i, 6);
            }
            i += 6;
          } else if (c >= 224) {
            if (il - i >= 9) {
              var _c = parseInt(str.substr(i + 4, 2), 16);
              var c3 = parseInt(str.substr(i + 7, 2), 16);
              newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
              newStr += str.substr(i, 9);
            }
            i += 9;
          } else {
            newStr += str.substr(i, 3);
            i += 3;
          }
        }
        return newStr;
      }
      function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved2(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme)
          components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== void 0)
          components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== void 0)
          components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== void 0)
          components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== void 0)
          components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== void 0)
          components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
      }
      function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
      }
      function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2), address = _matches[1];
        if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
          return host;
        }
      }
      function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
        if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || "";
          }
          if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function(acc, field, index) {
            if (!field || field === "0") {
              var lastLongest = acc[acc.length - 1];
              if (lastLongest && lastLongest.index + lastLongest.length === index) {
                lastLongest.length++;
              } else {
                acc.push({ index, length: 1 });
              }
            }
            return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function(a, b) {
            return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
            newHost = fields.join(":");
          }
          if (zone) {
            newHost += "%" + zone;
          }
          return newHost;
        } else {
          return host;
        }
      }
      var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
      var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === void 0;
      function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix")
          uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            if (isNaN(components.port)) {
              components.port = matches[5];
            }
          } else {
            components.scheme = matches[1] || void 0;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : void 0;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : void 0;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : void 0;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : void 0;
            if (isNaN(components.port)) {
              components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : void 0;
            }
          }
          if (components.host) {
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          if (components.scheme === void 0 && components.userinfo === void 0 && components.host === void 0 && components.port === void 0 && !components.path && components.query === void 0) {
            components.reference = "same-document";
          } else if (components.scheme === void 0) {
            components.reference = "relative";
          } else if (components.fragment === void 0) {
            components.reference = "absolute";
          } else {
            components.reference = "uri";
          }
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
              try {
                components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
              } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
              }
            }
            _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
            _normalizeComponentEncoding(components, protocol);
          }
          if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
          }
        } else {
          components.error = components.error || "URI can not be parsed.";
        }
        return components;
      }
      function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== void 0) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
        }
        if (components.host !== void 0) {
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
        }
        if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : void 0;
      }
      var RDS1 = /^\.\.?\//;
      var RDS2 = /^\/\.(\/|$)/;
      var RDS3 = /^\/\.\.(\/|$)/;
      var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function removeDotSegments(input) {
        var output = [];
        while (input.length) {
          if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
          } else if (input === "." || input === "..") {
            input = "";
          } else {
            var im = input.match(RDS5);
            if (im) {
              var s = im[0];
              input = input.slice(s.length);
              output.push(s);
            } else {
              throw new Error("Unexpected dot segment condition");
            }
          }
        }
        return output.join("");
      }
      function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        if (schemeHandler && schemeHandler.serialize)
          schemeHandler.serialize(components, options);
        if (components.host) {
          if (protocol.IPV6ADDRESS.test(components.host)) {
          } else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
            try {
              components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
            } catch (e) {
              components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
          }
        }
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== void 0) {
          if (options.reference !== "suffix") {
            uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
          }
        }
        if (components.path !== void 0) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
          }
          if (authority === void 0) {
            s = s.replace(/^\/\//, "/%2F");
          }
          uriTokens.push(s);
        }
        if (components.query !== void 0) {
          uriTokens.push("?");
          uriTokens.push(components.query);
        }
        if (components.fragment !== void 0) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
        }
        return uriTokens.join("");
      }
      function resolveComponents(base2, relative) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
          base2 = parse(serialize(base2, options), options);
          relative = parse(serialize(relative, options), options);
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
        } else {
          if (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0) {
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (!relative.path) {
              target.path = base2.path;
              if (relative.query !== void 0) {
                target.query = relative.query;
              } else {
                target.query = base2.query;
              }
            } else {
              if (relative.path.charAt(0) === "/") {
                target.path = removeDotSegments(relative.path);
              } else {
                if ((base2.userinfo !== void 0 || base2.host !== void 0 || base2.port !== void 0) && !base2.path) {
                  target.path = "/" + relative.path;
                } else if (!base2.path) {
                  target.path = relative.path;
                } else {
                  target.path = base2.path.slice(0, base2.path.lastIndexOf("/") + 1) + relative.path;
                }
                target.path = removeDotSegments(target.path);
              }
              target.query = relative.query;
            }
            target.userinfo = base2.userinfo;
            target.host = base2.host;
            target.port = base2.port;
          }
          target.scheme = base2.scheme;
        }
        target.fragment = relative.fragment;
        return target;
      }
      function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({ scheme: "null" }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
      }
      function normalize(uri, options) {
        if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
        }
        return uri;
      }
      function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
        }
        return uriA === uriB;
      }
      function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
      }
      function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
      }
      var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse2(components, options) {
          if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
        },
        serialize: function serialize2(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = void 0;
          }
          if (!components.path) {
            components.path = "/";
          }
          return components;
        }
      };
      var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
      };
      function isSecure(wsComponents) {
        return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
      }
      var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: function parse2(components, options) {
          var wsComponents = components;
          wsComponents.secure = isSecure(wsComponents);
          wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
          wsComponents.path = void 0;
          wsComponents.query = void 0;
          return wsComponents;
        },
        serialize: function serialize2(wsComponents, options) {
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = void 0;
          }
          if (typeof wsComponents.secure === "boolean") {
            wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
            wsComponents.secure = void 0;
          }
          if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
            wsComponents.path = path && path !== "/" ? path : void 0;
            wsComponents.query = query;
            wsComponents.resourceName = void 0;
          }
          wsComponents.fragment = void 0;
          return wsComponents;
        }
      };
      var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
      };
      var O = {};
      var isIRI = true;
      var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
      var HEXDIG$$ = "[0-9A-Fa-f]";
      var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$));
      var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
      var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
      var VCHAR$$ = merge2(QTEXT$$, '[\\"\\\\]');
      var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
      var UNRESERVED = new RegExp(UNRESERVED$$, "g");
      var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
      var NOT_LOCAL_PART = new RegExp(merge2("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
      var NOT_HFNAME = new RegExp(merge2("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
      var NOT_HFVALUE = NOT_HFNAME;
      function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
      }
      var handler$4 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = void 0;
          if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
              var hfield = hfields[x].split("=");
              switch (hfield[0]) {
                case "to":
                  var toAddrs = hfield[1].split(",");
                  for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                    to.push(toAddrs[_x]);
                  }
                  break;
                case "subject":
                  mailtoComponents.subject = unescapeComponent(hfield[1], options);
                  break;
                case "body":
                  mailtoComponents.body = unescapeComponent(hfield[1], options);
                  break;
                default:
                  unknownHeaders = true;
                  headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                  break;
              }
            }
            if (unknownHeaders)
              mailtoComponents.headers = headers;
          }
          mailtoComponents.query = void 0;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
              try {
                addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
              } catch (e) {
                mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
              }
            } else {
              addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
          }
          return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
              var toAddr = String(to[x]);
              var atIdx = toAddr.lastIndexOf("@");
              var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
              var domain = toAddr.slice(atIdx + 1);
              try {
                domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
              } catch (e) {
                components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
              }
              to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject)
            headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body)
            headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
            if (headers[name] !== O[name]) {
              fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
          }
          if (fields.length) {
            components.query = fields.join("&");
          }
          return components;
        }
      };
      var URN_PARSE = /^([^\:]+)\:(.*)/;
      var handler$5 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = void 0;
            if (schemeHandler) {
              urnComponents = schemeHandler.parse(urnComponents, options);
            }
          } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
        }
      };
      var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
      var handler$6 = {
        scheme: "urn:uuid",
        parse: function parse2(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = void 0;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
        },
        serialize: function serialize2(uuidComponents, options) {
          var urnComponents = uuidComponents;
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
        }
      };
      SCHEMES[handler.scheme] = handler;
      SCHEMES[handler$1.scheme] = handler$1;
      SCHEMES[handler$2.scheme] = handler$2;
      SCHEMES[handler$3.scheme] = handler$3;
      SCHEMES[handler$4.scheme] = handler$4;
      SCHEMES[handler$5.scheme] = handler$5;
      SCHEMES[handler$6.scheme] = handler$6;
      exports3.SCHEMES = SCHEMES;
      exports3.pctEncChar = pctEncChar;
      exports3.pctDecChars = pctDecChars;
      exports3.parse = parse;
      exports3.removeDotSegments = removeDotSegments;
      exports3.serialize = serialize;
      exports3.resolveComponents = resolveComponents;
      exports3.resolve = resolve;
      exports3.normalize = normalize;
      exports3.equal = equal;
      exports3.escapeComponent = escapeComponent;
      exports3.unescapeComponent = unescapeComponent;
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/ucs2length.js
var require_ucs2length = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/ucs2length.js"(exports2, module2) {
    "use strict";
    module2.exports = function ucs2length(str) {
      var length = 0, len = str.length, pos = 0, value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) == 56320)
            pos++;
        }
      }
      return length;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/util.js
var require_util = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/util.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      copy,
      checkDataType,
      checkDataTypes,
      coerceToTypes,
      toHash,
      getProperty,
      escapeQuotes,
      equal: require_fast_deep_equal(),
      ucs2length: require_ucs2length(),
      varOccurences,
      varReplace,
      schemaHasRules,
      schemaHasRulesExcept,
      schemaUnknownRules,
      toQuotedString,
      getPathExpr,
      getPath,
      getData,
      unescapeFragment,
      unescapeJsonPointer,
      escapeFragment,
      escapeJsonPointer
    };
    function copy(o, to) {
      to = to || {};
      for (var key in o)
        to[key] = o[key];
      return to;
    }
    function checkDataType(dataType, data, strictNumbers, negate) {
      var EQUAL = negate ? " !== " : " === ", AND = negate ? " || " : " && ", OK = negate ? "!" : "", NOT = negate ? "" : "!";
      switch (dataType) {
        case "null":
          return data + EQUAL + "null";
        case "array":
          return OK + "Array.isArray(" + data + ")";
        case "object":
          return "(" + OK + data + AND + "typeof " + data + EQUAL + '"object"' + AND + NOT + "Array.isArray(" + data + "))";
        case "integer":
          return "(typeof " + data + EQUAL + '"number"' + AND + NOT + "(" + data + " % 1)" + AND + data + EQUAL + data + (strictNumbers ? AND + OK + "isFinite(" + data + ")" : "") + ")";
        case "number":
          return "(typeof " + data + EQUAL + '"' + dataType + '"' + (strictNumbers ? AND + OK + "isFinite(" + data + ")" : "") + ")";
        default:
          return "typeof " + data + EQUAL + '"' + dataType + '"';
      }
    }
    function checkDataTypes(dataTypes, data, strictNumbers) {
      switch (dataTypes.length) {
        case 1:
          return checkDataType(dataTypes[0], data, strictNumbers, true);
        default:
          var code = "";
          var types = toHash(dataTypes);
          if (types.array && types.object) {
            code = types.null ? "(" : "(!" + data + " || ";
            code += "typeof " + data + ' !== "object")';
            delete types.null;
            delete types.array;
            delete types.object;
          }
          if (types.number)
            delete types.integer;
          for (var t in types)
            code += (code ? " && " : "") + checkDataType(t, data, strictNumbers, true);
          return code;
      }
    }
    var COERCE_TO_TYPES = toHash(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(optionCoerceTypes, dataTypes) {
      if (Array.isArray(dataTypes)) {
        var types = [];
        for (var i = 0; i < dataTypes.length; i++) {
          var t = dataTypes[i];
          if (COERCE_TO_TYPES[t])
            types[types.length] = t;
          else if (optionCoerceTypes === "array" && t === "array")
            types[types.length] = t;
        }
        if (types.length)
          return types;
      } else if (COERCE_TO_TYPES[dataTypes]) {
        return [dataTypes];
      } else if (optionCoerceTypes === "array" && dataTypes === "array") {
        return ["array"];
      }
    }
    function toHash(arr) {
      var hash = {};
      for (var i = 0; i < arr.length; i++)
        hash[arr[i]] = true;
      return hash;
    }
    var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var SINGLE_QUOTE = /'|\\/g;
    function getProperty(key) {
      return typeof key == "number" ? "[" + key + "]" : IDENTIFIER.test(key) ? "." + key : "['" + escapeQuotes(key) + "']";
    }
    function escapeQuotes(str) {
      return str.replace(SINGLE_QUOTE, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
    }
    function varOccurences(str, dataVar) {
      dataVar += "[^0-9]";
      var matches = str.match(new RegExp(dataVar, "g"));
      return matches ? matches.length : 0;
    }
    function varReplace(str, dataVar, expr) {
      dataVar += "([^0-9])";
      expr = expr.replace(/\$/g, "$$$$");
      return str.replace(new RegExp(dataVar, "g"), expr + "$1");
    }
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean")
        return !schema;
      for (var key in schema)
        if (rules[key])
          return true;
    }
    function schemaHasRulesExcept(schema, rules, exceptKeyword) {
      if (typeof schema == "boolean")
        return !schema && exceptKeyword != "not";
      for (var key in schema)
        if (key != exceptKeyword && rules[key])
          return true;
    }
    function schemaUnknownRules(schema, rules) {
      if (typeof schema == "boolean")
        return;
      for (var key in schema)
        if (!rules[key])
          return key;
    }
    function toQuotedString(str) {
      return "'" + escapeQuotes(str) + "'";
    }
    function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
      var path = jsonPointers ? "'/' + " + expr + (isNumber ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : isNumber ? "'[' + " + expr + " + ']'" : "'[\\'' + " + expr + " + '\\']'";
      return joinPaths(currentPath, path);
    }
    function getPath(currentPath, prop, jsonPointers) {
      var path = jsonPointers ? toQuotedString("/" + escapeJsonPointer(prop)) : toQuotedString(getProperty(prop));
      return joinPaths(currentPath, path);
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, lvl, paths) {
      var up, jsonPointer, data, matches;
      if ($data === "")
        return "rootData";
      if ($data[0] == "/") {
        if (!JSON_POINTER.test($data))
          throw new Error("Invalid JSON-pointer: " + $data);
        jsonPointer = $data;
        data = "rootData";
      } else {
        matches = $data.match(RELATIVE_JSON_POINTER);
        if (!matches)
          throw new Error("Invalid JSON-pointer: " + $data);
        up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer == "#") {
          if (up >= lvl)
            throw new Error("Cannot access property/index " + up + " levels up, current level is " + lvl);
          return paths[lvl - up];
        }
        if (up > lvl)
          throw new Error("Cannot access data " + up + " levels up, current level is " + lvl);
        data = "data" + (lvl - up || "");
        if (!jsonPointer)
          return data;
      }
      var expr = data;
      var segments = jsonPointer.split("/");
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment) {
          data += getProperty(unescapeJsonPointer(segment));
          expr += " && " + data;
        }
      }
      return expr;
    }
    function joinPaths(a, b) {
      if (a == '""')
        return b;
      return (a + " + " + b).replace(/([^\\])' \+ '/g, "$1");
    }
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    function escapeJsonPointer(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/schema_obj.js
var require_schema_obj = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/schema_obj.js"(exports2, module2) {
    "use strict";
    var util = require_util();
    module2.exports = SchemaObject;
    function SchemaObject(obj) {
      util.copy(obj, this);
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/json-schema-traverse/index.js"(exports2, module2) {
    "use strict";
    var traverse = module2.exports = function(schema, opts, cb) {
      if (typeof opts == "function") {
        cb = opts;
        opts = {};
      }
      cb = opts.cb || cb;
      var pre = typeof cb == "function" ? cb : cb.pre || function() {
      };
      var post = cb.post || function() {
      };
      _traverse(opts, pre, post, schema, "", schema);
    };
    traverse.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true
    };
    traverse.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };
    traverse.propsKeywords = {
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };
    traverse.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords) {
              for (var i = 0; i < sch.length; i++)
                _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
            }
          } else if (key in traverse.propsKeywords) {
            if (sch && typeof sch == "object") {
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
            _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    function escapeJsonPtr(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/resolve.js
var require_resolve = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/resolve.js"(exports2, module2) {
    "use strict";
    var URI = require_uri_all();
    var equal = require_fast_deep_equal();
    var util = require_util();
    var SchemaObject = require_schema_obj();
    var traverse = require_json_schema_traverse();
    module2.exports = resolve;
    resolve.normalizeId = normalizeId;
    resolve.fullPath = getFullPath;
    resolve.url = resolveUrl;
    resolve.ids = resolveIds;
    resolve.inlineRef = inlineRef;
    resolve.schema = resolveSchema;
    function resolve(compile, root, ref) {
      var refVal = this._refs[ref];
      if (typeof refVal == "string") {
        if (this._refs[refVal])
          refVal = this._refs[refVal];
        else
          return resolve.call(this, compile, root, refVal);
      }
      refVal = refVal || this._schemas[ref];
      if (refVal instanceof SchemaObject) {
        return inlineRef(refVal.schema, this._opts.inlineRefs) ? refVal.schema : refVal.validate || this._compile(refVal);
      }
      var res = resolveSchema.call(this, root, ref);
      var schema, v, baseId;
      if (res) {
        schema = res.schema;
        root = res.root;
        baseId = res.baseId;
      }
      if (schema instanceof SchemaObject) {
        v = schema.validate || compile.call(this, schema.schema, root, void 0, baseId);
      } else if (schema !== void 0) {
        v = inlineRef(schema, this._opts.inlineRefs) ? schema : compile.call(this, schema, root, void 0, baseId);
      }
      return v;
    }
    function resolveSchema(root, ref) {
      var p = URI.parse(ref), refPath = _getFullPath(p), baseId = getFullPath(this._getId(root.schema));
      if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
        var id = normalizeId(refPath);
        var refVal = this._refs[id];
        if (typeof refVal == "string") {
          return resolveRecursive.call(this, root, refVal, p);
        } else if (refVal instanceof SchemaObject) {
          if (!refVal.validate)
            this._compile(refVal);
          root = refVal;
        } else {
          refVal = this._schemas[id];
          if (refVal instanceof SchemaObject) {
            if (!refVal.validate)
              this._compile(refVal);
            if (id == normalizeId(ref))
              return { schema: refVal, root, baseId };
            root = refVal;
          } else {
            return;
          }
        }
        if (!root.schema)
          return;
        baseId = getFullPath(this._getId(root.schema));
      }
      return getJsonPointer.call(this, p, baseId, root.schema, root);
    }
    function resolveRecursive(root, ref, parsedRef) {
      var res = resolveSchema.call(this, root, ref);
      if (res) {
        var schema = res.schema;
        var baseId = res.baseId;
        root = res.root;
        var id = this._getId(schema);
        if (id)
          baseId = resolveUrl(baseId, id);
        return getJsonPointer.call(this, parsedRef, baseId, schema, root);
      }
    }
    var PREVENT_SCOPE_CHANGE = util.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function getJsonPointer(parsedRef, baseId, schema, root) {
      parsedRef.fragment = parsedRef.fragment || "";
      if (parsedRef.fragment.slice(0, 1) != "/")
        return;
      var parts = parsedRef.fragment.split("/");
      for (var i = 1; i < parts.length; i++) {
        var part = parts[i];
        if (part) {
          part = util.unescapeFragment(part);
          schema = schema[part];
          if (schema === void 0)
            break;
          var id;
          if (!PREVENT_SCOPE_CHANGE[part]) {
            id = this._getId(schema);
            if (id)
              baseId = resolveUrl(baseId, id);
            if (schema.$ref) {
              var $ref = resolveUrl(baseId, schema.$ref);
              var res = resolveSchema.call(this, root, $ref);
              if (res) {
                schema = res.schema;
                root = res.root;
                baseId = res.baseId;
              }
            }
          }
        }
      }
      if (schema !== void 0 && schema !== root.schema)
        return { schema, root, baseId };
    }
    var SIMPLE_INLINED = util.toHash([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum"
    ]);
    function inlineRef(schema, limit) {
      if (limit === false)
        return false;
      if (limit === void 0 || limit === true)
        return checkNoRef(schema);
      else if (limit)
        return countKeys(schema) <= limit;
    }
    function checkNoRef(schema) {
      var item;
      if (Array.isArray(schema)) {
        for (var i = 0; i < schema.length; i++) {
          item = schema[i];
          if (typeof item == "object" && !checkNoRef(item))
            return false;
        }
      } else {
        for (var key in schema) {
          if (key == "$ref")
            return false;
          item = schema[key];
          if (typeof item == "object" && !checkNoRef(item))
            return false;
        }
      }
      return true;
    }
    function countKeys(schema) {
      var count = 0, item;
      if (Array.isArray(schema)) {
        for (var i = 0; i < schema.length; i++) {
          item = schema[i];
          if (typeof item == "object")
            count += countKeys(item);
          if (count == Infinity)
            return Infinity;
        }
      } else {
        for (var key in schema) {
          if (key == "$ref")
            return Infinity;
          if (SIMPLE_INLINED[key]) {
            count++;
          } else {
            item = schema[key];
            if (typeof item == "object")
              count += countKeys(item) + 1;
            if (count == Infinity)
              return Infinity;
          }
        }
      }
      return count;
    }
    function getFullPath(id, normalize) {
      if (normalize !== false)
        id = normalizeId(id);
      var p = URI.parse(id);
      return _getFullPath(p);
    }
    function _getFullPath(p) {
      return URI.serialize(p).split("#")[0] + "#";
    }
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    function resolveUrl(baseId, id) {
      id = normalizeId(id);
      return URI.resolve(baseId, id);
    }
    function resolveIds(schema) {
      var schemaId = normalizeId(this._getId(schema));
      var baseIds = { "": schemaId };
      var fullPaths = { "": getFullPath(schemaId, false) };
      var localRefs = {};
      var self = this;
      traverse(schema, { allKeys: true }, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
        if (jsonPtr === "")
          return;
        var id = self._getId(sch);
        var baseId = baseIds[parentJsonPtr];
        var fullPath = fullPaths[parentJsonPtr] + "/" + parentKeyword;
        if (keyIndex !== void 0)
          fullPath += "/" + (typeof keyIndex == "number" ? keyIndex : util.escapeFragment(keyIndex));
        if (typeof id == "string") {
          id = baseId = normalizeId(baseId ? URI.resolve(baseId, id) : id);
          var refVal = self._refs[id];
          if (typeof refVal == "string")
            refVal = self._refs[refVal];
          if (refVal && refVal.schema) {
            if (!equal(sch, refVal.schema))
              throw new Error('id "' + id + '" resolves to more than one schema');
          } else if (id != normalizeId(fullPath)) {
            if (id[0] == "#") {
              if (localRefs[id] && !equal(sch, localRefs[id]))
                throw new Error('id "' + id + '" resolves to more than one schema');
              localRefs[id] = sch;
            } else {
              self._refs[id] = fullPath;
            }
          }
        }
        baseIds[jsonPtr] = baseId;
        fullPaths[jsonPtr] = fullPath;
      });
      return localRefs;
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/error_classes.js
var require_error_classes = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/error_classes.js"(exports2, module2) {
    "use strict";
    var resolve = require_resolve();
    module2.exports = {
      Validation: errorSubclass(ValidationError),
      MissingRef: errorSubclass(MissingRefError)
    };
    function ValidationError(errors) {
      this.message = "validation failed";
      this.errors = errors;
      this.ajv = this.validation = true;
    }
    MissingRefError.message = function(baseId, ref) {
      return "can't resolve reference " + ref + " from id " + baseId;
    };
    function MissingRefError(baseId, ref, message) {
      this.message = message || MissingRefError.message(baseId, ref);
      this.missingRef = resolve.url(baseId, ref);
      this.missingSchema = resolve.normalizeId(resolve.fullPath(this.missingRef));
    }
    function errorSubclass(Subclass) {
      Subclass.prototype = Object.create(Error.prototype);
      Subclass.prototype.constructor = Subclass;
      return Subclass;
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-json-stable-stringify/index.js
var require_fast_json_stable_stringify = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-json-stable-stringify/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(data, opts) {
      if (!opts)
        opts = {};
      if (typeof opts === "function")
        opts = { cmp: opts };
      var cycles = typeof opts.cycles === "boolean" ? opts.cycles : false;
      var cmp = opts.cmp && function(f) {
        return function(node) {
          return function(a, b) {
            var aobj = { key: a, value: node[a] };
            var bobj = { key: b, value: node[b] };
            return f(aobj, bobj);
          };
        };
      }(opts.cmp);
      var seen = [];
      return function stringify(node) {
        if (node && node.toJSON && typeof node.toJSON === "function") {
          node = node.toJSON();
        }
        if (node === void 0)
          return;
        if (typeof node == "number")
          return isFinite(node) ? "" + node : "null";
        if (typeof node !== "object")
          return JSON.stringify(node);
        var i, out;
        if (Array.isArray(node)) {
          out = "[";
          for (i = 0; i < node.length; i++) {
            if (i)
              out += ",";
            out += stringify(node[i]) || "null";
          }
          return out + "]";
        }
        if (node === null)
          return "null";
        if (seen.indexOf(node) !== -1) {
          if (cycles)
            return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = "";
        for (i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = stringify(node[key]);
          if (!value)
            continue;
          if (out)
            out += ",";
          out += JSON.stringify(key) + ":" + value;
        }
        seen.splice(seenIndex, 1);
        return "{" + out + "}";
      }(data);
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/validate.js
var require_validate = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/validate.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_validate(it, $keyword, $ruleType) {
      var out = "";
      var $async = it.schema.$async === true, $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, "$ref"), $id = it.self._getId(it.schema);
      if (it.opts.strictKeywords) {
        var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
        if ($unknownKwd) {
          var $keywordsMsg = "unknown keyword: " + $unknownKwd;
          if (it.opts.strictKeywords === "log")
            it.logger.warn($keywordsMsg);
          else
            throw new Error($keywordsMsg);
        }
      }
      if (it.isTop) {
        out += " var validate = ";
        if ($async) {
          it.async = true;
          out += "async ";
        }
        out += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ";
        if ($id && (it.opts.sourceCode || it.opts.processCode)) {
          out += " " + ("/*# sourceURL=" + $id + " */") + " ";
        }
      }
      if (typeof it.schema == "boolean" || !($refKeywords || it.schema.$ref)) {
        var $keyword = "false schema";
        var $lvl = it.level;
        var $dataLvl = it.dataLevel;
        var $schema = it.schema[$keyword];
        var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
        var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
        var $breakOnError = !it.opts.allErrors;
        var $errorKeyword;
        var $data = "data" + ($dataLvl || "");
        var $valid = "valid" + $lvl;
        if (it.schema === false) {
          if (it.isTop) {
            $breakOnError = true;
          } else {
            out += " var " + $valid + " = false; ";
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = "";
          if (it.createErrors !== false) {
            out += " { keyword: '" + ($errorKeyword || "false schema") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
            if (it.opts.messages !== false) {
              out += " , message: 'boolean schema is false' ";
            }
            if (it.opts.verbose) {
              out += " , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
            }
            out += " } ";
          } else {
            out += " {} ";
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            if (it.async) {
              out += " throw new ValidationError([" + __err + "]); ";
            } else {
              out += " validate.errors = [" + __err + "]; return false; ";
            }
          } else {
            out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
        } else {
          if (it.isTop) {
            if ($async) {
              out += " return data; ";
            } else {
              out += " validate.errors = null; return true; ";
            }
          } else {
            out += " var " + $valid + " = true; ";
          }
        }
        if (it.isTop) {
          out += " }; return validate; ";
        }
        return out;
      }
      if (it.isTop) {
        var $top = it.isTop, $lvl = it.level = 0, $dataLvl = it.dataLevel = 0, $data = "data";
        it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
        it.baseId = it.baseId || it.rootId;
        delete it.isTop;
        it.dataPathArr = [""];
        if (it.schema.default !== void 0 && it.opts.useDefaults && it.opts.strictDefaults) {
          var $defaultMsg = "default is ignored in the schema root";
          if (it.opts.strictDefaults === "log")
            it.logger.warn($defaultMsg);
          else
            throw new Error($defaultMsg);
        }
        out += " var vErrors = null; ";
        out += " var errors = 0;     ";
        out += " if (rootData === undefined) rootData = data; ";
      } else {
        var $lvl = it.level, $dataLvl = it.dataLevel, $data = "data" + ($dataLvl || "");
        if ($id)
          it.baseId = it.resolve.url(it.baseId, $id);
        if ($async && !it.async)
          throw new Error("async schema in sync schema");
        out += " var errs_" + $lvl + " = errors;";
      }
      var $valid = "valid" + $lvl, $breakOnError = !it.opts.allErrors, $closingBraces1 = "", $closingBraces2 = "";
      var $errorKeyword;
      var $typeSchema = it.schema.type, $typeIsArray = Array.isArray($typeSchema);
      if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
        if ($typeIsArray) {
          if ($typeSchema.indexOf("null") == -1)
            $typeSchema = $typeSchema.concat("null");
        } else if ($typeSchema != "null") {
          $typeSchema = [$typeSchema, "null"];
          $typeIsArray = true;
        }
      }
      if ($typeIsArray && $typeSchema.length == 1) {
        $typeSchema = $typeSchema[0];
        $typeIsArray = false;
      }
      if (it.schema.$ref && $refKeywords) {
        if (it.opts.extendRefs == "fail") {
          throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
        } else if (it.opts.extendRefs !== true) {
          $refKeywords = false;
          it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
        }
      }
      if (it.schema.$comment && it.opts.$comment) {
        out += " " + it.RULES.all.$comment.code(it, "$comment");
      }
      if ($typeSchema) {
        if (it.opts.coerceTypes) {
          var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
        }
        var $rulesGroup = it.RULES.types[$typeSchema];
        if ($coerceToTypes || $typeIsArray || $rulesGroup === true || $rulesGroup && !$shouldUseGroup($rulesGroup)) {
          var $schemaPath = it.schemaPath + ".type", $errSchemaPath = it.errSchemaPath + "/type";
          var $schemaPath = it.schemaPath + ".type", $errSchemaPath = it.errSchemaPath + "/type", $method = $typeIsArray ? "checkDataTypes" : "checkDataType";
          out += " if (" + it.util[$method]($typeSchema, $data, it.opts.strictNumbers, true) + ") { ";
          if ($coerceToTypes) {
            var $dataType = "dataType" + $lvl, $coerced = "coerced" + $lvl;
            out += " var " + $dataType + " = typeof " + $data + "; var " + $coerced + " = undefined; ";
            if (it.opts.coerceTypes == "array") {
              out += " if (" + $dataType + " == 'object' && Array.isArray(" + $data + ") && " + $data + ".length == 1) { " + $data + " = " + $data + "[0]; " + $dataType + " = typeof " + $data + "; if (" + it.util.checkDataType(it.schema.type, $data, it.opts.strictNumbers) + ") " + $coerced + " = " + $data + "; } ";
            }
            out += " if (" + $coerced + " !== undefined) ; ";
            var arr1 = $coerceToTypes;
            if (arr1) {
              var $type, $i = -1, l1 = arr1.length - 1;
              while ($i < l1) {
                $type = arr1[$i += 1];
                if ($type == "string") {
                  out += " else if (" + $dataType + " == 'number' || " + $dataType + " == 'boolean') " + $coerced + " = '' + " + $data + "; else if (" + $data + " === null) " + $coerced + " = ''; ";
                } else if ($type == "number" || $type == "integer") {
                  out += " else if (" + $dataType + " == 'boolean' || " + $data + " === null || (" + $dataType + " == 'string' && " + $data + " && " + $data + " == +" + $data + " ";
                  if ($type == "integer") {
                    out += " && !(" + $data + " % 1)";
                  }
                  out += ")) " + $coerced + " = +" + $data + "; ";
                } else if ($type == "boolean") {
                  out += " else if (" + $data + " === 'false' || " + $data + " === 0 || " + $data + " === null) " + $coerced + " = false; else if (" + $data + " === 'true' || " + $data + " === 1) " + $coerced + " = true; ";
                } else if ($type == "null") {
                  out += " else if (" + $data + " === '' || " + $data + " === 0 || " + $data + " === false) " + $coerced + " = null; ";
                } else if (it.opts.coerceTypes == "array" && $type == "array") {
                  out += " else if (" + $dataType + " == 'string' || " + $dataType + " == 'number' || " + $dataType + " == 'boolean' || " + $data + " == null) " + $coerced + " = [" + $data + "]; ";
                }
              }
            }
            out += " else {   ";
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: '" + ($errorKeyword || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '";
              if ($typeIsArray) {
                out += "" + $typeSchema.join(",");
              } else {
                out += "" + $typeSchema;
              }
              out += "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'should be ";
                if ($typeIsArray) {
                  out += "" + $typeSchema.join(",");
                } else {
                  out += "" + $typeSchema;
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            out += " } if (" + $coerced + " !== undefined) {  ";
            var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData", $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
            out += " " + $data + " = " + $coerced + "; ";
            if (!$dataLvl) {
              out += "if (" + $parentData + " !== undefined)";
            }
            out += " " + $parentData + "[" + $parentDataProperty + "] = " + $coerced + "; } ";
          } else {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: '" + ($errorKeyword || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '";
              if ($typeIsArray) {
                out += "" + $typeSchema.join(",");
              } else {
                out += "" + $typeSchema;
              }
              out += "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'should be ";
                if ($typeIsArray) {
                  out += "" + $typeSchema.join(",");
                } else {
                  out += "" + $typeSchema;
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
          }
          out += " } ";
        }
      }
      if (it.schema.$ref && !$refKeywords) {
        out += " " + it.RULES.all.$ref.code(it, "$ref") + " ";
        if ($breakOnError) {
          out += " } if (errors === ";
          if ($top) {
            out += "0";
          } else {
            out += "errs_" + $lvl;
          }
          out += ") { ";
          $closingBraces2 += "}";
        }
      } else {
        var arr2 = it.RULES;
        if (arr2) {
          var $rulesGroup, i2 = -1, l2 = arr2.length - 1;
          while (i2 < l2) {
            $rulesGroup = arr2[i2 += 1];
            if ($shouldUseGroup($rulesGroup)) {
              if ($rulesGroup.type) {
                out += " if (" + it.util.checkDataType($rulesGroup.type, $data, it.opts.strictNumbers) + ") { ";
              }
              if (it.opts.useDefaults) {
                if ($rulesGroup.type == "object" && it.schema.properties) {
                  var $schema = it.schema.properties, $schemaKeys = Object.keys($schema);
                  var arr3 = $schemaKeys;
                  if (arr3) {
                    var $propertyKey, i3 = -1, l3 = arr3.length - 1;
                    while (i3 < l3) {
                      $propertyKey = arr3[i3 += 1];
                      var $sch = $schema[$propertyKey];
                      if ($sch.default !== void 0) {
                        var $passData = $data + it.util.getProperty($propertyKey);
                        if (it.compositeRule) {
                          if (it.opts.strictDefaults) {
                            var $defaultMsg = "default is ignored for: " + $passData;
                            if (it.opts.strictDefaults === "log")
                              it.logger.warn($defaultMsg);
                            else
                              throw new Error($defaultMsg);
                          }
                        } else {
                          out += " if (" + $passData + " === undefined ";
                          if (it.opts.useDefaults == "empty") {
                            out += " || " + $passData + " === null || " + $passData + " === '' ";
                          }
                          out += " ) " + $passData + " = ";
                          if (it.opts.useDefaults == "shared") {
                            out += " " + it.useDefault($sch.default) + " ";
                          } else {
                            out += " " + JSON.stringify($sch.default) + " ";
                          }
                          out += "; ";
                        }
                      }
                    }
                  }
                } else if ($rulesGroup.type == "array" && Array.isArray(it.schema.items)) {
                  var arr4 = it.schema.items;
                  if (arr4) {
                    var $sch, $i = -1, l4 = arr4.length - 1;
                    while ($i < l4) {
                      $sch = arr4[$i += 1];
                      if ($sch.default !== void 0) {
                        var $passData = $data + "[" + $i + "]";
                        if (it.compositeRule) {
                          if (it.opts.strictDefaults) {
                            var $defaultMsg = "default is ignored for: " + $passData;
                            if (it.opts.strictDefaults === "log")
                              it.logger.warn($defaultMsg);
                            else
                              throw new Error($defaultMsg);
                          }
                        } else {
                          out += " if (" + $passData + " === undefined ";
                          if (it.opts.useDefaults == "empty") {
                            out += " || " + $passData + " === null || " + $passData + " === '' ";
                          }
                          out += " ) " + $passData + " = ";
                          if (it.opts.useDefaults == "shared") {
                            out += " " + it.useDefault($sch.default) + " ";
                          } else {
                            out += " " + JSON.stringify($sch.default) + " ";
                          }
                          out += "; ";
                        }
                      }
                    }
                  }
                }
              }
              var arr5 = $rulesGroup.rules;
              if (arr5) {
                var $rule, i5 = -1, l5 = arr5.length - 1;
                while (i5 < l5) {
                  $rule = arr5[i5 += 1];
                  if ($shouldUseRule($rule)) {
                    var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                    if ($code) {
                      out += " " + $code + " ";
                      if ($breakOnError) {
                        $closingBraces1 += "}";
                      }
                    }
                  }
                }
              }
              if ($breakOnError) {
                out += " " + $closingBraces1 + " ";
                $closingBraces1 = "";
              }
              if ($rulesGroup.type) {
                out += " } ";
                if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
                  out += " else { ";
                  var $schemaPath = it.schemaPath + ".type", $errSchemaPath = it.errSchemaPath + "/type";
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = "";
                  if (it.createErrors !== false) {
                    out += " { keyword: '" + ($errorKeyword || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '";
                    if ($typeIsArray) {
                      out += "" + $typeSchema.join(",");
                    } else {
                      out += "" + $typeSchema;
                    }
                    out += "' } ";
                    if (it.opts.messages !== false) {
                      out += " , message: 'should be ";
                      if ($typeIsArray) {
                        out += "" + $typeSchema.join(",");
                      } else {
                        out += "" + $typeSchema;
                      }
                      out += "' ";
                    }
                    if (it.opts.verbose) {
                      out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                    }
                    out += " } ";
                  } else {
                    out += " {} ";
                  }
                  var __err = out;
                  out = $$outStack.pop();
                  if (!it.compositeRule && $breakOnError) {
                    if (it.async) {
                      out += " throw new ValidationError([" + __err + "]); ";
                    } else {
                      out += " validate.errors = [" + __err + "]; return false; ";
                    }
                  } else {
                    out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                  }
                  out += " } ";
                }
              }
              if ($breakOnError) {
                out += " if (errors === ";
                if ($top) {
                  out += "0";
                } else {
                  out += "errs_" + $lvl;
                }
                out += ") { ";
                $closingBraces2 += "}";
              }
            }
          }
        }
      }
      if ($breakOnError) {
        out += " " + $closingBraces2 + " ";
      }
      if ($top) {
        if ($async) {
          out += " if (errors === 0) return data;           ";
          out += " else throw new ValidationError(vErrors); ";
        } else {
          out += " validate.errors = vErrors; ";
          out += " return errors === 0;       ";
        }
        out += " }; return validate;";
      } else {
        out += " var " + $valid + " = errors === errs_" + $lvl + ";";
      }
      function $shouldUseGroup($rulesGroup2) {
        var rules = $rulesGroup2.rules;
        for (var i = 0; i < rules.length; i++)
          if ($shouldUseRule(rules[i]))
            return true;
      }
      function $shouldUseRule($rule2) {
        return it.schema[$rule2.keyword] !== void 0 || $rule2.implements && $ruleImplementsSomeKeyword($rule2);
      }
      function $ruleImplementsSomeKeyword($rule2) {
        var impl = $rule2.implements;
        for (var i = 0; i < impl.length; i++)
          if (it.schema[impl[i]] !== void 0)
            return true;
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/index.js
var require_compile = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/index.js"(exports2, module2) {
    "use strict";
    var resolve = require_resolve();
    var util = require_util();
    var errorClasses = require_error_classes();
    var stableStringify = require_fast_json_stable_stringify();
    var validateGenerator = require_validate();
    var ucs2length = util.ucs2length;
    var equal = require_fast_deep_equal();
    var ValidationError = errorClasses.Validation;
    module2.exports = compile;
    function compile(schema, root, localRefs, baseId) {
      var self = this, opts = this._opts, refVal = [void 0], refs = {}, patterns = [], patternsHash = {}, defaults = [], defaultsHash = {}, customRules = [];
      root = root || { schema, refVal, refs };
      var c = checkCompiling.call(this, schema, root, baseId);
      var compilation = this._compilations[c.index];
      if (c.compiling)
        return compilation.callValidate = callValidate;
      var formats = this._formats;
      var RULES = this.RULES;
      try {
        var v = localCompile(schema, root, localRefs, baseId);
        compilation.validate = v;
        var cv = compilation.callValidate;
        if (cv) {
          cv.schema = v.schema;
          cv.errors = null;
          cv.refs = v.refs;
          cv.refVal = v.refVal;
          cv.root = v.root;
          cv.$async = v.$async;
          if (opts.sourceCode)
            cv.source = v.source;
        }
        return v;
      } finally {
        endCompiling.call(this, schema, root, baseId);
      }
      function callValidate() {
        var validate2 = compilation.validate;
        var result = validate2.apply(this, arguments);
        callValidate.errors = validate2.errors;
        return result;
      }
      function localCompile(_schema, _root, localRefs2, baseId2) {
        var isRoot = !_root || _root && _root.schema == _schema;
        if (_root.schema != root.schema)
          return compile.call(self, _schema, _root, localRefs2, baseId2);
        var $async = _schema.$async === true;
        var sourceCode = validateGenerator({
          isTop: true,
          schema: _schema,
          isRoot,
          baseId: baseId2,
          root: _root,
          schemaPath: "",
          errSchemaPath: "#",
          errorPath: '""',
          MissingRefError: errorClasses.MissingRef,
          RULES,
          validate: validateGenerator,
          util,
          resolve,
          resolveRef,
          usePattern,
          useDefault,
          useCustomRule,
          opts,
          formats,
          logger: self.logger,
          self
        });
        sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode) + vars(defaults, defaultCode) + vars(customRules, customRuleCode) + sourceCode;
        if (opts.processCode)
          sourceCode = opts.processCode(sourceCode, _schema);
        var validate2;
        try {
          var makeValidate = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", sourceCode);
          validate2 = makeValidate(self, RULES, formats, root, refVal, defaults, customRules, equal, ucs2length, ValidationError);
          refVal[0] = validate2;
        } catch (e) {
          self.logger.error("Error compiling schema, function code:", sourceCode);
          throw e;
        }
        validate2.schema = _schema;
        validate2.errors = null;
        validate2.refs = refs;
        validate2.refVal = refVal;
        validate2.root = isRoot ? validate2 : _root;
        if ($async)
          validate2.$async = true;
        if (opts.sourceCode === true) {
          validate2.source = {
            code: sourceCode,
            patterns,
            defaults
          };
        }
        return validate2;
      }
      function resolveRef(baseId2, ref, isRoot) {
        ref = resolve.url(baseId2, ref);
        var refIndex = refs[ref];
        var _refVal, refCode;
        if (refIndex !== void 0) {
          _refVal = refVal[refIndex];
          refCode = "refVal[" + refIndex + "]";
          return resolvedRef(_refVal, refCode);
        }
        if (!isRoot && root.refs) {
          var rootRefId = root.refs[ref];
          if (rootRefId !== void 0) {
            _refVal = root.refVal[rootRefId];
            refCode = addLocalRef(ref, _refVal);
            return resolvedRef(_refVal, refCode);
          }
        }
        refCode = addLocalRef(ref);
        var v2 = resolve.call(self, localCompile, root, ref);
        if (v2 === void 0) {
          var localSchema = localRefs && localRefs[ref];
          if (localSchema) {
            v2 = resolve.inlineRef(localSchema, opts.inlineRefs) ? localSchema : compile.call(self, localSchema, root, localRefs, baseId2);
          }
        }
        if (v2 === void 0) {
          removeLocalRef(ref);
        } else {
          replaceLocalRef(ref, v2);
          return resolvedRef(v2, refCode);
        }
      }
      function addLocalRef(ref, v2) {
        var refId = refVal.length;
        refVal[refId] = v2;
        refs[ref] = refId;
        return "refVal" + refId;
      }
      function removeLocalRef(ref) {
        delete refs[ref];
      }
      function replaceLocalRef(ref, v2) {
        var refId = refs[ref];
        refVal[refId] = v2;
      }
      function resolvedRef(refVal2, code) {
        return typeof refVal2 == "object" || typeof refVal2 == "boolean" ? { code, schema: refVal2, inline: true } : { code, $async: refVal2 && !!refVal2.$async };
      }
      function usePattern(regexStr) {
        var index = patternsHash[regexStr];
        if (index === void 0) {
          index = patternsHash[regexStr] = patterns.length;
          patterns[index] = regexStr;
        }
        return "pattern" + index;
      }
      function useDefault(value) {
        switch (typeof value) {
          case "boolean":
          case "number":
            return "" + value;
          case "string":
            return util.toQuotedString(value);
          case "object":
            if (value === null)
              return "null";
            var valueStr = stableStringify(value);
            var index = defaultsHash[valueStr];
            if (index === void 0) {
              index = defaultsHash[valueStr] = defaults.length;
              defaults[index] = value;
            }
            return "default" + index;
        }
      }
      function useCustomRule(rule, schema2, parentSchema, it) {
        if (self._opts.validateSchema !== false) {
          var deps = rule.definition.dependencies;
          if (deps && !deps.every(function(keyword) {
            return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
          }))
            throw new Error("parent schema must have all required keywords: " + deps.join(","));
          var validateSchema = rule.definition.validateSchema;
          if (validateSchema) {
            var valid = validateSchema(schema2);
            if (!valid) {
              var message = "keyword schema is invalid: " + self.errorsText(validateSchema.errors);
              if (self._opts.validateSchema == "log")
                self.logger.error(message);
              else
                throw new Error(message);
            }
          }
        }
        var compile2 = rule.definition.compile, inline = rule.definition.inline, macro = rule.definition.macro;
        var validate2;
        if (compile2) {
          validate2 = compile2.call(self, schema2, parentSchema, it);
        } else if (macro) {
          validate2 = macro.call(self, schema2, parentSchema, it);
          if (opts.validateSchema !== false)
            self.validateSchema(validate2, true);
        } else if (inline) {
          validate2 = inline.call(self, it, rule.keyword, schema2, parentSchema);
        } else {
          validate2 = rule.definition.validate;
          if (!validate2)
            return;
        }
        if (validate2 === void 0)
          throw new Error('custom keyword "' + rule.keyword + '"failed to compile');
        var index = customRules.length;
        customRules[index] = validate2;
        return {
          code: "customRule" + index,
          validate: validate2
        };
      }
    }
    function checkCompiling(schema, root, baseId) {
      var index = compIndex.call(this, schema, root, baseId);
      if (index >= 0)
        return { index, compiling: true };
      index = this._compilations.length;
      this._compilations[index] = {
        schema,
        root,
        baseId
      };
      return { index, compiling: false };
    }
    function endCompiling(schema, root, baseId) {
      var i = compIndex.call(this, schema, root, baseId);
      if (i >= 0)
        this._compilations.splice(i, 1);
    }
    function compIndex(schema, root, baseId) {
      for (var i = 0; i < this._compilations.length; i++) {
        var c = this._compilations[i];
        if (c.schema == schema && c.root == root && c.baseId == baseId)
          return i;
      }
      return -1;
    }
    function patternCode(i, patterns) {
      return "var pattern" + i + " = new RegExp(" + util.toQuotedString(patterns[i]) + ");";
    }
    function defaultCode(i) {
      return "var default" + i + " = defaults[" + i + "];";
    }
    function refValCode(i, refVal) {
      return refVal[i] === void 0 ? "" : "var refVal" + i + " = refVal[" + i + "];";
    }
    function customRuleCode(i) {
      return "var customRule" + i + " = customRules[" + i + "];";
    }
    function vars(arr, statement) {
      if (!arr.length)
        return "";
      var code = "";
      for (var i = 0; i < arr.length; i++)
        code += statement(i, arr);
      return code;
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/cache.js
var require_cache = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/cache.js"(exports2, module2) {
    "use strict";
    var Cache = module2.exports = function Cache2() {
      this._cache = {};
    };
    Cache.prototype.put = function Cache_put(key, value) {
      this._cache[key] = value;
    };
    Cache.prototype.get = function Cache_get(key) {
      return this._cache[key];
    };
    Cache.prototype.del = function Cache_del(key) {
      delete this._cache[key];
    };
    Cache.prototype.clear = function Cache_clear() {
      this._cache = {};
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/formats.js
var require_formats = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/formats.js"(exports2, module2) {
    "use strict";
    var util = require_util();
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
    var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
    var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
    var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
    var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
    var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
    var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
    module2.exports = formats;
    function formats(mode) {
      mode = mode == "full" ? "full" : "fast";
      return util.copy(formats[mode]);
    }
    formats.fast = {
      date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
      time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      "uri-template": URITEMPLATE,
      url: URL,
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      hostname: HOSTNAME,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex,
      uuid: UUID,
      "json-pointer": JSON_POINTER,
      "json-pointer-uri-fragment": JSON_POINTER_URI_FRAGMENT,
      "relative-json-pointer": RELATIVE_JSON_POINTER
    };
    formats.full = {
      date,
      time,
      "date-time": date_time,
      uri,
      "uri-reference": URIREF,
      "uri-template": URITEMPLATE,
      url: URL,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: HOSTNAME,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex,
      uuid: UUID,
      "json-pointer": JSON_POINTER,
      "json-pointer-uri-fragment": JSON_POINTER_URI_FRAGMENT,
      "relative-json-pointer": RELATIVE_JSON_POINTER
    };
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function date(str) {
      var matches = str.match(DATE);
      if (!matches)
        return false;
      var year = +matches[1];
      var month = +matches[2];
      var day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function time(str, full) {
      var matches = str.match(TIME);
      if (!matches)
        return false;
      var hour = matches[1];
      var minute = matches[2];
      var second = matches[3];
      var timeZone = matches[5];
      return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function date_time(str) {
      var dateTime = str.split(DATE_TIME_SEPARATOR);
      return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/ref.js
var require_ref = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_ref(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $async, $refCode;
      if ($schema == "#" || $schema == "#/") {
        if (it.isRoot) {
          $async = it.async;
          $refCode = "validate";
        } else {
          $async = it.root.schema.$async === true;
          $refCode = "root.refVal[0]";
        }
      } else {
        var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
        if ($refVal === void 0) {
          var $message = it.MissingRefError.message(it.baseId, $schema);
          if (it.opts.missingRefs == "fail") {
            it.logger.error($message);
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: '$ref' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { ref: '" + it.util.escapeQuotes($schema) + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'can\\'t resolve reference " + it.util.escapeQuotes($schema) + "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: " + it.util.toQuotedString($schema) + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            if ($breakOnError) {
              out += " if (false) { ";
            }
          } else if (it.opts.missingRefs == "ignore") {
            it.logger.warn($message);
            if ($breakOnError) {
              out += " if (true) { ";
            }
          } else {
            throw new it.MissingRefError(it.baseId, $schema, $message);
          }
        } else if ($refVal.inline) {
          var $it = it.util.copy(it);
          $it.level++;
          var $nextValid = "valid" + $it.level;
          $it.schema = $refVal.schema;
          $it.schemaPath = "";
          $it.errSchemaPath = $schema;
          var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
          out += " " + $code + " ";
          if ($breakOnError) {
            out += " if (" + $nextValid + ") { ";
          }
        } else {
          $async = $refVal.$async === true || it.async && $refVal.$async !== false;
          $refCode = $refVal.code;
        }
      }
      if ($refCode) {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.opts.passContext) {
          out += " " + $refCode + ".call(this, ";
        } else {
          out += " " + $refCode + "( ";
        }
        out += " " + $data + ", (dataPath || '')";
        if (it.errorPath != '""') {
          out += " + " + it.errorPath;
        }
        var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData", $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
        out += " , " + $parentData + " , " + $parentDataProperty + ", rootData)  ";
        var __callValidate = out;
        out = $$outStack.pop();
        if ($async) {
          if (!it.async)
            throw new Error("async schema referenced by sync schema");
          if ($breakOnError) {
            out += " var " + $valid + "; ";
          }
          out += " try { await " + __callValidate + "; ";
          if ($breakOnError) {
            out += " " + $valid + " = true; ";
          }
          out += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ";
          if ($breakOnError) {
            out += " " + $valid + " = false; ";
          }
          out += " } ";
          if ($breakOnError) {
            out += " if (" + $valid + ") { ";
          }
        } else {
          out += " if (!" + __callValidate + ") { if (vErrors === null) vErrors = " + $refCode + ".errors; else vErrors = vErrors.concat(" + $refCode + ".errors); errors = vErrors.length; } ";
          if ($breakOnError) {
            out += " else { ";
          }
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/allOf.js
var require_allOf = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/allOf.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_allOf(it, $keyword, $ruleType) {
      var out = " ";
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $currentBaseId = $it.baseId, $allSchemasEmpty = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1, l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
            $allSchemasEmpty = false;
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + "[" + $i + "]";
            $it.errSchemaPath = $errSchemaPath + "/" + $i;
            out += "  " + it.validate($it) + " ";
            $it.baseId = $currentBaseId;
            if ($breakOnError) {
              out += " if (" + $nextValid + ") { ";
              $closingBraces += "}";
            }
          }
        }
      }
      if ($breakOnError) {
        if ($allSchemasEmpty) {
          out += " if (true) { ";
        } else {
          out += " " + $closingBraces.slice(0, -1) + " ";
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/anyOf.js
var require_anyOf = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/anyOf.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_anyOf(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $noEmptySchema = $schema.every(function($sch2) {
        return it.opts.strictKeywords ? typeof $sch2 == "object" && Object.keys($sch2).length > 0 || $sch2 === false : it.util.schemaHasRules($sch2, it.RULES.all);
      });
      if ($noEmptySchema) {
        var $currentBaseId = $it.baseId;
        out += " var " + $errs + " = errors; var " + $valid + " = false;  ";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var arr1 = $schema;
        if (arr1) {
          var $sch, $i = -1, l1 = arr1.length - 1;
          while ($i < l1) {
            $sch = arr1[$i += 1];
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + "[" + $i + "]";
            $it.errSchemaPath = $errSchemaPath + "/" + $i;
            out += "  " + it.validate($it) + " ";
            $it.baseId = $currentBaseId;
            out += " " + $valid + " = " + $valid + " || " + $nextValid + "; if (!" + $valid + ") { ";
            $closingBraces += "}";
          }
        }
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " " + $closingBraces + " if (!" + $valid + ") {   var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: 'should match some schema in anyOf' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError(vErrors); ";
          } else {
            out += " validate.errors = vErrors; return false; ";
          }
        }
        out += " } else {  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; } ";
        if (it.opts.allErrors) {
          out += " } ";
        }
      } else {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/comment.js
var require_comment = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/comment.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_comment(it, $keyword, $ruleType) {
      var out = " ";
      var $schema = it.schema[$keyword];
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $comment = it.util.toQuotedString($schema);
      if (it.opts.$comment === true) {
        out += " console.log(" + $comment + ");";
      } else if (typeof it.opts.$comment == "function") {
        out += " self._opts.$comment(" + $comment + ", " + it.util.toQuotedString($errSchemaPath) + ", validate.root.schema);";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/const.js
var require_const = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/const.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_const(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!$isData) {
        out += " var schema" + $lvl + " = validate.schema" + $schemaPath + ";";
      }
      out += "var " + $valid + " = equal(" + $data + ", schema" + $lvl + "); if (!" + $valid + ") {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'const' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { allowedValue: schema" + $lvl + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be equal to constant' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " }";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/contains.js
var require_contains = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/contains.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_contains(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $idx = "i" + $lvl, $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $currentBaseId = it.baseId, $nonEmptySchema = it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all);
      out += "var " + $errs + " = errors;var " + $valid + ";";
      if ($nonEmptySchema) {
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += " var " + $nextValid + " = false; for (var " + $idx + " = 0; " + $idx + " < " + $data + ".length; " + $idx + "++) { ";
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + "[" + $idx + "]";
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
        } else {
          out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
        }
        out += " if (" + $nextValid + ") break; }  ";
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " " + $closingBraces + " if (!" + $nextValid + ") {";
      } else {
        out += " if (" + $data + ".length == 0) {";
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'contains' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
        if (it.opts.messages !== false) {
          out += " , message: 'should contain a valid item' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " } else { ";
      if ($nonEmptySchema) {
        out += "  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; } ";
      }
      if (it.opts.allErrors) {
        out += " } ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/dependencies.js
var require_dependencies = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/dependencies.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_dependencies(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $schemaDeps = {}, $propertyDeps = {}, $ownProperties = it.opts.ownProperties;
      for ($property in $schema) {
        if ($property == "__proto__")
          continue;
        var $sch = $schema[$property];
        var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
        $deps[$property] = $sch;
      }
      out += "var " + $errs + " = errors;";
      var $currentErrorPath = it.errorPath;
      out += "var missing" + $lvl + ";";
      for (var $property in $propertyDeps) {
        $deps = $propertyDeps[$property];
        if ($deps.length) {
          out += " if ( " + $data + it.util.getProperty($property) + " !== undefined ";
          if ($ownProperties) {
            out += " && Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($property) + "') ";
          }
          if ($breakOnError) {
            out += " && ( ";
            var arr1 = $deps;
            if (arr1) {
              var $propertyKey, $i = -1, l1 = arr1.length - 1;
              while ($i < l1) {
                $propertyKey = arr1[$i += 1];
                if ($i) {
                  out += " || ";
                }
                var $prop = it.util.getProperty($propertyKey), $useData = $data + $prop;
                out += " ( ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") && (missing" + $lvl + " = " + it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) + ") ) ";
              }
            }
            out += ")) {  ";
            var $propertyPath = "missing" + $lvl, $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + " + " + $propertyPath;
            }
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { property: '" + it.util.escapeQuotes($property) + "', missingProperty: '" + $missingProperty + "', depsCount: " + $deps.length + ", deps: '" + it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", ")) + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'should have ";
                if ($deps.length == 1) {
                  out += "property " + it.util.escapeQuotes($deps[0]);
                } else {
                  out += "properties " + it.util.escapeQuotes($deps.join(", "));
                }
                out += " when property " + it.util.escapeQuotes($property) + " is present' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
          } else {
            out += " ) { ";
            var arr2 = $deps;
            if (arr2) {
              var $propertyKey, i2 = -1, l2 = arr2.length - 1;
              while (i2 < l2) {
                $propertyKey = arr2[i2 += 1];
                var $prop = it.util.getProperty($propertyKey), $missingProperty = it.util.escapeQuotes($propertyKey), $useData = $data + $prop;
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                out += " if ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") {  var err =   ";
                if (it.createErrors !== false) {
                  out += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { property: '" + it.util.escapeQuotes($property) + "', missingProperty: '" + $missingProperty + "', depsCount: " + $deps.length + ", deps: '" + it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", ")) + "' } ";
                  if (it.opts.messages !== false) {
                    out += " , message: 'should have ";
                    if ($deps.length == 1) {
                      out += "property " + it.util.escapeQuotes($deps[0]);
                    } else {
                      out += "properties " + it.util.escapeQuotes($deps.join(", "));
                    }
                    out += " when property " + it.util.escapeQuotes($property) + " is present' ";
                  }
                  if (it.opts.verbose) {
                    out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                  }
                  out += " } ";
                } else {
                  out += " {} ";
                }
                out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
              }
            }
          }
          out += " }   ";
          if ($breakOnError) {
            $closingBraces += "}";
            out += " else { ";
          }
        }
      }
      it.errorPath = $currentErrorPath;
      var $currentBaseId = $it.baseId;
      for (var $property in $schemaDeps) {
        var $sch = $schemaDeps[$property];
        if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
          out += " " + $nextValid + " = true; if ( " + $data + it.util.getProperty($property) + " !== undefined ";
          if ($ownProperties) {
            out += " && Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($property) + "') ";
          }
          out += ") { ";
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + it.util.getProperty($property);
          $it.errSchemaPath = $errSchemaPath + "/" + it.util.escapeFragment($property);
          out += "  " + it.validate($it) + " ";
          $it.baseId = $currentBaseId;
          out += " }  ";
          if ($breakOnError) {
            out += " if (" + $nextValid + ") { ";
            $closingBraces += "}";
          }
        }
      }
      if ($breakOnError) {
        out += "   " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/enum.js
var require_enum = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/enum.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_enum(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $i = "i" + $lvl, $vSchema = "schema" + $lvl;
      if (!$isData) {
        out += " var " + $vSchema + " = validate.schema" + $schemaPath + ";";
      }
      out += "var " + $valid + ";";
      if ($isData) {
        out += " if (schema" + $lvl + " === undefined) " + $valid + " = true; else if (!Array.isArray(schema" + $lvl + ")) " + $valid + " = false; else {";
      }
      out += "" + $valid + " = false;for (var " + $i + "=0; " + $i + "<" + $vSchema + ".length; " + $i + "++) if (equal(" + $data + ", " + $vSchema + "[" + $i + "])) { " + $valid + " = true; break; }";
      if ($isData) {
        out += "  }  ";
      }
      out += " if (!" + $valid + ") {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'enum' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { allowedValues: schema" + $lvl + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be equal to one of the allowed values' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " }";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/format.js
var require_format = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/format.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_format(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      if (it.opts.format === false) {
        if ($breakOnError) {
          out += " if (true) { ";
        }
        return out;
      }
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $unknownFormats = it.opts.unknownFormats, $allowUnknown = Array.isArray($unknownFormats);
      if ($isData) {
        var $format = "format" + $lvl, $isObject = "isObject" + $lvl, $formatType = "formatType" + $lvl;
        out += " var " + $format + " = formats[" + $schemaValue + "]; var " + $isObject + " = typeof " + $format + " == 'object' && !(" + $format + " instanceof RegExp) && " + $format + ".validate; var " + $formatType + " = " + $isObject + " && " + $format + ".type || 'string'; if (" + $isObject + ") { ";
        if (it.async) {
          out += " var async" + $lvl + " = " + $format + ".async; ";
        }
        out += " " + $format + " = " + $format + ".validate; } if (  ";
        if ($isData) {
          out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'string') || ";
        }
        out += " (";
        if ($unknownFormats != "ignore") {
          out += " (" + $schemaValue + " && !" + $format + " ";
          if ($allowUnknown) {
            out += " && self._opts.unknownFormats.indexOf(" + $schemaValue + ") == -1 ";
          }
          out += ") || ";
        }
        out += " (" + $format + " && " + $formatType + " == '" + $ruleType + "' && !(typeof " + $format + " == 'function' ? ";
        if (it.async) {
          out += " (async" + $lvl + " ? await " + $format + "(" + $data + ") : " + $format + "(" + $data + ")) ";
        } else {
          out += " " + $format + "(" + $data + ") ";
        }
        out += " : " + $format + ".test(" + $data + "))))) {";
      } else {
        var $format = it.formats[$schema];
        if (!$format) {
          if ($unknownFormats == "ignore") {
            it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
            if ($breakOnError) {
              out += " if (true) { ";
            }
            return out;
          } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
            if ($breakOnError) {
              out += " if (true) { ";
            }
            return out;
          } else {
            throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
          }
        }
        var $isObject = typeof $format == "object" && !($format instanceof RegExp) && $format.validate;
        var $formatType = $isObject && $format.type || "string";
        if ($isObject) {
          var $async = $format.async === true;
          $format = $format.validate;
        }
        if ($formatType != $ruleType) {
          if ($breakOnError) {
            out += " if (true) { ";
          }
          return out;
        }
        if ($async) {
          if (!it.async)
            throw new Error("async format in sync schema");
          var $formatRef = "formats" + it.util.getProperty($schema) + ".validate";
          out += " if (!(await " + $formatRef + "(" + $data + "))) { ";
        } else {
          out += " if (! ";
          var $formatRef = "formats" + it.util.getProperty($schema);
          if ($isObject)
            $formatRef += ".validate";
          if (typeof $format == "function") {
            out += " " + $formatRef + "(" + $data + ") ";
          } else {
            out += " " + $formatRef + ".test(" + $data + ") ";
          }
          out += ") { ";
        }
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'format' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { format:  ";
        if ($isData) {
          out += "" + $schemaValue;
        } else {
          out += "" + it.util.toQuotedString($schema);
        }
        out += "  } ";
        if (it.opts.messages !== false) {
          out += ` , message: 'should match format "`;
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + it.util.escapeQuotes($schema);
          }
          out += `"' `;
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + it.util.toQuotedString($schema);
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " } ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/if.js
var require_if = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/if.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_if(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $thenSch = it.schema["then"], $elseSch = it.schema["else"], $thenPresent = $thenSch !== void 0 && (it.opts.strictKeywords ? typeof $thenSch == "object" && Object.keys($thenSch).length > 0 || $thenSch === false : it.util.schemaHasRules($thenSch, it.RULES.all)), $elsePresent = $elseSch !== void 0 && (it.opts.strictKeywords ? typeof $elseSch == "object" && Object.keys($elseSch).length > 0 || $elseSch === false : it.util.schemaHasRules($elseSch, it.RULES.all)), $currentBaseId = $it.baseId;
      if ($thenPresent || $elsePresent) {
        var $ifClause;
        $it.createErrors = false;
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += " var " + $errs + " = errors; var " + $valid + " = true;  ";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        out += "  " + it.validate($it) + " ";
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        out += "  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; }  ";
        it.compositeRule = $it.compositeRule = $wasComposite;
        if ($thenPresent) {
          out += " if (" + $nextValid + ") {  ";
          $it.schema = it.schema["then"];
          $it.schemaPath = it.schemaPath + ".then";
          $it.errSchemaPath = it.errSchemaPath + "/then";
          out += "  " + it.validate($it) + " ";
          $it.baseId = $currentBaseId;
          out += " " + $valid + " = " + $nextValid + "; ";
          if ($thenPresent && $elsePresent) {
            $ifClause = "ifClause" + $lvl;
            out += " var " + $ifClause + " = 'then'; ";
          } else {
            $ifClause = "'then'";
          }
          out += " } ";
          if ($elsePresent) {
            out += " else { ";
          }
        } else {
          out += " if (!" + $nextValid + ") { ";
        }
        if ($elsePresent) {
          $it.schema = it.schema["else"];
          $it.schemaPath = it.schemaPath + ".else";
          $it.errSchemaPath = it.errSchemaPath + "/else";
          out += "  " + it.validate($it) + " ";
          $it.baseId = $currentBaseId;
          out += " " + $valid + " = " + $nextValid + "; ";
          if ($thenPresent && $elsePresent) {
            $ifClause = "ifClause" + $lvl;
            out += " var " + $ifClause + " = 'else'; ";
          } else {
            $ifClause = "'else'";
          }
          out += " } ";
        }
        out += " if (!" + $valid + ") {   var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'if' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { failingKeyword: " + $ifClause + " } ";
          if (it.opts.messages !== false) {
            out += ` , message: 'should match "' + ` + $ifClause + ` + '" schema' `;
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError(vErrors); ";
          } else {
            out += " validate.errors = vErrors; return false; ";
          }
        }
        out += " }   ";
        if ($breakOnError) {
          out += " else { ";
        }
      } else {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/items.js
var require_items = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/items.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_items(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $idx = "i" + $lvl, $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $currentBaseId = it.baseId;
      out += "var " + $errs + " = errors;var " + $valid + ";";
      if (Array.isArray($schema)) {
        var $additionalItems = it.schema.additionalItems;
        if ($additionalItems === false) {
          out += " " + $valid + " = " + $data + ".length <= " + $schema.length + "; ";
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + "/additionalItems";
          out += "  if (!" + $valid + ") {   ";
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = "";
          if (it.createErrors !== false) {
            out += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schema.length + " } ";
            if (it.opts.messages !== false) {
              out += " , message: 'should NOT have more than " + $schema.length + " items' ";
            }
            if (it.opts.verbose) {
              out += " , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
            }
            out += " } ";
          } else {
            out += " {} ";
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            if (it.async) {
              out += " throw new ValidationError([" + __err + "]); ";
            } else {
              out += " validate.errors = [" + __err + "]; return false; ";
            }
          } else {
            out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          out += " } ";
          $errSchemaPath = $currErrSchemaPath;
          if ($breakOnError) {
            $closingBraces += "}";
            out += " else { ";
          }
        }
        var arr1 = $schema;
        if (arr1) {
          var $sch, $i = -1, l1 = arr1.length - 1;
          while ($i < l1) {
            $sch = arr1[$i += 1];
            if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
              out += " " + $nextValid + " = true; if (" + $data + ".length > " + $i + ") { ";
              var $passData = $data + "[" + $i + "]";
              $it.schema = $sch;
              $it.schemaPath = $schemaPath + "[" + $i + "]";
              $it.errSchemaPath = $errSchemaPath + "/" + $i;
              $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
              $it.dataPathArr[$dataNxt] = $i;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              out += " }  ";
              if ($breakOnError) {
                out += " if (" + $nextValid + ") { ";
                $closingBraces += "}";
              }
            }
          }
        }
        if (typeof $additionalItems == "object" && (it.opts.strictKeywords ? typeof $additionalItems == "object" && Object.keys($additionalItems).length > 0 || $additionalItems === false : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
          $it.schema = $additionalItems;
          $it.schemaPath = it.schemaPath + ".additionalItems";
          $it.errSchemaPath = it.errSchemaPath + "/additionalItems";
          out += " " + $nextValid + " = true; if (" + $data + ".length > " + $schema.length + ") {  for (var " + $idx + " = " + $schema.length + "; " + $idx + " < " + $data + ".length; " + $idx + "++) { ";
          $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
          var $passData = $data + "[" + $idx + "]";
          $it.dataPathArr[$dataNxt] = $idx;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
          } else {
            out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
          }
          if ($breakOnError) {
            out += " if (!" + $nextValid + ") break; ";
          }
          out += " } }  ";
          if ($breakOnError) {
            out += " if (" + $nextValid + ") { ";
            $closingBraces += "}";
          }
        }
      } else if (it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += "  for (var " + $idx + " = " + 0 + "; " + $idx + " < " + $data + ".length; " + $idx + "++) { ";
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + "[" + $idx + "]";
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
        } else {
          out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
        }
        if ($breakOnError) {
          out += " if (!" + $nextValid + ") break; ";
        }
        out += " }";
      }
      if ($breakOnError) {
        out += " " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limit.js
var require_limit = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limit.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate__limit(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $isMax = $keyword == "maximum", $exclusiveKeyword = $isMax ? "exclusiveMaximum" : "exclusiveMinimum", $schemaExcl = it.schema[$exclusiveKeyword], $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data, $op = $isMax ? "<" : ">", $notOp = $isMax ? ">" : "<", $errorKeyword = void 0;
      if (!($isData || typeof $schema == "number" || $schema === void 0)) {
        throw new Error($keyword + " must be number");
      }
      if (!($isDataExcl || $schemaExcl === void 0 || typeof $schemaExcl == "number" || typeof $schemaExcl == "boolean")) {
        throw new Error($exclusiveKeyword + " must be number or boolean");
      }
      if ($isDataExcl) {
        var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr), $exclusive = "exclusive" + $lvl, $exclType = "exclType" + $lvl, $exclIsNumber = "exclIsNumber" + $lvl, $opExpr = "op" + $lvl, $opStr = "' + " + $opExpr + " + '";
        out += " var schemaExcl" + $lvl + " = " + $schemaValueExcl + "; ";
        $schemaValueExcl = "schemaExcl" + $lvl;
        out += " var " + $exclusive + "; var " + $exclType + " = typeof " + $schemaValueExcl + "; if (" + $exclType + " != 'boolean' && " + $exclType + " != 'undefined' && " + $exclType + " != 'number') { ";
        var $errorKeyword = $exclusiveKeyword;
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: '" + ($errorKeyword || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: '" + $exclusiveKeyword + " should be boolean' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        out += " } else if ( ";
        if ($isData) {
          out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
        }
        out += " " + $exclType + " == 'number' ? ( (" + $exclusive + " = " + $schemaValue + " === undefined || " + $schemaValueExcl + " " + $op + "= " + $schemaValue + ") ? " + $data + " " + $notOp + "= " + $schemaValueExcl + " : " + $data + " " + $notOp + " " + $schemaValue + " ) : ( (" + $exclusive + " = " + $schemaValueExcl + " === true) ? " + $data + " " + $notOp + "= " + $schemaValue + " : " + $data + " " + $notOp + " " + $schemaValue + " ) || " + $data + " !== " + $data + ") { var op" + $lvl + " = " + $exclusive + " ? '" + $op + "' : '" + $op + "='; ";
        if ($schema === void 0) {
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
          $schemaValue = $schemaValueExcl;
          $isData = $isDataExcl;
        }
      } else {
        var $exclIsNumber = typeof $schemaExcl == "number", $opStr = $op;
        if ($exclIsNumber && $isData) {
          var $opExpr = "'" + $opStr + "'";
          out += " if ( ";
          if ($isData) {
            out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
          }
          out += " ( " + $schemaValue + " === undefined || " + $schemaExcl + " " + $op + "= " + $schemaValue + " ? " + $data + " " + $notOp + "= " + $schemaExcl + " : " + $data + " " + $notOp + " " + $schemaValue + " ) || " + $data + " !== " + $data + ") { ";
        } else {
          if ($exclIsNumber && $schema === void 0) {
            $exclusive = true;
            $errorKeyword = $exclusiveKeyword;
            $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
            $schemaValue = $schemaExcl;
            $notOp += "=";
          } else {
            if ($exclIsNumber)
              $schemaValue = Math[$isMax ? "min" : "max"]($schemaExcl, $schema);
            if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
              $exclusive = true;
              $errorKeyword = $exclusiveKeyword;
              $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
              $notOp += "=";
            } else {
              $exclusive = false;
              $opStr += "=";
            }
          }
          var $opExpr = "'" + $opStr + "'";
          out += " if ( ";
          if ($isData) {
            out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
          }
          out += " " + $data + " " + $notOp + " " + $schemaValue + " || " + $data + " !== " + $data + ") { ";
        }
      }
      $errorKeyword = $errorKeyword || $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limit") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { comparison: " + $opExpr + ", limit: " + $schemaValue + ", exclusive: " + $exclusive + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be " + $opStr + " ";
          if ($isData) {
            out += "' + " + $schemaValue;
          } else {
            out += "" + $schemaValue + "'";
          }
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " } ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limitItems.js
var require_limitItems = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limitItems.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate__limitItems(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      var $op = $keyword == "maxItems" ? ">" : "<";
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
      }
      out += " " + $data + ".length " + $op + " " + $schemaValue + ") { ";
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limitItems") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should NOT have ";
          if ($keyword == "maxItems") {
            out += "more";
          } else {
            out += "fewer";
          }
          out += " than ";
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + $schema;
          }
          out += " items' ";
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limitLength.js
var require_limitLength = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limitLength.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate__limitLength(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      var $op = $keyword == "maxLength" ? ">" : "<";
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
      }
      if (it.opts.unicode === false) {
        out += " " + $data + ".length ";
      } else {
        out += " ucs2length(" + $data + ") ";
      }
      out += " " + $op + " " + $schemaValue + ") { ";
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limitLength") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should NOT be ";
          if ($keyword == "maxLength") {
            out += "longer";
          } else {
            out += "shorter";
          }
          out += " than ";
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + $schema;
          }
          out += " characters' ";
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limitProperties.js
var require_limitProperties = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/_limitProperties.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate__limitProperties(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      var $op = $keyword == "maxProperties" ? ">" : "<";
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
      }
      out += " Object.keys(" + $data + ").length " + $op + " " + $schemaValue + ") { ";
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limitProperties") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should NOT have ";
          if ($keyword == "maxProperties") {
            out += "more";
          } else {
            out += "fewer";
          }
          out += " than ";
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + $schema;
          }
          out += " properties' ";
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/multipleOf.js
var require_multipleOf = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/multipleOf.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_multipleOf(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      out += "var division" + $lvl + ";if (";
      if ($isData) {
        out += " " + $schemaValue + " !== undefined && ( typeof " + $schemaValue + " != 'number' || ";
      }
      out += " (division" + $lvl + " = " + $data + " / " + $schemaValue + ", ";
      if (it.opts.multipleOfPrecision) {
        out += " Math.abs(Math.round(division" + $lvl + ") - division" + $lvl + ") > 1e-" + it.opts.multipleOfPrecision + " ";
      } else {
        out += " division" + $lvl + " !== parseInt(division" + $lvl + ") ";
      }
      out += " ) ";
      if ($isData) {
        out += "  )  ";
      }
      out += " ) {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { multipleOf: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be multiple of ";
          if ($isData) {
            out += "' + " + $schemaValue;
          } else {
            out += "" + $schemaValue + "'";
          }
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/not.js
var require_not = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/not.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_not(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = "valid" + $it.level;
      if (it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += " var " + $errs + " = errors;  ";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        var $allErrorsOption;
        if ($it.opts.allErrors) {
          $allErrorsOption = $it.opts.allErrors;
          $it.opts.allErrors = false;
        }
        out += " " + it.validate($it) + " ";
        $it.createErrors = true;
        if ($allErrorsOption)
          $it.opts.allErrors = $allErrorsOption;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " if (" + $nextValid + ") {   ";
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: 'not' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: 'should NOT be valid' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        out += " } else {  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; } ";
        if (it.opts.allErrors) {
          out += " } ";
        }
      } else {
        out += "  var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'not' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: 'should NOT be valid' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if ($breakOnError) {
          out += " if (false) { ";
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/oneOf.js
var require_oneOf = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/oneOf.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_oneOf(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $currentBaseId = $it.baseId, $prevValid = "prevValid" + $lvl, $passingSchemas = "passingSchemas" + $lvl;
      out += "var " + $errs + " = errors , " + $prevValid + " = false , " + $valid + " = false , " + $passingSchemas + " = null; ";
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1, l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + "[" + $i + "]";
            $it.errSchemaPath = $errSchemaPath + "/" + $i;
            out += "  " + it.validate($it) + " ";
            $it.baseId = $currentBaseId;
          } else {
            out += " var " + $nextValid + " = true; ";
          }
          if ($i) {
            out += " if (" + $nextValid + " && " + $prevValid + ") { " + $valid + " = false; " + $passingSchemas + " = [" + $passingSchemas + ", " + $i + "]; } else { ";
            $closingBraces += "}";
          }
          out += " if (" + $nextValid + ") { " + $valid + " = " + $prevValid + " = true; " + $passingSchemas + " = " + $i + "; }";
        }
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += "" + $closingBraces + "if (!" + $valid + ") {   var err =   ";
      if (it.createErrors !== false) {
        out += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { passingSchemas: " + $passingSchemas + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should match exactly one schema in oneOf' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError(vErrors); ";
        } else {
          out += " validate.errors = vErrors; return false; ";
        }
      }
      out += "} else {  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; }";
      if (it.opts.allErrors) {
        out += " } ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/pattern.js
var require_pattern = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/pattern.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_pattern(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $regexp = $isData ? "(new RegExp(" + $schemaValue + "))" : it.usePattern($schema);
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'string') || ";
      }
      out += " !" + $regexp + ".test(" + $data + ") ) {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { pattern:  ";
        if ($isData) {
          out += "" + $schemaValue;
        } else {
          out += "" + it.util.toQuotedString($schema);
        }
        out += "  } ";
        if (it.opts.messages !== false) {
          out += ` , message: 'should match pattern "`;
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + it.util.escapeQuotes($schema);
          }
          out += `"' `;
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + it.util.toQuotedString($schema);
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/properties.js
var require_properties = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/properties.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_properties(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $key = "key" + $lvl, $idx = "idx" + $lvl, $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $dataProperties = "dataProperties" + $lvl;
      var $schemaKeys = Object.keys($schema || {}).filter(notProto), $pProperties = it.schema.patternProperties || {}, $pPropertyKeys = Object.keys($pProperties).filter(notProto), $aProperties = it.schema.additionalProperties, $someProperties = $schemaKeys.length || $pPropertyKeys.length, $noAdditional = $aProperties === false, $additionalIsSchema = typeof $aProperties == "object" && Object.keys($aProperties).length, $removeAdditional = it.opts.removeAdditional, $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional, $ownProperties = it.opts.ownProperties, $currentBaseId = it.baseId;
      var $required = it.schema.required;
      if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) {
        var $requiredHash = it.util.toHash($required);
      }
      function notProto(p) {
        return p !== "__proto__";
      }
      out += "var " + $errs + " = errors;var " + $nextValid + " = true;";
      if ($ownProperties) {
        out += " var " + $dataProperties + " = undefined;";
      }
      if ($checkAdditional) {
        if ($ownProperties) {
          out += " " + $dataProperties + " = " + $dataProperties + " || Object.keys(" + $data + "); for (var " + $idx + "=0; " + $idx + "<" + $dataProperties + ".length; " + $idx + "++) { var " + $key + " = " + $dataProperties + "[" + $idx + "]; ";
        } else {
          out += " for (var " + $key + " in " + $data + ") { ";
        }
        if ($someProperties) {
          out += " var isAdditional" + $lvl + " = !(false ";
          if ($schemaKeys.length) {
            if ($schemaKeys.length > 8) {
              out += " || validate.schema" + $schemaPath + ".hasOwnProperty(" + $key + ") ";
            } else {
              var arr1 = $schemaKeys;
              if (arr1) {
                var $propertyKey, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  $propertyKey = arr1[i1 += 1];
                  out += " || " + $key + " == " + it.util.toQuotedString($propertyKey) + " ";
                }
              }
            }
          }
          if ($pPropertyKeys.length) {
            var arr2 = $pPropertyKeys;
            if (arr2) {
              var $pProperty, $i = -1, l2 = arr2.length - 1;
              while ($i < l2) {
                $pProperty = arr2[$i += 1];
                out += " || " + it.usePattern($pProperty) + ".test(" + $key + ") ";
              }
            }
          }
          out += " ); if (isAdditional" + $lvl + ") { ";
        }
        if ($removeAdditional == "all") {
          out += " delete " + $data + "[" + $key + "]; ";
        } else {
          var $currentErrorPath = it.errorPath;
          var $additionalProperty = "' + " + $key + " + '";
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          }
          if ($noAdditional) {
            if ($removeAdditional) {
              out += " delete " + $data + "[" + $key + "]; ";
            } else {
              out += " " + $nextValid + " = false; ";
              var $currErrSchemaPath = $errSchemaPath;
              $errSchemaPath = it.errSchemaPath + "/additionalProperties";
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = "";
              if (it.createErrors !== false) {
                out += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { additionalProperty: '" + $additionalProperty + "' } ";
                if (it.opts.messages !== false) {
                  out += " , message: '";
                  if (it.opts._errorDataPathProperty) {
                    out += "is an invalid additional property";
                  } else {
                    out += "should NOT have additional properties";
                  }
                  out += "' ";
                }
                if (it.opts.verbose) {
                  out += " , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                }
                out += " } ";
              } else {
                out += " {} ";
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) {
                if (it.async) {
                  out += " throw new ValidationError([" + __err + "]); ";
                } else {
                  out += " validate.errors = [" + __err + "]; return false; ";
                }
              } else {
                out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
              }
              $errSchemaPath = $currErrSchemaPath;
              if ($breakOnError) {
                out += " break; ";
              }
            }
          } else if ($additionalIsSchema) {
            if ($removeAdditional == "failing") {
              out += " var " + $errs + " = errors;  ";
              var $wasComposite = it.compositeRule;
              it.compositeRule = $it.compositeRule = true;
              $it.schema = $aProperties;
              $it.schemaPath = it.schemaPath + ".additionalProperties";
              $it.errSchemaPath = it.errSchemaPath + "/additionalProperties";
              $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + "[" + $key + "]";
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              out += " if (!" + $nextValid + ") { errors = " + $errs + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + $data + "[" + $key + "]; }  ";
              it.compositeRule = $it.compositeRule = $wasComposite;
            } else {
              $it.schema = $aProperties;
              $it.schemaPath = it.schemaPath + ".additionalProperties";
              $it.errSchemaPath = it.errSchemaPath + "/additionalProperties";
              $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + "[" + $key + "]";
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              if ($breakOnError) {
                out += " if (!" + $nextValid + ") break; ";
              }
            }
          }
          it.errorPath = $currentErrorPath;
        }
        if ($someProperties) {
          out += " } ";
        }
        out += " }  ";
        if ($breakOnError) {
          out += " if (" + $nextValid + ") { ";
          $closingBraces += "}";
        }
      }
      var $useDefaults = it.opts.useDefaults && !it.compositeRule;
      if ($schemaKeys.length) {
        var arr3 = $schemaKeys;
        if (arr3) {
          var $propertyKey, i3 = -1, l3 = arr3.length - 1;
          while (i3 < l3) {
            $propertyKey = arr3[i3 += 1];
            var $sch = $schema[$propertyKey];
            if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
              var $prop = it.util.getProperty($propertyKey), $passData = $data + $prop, $hasDefault = $useDefaults && $sch.default !== void 0;
              $it.schema = $sch;
              $it.schemaPath = $schemaPath + $prop;
              $it.errSchemaPath = $errSchemaPath + "/" + it.util.escapeFragment($propertyKey);
              $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
              $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                $code = it.util.varReplace($code, $nextData, $passData);
                var $useData = $passData;
              } else {
                var $useData = $nextData;
                out += " var " + $nextData + " = " + $passData + "; ";
              }
              if ($hasDefault) {
                out += " " + $code + " ";
              } else {
                if ($requiredHash && $requiredHash[$propertyKey]) {
                  out += " if ( " + $useData + " === undefined ";
                  if ($ownProperties) {
                    out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                  }
                  out += ") { " + $nextValid + " = false; ";
                  var $currentErrorPath = it.errorPath, $currErrSchemaPath = $errSchemaPath, $missingProperty = it.util.escapeQuotes($propertyKey);
                  if (it.opts._errorDataPathProperty) {
                    it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                  }
                  $errSchemaPath = it.errSchemaPath + "/required";
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = "";
                  if (it.createErrors !== false) {
                    out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
                    if (it.opts.messages !== false) {
                      out += " , message: '";
                      if (it.opts._errorDataPathProperty) {
                        out += "is a required property";
                      } else {
                        out += "should have required property \\'" + $missingProperty + "\\'";
                      }
                      out += "' ";
                    }
                    if (it.opts.verbose) {
                      out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                    }
                    out += " } ";
                  } else {
                    out += " {} ";
                  }
                  var __err = out;
                  out = $$outStack.pop();
                  if (!it.compositeRule && $breakOnError) {
                    if (it.async) {
                      out += " throw new ValidationError([" + __err + "]); ";
                    } else {
                      out += " validate.errors = [" + __err + "]; return false; ";
                    }
                  } else {
                    out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                  }
                  $errSchemaPath = $currErrSchemaPath;
                  it.errorPath = $currentErrorPath;
                  out += " } else { ";
                } else {
                  if ($breakOnError) {
                    out += " if ( " + $useData + " === undefined ";
                    if ($ownProperties) {
                      out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                    }
                    out += ") { " + $nextValid + " = true; } else { ";
                  } else {
                    out += " if (" + $useData + " !== undefined ";
                    if ($ownProperties) {
                      out += " &&   Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                    }
                    out += " ) { ";
                  }
                }
                out += " " + $code + " } ";
              }
            }
            if ($breakOnError) {
              out += " if (" + $nextValid + ") { ";
              $closingBraces += "}";
            }
          }
        }
      }
      if ($pPropertyKeys.length) {
        var arr4 = $pPropertyKeys;
        if (arr4) {
          var $pProperty, i4 = -1, l4 = arr4.length - 1;
          while (i4 < l4) {
            $pProperty = arr4[i4 += 1];
            var $sch = $pProperties[$pProperty];
            if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
              $it.schema = $sch;
              $it.schemaPath = it.schemaPath + ".patternProperties" + it.util.getProperty($pProperty);
              $it.errSchemaPath = it.errSchemaPath + "/patternProperties/" + it.util.escapeFragment($pProperty);
              if ($ownProperties) {
                out += " " + $dataProperties + " = " + $dataProperties + " || Object.keys(" + $data + "); for (var " + $idx + "=0; " + $idx + "<" + $dataProperties + ".length; " + $idx + "++) { var " + $key + " = " + $dataProperties + "[" + $idx + "]; ";
              } else {
                out += " for (var " + $key + " in " + $data + ") { ";
              }
              out += " if (" + it.usePattern($pProperty) + ".test(" + $key + ")) { ";
              $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + "[" + $key + "]";
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              if ($breakOnError) {
                out += " if (!" + $nextValid + ") break; ";
              }
              out += " } ";
              if ($breakOnError) {
                out += " else " + $nextValid + " = true; ";
              }
              out += " }  ";
              if ($breakOnError) {
                out += " if (" + $nextValid + ") { ";
                $closingBraces += "}";
              }
            }
          }
        }
      }
      if ($breakOnError) {
        out += " " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/propertyNames.js
var require_propertyNames = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/propertyNames.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_propertyNames(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      out += "var " + $errs + " = errors;";
      if (it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        var $key = "key" + $lvl, $idx = "idx" + $lvl, $i = "i" + $lvl, $invalidName = "' + " + $key + " + '", $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $dataProperties = "dataProperties" + $lvl, $ownProperties = it.opts.ownProperties, $currentBaseId = it.baseId;
        if ($ownProperties) {
          out += " var " + $dataProperties + " = undefined; ";
        }
        if ($ownProperties) {
          out += " " + $dataProperties + " = " + $dataProperties + " || Object.keys(" + $data + "); for (var " + $idx + "=0; " + $idx + "<" + $dataProperties + ".length; " + $idx + "++) { var " + $key + " = " + $dataProperties + "[" + $idx + "]; ";
        } else {
          out += " for (var " + $key + " in " + $data + ") { ";
        }
        out += " var startErrs" + $lvl + " = errors; ";
        var $passData = $key;
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
        } else {
          out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
        }
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " if (!" + $nextValid + ") { for (var " + $i + "=startErrs" + $lvl + "; " + $i + "<errors; " + $i + "++) { vErrors[" + $i + "].propertyName = " + $key + "; }   var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { propertyName: '" + $invalidName + "' } ";
          if (it.opts.messages !== false) {
            out += " , message: 'property name \\'" + $invalidName + "\\' is invalid' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError(vErrors); ";
          } else {
            out += " validate.errors = vErrors; return false; ";
          }
        }
        if ($breakOnError) {
          out += " break; ";
        }
        out += " } }";
      }
      if ($breakOnError) {
        out += " " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/required.js
var require_required = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/required.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_required(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $vSchema = "schema" + $lvl;
      if (!$isData) {
        if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
          var $required = [];
          var arr1 = $schema;
          if (arr1) {
            var $property, i1 = -1, l1 = arr1.length - 1;
            while (i1 < l1) {
              $property = arr1[i1 += 1];
              var $propertySch = it.schema.properties[$property];
              if (!($propertySch && (it.opts.strictKeywords ? typeof $propertySch == "object" && Object.keys($propertySch).length > 0 || $propertySch === false : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
                $required[$required.length] = $property;
              }
            }
          }
        } else {
          var $required = $schema;
        }
      }
      if ($isData || $required.length) {
        var $currentErrorPath = it.errorPath, $loopRequired = $isData || $required.length >= it.opts.loopRequired, $ownProperties = it.opts.ownProperties;
        if ($breakOnError) {
          out += " var missing" + $lvl + "; ";
          if ($loopRequired) {
            if (!$isData) {
              out += " var " + $vSchema + " = validate.schema" + $schemaPath + "; ";
            }
            var $i = "i" + $lvl, $propertyPath = "schema" + $lvl + "[" + $i + "]", $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
            }
            out += " var " + $valid + " = true; ";
            if ($isData) {
              out += " if (schema" + $lvl + " === undefined) " + $valid + " = true; else if (!Array.isArray(schema" + $lvl + ")) " + $valid + " = false; else {";
            }
            out += " for (var " + $i + " = 0; " + $i + " < " + $vSchema + ".length; " + $i + "++) { " + $valid + " = " + $data + "[" + $vSchema + "[" + $i + "]] !== undefined ";
            if ($ownProperties) {
              out += " &&   Object.prototype.hasOwnProperty.call(" + $data + ", " + $vSchema + "[" + $i + "]) ";
            }
            out += "; if (!" + $valid + ") break; } ";
            if ($isData) {
              out += "  }  ";
            }
            out += "  if (!" + $valid + ") {   ";
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: '";
                if (it.opts._errorDataPathProperty) {
                  out += "is a required property";
                } else {
                  out += "should have required property \\'" + $missingProperty + "\\'";
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            out += " } else { ";
          } else {
            out += " if ( ";
            var arr2 = $required;
            if (arr2) {
              var $propertyKey, $i = -1, l2 = arr2.length - 1;
              while ($i < l2) {
                $propertyKey = arr2[$i += 1];
                if ($i) {
                  out += " || ";
                }
                var $prop = it.util.getProperty($propertyKey), $useData = $data + $prop;
                out += " ( ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") && (missing" + $lvl + " = " + it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) + ") ) ";
              }
            }
            out += ") {  ";
            var $propertyPath = "missing" + $lvl, $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + " + " + $propertyPath;
            }
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: '";
                if (it.opts._errorDataPathProperty) {
                  out += "is a required property";
                } else {
                  out += "should have required property \\'" + $missingProperty + "\\'";
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            out += " } else { ";
          }
        } else {
          if ($loopRequired) {
            if (!$isData) {
              out += " var " + $vSchema + " = validate.schema" + $schemaPath + "; ";
            }
            var $i = "i" + $lvl, $propertyPath = "schema" + $lvl + "[" + $i + "]", $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
            }
            if ($isData) {
              out += " if (" + $vSchema + " && !Array.isArray(" + $vSchema + ")) {  var err =   ";
              if (it.createErrors !== false) {
                out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
                if (it.opts.messages !== false) {
                  out += " , message: '";
                  if (it.opts._errorDataPathProperty) {
                    out += "is a required property";
                  } else {
                    out += "should have required property \\'" + $missingProperty + "\\'";
                  }
                  out += "' ";
                }
                if (it.opts.verbose) {
                  out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                }
                out += " } ";
              } else {
                out += " {} ";
              }
              out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + $vSchema + " !== undefined) { ";
            }
            out += " for (var " + $i + " = 0; " + $i + " < " + $vSchema + ".length; " + $i + "++) { if (" + $data + "[" + $vSchema + "[" + $i + "]] === undefined ";
            if ($ownProperties) {
              out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", " + $vSchema + "[" + $i + "]) ";
            }
            out += ") {  var err =   ";
            if (it.createErrors !== false) {
              out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: '";
                if (it.opts._errorDataPathProperty) {
                  out += "is a required property";
                } else {
                  out += "should have required property \\'" + $missingProperty + "\\'";
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ";
            if ($isData) {
              out += "  }  ";
            }
          } else {
            var arr3 = $required;
            if (arr3) {
              var $propertyKey, i3 = -1, l3 = arr3.length - 1;
              while (i3 < l3) {
                $propertyKey = arr3[i3 += 1];
                var $prop = it.util.getProperty($propertyKey), $missingProperty = it.util.escapeQuotes($propertyKey), $useData = $data + $prop;
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                out += " if ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") {  var err =   ";
                if (it.createErrors !== false) {
                  out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
                  if (it.opts.messages !== false) {
                    out += " , message: '";
                    if (it.opts._errorDataPathProperty) {
                      out += "is a required property";
                    } else {
                      out += "should have required property \\'" + $missingProperty + "\\'";
                    }
                    out += "' ";
                  }
                  if (it.opts.verbose) {
                    out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                  }
                  out += " } ";
                } else {
                  out += " {} ";
                }
                out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
              }
            }
          }
        }
        it.errorPath = $currentErrorPath;
      } else if ($breakOnError) {
        out += " if (true) {";
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/uniqueItems.js
var require_uniqueItems = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/uniqueItems.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_uniqueItems(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (($schema || $isData) && it.opts.uniqueItems !== false) {
        if ($isData) {
          out += " var " + $valid + "; if (" + $schemaValue + " === false || " + $schemaValue + " === undefined) " + $valid + " = true; else if (typeof " + $schemaValue + " != 'boolean') " + $valid + " = false; else { ";
        }
        out += " var i = " + $data + ".length , " + $valid + " = true , j; if (i > 1) { ";
        var $itemType = it.schema.items && it.schema.items.type, $typeIsArray = Array.isArray($itemType);
        if (!$itemType || $itemType == "object" || $itemType == "array" || $typeIsArray && ($itemType.indexOf("object") >= 0 || $itemType.indexOf("array") >= 0)) {
          out += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + $data + "[i], " + $data + "[j])) { " + $valid + " = false; break outer; } } } ";
        } else {
          out += " var itemIndices = {}, item; for (;i--;) { var item = " + $data + "[i]; ";
          var $method = "checkDataType" + ($typeIsArray ? "s" : "");
          out += " if (" + it.util[$method]($itemType, "item", it.opts.strictNumbers, true) + ") continue; ";
          if ($typeIsArray) {
            out += ` if (typeof item == 'string') item = '"' + item; `;
          }
          out += " if (typeof itemIndices[item] == 'number') { " + $valid + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
        }
        out += " } ";
        if ($isData) {
          out += "  }  ";
        }
        out += " if (!" + $valid + ") {   ";
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { i: i, j: j } ";
          if (it.opts.messages !== false) {
            out += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ";
          }
          if (it.opts.verbose) {
            out += " , schema:  ";
            if ($isData) {
              out += "validate.schema" + $schemaPath;
            } else {
              out += "" + $schema;
            }
            out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        out += " } ";
        if ($breakOnError) {
          out += " else { ";
        }
      } else {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/index.js
var require_dotjs = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "$ref": require_ref(),
      allOf: require_allOf(),
      anyOf: require_anyOf(),
      "$comment": require_comment(),
      const: require_const(),
      contains: require_contains(),
      dependencies: require_dependencies(),
      "enum": require_enum(),
      format: require_format(),
      "if": require_if(),
      items: require_items(),
      maximum: require_limit(),
      minimum: require_limit(),
      maxItems: require_limitItems(),
      minItems: require_limitItems(),
      maxLength: require_limitLength(),
      minLength: require_limitLength(),
      maxProperties: require_limitProperties(),
      minProperties: require_limitProperties(),
      multipleOf: require_multipleOf(),
      not: require_not(),
      oneOf: require_oneOf(),
      pattern: require_pattern(),
      properties: require_properties(),
      propertyNames: require_propertyNames(),
      required: require_required(),
      uniqueItems: require_uniqueItems(),
      validate: require_validate()
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/rules.js
var require_rules = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/rules.js"(exports2, module2) {
    "use strict";
    var ruleModules = require_dotjs();
    var toHash = require_util().toHash;
    module2.exports = function rules() {
      var RULES = [
        {
          type: "number",
          rules: [
            { "maximum": ["exclusiveMaximum"] },
            { "minimum": ["exclusiveMinimum"] },
            "multipleOf",
            "format"
          ]
        },
        {
          type: "string",
          rules: ["maxLength", "minLength", "pattern", "format"]
        },
        {
          type: "array",
          rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
        },
        {
          type: "object",
          rules: [
            "maxProperties",
            "minProperties",
            "required",
            "dependencies",
            "propertyNames",
            { "properties": ["additionalProperties", "patternProperties"] }
          ]
        },
        { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }
      ];
      var ALL = ["type", "$comment"];
      var KEYWORDS = [
        "$schema",
        "$id",
        "id",
        "$data",
        "$async",
        "title",
        "description",
        "default",
        "definitions",
        "examples",
        "readOnly",
        "writeOnly",
        "contentMediaType",
        "contentEncoding",
        "additionalItems",
        "then",
        "else"
      ];
      var TYPES = ["number", "integer", "string", "array", "object", "boolean", "null"];
      RULES.all = toHash(ALL);
      RULES.types = toHash(TYPES);
      RULES.forEach(function(group) {
        group.rules = group.rules.map(function(keyword) {
          var implKeywords;
          if (typeof keyword == "object") {
            var key = Object.keys(keyword)[0];
            implKeywords = keyword[key];
            keyword = key;
            implKeywords.forEach(function(k) {
              ALL.push(k);
              RULES.all[k] = true;
            });
          }
          ALL.push(keyword);
          var rule = RULES.all[keyword] = {
            keyword,
            code: ruleModules[keyword],
            implements: implKeywords
          };
          return rule;
        });
        RULES.all.$comment = {
          keyword: "$comment",
          code: ruleModules.$comment
        };
        if (group.type)
          RULES.types[group.type] = group;
      });
      RULES.keywords = toHash(ALL.concat(KEYWORDS));
      RULES.custom = {};
      return RULES;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/data.js
var require_data = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/data.js"(exports2, module2) {
    "use strict";
    var KEYWORDS = [
      "multipleOf",
      "maximum",
      "exclusiveMaximum",
      "minimum",
      "exclusiveMinimum",
      "maxLength",
      "minLength",
      "pattern",
      "additionalItems",
      "maxItems",
      "minItems",
      "uniqueItems",
      "maxProperties",
      "minProperties",
      "required",
      "additionalProperties",
      "enum",
      "format",
      "const"
    ];
    module2.exports = function(metaSchema, keywordsJsonPointers) {
      for (var i = 0; i < keywordsJsonPointers.length; i++) {
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        var segments = keywordsJsonPointers[i].split("/");
        var keywords = metaSchema;
        var j;
        for (j = 1; j < segments.length; j++)
          keywords = keywords[segments[j]];
        for (j = 0; j < KEYWORDS.length; j++) {
          var key = KEYWORDS[j];
          var schema = keywords[key];
          if (schema) {
            keywords[key] = {
              anyOf: [
                schema,
                { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
              ]
            };
          }
        }
      }
      return metaSchema;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/async.js
var require_async = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/async.js"(exports2, module2) {
    "use strict";
    var MissingRefError = require_error_classes().MissingRef;
    module2.exports = compileAsync;
    function compileAsync(schema, meta, callback) {
      var self = this;
      if (typeof this._opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      if (typeof meta == "function") {
        callback = meta;
        meta = void 0;
      }
      var p = loadMetaSchemaOf(schema).then(function() {
        var schemaObj = self._addSchema(schema, void 0, meta);
        return schemaObj.validate || _compileAsync(schemaObj);
      });
      if (callback) {
        p.then(function(v) {
          callback(null, v);
        }, callback);
      }
      return p;
      function loadMetaSchemaOf(sch) {
        var $schema = sch.$schema;
        return $schema && !self.getSchema($schema) ? compileAsync.call(self, { $ref: $schema }, true) : Promise.resolve();
      }
      function _compileAsync(schemaObj) {
        try {
          return self._compile(schemaObj);
        } catch (e) {
          if (e instanceof MissingRefError)
            return loadMissingSchema(e);
          throw e;
        }
        function loadMissingSchema(e) {
          var ref = e.missingSchema;
          if (added(ref))
            throw new Error("Schema " + ref + " is loaded but " + e.missingRef + " cannot be resolved");
          var schemaPromise = self._loadingSchemas[ref];
          if (!schemaPromise) {
            schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
            schemaPromise.then(removePromise, removePromise);
          }
          return schemaPromise.then(function(sch) {
            if (!added(ref)) {
              return loadMetaSchemaOf(sch).then(function() {
                if (!added(ref))
                  self.addSchema(sch, ref, void 0, meta);
              });
            }
          }).then(function() {
            return _compileAsync(schemaObj);
          });
          function removePromise() {
            delete self._loadingSchemas[ref];
          }
          function added(ref2) {
            return self._refs[ref2] || self._schemas[ref2];
          }
        }
      }
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/custom.js
var require_custom = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/dotjs/custom.js"(exports2, module2) {
    "use strict";
    module2.exports = function generate_custom(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $rule = this, $definition = "definition" + $lvl, $rDef = $rule.definition, $closingBraces = "";
      var $compile, $inline, $macro, $ruleValidate, $validateCode;
      if ($isData && $rDef.$data) {
        $validateCode = "keywordValidate" + $lvl;
        var $validateSchema = $rDef.validateSchema;
        out += " var " + $definition + " = RULES.custom['" + $keyword + "'].definition; var " + $validateCode + " = " + $definition + ".validate;";
      } else {
        $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
        if (!$ruleValidate)
          return;
        $schemaValue = "validate.schema" + $schemaPath;
        $validateCode = $ruleValidate.code;
        $compile = $rDef.compile;
        $inline = $rDef.inline;
        $macro = $rDef.macro;
      }
      var $ruleErrs = $validateCode + ".errors", $i = "i" + $lvl, $ruleErr = "ruleErr" + $lvl, $asyncKeyword = $rDef.async;
      if ($asyncKeyword && !it.async)
        throw new Error("async keyword in sync schema");
      if (!($inline || $macro)) {
        out += "" + $ruleErrs + " = null;";
      }
      out += "var " + $errs + " = errors;var " + $valid + ";";
      if ($isData && $rDef.$data) {
        $closingBraces += "}";
        out += " if (" + $schemaValue + " === undefined) { " + $valid + " = true; } else { ";
        if ($validateSchema) {
          $closingBraces += "}";
          out += " " + $valid + " = " + $definition + ".validateSchema(" + $schemaValue + "); if (" + $valid + ") { ";
        }
      }
      if ($inline) {
        if ($rDef.statements) {
          out += " " + $ruleValidate.validate + " ";
        } else {
          out += " " + $valid + " = " + $ruleValidate.validate + "; ";
        }
      } else if ($macro) {
        var $it = it.util.copy(it);
        var $closingBraces = "";
        $it.level++;
        var $nextValid = "valid" + $it.level;
        $it.schema = $ruleValidate.validate;
        $it.schemaPath = "";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " " + $code;
      } else {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        out += "  " + $validateCode + ".call( ";
        if (it.opts.passContext) {
          out += "this";
        } else {
          out += "self";
        }
        if ($compile || $rDef.schema === false) {
          out += " , " + $data + " ";
        } else {
          out += " , " + $schemaValue + " , " + $data + " , validate.schema" + it.schemaPath + " ";
        }
        out += " , (dataPath || '')";
        if (it.errorPath != '""') {
          out += " + " + it.errorPath;
        }
        var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData", $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
        out += " , " + $parentData + " , " + $parentDataProperty + " , rootData )  ";
        var def_callRuleValidate = out;
        out = $$outStack.pop();
        if ($rDef.errors === false) {
          out += " " + $valid + " = ";
          if ($asyncKeyword) {
            out += "await ";
          }
          out += "" + def_callRuleValidate + "; ";
        } else {
          if ($asyncKeyword) {
            $ruleErrs = "customErrors" + $lvl;
            out += " var " + $ruleErrs + " = null; try { " + $valid + " = await " + def_callRuleValidate + "; } catch (e) { " + $valid + " = false; if (e instanceof ValidationError) " + $ruleErrs + " = e.errors; else throw e; } ";
          } else {
            out += " " + $ruleErrs + " = null; " + $valid + " = " + def_callRuleValidate + "; ";
          }
        }
      }
      if ($rDef.modifying) {
        out += " if (" + $parentData + ") " + $data + " = " + $parentData + "[" + $parentDataProperty + "];";
      }
      out += "" + $closingBraces;
      if ($rDef.valid) {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      } else {
        out += " if ( ";
        if ($rDef.valid === void 0) {
          out += " !";
          if ($macro) {
            out += "" + $nextValid;
          } else {
            out += "" + $valid;
          }
        } else {
          out += " " + !$rDef.valid + " ";
        }
        out += ") { ";
        $errorKeyword = $rule.keyword;
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: '" + ($errorKeyword || "custom") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { keyword: '" + $rule.keyword + "' } ";
          if (it.opts.messages !== false) {
            out += ` , message: 'should pass "` + $rule.keyword + `" keyword validation' `;
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        var def_customError = out;
        out = $$outStack.pop();
        if ($inline) {
          if ($rDef.errors) {
            if ($rDef.errors != "full") {
              out += "  for (var " + $i + "=" + $errs + "; " + $i + "<errors; " + $i + "++) { var " + $ruleErr + " = vErrors[" + $i + "]; if (" + $ruleErr + ".dataPath === undefined) " + $ruleErr + ".dataPath = (dataPath || '') + " + it.errorPath + "; if (" + $ruleErr + ".schemaPath === undefined) { " + $ruleErr + '.schemaPath = "' + $errSchemaPath + '"; } ';
              if (it.opts.verbose) {
                out += " " + $ruleErr + ".schema = " + $schemaValue + "; " + $ruleErr + ".data = " + $data + "; ";
              }
              out += " } ";
            }
          } else {
            if ($rDef.errors === false) {
              out += " " + def_customError + " ";
            } else {
              out += " if (" + $errs + " == errors) { " + def_customError + " } else {  for (var " + $i + "=" + $errs + "; " + $i + "<errors; " + $i + "++) { var " + $ruleErr + " = vErrors[" + $i + "]; if (" + $ruleErr + ".dataPath === undefined) " + $ruleErr + ".dataPath = (dataPath || '') + " + it.errorPath + "; if (" + $ruleErr + ".schemaPath === undefined) { " + $ruleErr + '.schemaPath = "' + $errSchemaPath + '"; } ';
              if (it.opts.verbose) {
                out += " " + $ruleErr + ".schema = " + $schemaValue + "; " + $ruleErr + ".data = " + $data + "; ";
              }
              out += " } } ";
            }
          }
        } else if ($macro) {
          out += "   var err =   ";
          if (it.createErrors !== false) {
            out += " { keyword: '" + ($errorKeyword || "custom") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { keyword: '" + $rule.keyword + "' } ";
            if (it.opts.messages !== false) {
              out += ` , message: 'should pass "` + $rule.keyword + `" keyword validation' `;
            }
            if (it.opts.verbose) {
              out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
            }
            out += " } ";
          } else {
            out += " {} ";
          }
          out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          if (!it.compositeRule && $breakOnError) {
            if (it.async) {
              out += " throw new ValidationError(vErrors); ";
            } else {
              out += " validate.errors = vErrors; return false; ";
            }
          }
        } else {
          if ($rDef.errors === false) {
            out += " " + def_customError + " ";
          } else {
            out += " if (Array.isArray(" + $ruleErrs + ")) { if (vErrors === null) vErrors = " + $ruleErrs + "; else vErrors = vErrors.concat(" + $ruleErrs + "); errors = vErrors.length;  for (var " + $i + "=" + $errs + "; " + $i + "<errors; " + $i + "++) { var " + $ruleErr + " = vErrors[" + $i + "]; if (" + $ruleErr + ".dataPath === undefined) " + $ruleErr + ".dataPath = (dataPath || '') + " + it.errorPath + ";  " + $ruleErr + '.schemaPath = "' + $errSchemaPath + '";  ';
            if (it.opts.verbose) {
              out += " " + $ruleErr + ".schema = " + $schemaValue + "; " + $ruleErr + ".data = " + $data + "; ";
            }
            out += " } } else { " + def_customError + " } ";
          }
        }
        out += " } ";
        if ($breakOnError) {
          out += " else { ";
        }
      }
      return out;
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/refs/json-schema-draft-07.json"(exports2, module2) {
    module2.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [
            { $ref: "#/definitions/nonNegativeInteger" },
            { default: 0 }
          ]
        },
        simpleTypes: {
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string"
          ]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: true,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: true,
        readOnly: {
          type: "boolean",
          default: false
        },
        examples: {
          type: "array",
          items: true
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [
            { $ref: "#" },
            { $ref: "#/definitions/schemaArray" }
          ],
          default: true
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [
              { $ref: "#" },
              { $ref: "#/definitions/stringArray" }
            ]
          }
        },
        propertyNames: { $ref: "#" },
        const: true,
        enum: {
          type: "array",
          items: true,
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: true
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/definition_schema.js
var require_definition_schema = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/definition_schema.js"(exports2, module2) {
    "use strict";
    var metaSchema = require_json_schema_draft_07();
    module2.exports = {
      $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
      definitions: {
        simpleTypes: metaSchema.definitions.simpleTypes
      },
      type: "object",
      dependencies: {
        schema: ["validate"],
        $data: ["validate"],
        statements: ["inline"],
        valid: { not: { required: ["macro"] } }
      },
      properties: {
        type: metaSchema.properties.type,
        schema: { type: "boolean" },
        statements: { type: "boolean" },
        dependencies: {
          type: "array",
          items: { type: "string" }
        },
        metaSchema: { type: "object" },
        modifying: { type: "boolean" },
        valid: { type: "boolean" },
        $data: { type: "boolean" },
        async: { type: "boolean" },
        errors: {
          anyOf: [
            { type: "boolean" },
            { const: "full" }
          ]
        }
      }
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/keyword.js
var require_keyword = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/keyword.js"(exports2, module2) {
    "use strict";
    var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;
    var customRuleCode = require_custom();
    var definitionSchema = require_definition_schema();
    module2.exports = {
      add: addKeyword,
      get: getKeyword,
      remove: removeKeyword,
      validate: validateKeyword
    };
    function addKeyword(keyword, definition) {
      var RULES = this.RULES;
      if (RULES.keywords[keyword])
        throw new Error("Keyword " + keyword + " is already defined");
      if (!IDENTIFIER.test(keyword))
        throw new Error("Keyword " + keyword + " is not a valid identifier");
      if (definition) {
        this.validateKeyword(definition, true);
        var dataType = definition.type;
        if (Array.isArray(dataType)) {
          for (var i = 0; i < dataType.length; i++)
            _addRule(keyword, dataType[i], definition);
        } else {
          _addRule(keyword, dataType, definition);
        }
        var metaSchema = definition.metaSchema;
        if (metaSchema) {
          if (definition.$data && this._opts.$data) {
            metaSchema = {
              anyOf: [
                metaSchema,
                { "$ref": "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
              ]
            };
          }
          definition.validateSchema = this.compile(metaSchema, true);
        }
      }
      RULES.keywords[keyword] = RULES.all[keyword] = true;
      function _addRule(keyword2, dataType2, definition2) {
        var ruleGroup;
        for (var i2 = 0; i2 < RULES.length; i2++) {
          var rg = RULES[i2];
          if (rg.type == dataType2) {
            ruleGroup = rg;
            break;
          }
        }
        if (!ruleGroup) {
          ruleGroup = { type: dataType2, rules: [] };
          RULES.push(ruleGroup);
        }
        var rule = {
          keyword: keyword2,
          definition: definition2,
          custom: true,
          code: customRuleCode,
          implements: definition2.implements
        };
        ruleGroup.rules.push(rule);
        RULES.custom[keyword2] = rule;
      }
      return this;
    }
    function getKeyword(keyword) {
      var rule = this.RULES.custom[keyword];
      return rule ? rule.definition : this.RULES.keywords[keyword] || false;
    }
    function removeKeyword(keyword) {
      var RULES = this.RULES;
      delete RULES.keywords[keyword];
      delete RULES.all[keyword];
      delete RULES.custom[keyword];
      for (var i = 0; i < RULES.length; i++) {
        var rules = RULES[i].rules;
        for (var j = 0; j < rules.length; j++) {
          if (rules[j].keyword == keyword) {
            rules.splice(j, 1);
            break;
          }
        }
      }
      return this;
    }
    function validateKeyword(definition, throwError) {
      validateKeyword.errors = null;
      var v = this._validateKeyword = this._validateKeyword || this.compile(definitionSchema, true);
      if (v(definition))
        return true;
      validateKeyword.errors = v.errors;
      if (throwError)
        throw new Error("custom keyword definition is invalid: " + this.errorsText(v.errors));
      else
        return false;
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/refs/data.json
var require_data2 = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/refs/data.json"(exports2, module2) {
    module2.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON Schema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [
            { format: "relative-json-pointer" },
            { format: "json-pointer" }
          ]
        }
      },
      additionalProperties: false
    };
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/ajv.js
var require_ajv = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/ajv.js"(exports2, module2) {
    "use strict";
    var compileSchema = require_compile();
    var resolve = require_resolve();
    var Cache = require_cache();
    var SchemaObject = require_schema_obj();
    var stableStringify = require_fast_json_stable_stringify();
    var formats = require_formats();
    var rules = require_rules();
    var $dataMetaSchema = require_data();
    var util = require_util();
    module2.exports = Ajv2;
    Ajv2.prototype.validate = validate2;
    Ajv2.prototype.compile = compile;
    Ajv2.prototype.addSchema = addSchema;
    Ajv2.prototype.addMetaSchema = addMetaSchema;
    Ajv2.prototype.validateSchema = validateSchema;
    Ajv2.prototype.getSchema = getSchema;
    Ajv2.prototype.removeSchema = removeSchema;
    Ajv2.prototype.addFormat = addFormat;
    Ajv2.prototype.errorsText = errorsText;
    Ajv2.prototype._addSchema = _addSchema;
    Ajv2.prototype._compile = _compile;
    Ajv2.prototype.compileAsync = require_async();
    var customKeyword = require_keyword();
    Ajv2.prototype.addKeyword = customKeyword.add;
    Ajv2.prototype.getKeyword = customKeyword.get;
    Ajv2.prototype.removeKeyword = customKeyword.remove;
    Ajv2.prototype.validateKeyword = customKeyword.validate;
    var errorClasses = require_error_classes();
    Ajv2.ValidationError = errorClasses.Validation;
    Ajv2.MissingRefError = errorClasses.MissingRef;
    Ajv2.$dataMetaSchema = $dataMetaSchema;
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"];
    var META_SUPPORT_DATA = ["/properties"];
    function Ajv2(opts) {
      if (!(this instanceof Ajv2))
        return new Ajv2(opts);
      opts = this._opts = util.copy(opts) || {};
      setLogger(this);
      this._schemas = {};
      this._refs = {};
      this._fragments = {};
      this._formats = formats(opts.format);
      this._cache = opts.cache || new Cache();
      this._loadingSchemas = {};
      this._compilations = [];
      this.RULES = rules();
      this._getId = chooseGetId(opts);
      opts.loopRequired = opts.loopRequired || Infinity;
      if (opts.errorDataPath == "property")
        opts._errorDataPathProperty = true;
      if (opts.serialize === void 0)
        opts.serialize = stableStringify;
      this._metaOpts = getMetaSchemaOptions(this);
      if (opts.formats)
        addInitialFormats(this);
      if (opts.keywords)
        addInitialKeywords(this);
      addDefaultMetaSchema(this);
      if (typeof opts.meta == "object")
        this.addMetaSchema(opts.meta);
      if (opts.nullable)
        this.addKeyword("nullable", { metaSchema: { type: "boolean" } });
      addInitialSchemas(this);
    }
    function validate2(schemaKeyRef, data) {
      var v;
      if (typeof schemaKeyRef == "string") {
        v = this.getSchema(schemaKeyRef);
        if (!v)
          throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
      } else {
        var schemaObj = this._addSchema(schemaKeyRef);
        v = schemaObj.validate || this._compile(schemaObj);
      }
      var valid = v(data);
      if (v.$async !== true)
        this.errors = v.errors;
      return valid;
    }
    function compile(schema, _meta) {
      var schemaObj = this._addSchema(schema, void 0, _meta);
      return schemaObj.validate || this._compile(schemaObj);
    }
    function addSchema(schema, key, _skipValidation, _meta) {
      if (Array.isArray(schema)) {
        for (var i = 0; i < schema.length; i++)
          this.addSchema(schema[i], void 0, _skipValidation, _meta);
        return this;
      }
      var id = this._getId(schema);
      if (id !== void 0 && typeof id != "string")
        throw new Error("schema id must be string");
      key = resolve.normalizeId(key || id);
      checkUnique(this, key);
      this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
      return this;
    }
    function addMetaSchema(schema, key, skipValidation) {
      this.addSchema(schema, key, skipValidation, true);
      return this;
    }
    function validateSchema(schema, throwOrLogError) {
      var $schema = schema.$schema;
      if ($schema !== void 0 && typeof $schema != "string")
        throw new Error("$schema must be a string");
      $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
      if (!$schema) {
        this.logger.warn("meta-schema not available");
        this.errors = null;
        return true;
      }
      var valid = this.validate($schema, schema);
      if (!valid && throwOrLogError) {
        var message = "schema is invalid: " + this.errorsText();
        if (this._opts.validateSchema == "log")
          this.logger.error(message);
        else
          throw new Error(message);
      }
      return valid;
    }
    function defaultMeta(self) {
      var meta = self._opts.meta;
      self._opts.defaultMeta = typeof meta == "object" ? self._getId(meta) || meta : self.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0;
      return self._opts.defaultMeta;
    }
    function getSchema(keyRef) {
      var schemaObj = _getSchemaObj(this, keyRef);
      switch (typeof schemaObj) {
        case "object":
          return schemaObj.validate || this._compile(schemaObj);
        case "string":
          return this.getSchema(schemaObj);
        case "undefined":
          return _getSchemaFragment(this, keyRef);
      }
    }
    function _getSchemaFragment(self, ref) {
      var res = resolve.schema.call(self, { schema: {} }, ref);
      if (res) {
        var schema = res.schema, root = res.root, baseId = res.baseId;
        var v = compileSchema.call(self, schema, root, void 0, baseId);
        self._fragments[ref] = new SchemaObject({
          ref,
          fragment: true,
          schema,
          root,
          baseId,
          validate: v
        });
        return v;
      }
    }
    function _getSchemaObj(self, keyRef) {
      keyRef = resolve.normalizeId(keyRef);
      return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
    }
    function removeSchema(schemaKeyRef) {
      if (schemaKeyRef instanceof RegExp) {
        _removeAllSchemas(this, this._schemas, schemaKeyRef);
        _removeAllSchemas(this, this._refs, schemaKeyRef);
        return this;
      }
      switch (typeof schemaKeyRef) {
        case "undefined":
          _removeAllSchemas(this, this._schemas);
          _removeAllSchemas(this, this._refs);
          this._cache.clear();
          return this;
        case "string":
          var schemaObj = _getSchemaObj(this, schemaKeyRef);
          if (schemaObj)
            this._cache.del(schemaObj.cacheKey);
          delete this._schemas[schemaKeyRef];
          delete this._refs[schemaKeyRef];
          return this;
        case "object":
          var serialize = this._opts.serialize;
          var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
          this._cache.del(cacheKey);
          var id = this._getId(schemaKeyRef);
          if (id) {
            id = resolve.normalizeId(id);
            delete this._schemas[id];
            delete this._refs[id];
          }
      }
      return this;
    }
    function _removeAllSchemas(self, schemas, regex) {
      for (var keyRef in schemas) {
        var schemaObj = schemas[keyRef];
        if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
          self._cache.del(schemaObj.cacheKey);
          delete schemas[keyRef];
        }
      }
    }
    function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
      if (typeof schema != "object" && typeof schema != "boolean")
        throw new Error("schema should be object or boolean");
      var serialize = this._opts.serialize;
      var cacheKey = serialize ? serialize(schema) : schema;
      var cached = this._cache.get(cacheKey);
      if (cached)
        return cached;
      shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;
      var id = resolve.normalizeId(this._getId(schema));
      if (id && shouldAddSchema)
        checkUnique(this, id);
      var willValidate = this._opts.validateSchema !== false && !skipValidation;
      var recursiveMeta;
      if (willValidate && !(recursiveMeta = id && id == resolve.normalizeId(schema.$schema)))
        this.validateSchema(schema, true);
      var localRefs = resolve.ids.call(this, schema);
      var schemaObj = new SchemaObject({
        id,
        schema,
        localRefs,
        cacheKey,
        meta
      });
      if (id[0] != "#" && shouldAddSchema)
        this._refs[id] = schemaObj;
      this._cache.put(cacheKey, schemaObj);
      if (willValidate && recursiveMeta)
        this.validateSchema(schema, true);
      return schemaObj;
    }
    function _compile(schemaObj, root) {
      if (schemaObj.compiling) {
        schemaObj.validate = callValidate;
        callValidate.schema = schemaObj.schema;
        callValidate.errors = null;
        callValidate.root = root ? root : callValidate;
        if (schemaObj.schema.$async === true)
          callValidate.$async = true;
        return callValidate;
      }
      schemaObj.compiling = true;
      var currentOpts;
      if (schemaObj.meta) {
        currentOpts = this._opts;
        this._opts = this._metaOpts;
      }
      var v;
      try {
        v = compileSchema.call(this, schemaObj.schema, root, schemaObj.localRefs);
      } catch (e) {
        delete schemaObj.validate;
        throw e;
      } finally {
        schemaObj.compiling = false;
        if (schemaObj.meta)
          this._opts = currentOpts;
      }
      schemaObj.validate = v;
      schemaObj.refs = v.refs;
      schemaObj.refVal = v.refVal;
      schemaObj.root = v.root;
      return v;
      function callValidate() {
        var _validate = schemaObj.validate;
        var result = _validate.apply(this, arguments);
        callValidate.errors = _validate.errors;
        return result;
      }
    }
    function chooseGetId(opts) {
      switch (opts.schemaId) {
        case "auto":
          return _get$IdOrId;
        case "id":
          return _getId;
        default:
          return _get$Id;
      }
    }
    function _getId(schema) {
      if (schema.$id)
        this.logger.warn("schema $id ignored", schema.$id);
      return schema.id;
    }
    function _get$Id(schema) {
      if (schema.id)
        this.logger.warn("schema id ignored", schema.id);
      return schema.$id;
    }
    function _get$IdOrId(schema) {
      if (schema.$id && schema.id && schema.$id != schema.id)
        throw new Error("schema $id is different from id");
      return schema.$id || schema.id;
    }
    function errorsText(errors, options) {
      errors = errors || this.errors;
      if (!errors)
        return "No errors";
      options = options || {};
      var separator = options.separator === void 0 ? ", " : options.separator;
      var dataVar = options.dataVar === void 0 ? "data" : options.dataVar;
      var text = "";
      for (var i = 0; i < errors.length; i++) {
        var e = errors[i];
        if (e)
          text += dataVar + e.dataPath + " " + e.message + separator;
      }
      return text.slice(0, -separator.length);
    }
    function addFormat(name, format) {
      if (typeof format == "string")
        format = new RegExp(format);
      this._formats[name] = format;
      return this;
    }
    function addDefaultMetaSchema(self) {
      var $dataSchema;
      if (self._opts.$data) {
        $dataSchema = require_data2();
        self.addMetaSchema($dataSchema, $dataSchema.$id, true);
      }
      if (self._opts.meta === false)
        return;
      var metaSchema = require_json_schema_draft_07();
      if (self._opts.$data)
        metaSchema = $dataMetaSchema(metaSchema, META_SUPPORT_DATA);
      self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
      self._refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    function addInitialSchemas(self) {
      var optsSchemas = self._opts.schemas;
      if (!optsSchemas)
        return;
      if (Array.isArray(optsSchemas))
        self.addSchema(optsSchemas);
      else
        for (var key in optsSchemas)
          self.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats(self) {
      for (var name in self._opts.formats) {
        var format = self._opts.formats[name];
        self.addFormat(name, format);
      }
    }
    function addInitialKeywords(self) {
      for (var name in self._opts.keywords) {
        var keyword = self._opts.keywords[name];
        self.addKeyword(name, keyword);
      }
    }
    function checkUnique(self, id) {
      if (self._schemas[id] || self._refs[id])
        throw new Error('schema with key or id "' + id + '" already exists');
    }
    function getMetaSchemaOptions(self) {
      var metaOpts = util.copy(self._opts);
      for (var i = 0; i < META_IGNORE_OPTIONS.length; i++)
        delete metaOpts[META_IGNORE_OPTIONS[i]];
      return metaOpts;
    }
    function setLogger(self) {
      var logger = self._opts.logger;
      if (logger === false) {
        self.logger = { log: noop, warn: noop, error: noop };
      } else {
        if (logger === void 0)
          logger = console;
        if (!(typeof logger == "object" && logger.log && logger.warn && logger.error))
          throw new Error("logger must implement log, warn and error methods");
        self.logger = logger;
      }
    }
    function noop() {
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/deepmerge/dist/cjs.js"(exports2, module2) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module2.exports = deepmerge_1;
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/rfdc/index.js
var require_rfdc = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/rfdc/index.js"(exports2, module2) {
    "use strict";
    module2.exports = rfdc;
    function copyBuffer(cur) {
      if (cur instanceof Buffer) {
        return Buffer.from(cur);
      }
      return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
    }
    function rfdc(opts) {
      opts = opts || {};
      if (opts.circles)
        return rfdcCircles(opts);
      return opts.proto ? cloneProto : clone2;
      function cloneArray(a, fn) {
        var keys = Object.keys(a);
        var a2 = new Array(keys.length);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var cur = a[k];
          if (typeof cur !== "object" || cur === null) {
            a2[k] = cur;
          } else if (cur instanceof Date) {
            a2[k] = new Date(cur);
          } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
          } else {
            a2[k] = fn(cur);
          }
        }
        return a2;
      }
      function clone2(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, clone2);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), clone2));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), clone2));
        var o2 = {};
        for (var k in o) {
          if (Object.hasOwnProperty.call(o, k) === false)
            continue;
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), clone2));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), clone2));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = clone2(cur);
          }
        }
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, cloneProto);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), cloneProto));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), cloneProto));
        var o2 = {};
        for (var k in o) {
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = cloneProto(cur);
          }
        }
        return o2;
      }
    }
    function rfdcCircles(opts) {
      var refs = [];
      var refsNew = [];
      return opts.proto ? cloneProto : clone2;
      function cloneArray(a, fn) {
        var keys = Object.keys(a);
        var a2 = new Array(keys.length);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var cur = a[k];
          if (typeof cur !== "object" || cur === null) {
            a2[k] = cur;
          } else if (cur instanceof Date) {
            a2[k] = new Date(cur);
          } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
          } else {
            var index = refs.indexOf(cur);
            if (index !== -1) {
              a2[k] = refsNew[index];
            } else {
              a2[k] = fn(cur);
            }
          }
        }
        return a2;
      }
      function clone2(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, clone2);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), clone2));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), clone2));
        var o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (var k in o) {
          if (Object.hasOwnProperty.call(o, k) === false)
            continue;
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), clone2));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), clone2));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            var i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k] = refsNew[i];
            } else {
              o2[k] = clone2(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null)
          return o;
        if (o instanceof Date)
          return new Date(o);
        if (Array.isArray(o))
          return cloneArray(o, cloneProto);
        if (o instanceof Map)
          return new Map(cloneArray(Array.from(o), cloneProto));
        if (o instanceof Set)
          return new Set(cloneArray(Array.from(o), cloneProto));
        var o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (var k in o) {
          var cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur instanceof Date) {
            o2[k] = new Date(cur);
          } else if (cur instanceof Map) {
            o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
          } else if (cur instanceof Set) {
            o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            var i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k] = refsNew[i];
            } else {
              o2[k] = cloneProto(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/equal.js
var require_equal = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/ajv/lib/compile/equal.js"(exports2, module2) {
    "use strict";
    module2.exports = require_fast_deep_equal();
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-json-stringify/schema-validator.js
var require_schema_validator = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-json-stringify/schema-validator.js"(exports2, module2) {
    function nop() {
      return true;
    }
    var formats = require_formats()();
    var equal = require_equal();
    var validate2 = function() {
      var refVal = [];
      var refVal1 = {
        "type": "integer",
        "minimum": 0
      };
      refVal[1] = refVal1;
      var refVal2 = function() {
        return function validate3(data, dataPath, parentData, parentDataProperty, rootData) {
          "use strict";
          var vErrors = null;
          var errors = 0;
          var errs_1 = errors;
          var errs_2 = errors;
          if (typeof data !== "number" || data % 1 || data !== data) {
            validate3.errors = [{
              keyword: "type",
              dataPath: (dataPath || "") + "",
              schemaPath: "#/definitions/nonNegativeInteger/type",
              params: {
                type: "integer"
              },
              message: "should be integer"
            }];
            return false;
          }
          if (typeof data === "number") {
            if (data < 0 || data !== data) {
              validate3.errors = [{
                keyword: "minimum",
                dataPath: (dataPath || "") + "",
                schemaPath: "#/definitions/nonNegativeInteger/minimum",
                params: {
                  comparison: ">=",
                  limit: 0,
                  exclusive: false
                },
                message: "should be >= 0"
              }];
              return false;
            }
          }
          var valid2 = errors === errs_2;
          var valid1 = errors === errs_1;
          validate3.errors = vErrors;
          return errors === 0;
        };
      }();
      refVal2.schema = {
        "allOf": [{
          "$ref": "#/definitions/nonNegativeInteger"
        }, {
          "default": 0
        }]
      };
      refVal2.errors = null;
      refVal[2] = refVal2;
      var refVal3 = function() {
        return function validate3(data, dataPath, parentData, parentDataProperty, rootData) {
          "use strict";
          var vErrors = null;
          var errors = 0;
          if (rootData === void 0)
            rootData = data;
          if (Array.isArray(data)) {
            if (data.length < 1) {
              validate3.errors = [{
                keyword: "minItems",
                dataPath: (dataPath || "") + "",
                schemaPath: "#/minItems",
                params: {
                  limit: 1
                },
                message: "should NOT have fewer than 1 items"
              }];
              return false;
            } else {
              var errs__0 = errors;
              var valid0;
              for (var i0 = 0; i0 < data.length; i0++) {
                var errs_1 = errors;
                if (!nop(data[i0], (dataPath || "") + "[" + i0 + "]", data, i0, rootData)) {
                  if (vErrors === null)
                    vErrors = nop.errors;
                  else
                    vErrors = vErrors.concat(nop.errors);
                  errors = vErrors.length;
                }
                var valid1 = errors === errs_1;
                if (!valid1)
                  break;
              }
            }
          } else {
            validate3.errors = [{
              keyword: "type",
              dataPath: (dataPath || "") + "",
              schemaPath: "#/type",
              params: {
                type: "array"
              },
              message: "should be array"
            }];
            return false;
          }
          validate3.errors = vErrors;
          return errors === 0;
        };
      }();
      refVal3.schema = {
        "type": "array",
        "minItems": 1,
        "items": {
          "$ref": "#"
        }
      };
      refVal3.errors = null;
      refVal[3] = refVal3;
      var refVal4 = {
        "type": "array",
        "items": {
          "type": "string"
        },
        "uniqueItems": true,
        "default": []
      };
      refVal[4] = refVal4;
      var refVal5 = {
        "enum": ["array", "boolean", "integer", "null", "number", "object", "string"]
      };
      refVal[5] = refVal5;
      return function validate3(data, dataPath, parentData, parentDataProperty, rootData) {
        "use strict";
        var vErrors = null;
        var errors = 0;
        if (rootData === void 0)
          rootData = data;
        if ((!data || typeof data !== "object" || Array.isArray(data)) && typeof data !== "boolean") {
          validate3.errors = [{
            keyword: "type",
            dataPath: (dataPath || "") + "",
            schemaPath: "#/type",
            params: {
              type: "object,boolean"
            },
            message: "should be object,boolean"
          }];
          return false;
        }
        if (data && typeof data === "object" && !Array.isArray(data)) {
          var errs__0 = errors;
          var valid1 = true;
          var data1 = data.$id;
          if (data1 === void 0) {
            valid1 = true;
          } else {
            var errs_1 = errors;
            if (errors === errs_1) {
              if (typeof data1 === "string") {
                if (!formats["uri-reference"].test(data1)) {
                  validate3.errors = [{
                    keyword: "format",
                    dataPath: (dataPath || "") + ".$id",
                    schemaPath: "#/properties/%24id/format",
                    params: {
                      format: "uri-reference"
                    },
                    message: 'should match format "uri-reference"'
                  }];
                  return false;
                }
              } else {
                validate3.errors = [{
                  keyword: "type",
                  dataPath: (dataPath || "") + ".$id",
                  schemaPath: "#/properties/%24id/type",
                  params: {
                    type: "string"
                  },
                  message: "should be string"
                }];
                return false;
              }
            }
            var valid1 = errors === errs_1;
          }
          if (valid1) {
            var data1 = data.$schema;
            if (data1 === void 0) {
              valid1 = true;
            } else {
              var errs_1 = errors;
              if (errors === errs_1) {
                if (typeof data1 === "string") {
                  if (!formats.uri.test(data1)) {
                    validate3.errors = [{
                      keyword: "format",
                      dataPath: (dataPath || "") + ".$schema",
                      schemaPath: "#/properties/%24schema/format",
                      params: {
                        format: "uri"
                      },
                      message: 'should match format "uri"'
                    }];
                    return false;
                  }
                } else {
                  validate3.errors = [{
                    keyword: "type",
                    dataPath: (dataPath || "") + ".$schema",
                    schemaPath: "#/properties/%24schema/type",
                    params: {
                      type: "string"
                    },
                    message: "should be string"
                  }];
                  return false;
                }
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              var data1 = data.$ref;
              if (data1 === void 0) {
                valid1 = true;
              } else {
                var errs_1 = errors;
                if (errors === errs_1) {
                  if (typeof data1 === "string") {
                    if (!formats["uri-reference"].test(data1)) {
                      validate3.errors = [{
                        keyword: "format",
                        dataPath: (dataPath || "") + ".$ref",
                        schemaPath: "#/properties/%24ref/format",
                        params: {
                          format: "uri-reference"
                        },
                        message: 'should match format "uri-reference"'
                      }];
                      return false;
                    }
                  } else {
                    validate3.errors = [{
                      keyword: "type",
                      dataPath: (dataPath || "") + ".$ref",
                      schemaPath: "#/properties/%24ref/type",
                      params: {
                        type: "string"
                      },
                      message: "should be string"
                    }];
                    return false;
                  }
                }
                var valid1 = errors === errs_1;
              }
              if (valid1) {
                if (data.$comment === void 0) {
                  valid1 = true;
                } else {
                  var errs_1 = errors;
                  if (typeof data.$comment !== "string") {
                    validate3.errors = [{
                      keyword: "type",
                      dataPath: (dataPath || "") + ".$comment",
                      schemaPath: "#/properties/%24comment/type",
                      params: {
                        type: "string"
                      },
                      message: "should be string"
                    }];
                    return false;
                  }
                  var valid1 = errors === errs_1;
                }
                if (valid1) {
                  if (data.title === void 0) {
                    valid1 = true;
                  } else {
                    var errs_1 = errors;
                    if (typeof data.title !== "string") {
                      validate3.errors = [{
                        keyword: "type",
                        dataPath: (dataPath || "") + ".title",
                        schemaPath: "#/properties/title/type",
                        params: {
                          type: "string"
                        },
                        message: "should be string"
                      }];
                      return false;
                    }
                    var valid1 = errors === errs_1;
                  }
                  if (valid1) {
                    if (data.description === void 0) {
                      valid1 = true;
                    } else {
                      var errs_1 = errors;
                      if (typeof data.description !== "string") {
                        validate3.errors = [{
                          keyword: "type",
                          dataPath: (dataPath || "") + ".description",
                          schemaPath: "#/properties/description/type",
                          params: {
                            type: "string"
                          },
                          message: "should be string"
                        }];
                        return false;
                      }
                      var valid1 = errors === errs_1;
                    }
                    if (valid1) {
                      if (valid1) {
                        if (data.readOnly === void 0) {
                          valid1 = true;
                        } else {
                          var errs_1 = errors;
                          if (typeof data.readOnly !== "boolean") {
                            validate3.errors = [{
                              keyword: "type",
                              dataPath: (dataPath || "") + ".readOnly",
                              schemaPath: "#/properties/readOnly/type",
                              params: {
                                type: "boolean"
                              },
                              message: "should be boolean"
                            }];
                            return false;
                          }
                          var valid1 = errors === errs_1;
                        }
                        if (valid1) {
                          if (data.examples === void 0) {
                            valid1 = true;
                          } else {
                            var errs_1 = errors;
                            if (Array.isArray(data.examples)) {
                              var errs__1 = errors;
                              var valid1;
                            } else {
                              validate3.errors = [{
                                keyword: "type",
                                dataPath: (dataPath || "") + ".examples",
                                schemaPath: "#/properties/examples/type",
                                params: {
                                  type: "array"
                                },
                                message: "should be array"
                              }];
                              return false;
                            }
                            var valid1 = errors === errs_1;
                          }
                          if (valid1) {
                            var data1 = data.multipleOf;
                            if (data1 === void 0) {
                              valid1 = true;
                            } else {
                              var errs_1 = errors;
                              if (typeof data1 === "number") {
                                if (data1 <= 0 || data1 !== data1) {
                                  validate3.errors = [{
                                    keyword: "exclusiveMinimum",
                                    dataPath: (dataPath || "") + ".multipleOf",
                                    schemaPath: "#/properties/multipleOf/exclusiveMinimum",
                                    params: {
                                      comparison: ">",
                                      limit: 0,
                                      exclusive: true
                                    },
                                    message: "should be > 0"
                                  }];
                                  return false;
                                }
                              } else {
                                validate3.errors = [{
                                  keyword: "type",
                                  dataPath: (dataPath || "") + ".multipleOf",
                                  schemaPath: "#/properties/multipleOf/type",
                                  params: {
                                    type: "number"
                                  },
                                  message: "should be number"
                                }];
                                return false;
                              }
                              var valid1 = errors === errs_1;
                            }
                            if (valid1) {
                              if (data.maximum === void 0) {
                                valid1 = true;
                              } else {
                                var errs_1 = errors;
                                if (typeof data.maximum !== "number") {
                                  validate3.errors = [{
                                    keyword: "type",
                                    dataPath: (dataPath || "") + ".maximum",
                                    schemaPath: "#/properties/maximum/type",
                                    params: {
                                      type: "number"
                                    },
                                    message: "should be number"
                                  }];
                                  return false;
                                }
                                var valid1 = errors === errs_1;
                              }
                              if (valid1) {
                                if (data.exclusiveMaximum === void 0) {
                                  valid1 = true;
                                } else {
                                  var errs_1 = errors;
                                  if (typeof data.exclusiveMaximum !== "number") {
                                    validate3.errors = [{
                                      keyword: "type",
                                      dataPath: (dataPath || "") + ".exclusiveMaximum",
                                      schemaPath: "#/properties/exclusiveMaximum/type",
                                      params: {
                                        type: "number"
                                      },
                                      message: "should be number"
                                    }];
                                    return false;
                                  }
                                  var valid1 = errors === errs_1;
                                }
                                if (valid1) {
                                  if (data.minimum === void 0) {
                                    valid1 = true;
                                  } else {
                                    var errs_1 = errors;
                                    if (typeof data.minimum !== "number") {
                                      validate3.errors = [{
                                        keyword: "type",
                                        dataPath: (dataPath || "") + ".minimum",
                                        schemaPath: "#/properties/minimum/type",
                                        params: {
                                          type: "number"
                                        },
                                        message: "should be number"
                                      }];
                                      return false;
                                    }
                                    var valid1 = errors === errs_1;
                                  }
                                  if (valid1) {
                                    if (data.exclusiveMinimum === void 0) {
                                      valid1 = true;
                                    } else {
                                      var errs_1 = errors;
                                      if (typeof data.exclusiveMinimum !== "number") {
                                        validate3.errors = [{
                                          keyword: "type",
                                          dataPath: (dataPath || "") + ".exclusiveMinimum",
                                          schemaPath: "#/properties/exclusiveMinimum/type",
                                          params: {
                                            type: "number"
                                          },
                                          message: "should be number"
                                        }];
                                        return false;
                                      }
                                      var valid1 = errors === errs_1;
                                    }
                                    if (valid1) {
                                      var data1 = data.maxLength;
                                      if (data1 === void 0) {
                                        valid1 = true;
                                      } else {
                                        var errs_1 = errors;
                                        var errs_2 = errors;
                                        if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                          validate3.errors = [{
                                            keyword: "type",
                                            dataPath: (dataPath || "") + ".maxLength",
                                            schemaPath: "#/definitions/nonNegativeInteger/type",
                                            params: {
                                              type: "integer"
                                            },
                                            message: "should be integer"
                                          }];
                                          return false;
                                        }
                                        if (typeof data1 === "number") {
                                          if (data1 < 0 || data1 !== data1) {
                                            validate3.errors = [{
                                              keyword: "minimum",
                                              dataPath: (dataPath || "") + ".maxLength",
                                              schemaPath: "#/definitions/nonNegativeInteger/minimum",
                                              params: {
                                                comparison: ">=",
                                                limit: 0,
                                                exclusive: false
                                              },
                                              message: "should be >= 0"
                                            }];
                                            return false;
                                          }
                                        }
                                        var valid2 = errors === errs_2;
                                        var valid1 = errors === errs_1;
                                      }
                                      if (valid1) {
                                        if (data.minLength === void 0) {
                                          valid1 = true;
                                        } else {
                                          var errs_1 = errors;
                                          if (!refVal2(data.minLength, (dataPath || "") + ".minLength", data, "minLength", rootData)) {
                                            if (vErrors === null)
                                              vErrors = refVal2.errors;
                                            else
                                              vErrors = vErrors.concat(refVal2.errors);
                                            errors = vErrors.length;
                                          }
                                          var valid1 = errors === errs_1;
                                        }
                                        if (valid1) {
                                          var data1 = data.pattern;
                                          if (data1 === void 0) {
                                            valid1 = true;
                                          } else {
                                            var errs_1 = errors;
                                            if (errors === errs_1) {
                                              if (typeof data1 === "string") {
                                                if (!formats.regex(data1)) {
                                                  validate3.errors = [{
                                                    keyword: "format",
                                                    dataPath: (dataPath || "") + ".pattern",
                                                    schemaPath: "#/properties/pattern/format",
                                                    params: {
                                                      format: "regex"
                                                    },
                                                    message: 'should match format "regex"'
                                                  }];
                                                  return false;
                                                }
                                              } else {
                                                validate3.errors = [{
                                                  keyword: "type",
                                                  dataPath: (dataPath || "") + ".pattern",
                                                  schemaPath: "#/properties/pattern/type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "should be string"
                                                }];
                                                return false;
                                              }
                                            }
                                            var valid1 = errors === errs_1;
                                          }
                                          if (valid1) {
                                            if (data.additionalItems === void 0) {
                                              valid1 = true;
                                            } else {
                                              var errs_1 = errors;
                                              if (!validate3(data.additionalItems, (dataPath || "") + ".additionalItems", data, "additionalItems", rootData)) {
                                                if (vErrors === null)
                                                  vErrors = validate3.errors;
                                                else
                                                  vErrors = vErrors.concat(validate3.errors);
                                                errors = vErrors.length;
                                              }
                                              var valid1 = errors === errs_1;
                                            }
                                            if (valid1) {
                                              var data1 = data.items;
                                              if (data1 === void 0) {
                                                valid1 = true;
                                              } else {
                                                var errs_1 = errors;
                                                var errs__1 = errors;
                                                var valid1 = false;
                                                var errs_2 = errors;
                                                if (!validate3(data1, (dataPath || "") + ".items", data, "items", rootData)) {
                                                  if (vErrors === null)
                                                    vErrors = validate3.errors;
                                                  else
                                                    vErrors = vErrors.concat(validate3.errors);
                                                  errors = vErrors.length;
                                                }
                                                var valid2 = errors === errs_2;
                                                valid1 = valid1 || valid2;
                                                if (!valid1) {
                                                  var errs_2 = errors;
                                                  if (!refVal3(data1, (dataPath || "") + ".items", data, "items", rootData)) {
                                                    if (vErrors === null)
                                                      vErrors = refVal3.errors;
                                                    else
                                                      vErrors = vErrors.concat(refVal3.errors);
                                                    errors = vErrors.length;
                                                  }
                                                  var valid2 = errors === errs_2;
                                                  valid1 = valid1 || valid2;
                                                }
                                                if (!valid1) {
                                                  var err = {
                                                    keyword: "anyOf",
                                                    dataPath: (dataPath || "") + ".items",
                                                    schemaPath: "#/properties/items/anyOf",
                                                    params: {},
                                                    message: "should match some schema in anyOf"
                                                  };
                                                  if (vErrors === null)
                                                    vErrors = [err];
                                                  else
                                                    vErrors.push(err);
                                                  errors++;
                                                  validate3.errors = vErrors;
                                                  return false;
                                                } else {
                                                  errors = errs__1;
                                                  if (vErrors !== null) {
                                                    if (errs__1)
                                                      vErrors.length = errs__1;
                                                    else
                                                      vErrors = null;
                                                  }
                                                }
                                                var valid1 = errors === errs_1;
                                              }
                                              if (valid1) {
                                                var data1 = data.maxItems;
                                                if (data1 === void 0) {
                                                  valid1 = true;
                                                } else {
                                                  var errs_1 = errors;
                                                  var errs_2 = errors;
                                                  if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                                    validate3.errors = [{
                                                      keyword: "type",
                                                      dataPath: (dataPath || "") + ".maxItems",
                                                      schemaPath: "#/definitions/nonNegativeInteger/type",
                                                      params: {
                                                        type: "integer"
                                                      },
                                                      message: "should be integer"
                                                    }];
                                                    return false;
                                                  }
                                                  if (typeof data1 === "number") {
                                                    if (data1 < 0 || data1 !== data1) {
                                                      validate3.errors = [{
                                                        keyword: "minimum",
                                                        dataPath: (dataPath || "") + ".maxItems",
                                                        schemaPath: "#/definitions/nonNegativeInteger/minimum",
                                                        params: {
                                                          comparison: ">=",
                                                          limit: 0,
                                                          exclusive: false
                                                        },
                                                        message: "should be >= 0"
                                                      }];
                                                      return false;
                                                    }
                                                  }
                                                  var valid2 = errors === errs_2;
                                                  var valid1 = errors === errs_1;
                                                }
                                                if (valid1) {
                                                  if (data.minItems === void 0) {
                                                    valid1 = true;
                                                  } else {
                                                    var errs_1 = errors;
                                                    if (!refVal[2](data.minItems, (dataPath || "") + ".minItems", data, "minItems", rootData)) {
                                                      if (vErrors === null)
                                                        vErrors = refVal[2].errors;
                                                      else
                                                        vErrors = vErrors.concat(refVal[2].errors);
                                                      errors = vErrors.length;
                                                    }
                                                    var valid1 = errors === errs_1;
                                                  }
                                                  if (valid1) {
                                                    if (data.uniqueItems === void 0) {
                                                      valid1 = true;
                                                    } else {
                                                      var errs_1 = errors;
                                                      if (typeof data.uniqueItems !== "boolean") {
                                                        validate3.errors = [{
                                                          keyword: "type",
                                                          dataPath: (dataPath || "") + ".uniqueItems",
                                                          schemaPath: "#/properties/uniqueItems/type",
                                                          params: {
                                                            type: "boolean"
                                                          },
                                                          message: "should be boolean"
                                                        }];
                                                        return false;
                                                      }
                                                      var valid1 = errors === errs_1;
                                                    }
                                                    if (valid1) {
                                                      if (data.contains === void 0) {
                                                        valid1 = true;
                                                      } else {
                                                        var errs_1 = errors;
                                                        if (!validate3(data.contains, (dataPath || "") + ".contains", data, "contains", rootData)) {
                                                          if (vErrors === null)
                                                            vErrors = validate3.errors;
                                                          else
                                                            vErrors = vErrors.concat(validate3.errors);
                                                          errors = vErrors.length;
                                                        }
                                                        var valid1 = errors === errs_1;
                                                      }
                                                      if (valid1) {
                                                        var data1 = data.maxProperties;
                                                        if (data1 === void 0) {
                                                          valid1 = true;
                                                        } else {
                                                          var errs_1 = errors;
                                                          var errs_2 = errors;
                                                          if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                                            validate3.errors = [{
                                                              keyword: "type",
                                                              dataPath: (dataPath || "") + ".maxProperties",
                                                              schemaPath: "#/definitions/nonNegativeInteger/type",
                                                              params: {
                                                                type: "integer"
                                                              },
                                                              message: "should be integer"
                                                            }];
                                                            return false;
                                                          }
                                                          if (typeof data1 === "number") {
                                                            if (data1 < 0 || data1 !== data1) {
                                                              validate3.errors = [{
                                                                keyword: "minimum",
                                                                dataPath: (dataPath || "") + ".maxProperties",
                                                                schemaPath: "#/definitions/nonNegativeInteger/minimum",
                                                                params: {
                                                                  comparison: ">=",
                                                                  limit: 0,
                                                                  exclusive: false
                                                                },
                                                                message: "should be >= 0"
                                                              }];
                                                              return false;
                                                            }
                                                          }
                                                          var valid2 = errors === errs_2;
                                                          var valid1 = errors === errs_1;
                                                        }
                                                        if (valid1) {
                                                          if (data.minProperties === void 0) {
                                                            valid1 = true;
                                                          } else {
                                                            var errs_1 = errors;
                                                            if (!refVal[2](data.minProperties, (dataPath || "") + ".minProperties", data, "minProperties", rootData)) {
                                                              if (vErrors === null)
                                                                vErrors = refVal[2].errors;
                                                              else
                                                                vErrors = vErrors.concat(refVal[2].errors);
                                                              errors = vErrors.length;
                                                            }
                                                            var valid1 = errors === errs_1;
                                                          }
                                                          if (valid1) {
                                                            var data1 = data.required;
                                                            if (data1 === void 0) {
                                                              valid1 = true;
                                                            } else {
                                                              var errs_1 = errors;
                                                              var errs_2 = errors;
                                                              if (Array.isArray(data1)) {
                                                                var errs__2 = errors;
                                                                var valid2;
                                                                for (var i2 = 0; i2 < data1.length; i2++) {
                                                                  var errs_3 = errors;
                                                                  if (typeof data1[i2] !== "string") {
                                                                    validate3.errors = [{
                                                                      keyword: "type",
                                                                      dataPath: (dataPath || "") + ".required[" + i2 + "]",
                                                                      schemaPath: "#/definitions/stringArray/items/type",
                                                                      params: {
                                                                        type: "string"
                                                                      },
                                                                      message: "should be string"
                                                                    }];
                                                                    return false;
                                                                  }
                                                                  var valid3 = errors === errs_3;
                                                                  if (!valid3)
                                                                    break;
                                                                }
                                                                if (errs__2 == errors) {
                                                                  var i = data1.length, valid2 = true, j;
                                                                  if (i > 1) {
                                                                    var itemIndices = {}, item;
                                                                    for (; i--; ) {
                                                                      var item = data1[i];
                                                                      if (typeof item !== "string")
                                                                        continue;
                                                                      if (typeof itemIndices[item] == "number") {
                                                                        valid2 = false;
                                                                        j = itemIndices[item];
                                                                        break;
                                                                      }
                                                                      itemIndices[item] = i;
                                                                    }
                                                                  }
                                                                  if (!valid2) {
                                                                    validate3.errors = [{
                                                                      keyword: "uniqueItems",
                                                                      dataPath: (dataPath || "") + ".required",
                                                                      schemaPath: "#/definitions/stringArray/uniqueItems",
                                                                      params: {
                                                                        i,
                                                                        j
                                                                      },
                                                                      message: "should NOT have duplicate items (items ## " + j + " and " + i + " are identical)"
                                                                    }];
                                                                    return false;
                                                                  }
                                                                }
                                                              } else {
                                                                validate3.errors = [{
                                                                  keyword: "type",
                                                                  dataPath: (dataPath || "") + ".required",
                                                                  schemaPath: "#/definitions/stringArray/type",
                                                                  params: {
                                                                    type: "array"
                                                                  },
                                                                  message: "should be array"
                                                                }];
                                                                return false;
                                                              }
                                                              var valid2 = errors === errs_2;
                                                              var valid1 = errors === errs_1;
                                                            }
                                                            if (valid1) {
                                                              if (data.additionalProperties === void 0) {
                                                                valid1 = true;
                                                              } else {
                                                                var errs_1 = errors;
                                                                if (!validate3(data.additionalProperties, (dataPath || "") + ".additionalProperties", data, "additionalProperties", rootData)) {
                                                                  if (vErrors === null)
                                                                    vErrors = validate3.errors;
                                                                  else
                                                                    vErrors = vErrors.concat(validate3.errors);
                                                                  errors = vErrors.length;
                                                                }
                                                                var valid1 = errors === errs_1;
                                                              }
                                                              if (valid1) {
                                                                var data1 = data.definitions;
                                                                if (data1 === void 0) {
                                                                  valid1 = true;
                                                                } else {
                                                                  var errs_1 = errors;
                                                                  if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                                                    var errs__1 = errors;
                                                                    var valid2 = true;
                                                                    for (var key1 in data1) {
                                                                      var errs_2 = errors;
                                                                      if (!validate3(data1[key1], (dataPath || "") + ".definitions['" + key1 + "']", data1, key1, rootData)) {
                                                                        if (vErrors === null)
                                                                          vErrors = validate3.errors;
                                                                        else
                                                                          vErrors = vErrors.concat(validate3.errors);
                                                                        errors = vErrors.length;
                                                                      }
                                                                      var valid2 = errors === errs_2;
                                                                      if (!valid2)
                                                                        break;
                                                                    }
                                                                  } else {
                                                                    validate3.errors = [{
                                                                      keyword: "type",
                                                                      dataPath: (dataPath || "") + ".definitions",
                                                                      schemaPath: "#/properties/definitions/type",
                                                                      params: {
                                                                        type: "object"
                                                                      },
                                                                      message: "should be object"
                                                                    }];
                                                                    return false;
                                                                  }
                                                                  var valid1 = errors === errs_1;
                                                                }
                                                                if (valid1) {
                                                                  var data1 = data.properties;
                                                                  if (data1 === void 0) {
                                                                    valid1 = true;
                                                                  } else {
                                                                    var errs_1 = errors;
                                                                    if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                                                      var errs__1 = errors;
                                                                      var valid2 = true;
                                                                      for (var key1 in data1) {
                                                                        var errs_2 = errors;
                                                                        if (!validate3(data1[key1], (dataPath || "") + ".properties['" + key1 + "']", data1, key1, rootData)) {
                                                                          if (vErrors === null)
                                                                            vErrors = validate3.errors;
                                                                          else
                                                                            vErrors = vErrors.concat(validate3.errors);
                                                                          errors = vErrors.length;
                                                                        }
                                                                        var valid2 = errors === errs_2;
                                                                        if (!valid2)
                                                                          break;
                                                                      }
                                                                    } else {
                                                                      validate3.errors = [{
                                                                        keyword: "type",
                                                                        dataPath: (dataPath || "") + ".properties",
                                                                        schemaPath: "#/properties/properties/type",
                                                                        params: {
                                                                          type: "object"
                                                                        },
                                                                        message: "should be object"
                                                                      }];
                                                                      return false;
                                                                    }
                                                                    var valid1 = errors === errs_1;
                                                                  }
                                                                  if (valid1) {
                                                                    var data1 = data.patternProperties;
                                                                    if (data1 === void 0) {
                                                                      valid1 = true;
                                                                    } else {
                                                                      var errs_1 = errors;
                                                                      if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                                                        var errs__1 = errors;
                                                                        for (var key1 in data1) {
                                                                          var startErrs1 = errors;
                                                                          var data2 = key1;
                                                                          var errs_2 = errors;
                                                                          if (errors === errs_2) {
                                                                            if (typeof data2 === "string") {
                                                                              if (!formats.regex(data2)) {
                                                                                var err = {
                                                                                  keyword: "format",
                                                                                  dataPath: (dataPath || "") + ".patternProperties",
                                                                                  schemaPath: "#/properties/patternProperties/propertyNames/format",
                                                                                  params: {
                                                                                    format: "regex"
                                                                                  },
                                                                                  message: 'should match format "regex"'
                                                                                };
                                                                                if (vErrors === null)
                                                                                  vErrors = [err];
                                                                                else
                                                                                  vErrors.push(err);
                                                                                errors++;
                                                                              }
                                                                            }
                                                                          }
                                                                          var valid2 = errors === errs_2;
                                                                          if (!valid2) {
                                                                            for (var i1 = startErrs1; i1 < errors; i1++) {
                                                                              vErrors[i1].propertyName = key1;
                                                                            }
                                                                            var err = {
                                                                              keyword: "propertyNames",
                                                                              dataPath: (dataPath || "") + ".patternProperties",
                                                                              schemaPath: "#/properties/patternProperties/propertyNames",
                                                                              params: {
                                                                                propertyName: "" + key1 + ""
                                                                              },
                                                                              message: "property name '" + key1 + "' is invalid"
                                                                            };
                                                                            if (vErrors === null)
                                                                              vErrors = [err];
                                                                            else
                                                                              vErrors.push(err);
                                                                            errors++;
                                                                            validate3.errors = vErrors;
                                                                            return false;
                                                                            break;
                                                                          }
                                                                        }
                                                                        if (errs__1 == errors) {
                                                                          var errs__1 = errors;
                                                                          var valid2 = true;
                                                                          for (var key1 in data1) {
                                                                            var errs_2 = errors;
                                                                            if (!validate3(data1[key1], (dataPath || "") + ".patternProperties['" + key1 + "']", data1, key1, rootData)) {
                                                                              if (vErrors === null)
                                                                                vErrors = validate3.errors;
                                                                              else
                                                                                vErrors = vErrors.concat(validate3.errors);
                                                                              errors = vErrors.length;
                                                                            }
                                                                            var valid2 = errors === errs_2;
                                                                            if (!valid2)
                                                                              break;
                                                                          }
                                                                        }
                                                                      } else {
                                                                        validate3.errors = [{
                                                                          keyword: "type",
                                                                          dataPath: (dataPath || "") + ".patternProperties",
                                                                          schemaPath: "#/properties/patternProperties/type",
                                                                          params: {
                                                                            type: "object"
                                                                          },
                                                                          message: "should be object"
                                                                        }];
                                                                        return false;
                                                                      }
                                                                      var valid1 = errors === errs_1;
                                                                    }
                                                                    if (valid1) {
                                                                      var data1 = data.dependencies;
                                                                      if (data1 === void 0) {
                                                                        valid1 = true;
                                                                      } else {
                                                                        var errs_1 = errors;
                                                                        if (data1 && typeof data1 === "object" && !Array.isArray(data1)) {
                                                                          var errs__1 = errors;
                                                                          var valid2 = true;
                                                                          for (var key1 in data1) {
                                                                            var data2 = data1[key1];
                                                                            var errs_2 = errors;
                                                                            var errs__2 = errors;
                                                                            var valid2 = false;
                                                                            var errs_3 = errors;
                                                                            if (!validate3(data2, (dataPath || "") + ".dependencies['" + key1 + "']", data1, key1, rootData)) {
                                                                              if (vErrors === null)
                                                                                vErrors = validate3.errors;
                                                                              else
                                                                                vErrors = vErrors.concat(validate3.errors);
                                                                              errors = vErrors.length;
                                                                            }
                                                                            var valid3 = errors === errs_3;
                                                                            valid2 = valid2 || valid3;
                                                                            if (!valid2) {
                                                                              var errs_3 = errors;
                                                                              var errs_4 = errors;
                                                                              if (Array.isArray(data2)) {
                                                                                var errs__4 = errors;
                                                                                var valid4;
                                                                                for (var i4 = 0; i4 < data2.length; i4++) {
                                                                                  var errs_5 = errors;
                                                                                  if (typeof data2[i4] !== "string") {
                                                                                    var err = {
                                                                                      keyword: "type",
                                                                                      dataPath: (dataPath || "") + ".dependencies['" + key1 + "'][" + i4 + "]",
                                                                                      schemaPath: "#/definitions/stringArray/items/type",
                                                                                      params: {
                                                                                        type: "string"
                                                                                      },
                                                                                      message: "should be string"
                                                                                    };
                                                                                    if (vErrors === null)
                                                                                      vErrors = [err];
                                                                                    else
                                                                                      vErrors.push(err);
                                                                                    errors++;
                                                                                  }
                                                                                  var valid5 = errors === errs_5;
                                                                                  if (!valid5)
                                                                                    break;
                                                                                }
                                                                                if (errs__4 == errors) {
                                                                                  var i = data2.length, valid4 = true, j;
                                                                                  if (i > 1) {
                                                                                    var itemIndices = {}, item;
                                                                                    for (; i--; ) {
                                                                                      var item = data2[i];
                                                                                      if (typeof item !== "string")
                                                                                        continue;
                                                                                      if (typeof itemIndices[item] == "number") {
                                                                                        valid4 = false;
                                                                                        j = itemIndices[item];
                                                                                        break;
                                                                                      }
                                                                                      itemIndices[item] = i;
                                                                                    }
                                                                                  }
                                                                                  if (!valid4) {
                                                                                    var err = {
                                                                                      keyword: "uniqueItems",
                                                                                      dataPath: (dataPath || "") + ".dependencies['" + key1 + "']",
                                                                                      schemaPath: "#/definitions/stringArray/uniqueItems",
                                                                                      params: {
                                                                                        i,
                                                                                        j
                                                                                      },
                                                                                      message: "should NOT have duplicate items (items ## " + j + " and " + i + " are identical)"
                                                                                    };
                                                                                    if (vErrors === null)
                                                                                      vErrors = [err];
                                                                                    else
                                                                                      vErrors.push(err);
                                                                                    errors++;
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                var err = {
                                                                                  keyword: "type",
                                                                                  dataPath: (dataPath || "") + ".dependencies['" + key1 + "']",
                                                                                  schemaPath: "#/definitions/stringArray/type",
                                                                                  params: {
                                                                                    type: "array"
                                                                                  },
                                                                                  message: "should be array"
                                                                                };
                                                                                if (vErrors === null)
                                                                                  vErrors = [err];
                                                                                else
                                                                                  vErrors.push(err);
                                                                                errors++;
                                                                              }
                                                                              var valid4 = errors === errs_4;
                                                                              var valid3 = errors === errs_3;
                                                                              valid2 = valid2 || valid3;
                                                                            }
                                                                            if (!valid2) {
                                                                              var err = {
                                                                                keyword: "anyOf",
                                                                                dataPath: (dataPath || "") + ".dependencies['" + key1 + "']",
                                                                                schemaPath: "#/properties/dependencies/additionalProperties/anyOf",
                                                                                params: {},
                                                                                message: "should match some schema in anyOf"
                                                                              };
                                                                              if (vErrors === null)
                                                                                vErrors = [err];
                                                                              else
                                                                                vErrors.push(err);
                                                                              errors++;
                                                                              validate3.errors = vErrors;
                                                                              return false;
                                                                            } else {
                                                                              errors = errs__2;
                                                                              if (vErrors !== null) {
                                                                                if (errs__2)
                                                                                  vErrors.length = errs__2;
                                                                                else
                                                                                  vErrors = null;
                                                                              }
                                                                            }
                                                                            var valid2 = errors === errs_2;
                                                                            if (!valid2)
                                                                              break;
                                                                          }
                                                                        } else {
                                                                          validate3.errors = [{
                                                                            keyword: "type",
                                                                            dataPath: (dataPath || "") + ".dependencies",
                                                                            schemaPath: "#/properties/dependencies/type",
                                                                            params: {
                                                                              type: "object"
                                                                            },
                                                                            message: "should be object"
                                                                          }];
                                                                          return false;
                                                                        }
                                                                        var valid1 = errors === errs_1;
                                                                      }
                                                                      if (valid1) {
                                                                        if (data.propertyNames === void 0) {
                                                                          valid1 = true;
                                                                        } else {
                                                                          var errs_1 = errors;
                                                                          if (!validate3(data.propertyNames, (dataPath || "") + ".propertyNames", data, "propertyNames", rootData)) {
                                                                            if (vErrors === null)
                                                                              vErrors = validate3.errors;
                                                                            else
                                                                              vErrors = vErrors.concat(validate3.errors);
                                                                            errors = vErrors.length;
                                                                          }
                                                                          var valid1 = errors === errs_1;
                                                                        }
                                                                        if (valid1) {
                                                                          if (valid1) {
                                                                            var data1 = data.enum;
                                                                            if (data1 === void 0) {
                                                                              valid1 = true;
                                                                            } else {
                                                                              var errs_1 = errors;
                                                                              if (Array.isArray(data1)) {
                                                                                if (data1.length < 1) {
                                                                                  validate3.errors = [{
                                                                                    keyword: "minItems",
                                                                                    dataPath: (dataPath || "") + ".enum",
                                                                                    schemaPath: "#/properties/enum/minItems",
                                                                                    params: {
                                                                                      limit: 1
                                                                                    },
                                                                                    message: "should NOT have fewer than 1 items"
                                                                                  }];
                                                                                  return false;
                                                                                } else {
                                                                                  var errs__1 = errors;
                                                                                  var valid1;
                                                                                  if (errs__1 == errors) {
                                                                                    var i = data1.length, valid1 = true, j;
                                                                                    if (i > 1) {
                                                                                      outer:
                                                                                        for (; i--; ) {
                                                                                          for (j = i; j--; ) {
                                                                                            if (equal(data1[i], data1[j])) {
                                                                                              valid1 = false;
                                                                                              break outer;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                    }
                                                                                    if (!valid1) {
                                                                                      validate3.errors = [{
                                                                                        keyword: "uniqueItems",
                                                                                        dataPath: (dataPath || "") + ".enum",
                                                                                        schemaPath: "#/properties/enum/uniqueItems",
                                                                                        params: {
                                                                                          i,
                                                                                          j
                                                                                        },
                                                                                        message: "should NOT have duplicate items (items ## " + j + " and " + i + " are identical)"
                                                                                      }];
                                                                                      return false;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                validate3.errors = [{
                                                                                  keyword: "type",
                                                                                  dataPath: (dataPath || "") + ".enum",
                                                                                  schemaPath: "#/properties/enum/type",
                                                                                  params: {
                                                                                    type: "array"
                                                                                  },
                                                                                  message: "should be array"
                                                                                }];
                                                                                return false;
                                                                              }
                                                                              var valid1 = errors === errs_1;
                                                                            }
                                                                            if (valid1) {
                                                                              var data1 = data.type;
                                                                              if (data1 === void 0) {
                                                                                valid1 = true;
                                                                              } else {
                                                                                var errs_1 = errors;
                                                                                var errs__1 = errors;
                                                                                var valid1 = false;
                                                                                var errs_2 = errors;
                                                                                var errs_3 = errors;
                                                                                var schema3 = refVal5.enum;
                                                                                var valid3;
                                                                                valid3 = false;
                                                                                for (var i3 = 0; i3 < schema3.length; i3++)
                                                                                  if (equal(data1, schema3[i3])) {
                                                                                    valid3 = true;
                                                                                    break;
                                                                                  }
                                                                                if (!valid3) {
                                                                                  var err = {
                                                                                    keyword: "enum",
                                                                                    dataPath: (dataPath || "") + ".type",
                                                                                    schemaPath: "#/definitions/simpleTypes/enum",
                                                                                    params: {
                                                                                      allowedValues: schema3
                                                                                    },
                                                                                    message: "should be equal to one of the allowed values"
                                                                                  };
                                                                                  if (vErrors === null)
                                                                                    vErrors = [err];
                                                                                  else
                                                                                    vErrors.push(err);
                                                                                  errors++;
                                                                                }
                                                                                var valid3 = errors === errs_3;
                                                                                var valid2 = errors === errs_2;
                                                                                valid1 = valid1 || valid2;
                                                                                if (!valid1) {
                                                                                  var errs_2 = errors;
                                                                                  if (Array.isArray(data1)) {
                                                                                    if (data1.length < 1) {
                                                                                      var err = {
                                                                                        keyword: "minItems",
                                                                                        dataPath: (dataPath || "") + ".type",
                                                                                        schemaPath: "#/properties/type/anyOf/1/minItems",
                                                                                        params: {
                                                                                          limit: 1
                                                                                        },
                                                                                        message: "should NOT have fewer than 1 items"
                                                                                      };
                                                                                      if (vErrors === null)
                                                                                        vErrors = [err];
                                                                                      else
                                                                                        vErrors.push(err);
                                                                                      errors++;
                                                                                    } else {
                                                                                      var errs__2 = errors;
                                                                                      var valid2;
                                                                                      for (var i2 = 0; i2 < data1.length; i2++) {
                                                                                        var errs_3 = errors;
                                                                                        var errs_4 = errors;
                                                                                        var schema4 = refVal[5].enum;
                                                                                        var valid4;
                                                                                        valid4 = false;
                                                                                        for (var i4 = 0; i4 < schema4.length; i4++)
                                                                                          if (equal(data1[i2], schema4[i4])) {
                                                                                            valid4 = true;
                                                                                            break;
                                                                                          }
                                                                                        if (!valid4) {
                                                                                          var err = {
                                                                                            keyword: "enum",
                                                                                            dataPath: (dataPath || "") + ".type[" + i2 + "]",
                                                                                            schemaPath: "#/definitions/simpleTypes/enum",
                                                                                            params: {
                                                                                              allowedValues: schema4
                                                                                            },
                                                                                            message: "should be equal to one of the allowed values"
                                                                                          };
                                                                                          if (vErrors === null)
                                                                                            vErrors = [err];
                                                                                          else
                                                                                            vErrors.push(err);
                                                                                          errors++;
                                                                                        }
                                                                                        var valid4 = errors === errs_4;
                                                                                        var valid3 = errors === errs_3;
                                                                                        if (!valid3)
                                                                                          break;
                                                                                      }
                                                                                      if (errs__2 == errors) {
                                                                                        var i = data1.length, valid2 = true, j;
                                                                                        if (i > 1) {
                                                                                          outer:
                                                                                            for (; i--; ) {
                                                                                              for (j = i; j--; ) {
                                                                                                if (equal(data1[i], data1[j])) {
                                                                                                  valid2 = false;
                                                                                                  break outer;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                        }
                                                                                        if (!valid2) {
                                                                                          var err = {
                                                                                            keyword: "uniqueItems",
                                                                                            dataPath: (dataPath || "") + ".type",
                                                                                            schemaPath: "#/properties/type/anyOf/1/uniqueItems",
                                                                                            params: {
                                                                                              i,
                                                                                              j
                                                                                            },
                                                                                            message: "should NOT have duplicate items (items ## " + j + " and " + i + " are identical)"
                                                                                          };
                                                                                          if (vErrors === null)
                                                                                            vErrors = [err];
                                                                                          else
                                                                                            vErrors.push(err);
                                                                                          errors++;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  } else {
                                                                                    var err = {
                                                                                      keyword: "type",
                                                                                      dataPath: (dataPath || "") + ".type",
                                                                                      schemaPath: "#/properties/type/anyOf/1/type",
                                                                                      params: {
                                                                                        type: "array"
                                                                                      },
                                                                                      message: "should be array"
                                                                                    };
                                                                                    if (vErrors === null)
                                                                                      vErrors = [err];
                                                                                    else
                                                                                      vErrors.push(err);
                                                                                    errors++;
                                                                                  }
                                                                                  var valid2 = errors === errs_2;
                                                                                  valid1 = valid1 || valid2;
                                                                                }
                                                                                if (!valid1) {
                                                                                  var err = {
                                                                                    keyword: "anyOf",
                                                                                    dataPath: (dataPath || "") + ".type",
                                                                                    schemaPath: "#/properties/type/anyOf",
                                                                                    params: {},
                                                                                    message: "should match some schema in anyOf"
                                                                                  };
                                                                                  if (vErrors === null)
                                                                                    vErrors = [err];
                                                                                  else
                                                                                    vErrors.push(err);
                                                                                  errors++;
                                                                                  validate3.errors = vErrors;
                                                                                  return false;
                                                                                } else {
                                                                                  errors = errs__1;
                                                                                  if (vErrors !== null) {
                                                                                    if (errs__1)
                                                                                      vErrors.length = errs__1;
                                                                                    else
                                                                                      vErrors = null;
                                                                                  }
                                                                                }
                                                                                var valid1 = errors === errs_1;
                                                                              }
                                                                              if (valid1) {
                                                                                if (data.format === void 0) {
                                                                                  valid1 = true;
                                                                                } else {
                                                                                  var errs_1 = errors;
                                                                                  if (typeof data.format !== "string") {
                                                                                    validate3.errors = [{
                                                                                      keyword: "type",
                                                                                      dataPath: (dataPath || "") + ".format",
                                                                                      schemaPath: "#/properties/format/type",
                                                                                      params: {
                                                                                        type: "string"
                                                                                      },
                                                                                      message: "should be string"
                                                                                    }];
                                                                                    return false;
                                                                                  }
                                                                                  var valid1 = errors === errs_1;
                                                                                }
                                                                                if (valid1) {
                                                                                  if (data.contentMediaType === void 0) {
                                                                                    valid1 = true;
                                                                                  } else {
                                                                                    var errs_1 = errors;
                                                                                    if (typeof data.contentMediaType !== "string") {
                                                                                      validate3.errors = [{
                                                                                        keyword: "type",
                                                                                        dataPath: (dataPath || "") + ".contentMediaType",
                                                                                        schemaPath: "#/properties/contentMediaType/type",
                                                                                        params: {
                                                                                          type: "string"
                                                                                        },
                                                                                        message: "should be string"
                                                                                      }];
                                                                                      return false;
                                                                                    }
                                                                                    var valid1 = errors === errs_1;
                                                                                  }
                                                                                  if (valid1) {
                                                                                    if (data.contentEncoding === void 0) {
                                                                                      valid1 = true;
                                                                                    } else {
                                                                                      var errs_1 = errors;
                                                                                      if (typeof data.contentEncoding !== "string") {
                                                                                        validate3.errors = [{
                                                                                          keyword: "type",
                                                                                          dataPath: (dataPath || "") + ".contentEncoding",
                                                                                          schemaPath: "#/properties/contentEncoding/type",
                                                                                          params: {
                                                                                            type: "string"
                                                                                          },
                                                                                          message: "should be string"
                                                                                        }];
                                                                                        return false;
                                                                                      }
                                                                                      var valid1 = errors === errs_1;
                                                                                    }
                                                                                    if (valid1) {
                                                                                      if (data.if === void 0) {
                                                                                        valid1 = true;
                                                                                      } else {
                                                                                        var errs_1 = errors;
                                                                                        if (!validate3(data.if, (dataPath || "") + ".if", data, "if", rootData)) {
                                                                                          if (vErrors === null)
                                                                                            vErrors = validate3.errors;
                                                                                          else
                                                                                            vErrors = vErrors.concat(validate3.errors);
                                                                                          errors = vErrors.length;
                                                                                        }
                                                                                        var valid1 = errors === errs_1;
                                                                                      }
                                                                                      if (valid1) {
                                                                                        if (data.then === void 0) {
                                                                                          valid1 = true;
                                                                                        } else {
                                                                                          var errs_1 = errors;
                                                                                          if (!validate3(data.then, (dataPath || "") + ".then", data, "then", rootData)) {
                                                                                            if (vErrors === null)
                                                                                              vErrors = validate3.errors;
                                                                                            else
                                                                                              vErrors = vErrors.concat(validate3.errors);
                                                                                            errors = vErrors.length;
                                                                                          }
                                                                                          var valid1 = errors === errs_1;
                                                                                        }
                                                                                        if (valid1) {
                                                                                          if (data.else === void 0) {
                                                                                            valid1 = true;
                                                                                          } else {
                                                                                            var errs_1 = errors;
                                                                                            if (!validate3(data.else, (dataPath || "") + ".else", data, "else", rootData)) {
                                                                                              if (vErrors === null)
                                                                                                vErrors = validate3.errors;
                                                                                              else
                                                                                                vErrors = vErrors.concat(validate3.errors);
                                                                                              errors = vErrors.length;
                                                                                            }
                                                                                            var valid1 = errors === errs_1;
                                                                                          }
                                                                                          if (valid1) {
                                                                                            if (data.allOf === void 0) {
                                                                                              valid1 = true;
                                                                                            } else {
                                                                                              var errs_1 = errors;
                                                                                              if (!refVal[3](data.allOf, (dataPath || "") + ".allOf", data, "allOf", rootData)) {
                                                                                                if (vErrors === null)
                                                                                                  vErrors = refVal[3].errors;
                                                                                                else
                                                                                                  vErrors = vErrors.concat(refVal[3].errors);
                                                                                                errors = vErrors.length;
                                                                                              }
                                                                                              var valid1 = errors === errs_1;
                                                                                            }
                                                                                            if (valid1) {
                                                                                              if (data.anyOf === void 0) {
                                                                                                valid1 = true;
                                                                                              } else {
                                                                                                var errs_1 = errors;
                                                                                                if (!refVal[3](data.anyOf, (dataPath || "") + ".anyOf", data, "anyOf", rootData)) {
                                                                                                  if (vErrors === null)
                                                                                                    vErrors = refVal[3].errors;
                                                                                                  else
                                                                                                    vErrors = vErrors.concat(refVal[3].errors);
                                                                                                  errors = vErrors.length;
                                                                                                }
                                                                                                var valid1 = errors === errs_1;
                                                                                              }
                                                                                              if (valid1) {
                                                                                                if (data.oneOf === void 0) {
                                                                                                  valid1 = true;
                                                                                                } else {
                                                                                                  var errs_1 = errors;
                                                                                                  if (!refVal[3](data.oneOf, (dataPath || "") + ".oneOf", data, "oneOf", rootData)) {
                                                                                                    if (vErrors === null)
                                                                                                      vErrors = refVal[3].errors;
                                                                                                    else
                                                                                                      vErrors = vErrors.concat(refVal[3].errors);
                                                                                                    errors = vErrors.length;
                                                                                                  }
                                                                                                  var valid1 = errors === errs_1;
                                                                                                }
                                                                                                if (valid1) {
                                                                                                  if (data.not === void 0) {
                                                                                                    valid1 = true;
                                                                                                  } else {
                                                                                                    var errs_1 = errors;
                                                                                                    if (!validate3(data.not, (dataPath || "") + ".not", data, "not", rootData)) {
                                                                                                      if (vErrors === null)
                                                                                                        vErrors = validate3.errors;
                                                                                                      else
                                                                                                        vErrors = vErrors.concat(validate3.errors);
                                                                                                      errors = vErrors.length;
                                                                                                    }
                                                                                                    var valid1 = errors === errs_1;
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        validate3.errors = vErrors;
        return errors === 0;
      };
    }();
    validate2.schema = {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "http://json-schema.org/draft-07/schema#",
      "title": "Core schema meta-schema",
      "definitions": {
        "schemaArray": {
          "type": "array",
          "minItems": 1,
          "items": {
            "$ref": "#"
          }
        },
        "nonNegativeInteger": {
          "type": "integer",
          "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
          "allOf": [{
            "$ref": "#/definitions/nonNegativeInteger"
          }, {
            "default": 0
          }]
        },
        "simpleTypes": {
          "enum": ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        "stringArray": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true,
          "default": []
        }
      },
      "type": ["object", "boolean"],
      "properties": {
        "$id": {
          "type": "string",
          "format": "uri-reference"
        },
        "$schema": {
          "type": "string",
          "format": "uri"
        },
        "$ref": {
          "type": "string",
          "format": "uri-reference"
        },
        "$comment": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "default": true,
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "examples": {
          "type": "array",
          "items": true
        },
        "multipleOf": {
          "type": "number",
          "exclusiveMinimum": 0
        },
        "maximum": {
          "type": "number"
        },
        "exclusiveMaximum": {
          "type": "number"
        },
        "minimum": {
          "type": "number"
        },
        "exclusiveMinimum": {
          "type": "number"
        },
        "maxLength": {
          "$ref": "#/definitions/nonNegativeInteger"
        },
        "minLength": {
          "$ref": "#/definitions/nonNegativeIntegerDefault0"
        },
        "pattern": {
          "type": "string",
          "format": "regex"
        },
        "additionalItems": {
          "$ref": "#"
        },
        "items": {
          "anyOf": [{
            "$ref": "#"
          }, {
            "$ref": "#/definitions/schemaArray"
          }],
          "default": true
        },
        "maxItems": {
          "$ref": "#/definitions/nonNegativeInteger"
        },
        "minItems": {
          "$ref": "#/definitions/nonNegativeIntegerDefault0"
        },
        "uniqueItems": {
          "type": "boolean",
          "default": false
        },
        "contains": {
          "$ref": "#"
        },
        "maxProperties": {
          "$ref": "#/definitions/nonNegativeInteger"
        },
        "minProperties": {
          "$ref": "#/definitions/nonNegativeIntegerDefault0"
        },
        "required": {
          "$ref": "#/definitions/stringArray"
        },
        "additionalProperties": {
          "$ref": "#"
        },
        "definitions": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#"
          },
          "default": {}
        },
        "properties": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#"
          },
          "default": {}
        },
        "patternProperties": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#"
          },
          "propertyNames": {
            "format": "regex"
          },
          "default": {}
        },
        "dependencies": {
          "type": "object",
          "additionalProperties": {
            "anyOf": [{
              "$ref": "#"
            }, {
              "$ref": "#/definitions/stringArray"
            }]
          }
        },
        "propertyNames": {
          "$ref": "#"
        },
        "const": true,
        "enum": {
          "type": "array",
          "items": true,
          "minItems": 1,
          "uniqueItems": true
        },
        "type": {
          "anyOf": [{
            "$ref": "#/definitions/simpleTypes"
          }, {
            "type": "array",
            "items": {
              "$ref": "#/definitions/simpleTypes"
            },
            "minItems": 1,
            "uniqueItems": true
          }]
        },
        "format": {
          "type": "string"
        },
        "contentMediaType": {
          "type": "string"
        },
        "contentEncoding": {
          "type": "string"
        },
        "if": {
          "$ref": "#"
        },
        "then": {
          "$ref": "#"
        },
        "else": {
          "$ref": "#"
        },
        "allOf": {
          "$ref": "#/definitions/schemaArray"
        },
        "anyOf": {
          "$ref": "#/definitions/schemaArray"
        },
        "oneOf": {
          "$ref": "#/definitions/schemaArray"
        },
        "not": {
          "$ref": "#"
        }
      },
      "default": true
    };
    validate2.errors = null;
    module2.exports = validate2;
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/string-similarity/src/index.js
var require_src = __commonJS({
  "../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/string-similarity/src/index.js"(exports2, module2) {
    module2.exports = {
      compareTwoStrings,
      findBestMatch
    };
    function compareTwoStrings(first, second) {
      first = first.replace(/\s+/g, "");
      second = second.replace(/\s+/g, "");
      if (first === second)
        return 1;
      if (first.length < 2 || second.length < 2)
        return 0;
      let firstBigrams = new Map();
      for (let i = 0; i < first.length - 1; i++) {
        const bigram = first.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
        firstBigrams.set(bigram, count);
      }
      ;
      let intersectionSize = 0;
      for (let i = 0; i < second.length - 1; i++) {
        const bigram = second.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
        if (count > 0) {
          firstBigrams.set(bigram, count - 1);
          intersectionSize++;
        }
      }
      return 2 * intersectionSize / (first.length + second.length - 2);
    }
    function findBestMatch(mainString, targetStrings) {
      if (!areArgsValid(mainString, targetStrings))
        throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
      const ratings = [];
      let bestMatchIndex = 0;
      for (let i = 0; i < targetStrings.length; i++) {
        const currentTargetString = targetStrings[i];
        const currentRating = compareTwoStrings(mainString, currentTargetString);
        ratings.push({ target: currentTargetString, rating: currentRating });
        if (currentRating > ratings[bestMatchIndex].rating) {
          bestMatchIndex = i;
        }
      }
      const bestMatch = ratings[bestMatchIndex];
      return { ratings, bestMatch, bestMatchIndex };
    }
    function areArgsValid(mainString, targetStrings) {
      if (typeof mainString !== "string")
        return false;
      if (!Array.isArray(targetStrings))
        return false;
      if (!targetStrings.length)
        return false;
      if (targetStrings.find(function(s) {
        return typeof s !== "string";
      }))
        return false;
      return true;
    }
  }
});

// ../../../../.kawi/packages/bd06e4654d389557b68b04374a1542ab/node_modules/fast-json-stringify/index.js
"use strict";
var Ajv = require_ajv();
var merge = require_cjs();
var clone = require_rfdc()({ proto: true });
var fjsCloned = Symbol("fast-json-stringify.cloned");
var validate = require_schema_validator();
var stringSimilarity = null;
var isLong;
try {
  isLong = require("long").isLong;
} catch (e) {
  isLong = null;
}
var addComma = `
  if (addComma) {
    json += ','
  } else {
    addComma = true
  }
`;
function isValidSchema(schema, name) {
  if (!validate(schema)) {
    if (name) {
      name = `"${name}" `;
    } else {
      name = "";
    }
    const first = validate.errors[0];
    const err = new Error(`${name}schema is invalid: data${first.dataPath} ${first.message}`);
    err.errors = isValidSchema.errors;
    throw err;
  }
}
function mergeLocation(source, dest) {
  return {
    schema: dest.schema || source.schema,
    root: dest.root || source.root,
    externalSchema: dest.externalSchema || source.externalSchema
  };
}
function build(schema, options) {
  options = options || {};
  isValidSchema(schema);
  if (options.schema) {
    for (var key of Object.keys(options.schema)) {
      isValidSchema(options.schema[key], key);
    }
  }
  let intParseFunctionName = "trunc";
  if (options.rounding) {
    if (["floor", "ceil", "round"].includes(options.rounding)) {
      intParseFunctionName = options.rounding;
    } else {
      throw new Error(`Unsupported integer rounding method ${options.rounding}`);
    }
  }
  let code = `
    'use strict'
  `;
  code += `
    ${asFunctions}

    var isLong = ${isLong ? isLong.toString() : false}

    function parseInteger(int) { return Math.${intParseFunctionName}(int) }
    `;
  let location = {
    schema,
    root: schema,
    externalSchema: options.schema
  };
  if (schema.$ref) {
    location = refFinder(schema.$ref, location);
    schema = location.schema;
  }
  if (schema.type === void 0) {
    schema.type = inferTypeByKeyword(schema);
  }
  let main;
  switch (schema.type) {
    case "object":
      main = "$main";
      code = buildObject(location, code, main);
      break;
    case "string":
      main = schema.nullable ? "$asStringNullable" : getStringSerializer(schema.format);
      break;
    case "integer":
      main = schema.nullable ? "$asIntegerNullable" : "$asInteger";
      break;
    case "number":
      main = schema.nullable ? "$asNumberNullable" : "$asNumber";
      break;
    case "boolean":
      main = schema.nullable ? "$asBooleanNullable" : "$asBoolean";
      break;
    case "null":
      main = "$asNull";
      break;
    case "array":
      main = "$main";
      code = buildArray(location, code, main);
      schema = location.schema;
      break;
    case void 0:
      main = "$asAny";
      break;
    default:
      throw new Error(`${schema.type} unsupported`);
  }
  code += `
    ;
     return ${main}
  `;
  const dependencies = [new Ajv(options.ajv)];
  const dependenciesName = ["ajv"];
  dependenciesName.push(code);
  if (options.debugMode) {
    dependenciesName.toString = function() {
      return dependenciesName.join("\n");
    };
    return dependenciesName;
  }
  return Function.apply(null, dependenciesName).apply(null, dependencies);
}
var objectKeywords = [
  "maxProperties",
  "minProperties",
  "required",
  "properties",
  "patternProperties",
  "additionalProperties",
  "dependencies"
];
var arrayKeywords = [
  "items",
  "additionalItems",
  "maxItems",
  "minItems",
  "uniqueItems",
  "contains"
];
var stringKeywords = [
  "maxLength",
  "minLength",
  "pattern"
];
var numberKeywords = [
  "multipleOf",
  "maximum",
  "exclusiveMaximum",
  "minimum",
  "exclusiveMinimum"
];
function inferTypeByKeyword(schema) {
  for (var keyword of objectKeywords) {
    if (keyword in schema)
      return "object";
  }
  for (var keyword of arrayKeywords) {
    if (keyword in schema)
      return "array";
  }
  for (var keyword of stringKeywords) {
    if (keyword in schema)
      return "string";
  }
  for (var keyword of numberKeywords) {
    if (keyword in schema)
      return "number";
  }
  return schema.type;
}
var stringSerializerMap = {
  "date-time": "$asDatetime",
  date: "$asDate",
  time: "$asTime"
};
function getStringSerializer(format) {
  return stringSerializerMap[format] || "$asString";
}
function getTestSerializer(format) {
  return stringSerializerMap[format];
}
var asFunctions = `
function $pad2Zeros (num) {
  const s = '00' + num
  return s[s.length - 2] + s[s.length - 1]
}

function $asAny (i) {
  return JSON.stringify(i)
}

function $asNull () {
  return 'null'
}

function $asInteger (i) {
  if (isLong && isLong(i)) {
    return i.toString()
  } else if (typeof i === 'bigint') {
    return i.toString()
  } else if (Number.isInteger(i)) {
    return $asNumber(i)
  } else {
    /* eslint no-undef: "off" */
    return $asNumber(parseInteger(i))
  }
}

function $asIntegerNullable (i) {
  return i === null ? null : $asInteger(i)
}

function $asNumber (i) {
  const num = Number(i)
  if (isNaN(num)) {
    return 'null'
  } else {
    return '' + num
  }
}

function $asNumberNullable (i) {
  return i === null ? null : $asNumber(i)
}

function $asBoolean (bool) {
  return bool && 'true' || 'false' // eslint-disable-line
}

function $asBooleanNullable (bool) {
  return bool === null ? null : $asBoolean(bool)
}

function $asDatetime (date, skipQuotes) {
  const quotes = skipQuotes === true ? '' : '"'
  if (date instanceof Date) {
    return quotes + date.toISOString() + quotes
  } else if (date && typeof date.toISOString === 'function') {
    return quotes + date.toISOString() + quotes
  } else {
    return $asString(date, skipQuotes)
  }
}

function $asDate (date, skipQuotes) {
  const quotes = skipQuotes === true ? '' : '"'
  if (date instanceof Date) {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    return quotes + year + '-' + month + '-' + day + quotes
  } else if (date && typeof date.format === 'function') {
    return quotes + date.format('YYYY-MM-DD') + quotes
  } else {
    return $asString(date, skipQuotes)
  }
}

function $asTime (date, skipQuotes) {
  const quotes = skipQuotes === true ? '' : '"'
  if (date instanceof Date) {
    const hour = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(date)
    const minute = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(date)
    const second = new Intl.DateTimeFormat('en', { second: 'numeric' }).format(date)
    return quotes + $pad2Zeros(hour) + ':' + $pad2Zeros(minute) + ':' + $pad2Zeros(second) + quotes
  } else if (date && typeof date.format === 'function') {
    return quotes + date.format('HH:mm:ss') + quotes
  } else {
    return $asString(date, skipQuotes)
  }
}

function $asString (str, skipQuotes) {
  const quotes = skipQuotes === true ? '' : '"'
  if (str instanceof Date) {
    return quotes + str.toISOString() + quotes
  } else if (str === null) {
    return quotes + quotes
  } else if (str instanceof RegExp) {
    str = str.source
  } else if (typeof str !== 'string') {
    str = str.toString()
  }
  // If we skipQuotes it means that we are using it as test
  // no need to test the string length for the render
  if (skipQuotes) {
    return str
  }

  if (str.length < 42) {
    return $asStringSmall(str)
  } else {
    return JSON.stringify(str)
  }
}

function $asStringNullable (str) {
  return str === null ? null : $asString(str)
}

// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// every string that contain surrogate needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function $asStringSmall (str) {
  const l = str.length
  let result = ''
  let last = 0
  let found = false
  let surrogateFound = false
  let point = 255
  // eslint-disable-next-line
  for (var i = 0; i < l && point >= 32; i++) {
    point = str.charCodeAt(i)
    if (point >= 0xD800 && point <= 0xDFFF) {
      // The current character is a surrogate.
      surrogateFound = true
    }
    if (point === 34 || point === 92) {
      result += str.slice(last, i) + '\\\\'
      last = i
      found = true
    }
  }

  if (!found) {
    result = str
  } else {
    result += str.slice(last)
  }
  return ((point < 32) || (surrogateFound === true)) ? JSON.stringify(str) : '"' + result + '"'
}
`;
function addPatternProperties(location) {
  const schema = location.schema;
  const pp = schema.patternProperties;
  let code = `
      var properties = ${JSON.stringify(schema.properties)} || {}
      var keys = Object.keys(obj)
      for (var i = 0; i < keys.length; i++) {
        if (properties[keys[i]]) continue
  `;
  Object.keys(pp).forEach((regex, index) => {
    let ppLocation = mergeLocation(location, { schema: pp[regex] });
    if (pp[regex].$ref) {
      ppLocation = refFinder(pp[regex].$ref, location);
      pp[regex] = ppLocation.schema;
    }
    const type = pp[regex].type;
    const format = pp[regex].format;
    const stringSerializer = getStringSerializer(format);
    try {
      RegExp(regex);
    } catch (err) {
      throw new Error(`${err.message}. Found at ${regex} matching ${JSON.stringify(pp[regex])}`);
    }
    code += `
        if (/${regex.replace(/\\*\//g, "\\/")}/.test(keys[i])) {
    `;
    if (type === "object") {
      code += `${buildObject(ppLocation, "", "buildObjectPP" + index)}
          ${addComma}
          json += $asString(keys[i]) + ':' + buildObjectPP${index}(obj[keys[i]])
      `;
    } else if (type === "array") {
      code += `${buildArray(ppLocation, "", "buildArrayPP" + index)}
          ${addComma}
          json += $asString(keys[i]) + ':' + buildArrayPP${index}(obj[keys[i]])
      `;
    } else if (type === "null") {
      code += `
          ${addComma}
          json += $asString(keys[i]) +':null'
      `;
    } else if (type === "string") {
      code += `
          ${addComma}
          json += $asString(keys[i]) + ':' + ${stringSerializer}(obj[keys[i]])
      `;
    } else if (type === "integer") {
      code += `
          ${addComma}
          json += $asString(keys[i]) + ':' + $asInteger(obj[keys[i]])
      `;
    } else if (type === "number") {
      code += `
          ${addComma}
          json += $asString(keys[i]) + ':' + $asNumber(obj[keys[i]])
      `;
    } else if (type === "boolean") {
      code += `
          ${addComma}
          json += $asString(keys[i]) + ':' + $asBoolean(obj[keys[i]])
      `;
    } else if (type === void 0) {
      code += `
          ${addComma}
          json += $asString(keys[i]) + ':' + $asAny(obj[keys[i]])
      `;
    } else {
      code += `
        throw new Error('Cannot coerce ' + obj[keys[i]] + ' to ' + ${JSON.stringify(type)})
      `;
    }
    code += `
          continue
        }
    `;
  });
  if (schema.additionalProperties) {
    code += additionalProperty(location);
  }
  code += `
      }
  `;
  return code;
}
function additionalProperty(location) {
  let ap = location.schema.additionalProperties;
  let code = "";
  if (ap === true) {
    return `
        if (obj[keys[i]] !== undefined && typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'symbol') {
          ${addComma}
          json += $asString(keys[i]) + ':' + JSON.stringify(obj[keys[i]])
        }
    `;
  }
  let apLocation = mergeLocation(location, { schema: ap });
  if (ap.$ref) {
    apLocation = refFinder(ap.$ref, location);
    ap = apLocation.schema;
  }
  const type = ap.type;
  const format = ap.format;
  const stringSerializer = getStringSerializer(format);
  if (type === "object") {
    code += `${buildObject(apLocation, "", "buildObjectAP")}
        ${addComma}
        json += $asString(keys[i]) + ':' + buildObjectAP(obj[keys[i]])
    `;
  } else if (type === "array") {
    code += `${buildArray(apLocation, "", "buildArrayAP")}
        ${addComma}
        json += $asString(keys[i]) + ':' + buildArrayAP(obj[keys[i]])
    `;
  } else if (type === "null") {
    code += `
        ${addComma}
        json += $asString(keys[i]) +':null'
    `;
  } else if (type === "string") {
    code += `
        ${addComma}
        json += $asString(keys[i]) + ':' + ${stringSerializer}(obj[keys[i]])
    `;
  } else if (type === "integer") {
    code += `
        var t = Number(obj[keys[i]])
    `;
    if (isLong) {
      code += `
          if (isLong(obj[keys[i]]) || !isNaN(t)) {
            ${addComma}
            json += $asString(keys[i]) + ':' + $asInteger(obj[keys[i]])
          }
      `;
    } else {
      code += `
          if (!isNaN(t)) {
            ${addComma}
            json += $asString(keys[i]) + ':' + t
          }
      `;
    }
  } else if (type === "number") {
    code += `
        var t = Number(obj[keys[i]])
        if (!isNaN(t)) {
          ${addComma}
          json += $asString(keys[i]) + ':' + t
        }
    `;
  } else if (type === "boolean") {
    code += `
        ${addComma}
        json += $asString(keys[i]) + ':' + $asBoolean(obj[keys[i]])
    `;
  } else if (type === void 0) {
    code += `
        ${addComma}
        json += $asString(keys[i]) + ':' + $asAny(obj[keys[i]])
    `;
  } else {
    code += `
        throw new Error('Cannot coerce ' + obj[keys[i]] + ' to ' + ${JSON.stringify(type)})
    `;
  }
  return code;
}
function addAdditionalProperties(location) {
  return `
      var properties = ${JSON.stringify(location.schema.properties)} || {}
      var keys = Object.keys(obj)
      for (var i = 0; i < keys.length; i++) {
        if (properties[keys[i]]) continue
        ${additionalProperty(location)}
      }
  `;
}
function idFinder(schema, searchedId) {
  let objSchema;
  const explore = (schema2, searchedId2) => {
    Object.keys(schema2 || {}).forEach((key, i, a) => {
      if (key === "$id" && schema2[key] === searchedId2) {
        objSchema = schema2;
      } else if (objSchema === void 0 && typeof schema2[key] === "object") {
        explore(schema2[key], searchedId2);
      }
    });
  };
  explore(schema, searchedId);
  return objSchema;
}
function refFinder(ref, location) {
  const externalSchema = location.externalSchema;
  let root = location.root;
  let schema = location.schema;
  if (externalSchema && externalSchema[ref]) {
    return {
      schema: externalSchema[ref],
      root: externalSchema[ref],
      externalSchema
    };
  }
  ref = ref.split("#");
  if (ref[0]) {
    schema = externalSchema[ref[0]];
    root = externalSchema[ref[0]];
    if (schema === void 0) {
      findBadKey(externalSchema, [ref[0]]);
    }
    if (schema.$ref) {
      return refFinder(schema.$ref, {
        schema,
        root,
        externalSchema
      });
    }
  }
  let code = "return schema";
  if (ref[1]) {
    const walk = ref[1].split("/");
    if (walk.length === 1) {
      const targetId = `#${ref[1]}`;
      let dereferenced = idFinder(schema, targetId);
      if (dereferenced === void 0 && !ref[0]) {
        for (var key of Object.keys(externalSchema)) {
          dereferenced = idFinder(externalSchema[key], targetId);
          if (dereferenced !== void 0) {
            root = externalSchema[key];
            break;
          }
        }
      }
      return {
        schema: dereferenced,
        root,
        externalSchema
      };
    } else {
      for (var i = 1; i < walk.length; i++) {
        code += `[${JSON.stringify(walk[i])}]`;
      }
    }
  }
  let result;
  try {
    result = new Function("schema", code)(root);
  } catch (err) {
  }
  if (result === void 0 && ref[1]) {
    const walk = ref[1].split("/");
    findBadKey(schema, walk.slice(1));
  }
  if (result.$ref) {
    return refFinder(result.$ref, {
      schema,
      root,
      externalSchema
    });
  }
  return {
    schema: result,
    root,
    externalSchema
  };
  function findBadKey(obj, keys) {
    if (keys.length === 0)
      return null;
    const key2 = keys.shift();
    if (obj[key2] === void 0) {
      stringSimilarity = stringSimilarity || require_src();
      const { bestMatch } = stringSimilarity.findBestMatch(key2, Object.keys(obj));
      if (bestMatch.rating >= 0.5) {
        throw new Error(`Cannot find reference ${JSON.stringify(key2)}, did you mean ${JSON.stringify(bestMatch.target)}?`);
      } else {
        throw new Error(`Cannot find reference ${JSON.stringify(key2)}`);
      }
    }
    return findBadKey(obj[key2], keys);
  }
}
function buildCode(location, code, laterCode, name) {
  if (location.schema.$ref) {
    location = refFinder(location.schema.$ref, location);
  }
  const schema = location.schema;
  let required = schema.required;
  Object.keys(schema.properties || {}).forEach((key, i2, a) => {
    let propertyLocation = mergeLocation(location, { schema: schema.properties[key] });
    if (schema.properties[key].$ref) {
      propertyLocation = refFinder(schema.properties[key].$ref, location);
      schema.properties[key] = propertyLocation.schema;
    }
    const type = schema.properties[key].type;
    const nullable = schema.properties[key].nullable;
    const sanitized = JSON.stringify(key);
    const asString = JSON.stringify(sanitized);
    if (nullable) {
      code += `
        if (obj[${sanitized}] === null) {
          ${addComma}
          json += ${asString} + ':null'
          var rendered = true
        } else {
      `;
    }
    if (type === "number") {
      code += `
          var t = Number(obj[${sanitized}])
          if (!isNaN(t)) {
            ${addComma}
            json += ${asString} + ':' + t
      `;
    } else if (type === "integer") {
      code += `
          var rendered = false
      `;
      if (isLong) {
        code += `
            if (isLong(obj[${sanitized}])) {
              ${addComma}
              json += ${asString} + ':' + obj[${sanitized}].toString()
              rendered = true
            } else {
              var t = Number(obj[${sanitized}])
              if (!isNaN(t)) {
                ${addComma}
                json += ${asString} + ':' + t
                rendered = true
              }
            }
        `;
      } else {
        code += `
            var t = $asInteger(obj[${sanitized}])
            if (!isNaN(t)) {
              ${addComma}
              json += ${asString} + ':' + t
              rendered = true
            }
        `;
      }
      code += `
          if (rendered) {
      `;
    } else {
      code += `
        if (obj[${sanitized}] !== undefined) {
          ${addComma}
          json += ${asString} + ':'
        `;
      const result = nested(laterCode, name, key, mergeLocation(propertyLocation, { schema: schema.properties[key] }), void 0, false);
      code += result.code;
      laterCode = result.laterCode;
    }
    const defaultValue = schema.properties[key].default;
    if (defaultValue !== void 0) {
      required = filterRequired(required, key);
      code += `
      } else {
        ${addComma}
        json += ${asString} + ':' + ${JSON.stringify(JSON.stringify(defaultValue))}
      `;
    } else if (required && required.indexOf(key) !== -1) {
      required = filterRequired(required, key);
      code += `
      } else {
        throw new Error('${sanitized} is required!')
      `;
    }
    code += `
      }
    `;
    if (nullable) {
      code += `
        }
      `;
    }
  });
  if (required && required.length > 0) {
    code += "var required = [";
    for (var i = 0; i < required.length; i++) {
      if (i > 0) {
        code += ",";
      }
      code += `${JSON.stringify(required[i])}`;
    }
    code += `]
      for (var i = 0; i < required.length; i++) {
        if (obj[required[i]] === undefined) throw new Error('"' + required[i] + '" is required!')
      }
    `;
  }
  return { code, laterCode };
}
function filterRequired(required, key) {
  if (!required) {
    return required;
  }
  return required.filter((k) => k !== key);
}
function buildCodeWithAllOfs(location, code, laterCode, name) {
  if (location.schema.allOf) {
    location.schema.allOf.forEach((ss) => {
      const builtCode = buildCodeWithAllOfs(mergeLocation(location, { schema: ss }), code, laterCode, name);
      code = builtCode.code;
      laterCode = builtCode.laterCode;
    });
  } else {
    const builtCode = buildCode(location, code, laterCode, name);
    code = builtCode.code;
    laterCode = builtCode.laterCode;
  }
  return { code, laterCode };
}
function buildInnerObject(location, name) {
  const schema = location.schema;
  const result = buildCodeWithAllOfs(location, "", "", name);
  if (schema.patternProperties) {
    result.code += addPatternProperties(location);
  } else if (schema.additionalProperties && !schema.patternProperties) {
    result.code += addAdditionalProperties(location);
  }
  return result;
}
function addIfThenElse(location, name) {
  let code = "";
  let r;
  let laterCode = "";
  let innerR;
  const schema = location.schema;
  const copy = merge({}, schema);
  const i = copy.if;
  const then = copy.then;
  const e = copy.else ? copy.else : { additionalProperties: true };
  delete copy.if;
  delete copy.then;
  delete copy.else;
  let merged = merge(copy, then);
  let mergedLocation = mergeLocation(location, { schema: merged });
  code += `
    valid = ajv.validate(${JSON.stringify(i)}, obj)
    if (valid) {
  `;
  if (merged.if && merged.then) {
    innerR = addIfThenElse(mergedLocation, name + "Then");
    code += innerR.code;
    laterCode = innerR.laterCode;
  }
  r = buildInnerObject(mergedLocation, name + "Then");
  code += r.code;
  laterCode += r.laterCode;
  code += `
    }
  `;
  merged = merge(copy, e);
  mergedLocation = mergeLocation(mergedLocation, { schema: merged });
  code += `
      else {
    `;
  if (merged.if && merged.then) {
    innerR = addIfThenElse(mergedLocation, name + "Else");
    code += innerR.code;
    laterCode += innerR.laterCode;
  }
  r = buildInnerObject(mergedLocation, name + "Else");
  code += r.code;
  laterCode += r.laterCode;
  code += `
      }
    `;
  return { code, laterCode };
}
function toJSON(variableName) {
  return `(${variableName} && typeof ${variableName}.toJSON === 'function')
    ? ${variableName}.toJSON()
    : ${variableName}
  `;
}
function buildObject(location, code, name) {
  const schema = location.schema;
  code += `
    function ${name} (input) {
  `;
  if (schema.nullable) {
    code += `
      if(input === null) {
        return 'null';
      }
  `;
  }
  code += `
      var obj = ${toJSON("input")}
      var json = '{'
      var addComma = false
  `;
  let r;
  if (schema.if && schema.then) {
    code += `
      var valid
    `;
    r = addIfThenElse(location, name);
  } else {
    r = buildInnerObject(location, name);
  }
  code += `${r.code}
      json += '}'
      return json
    }
    ${r.laterCode}
  `;
  return code;
}
function buildArray(location, code, name, key = null) {
  let schema = location.schema;
  code += `
    function ${name} (obj) {
  `;
  if (schema.nullable) {
    code += `
      if(obj === null) {
        return 'null';
      }
    `;
  }
  code += `
      var json = '['
  `;
  const laterCode = "";
  if (!schema.items) {
    schema.items = {};
  }
  if (schema.items.$ref) {
    if (!schema[fjsCloned]) {
      location.schema = clone(location.schema);
      schema = location.schema;
      schema[fjsCloned] = true;
    }
    location = refFinder(schema.items.$ref, location);
    schema.items = location.schema;
  }
  let result = { code: "", laterCode: "" };
  const accessor = "[i]";
  if (Array.isArray(schema.items)) {
    result = schema.items.reduce((res, item, i) => {
      const tmpRes = nested(laterCode, name, accessor, mergeLocation(location, { schema: item }), i, true);
      const condition = `i === ${i} && ${buildArrayTypeCondition(item.type, accessor)}`;
      return {
        code: `${res.code}
        ${i > 0 ? "else" : ""} if (${condition}) {
          ${tmpRes.code}
        }`,
        laterCode: `${res.laterCode}
        ${tmpRes.laterCode}`
      };
    }, result);
    if (schema.additionalItems) {
      const tmpRes = nested(laterCode, name, accessor, mergeLocation(location, { schema: schema.items }), void 0, true);
      result.code += `
      else if (i >= ${schema.items.length}) {
        ${tmpRes.code}
      }
      `;
    }
    result.code += `
    else {
      throw new Error(\`Item at \${i} does not match schema definition.\`)
    }
    `;
  } else {
    result = nested(laterCode, name, accessor, mergeLocation(location, { schema: schema.items }), void 0, true);
  }
  if (key) {
    code += `
    if(!Array.isArray(obj)) {
      throw new TypeError(\`Property '${key}' should be of type array, received '\${obj}' instead.\`)
    }
    `;
  }
  code += `
    var l = obj.length
    var w = l - 1
    for (var i = 0; i < l; i++) {
      if (i > 0) {
        json += ','
      }
      ${result.code}
    }
    json += ']'
    return json
  }
  ${result.laterCode}
  `;
  return code;
}
function buildArrayTypeCondition(type, accessor) {
  let condition;
  switch (type) {
    case "null":
      condition = `obj${accessor} === null`;
      break;
    case "string":
      condition = `typeof obj${accessor} === 'string'`;
      break;
    case "integer":
      condition = `Number.isInteger(obj${accessor})`;
      break;
    case "number":
      condition = `Number.isFinite(obj${accessor})`;
      break;
    case "boolean":
      condition = `typeof obj${accessor} === 'boolean'`;
      break;
    case "object":
      condition = `obj${accessor} && typeof obj${accessor} === 'object' && obj${accessor}.constructor === Object`;
      break;
    case "array":
      condition = `Array.isArray(obj${accessor})`;
      break;
    default:
      if (Array.isArray(type)) {
        const conditions = type.map((subType) => {
          return buildArrayTypeCondition(subType, accessor);
        });
        condition = `(${conditions.join(" || ")})`;
      } else {
        throw new Error(`${type} unsupported`);
      }
  }
  return condition;
}
function dereferenceOfRefs(location, type) {
  if (!location.schema[fjsCloned]) {
    const schemaClone = clone(location.schema);
    schemaClone[fjsCloned] = true;
    location.schema = schemaClone;
  }
  const schema = location.schema;
  const locations = [];
  schema[type].forEach((s, index) => {
    let sLocation = mergeLocation(location, { schema: s });
    while (s.$ref) {
      sLocation = refFinder(s.$ref, sLocation);
      schema[type][index] = sLocation.schema;
      s = schema[type][index];
    }
    locations[index] = sLocation;
  });
  return locations;
}
var strNameCounter = 0;
function asFuncName(str) {
  let rep = str.replace(/[^a-zA-Z0-9$_]/g, "");
  if (rep.length === 0) {
    return "anan" + strNameCounter++;
  } else if (rep !== str) {
    rep += strNameCounter++;
  }
  return rep;
}
function nested(laterCode, name, key, location, subKey, isArray) {
  let code = "";
  let funcName;
  subKey = subKey || "";
  let schema = location.schema;
  if (schema.$ref) {
    schema = refFinder(schema.$ref, location);
  }
  if (schema.type === void 0) {
    const inferredType = inferTypeByKeyword(schema);
    if (inferredType) {
      schema.type = inferredType;
    }
  }
  const type = schema.type;
  const nullable = schema.nullable === true;
  const accessor = isArray ? key : `[${JSON.stringify(key)}]`;
  switch (type) {
    case "null":
      code += `
        json += $asNull()
      `;
      break;
    case "string": {
      const stringSerializer = getStringSerializer(schema.format);
      code += nullable ? `json += obj${accessor} === null ? null : ${stringSerializer}(obj${accessor})` : `json += ${stringSerializer}(obj${accessor})`;
      break;
    }
    case "integer":
      code += nullable ? `json += obj${accessor} === null ? null : $asInteger(obj${accessor})` : `json += $asInteger(obj${accessor})`;
      break;
    case "number":
      code += nullable ? `json += obj${accessor} === null ? null : $asNumber(obj${accessor})` : `json += $asNumber(obj${accessor})`;
      break;
    case "boolean":
      code += nullable ? `json += obj${accessor} === null ? null : $asBoolean(obj${accessor})` : `json += $asBoolean(obj${accessor})`;
      break;
    case "object":
      funcName = asFuncName(name + key + subKey);
      laterCode = buildObject(location, laterCode, funcName);
      code += `
        json += ${funcName}(obj${accessor})
      `;
      break;
    case "array":
      funcName = asFuncName("$arr" + name + key + subKey);
      laterCode = buildArray(location, laterCode, funcName, key);
      code += `
        json += ${funcName}(obj${accessor})
      `;
      break;
    case void 0:
      if ("anyOf" in schema) {
        const anyOfLocations = dereferenceOfRefs(location, "anyOf");
        anyOfLocations.forEach((location2, index) => {
          const nestedResult = nested(laterCode, name, key, location2, subKey !== "" ? subKey : "i" + index, isArray);
          const testSerializer = getTestSerializer(location2.schema.format);
          const testValue = testSerializer !== void 0 ? `${testSerializer}(obj${accessor}, true)` : `obj${accessor}`;
          code += `
            ${index === 0 ? "if" : "else if"}(ajv.validate(${JSON.stringify(location2.schema)}, ${testValue}))
              ${nestedResult.code}
          `;
          laterCode = nestedResult.laterCode;
        });
        code += `
          else json+= null
        `;
      } else if ("oneOf" in schema) {
        const oneOfLocations = dereferenceOfRefs(location, "oneOf");
        oneOfLocations.forEach((location2, index) => {
          const nestedResult = nested(laterCode, name, key, location2, subKey !== "" ? subKey : "i" + index, isArray);
          const testSerializer = getTestSerializer(location2.schema.format);
          const testValue = testSerializer !== void 0 ? `${testSerializer}(obj${accessor}, true)` : `obj${accessor}`;
          code += `
            ${index === 0 ? "if" : "else if"}(ajv.validate(${JSON.stringify(location2.schema)}, ${testValue}))
              ${nestedResult.code}
          `;
          laterCode = nestedResult.laterCode;
        });
        code += `
          else json+= null
        `;
      } else if (isEmpty(schema)) {
        code += `
          json += JSON.stringify(obj${accessor})
        `;
      } else if ("const" in schema) {
        code += `
          if(ajv.validate(${JSON.stringify(schema)}, obj${accessor}))
            json += '${JSON.stringify(schema.const)}'
          else
            throw new Error(\`Item \${JSON.stringify(obj${accessor})} does not match schema definition.\`)
        `;
      } else if (schema.type === void 0) {
        code += `
          json += JSON.stringify(obj${accessor})
        `;
      } else {
        throw new Error(`${schema.type} unsupported`);
      }
      break;
    default:
      if (Array.isArray(type)) {
        const nullIndex = type.indexOf("null");
        const sortedTypes = nullIndex !== -1 ? [type[nullIndex]].concat(type.slice(0, nullIndex)).concat(type.slice(nullIndex + 1)) : type;
        sortedTypes.forEach((type2, index) => {
          const statement = index === 0 ? "if" : "else if";
          const tempSchema = Object.assign({}, schema, { type: type2 });
          const nestedResult = nested(laterCode, name, key, mergeLocation(location, { schema: tempSchema }), subKey, isArray);
          switch (type2) {
            case "string": {
              code += `
                ${statement}(obj${accessor} === null || typeof obj${accessor} === "${type2}" || obj${accessor} instanceof Date || typeof obj${accessor}.toISOString === "function" || obj${accessor} instanceof RegExp || (typeof obj${accessor} === "object" && Object.hasOwnProperty.call(obj${accessor}, "toString")))
                  ${nestedResult.code}
              `;
              break;
            }
            case "null": {
              code += `
                ${statement}(obj${accessor} == null)
                  ${nestedResult.code}
              `;
              break;
            }
            case "array": {
              code += `
                ${statement}(Array.isArray(obj${accessor}))
                  ${nestedResult.code}
              `;
              break;
            }
            case "integer": {
              code += `
                ${statement}(Number.isInteger(obj${accessor}) || obj${accessor} === null)
                  ${nestedResult.code}
              `;
              break;
            }
            case "number": {
              code += `
                ${statement}(isNaN(obj${accessor}) === false)
                  ${nestedResult.code}
              `;
              break;
            }
            default: {
              code += `
                ${statement}(typeof obj${accessor} === "${type2}")
                  ${nestedResult.code}
              `;
              break;
            }
          }
          laterCode = nestedResult.laterCode;
        });
        code += `
          else json+= null
        `;
      } else {
        throw new Error(`${type} unsupported`);
      }
  }
  return {
    code,
    laterCode
  };
}
function isEmpty(schema) {
  for (var key in schema) {
    if (schema.hasOwnProperty(key) && schema[key] !== void 0) {
      return false;
    }
  }
  return true;
}
module.exports = build;
module.exports.restore = function(debugModeStr, options = {}) {
  const dependencies = [debugModeStr];
  const args = [];
  if (debugModeStr.startsWith("ajv")) {
    dependencies.unshift("ajv");
    args.push(new Ajv(options.ajv));
  }
  return Function.apply(null, ["ajv", debugModeStr]).apply(null, args);
};
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
