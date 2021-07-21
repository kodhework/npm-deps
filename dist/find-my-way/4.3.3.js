var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/fast-decode-uri-component/index.js"(exports2, module2) {
    "use strict";
    var UTF8_ACCEPT = 12;
    var UTF8_REJECT = 0;
    var UTF8_DATA = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      7,
      7,
      10,
      9,
      9,
      9,
      11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      24,
      36,
      48,
      60,
      72,
      84,
      96,
      0,
      12,
      12,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      127,
      63,
      63,
      63,
      0,
      31,
      15,
      15,
      15,
      7,
      7,
      7
    ];
    function decodeURIComponent(uri) {
      var percentPosition = uri.indexOf("%");
      if (percentPosition === -1)
        return uri;
      var length = uri.length;
      var decoded = "";
      var last = 0;
      var codepoint = 0;
      var startOfOctets = percentPosition;
      var state = UTF8_ACCEPT;
      while (percentPosition > -1 && percentPosition < length) {
        var high = hexCodeToInt(uri[percentPosition + 1], 4);
        var low = hexCodeToInt(uri[percentPosition + 2], 0);
        var byte = high | low;
        var type = UTF8_DATA[byte];
        state = UTF8_DATA[256 + state + type];
        codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
        if (state === UTF8_ACCEPT) {
          decoded += uri.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
          codepoint = 0;
          last = percentPosition + 3;
          percentPosition = startOfOctets = uri.indexOf("%", last);
        } else if (state === UTF8_REJECT) {
          return null;
        } else {
          percentPosition += 3;
          if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
            continue;
          return null;
        }
      }
      return decoded + uri.slice(last);
    }
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "a": 10,
      "A": 10,
      "b": 11,
      "B": 11,
      "c": 12,
      "C": 12,
      "d": 13,
      "D": 13,
      "e": 14,
      "E": 14,
      "f": 15,
      "F": 15
    };
    function hexCodeToInt(c, shift) {
      var i = HEX[c];
      return i === void 0 ? 255 : i << shift;
    }
    module2.exports = decodeURIComponent;
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/types.js
var require_types = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/types.js"(exports2, module2) {
    module2.exports = {
      ROOT: 0,
      GROUP: 1,
      POSITION: 2,
      SET: 3,
      RANGE: 4,
      REPETITION: 5,
      REFERENCE: 6,
      CHAR: 7
    };
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/sets.js
var require_sets = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/sets.js"(exports2) {
    var types = require_types();
    var INTS = () => [{ type: types.RANGE, from: 48, to: 57 }];
    var WORDS = () => {
      return [
        { type: types.CHAR, value: 95 },
        { type: types.RANGE, from: 97, to: 122 },
        { type: types.RANGE, from: 65, to: 90 }
      ].concat(INTS());
    };
    var WHITESPACE = () => {
      return [
        { type: types.CHAR, value: 9 },
        { type: types.CHAR, value: 10 },
        { type: types.CHAR, value: 11 },
        { type: types.CHAR, value: 12 },
        { type: types.CHAR, value: 13 },
        { type: types.CHAR, value: 32 },
        { type: types.CHAR, value: 160 },
        { type: types.CHAR, value: 5760 },
        { type: types.RANGE, from: 8192, to: 8202 },
        { type: types.CHAR, value: 8232 },
        { type: types.CHAR, value: 8233 },
        { type: types.CHAR, value: 8239 },
        { type: types.CHAR, value: 8287 },
        { type: types.CHAR, value: 12288 },
        { type: types.CHAR, value: 65279 }
      ];
    };
    var NOTANYCHAR = () => {
      return [
        { type: types.CHAR, value: 10 },
        { type: types.CHAR, value: 13 },
        { type: types.CHAR, value: 8232 },
        { type: types.CHAR, value: 8233 }
      ];
    };
    exports2.words = () => ({ type: types.SET, set: WORDS(), not: false });
    exports2.notWords = () => ({ type: types.SET, set: WORDS(), not: true });
    exports2.ints = () => ({ type: types.SET, set: INTS(), not: false });
    exports2.notInts = () => ({ type: types.SET, set: INTS(), not: true });
    exports2.whitespace = () => ({ type: types.SET, set: WHITESPACE(), not: false });
    exports2.notWhitespace = () => ({ type: types.SET, set: WHITESPACE(), not: true });
    exports2.anyChar = () => ({ type: types.SET, set: NOTANYCHAR(), not: true });
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/util.js
var require_util = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/util.js"(exports2) {
    var types = require_types();
    var sets = require_sets();
    var CTRL = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?";
    var SLSH = { "0": 0, "t": 9, "n": 10, "v": 11, "f": 12, "r": 13 };
    exports2.strToChars = function(str) {
      var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
      str = str.replace(chars_regex, function(s, b, lbs, a16, b16, c8, dctrl, eslsh) {
        if (lbs) {
          return s;
        }
        var code = b ? 8 : a16 ? parseInt(a16, 16) : b16 ? parseInt(b16, 16) : c8 ? parseInt(c8, 8) : dctrl ? CTRL.indexOf(dctrl) : SLSH[eslsh];
        var c = String.fromCharCode(code);
        if (/[[\]{}^$.|?*+()]/.test(c)) {
          c = "\\" + c;
        }
        return c;
      });
      return str;
    };
    exports2.tokenizeClass = (str, regexpStr) => {
      var tokens = [];
      var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
      var rs, c;
      while ((rs = regexp.exec(str)) != null) {
        if (rs[1]) {
          tokens.push(sets.words());
        } else if (rs[2]) {
          tokens.push(sets.ints());
        } else if (rs[3]) {
          tokens.push(sets.whitespace());
        } else if (rs[4]) {
          tokens.push(sets.notWords());
        } else if (rs[5]) {
          tokens.push(sets.notInts());
        } else if (rs[6]) {
          tokens.push(sets.notWhitespace());
        } else if (rs[7]) {
          tokens.push({
            type: types.RANGE,
            from: (rs[8] || rs[9]).charCodeAt(0),
            to: rs[10].charCodeAt(0)
          });
        } else if (c = rs[12]) {
          tokens.push({
            type: types.CHAR,
            value: c.charCodeAt(0)
          });
        } else {
          return [tokens, regexp.lastIndex];
        }
      }
      exports2.error(regexpStr, "Unterminated character class");
    };
    exports2.error = (regexp, msg) => {
      throw new SyntaxError("Invalid regular expression: /" + regexp + "/: " + msg);
    };
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/positions.js
var require_positions = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/positions.js"(exports2) {
    var types = require_types();
    exports2.wordBoundary = () => ({ type: types.POSITION, value: "b" });
    exports2.nonWordBoundary = () => ({ type: types.POSITION, value: "B" });
    exports2.begin = () => ({ type: types.POSITION, value: "^" });
    exports2.end = () => ({ type: types.POSITION, value: "$" });
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/index.js
var require_lib = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/ret/lib/index.js"(exports2, module2) {
    var util = require_util();
    var types = require_types();
    var sets = require_sets();
    var positions = require_positions();
    module2.exports = (regexpStr) => {
      var i = 0, l, c, start = { type: types.ROOT, stack: [] }, lastGroup = start, last = start.stack, groupStack = [];
      var repeatErr = (i2) => {
        util.error(regexpStr, `Nothing to repeat at column ${i2 - 1}`);
      };
      var str = util.strToChars(regexpStr);
      l = str.length;
      while (i < l) {
        c = str[i++];
        switch (c) {
          case "\\":
            c = str[i++];
            switch (c) {
              case "b":
                last.push(positions.wordBoundary());
                break;
              case "B":
                last.push(positions.nonWordBoundary());
                break;
              case "w":
                last.push(sets.words());
                break;
              case "W":
                last.push(sets.notWords());
                break;
              case "d":
                last.push(sets.ints());
                break;
              case "D":
                last.push(sets.notInts());
                break;
              case "s":
                last.push(sets.whitespace());
                break;
              case "S":
                last.push(sets.notWhitespace());
                break;
              default:
                if (/\d/.test(c)) {
                  last.push({ type: types.REFERENCE, value: parseInt(c, 10) });
                } else {
                  last.push({ type: types.CHAR, value: c.charCodeAt(0) });
                }
            }
            break;
          case "^":
            last.push(positions.begin());
            break;
          case "$":
            last.push(positions.end());
            break;
          case "[":
            var not;
            if (str[i] === "^") {
              not = true;
              i++;
            } else {
              not = false;
            }
            var classTokens = util.tokenizeClass(str.slice(i), regexpStr);
            i += classTokens[1];
            last.push({
              type: types.SET,
              set: classTokens[0],
              not
            });
            break;
          case ".":
            last.push(sets.anyChar());
            break;
          case "(":
            var group = {
              type: types.GROUP,
              stack: [],
              remember: true
            };
            c = str[i];
            if (c === "?") {
              c = str[i + 1];
              i += 2;
              if (c === "=") {
                group.followedBy = true;
              } else if (c === "!") {
                group.notFollowedBy = true;
              } else if (c !== ":") {
                util.error(regexpStr, `Invalid group, character '${c}' after '?' at column ${i - 1}`);
              }
              group.remember = false;
            }
            last.push(group);
            groupStack.push(lastGroup);
            lastGroup = group;
            last = group.stack;
            break;
          case ")":
            if (groupStack.length === 0) {
              util.error(regexpStr, `Unmatched ) at column ${i - 1}`);
            }
            lastGroup = groupStack.pop();
            last = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
            break;
          case "|":
            if (!lastGroup.options) {
              lastGroup.options = [lastGroup.stack];
              delete lastGroup.stack;
            }
            var stack = [];
            lastGroup.options.push(stack);
            last = stack;
            break;
          case "{":
            var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
            if (rs !== null) {
              if (last.length === 0) {
                repeatErr(i);
              }
              min = parseInt(rs[1], 10);
              max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
              i += rs[0].length;
              last.push({
                type: types.REPETITION,
                min,
                max,
                value: last.pop()
              });
            } else {
              last.push({
                type: types.CHAR,
                value: 123
              });
            }
            break;
          case "?":
            if (last.length === 0) {
              repeatErr(i);
            }
            last.push({
              type: types.REPETITION,
              min: 0,
              max: 1,
              value: last.pop()
            });
            break;
          case "+":
            if (last.length === 0) {
              repeatErr(i);
            }
            last.push({
              type: types.REPETITION,
              min: 1,
              max: Infinity,
              value: last.pop()
            });
            break;
          case "*":
            if (last.length === 0) {
              repeatErr(i);
            }
            last.push({
              type: types.REPETITION,
              min: 0,
              max: Infinity,
              value: last.pop()
            });
            break;
          default:
            last.push({
              type: types.CHAR,
              value: c.charCodeAt(0)
            });
        }
      }
      if (groupStack.length !== 0) {
        util.error(regexpStr, "Unterminated group");
      }
      return start;
    };
    module2.exports.types = types;
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/safe-regex2/index.js
var require_safe_regex2 = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/safe-regex2/index.js"(exports2, module2) {
    "use strict";
    var parse = require_lib();
    var types = parse.types;
    module2.exports = function(re, opts) {
      if (!opts)
        opts = {};
      var replimit = opts.limit === void 0 ? 25 : opts.limit;
      if (isRegExp(re))
        re = re.source;
      else if (typeof re !== "string")
        re = String(re);
      try {
        re = parse(re);
      } catch (err) {
        return false;
      }
      var reps = 0;
      return function walk(node, starHeight) {
        var i;
        var ok;
        var len;
        if (node.type === types.REPETITION) {
          starHeight++;
          reps++;
          if (starHeight > 1)
            return false;
          if (reps > replimit)
            return false;
        }
        if (node.options) {
          for (i = 0, len = node.options.length; i < len; i++) {
            ok = walk({ stack: node.options[i] }, starHeight);
            if (!ok)
              return false;
          }
        }
        var stack = node.stack || node.value && node.value.stack;
        if (!stack)
          return true;
        for (i = 0; i < stack.length; i++) {
          ok = walk(stack[i], starHeight);
          if (!ok)
            return false;
        }
        return true;
      }(re, 0);
    };
    function isRegExp(x) {
      return {}.toString.call(x) === "[object RegExp]";
    }
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/pretty-print.js
var require_pretty_print = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/pretty-print.js"(exports2, module2) {
    "use strict";
    var indent = "    ";
    var branchIndent = "\u2502   ";
    var midBranchIndent = "\u251C\u2500\u2500 ";
    var endBranchIndent = "\u2514\u2500\u2500 ";
    var wildcardDelimiter = "*";
    var pathDelimiter = "/";
    var pathRegExp = /(?=\/)/;
    function parseFunctionName(fn) {
      let fName = fn.name || "";
      fName = fName.replace("bound", "").trim();
      fName = (fName || "anonymous") + "()";
      return fName;
    }
    function parseMeta(meta) {
      if (Array.isArray(meta))
        return meta.map((m) => parseMeta(m));
      if (typeof meta === "symbol")
        return meta.toString();
      if (typeof meta === "function")
        return parseFunctionName(meta);
      return meta;
    }
    function buildMetaObject(route, metaArray) {
      const out = {};
      const cleanMeta = this.buildPrettyMeta(route);
      if (!Array.isArray(metaArray))
        metaArray = cleanMeta ? Reflect.ownKeys(cleanMeta) : [];
      metaArray.forEach((m) => {
        const metaKey = typeof m === "symbol" ? m.toString() : m;
        if (cleanMeta && cleanMeta[m]) {
          out[metaKey] = parseMeta(cleanMeta[m]);
        }
      });
      return out;
    }
    function prettyPrintRoutesArray2(routeArray, opts = {}) {
      if (!this.buildPrettyMeta)
        throw new Error("buildPrettyMeta not defined");
      opts.includeMeta = opts.includeMeta || null;
      const mergedRouteArray = [];
      let tree = "";
      routeArray.sort((a, b) => {
        if (!a.path || !b.path)
          return 0;
        return a.path.localeCompare(b.path);
      });
      for (let i = 0; i < routeArray.length; i++) {
        const route = routeArray[i];
        const pathExists = mergedRouteArray.find((r) => route.path === r.path);
        if (pathExists) {
          pathExists.handlers.push({
            method: route.method,
            opts: route.opts.constraints || void 0,
            meta: opts.includeMeta ? buildMetaObject.call(this, route, opts.includeMeta) : null
          });
          continue;
        }
        const routeHandler = {
          method: route.method,
          opts: route.opts.constraints || void 0,
          meta: opts.includeMeta ? buildMetaObject.call(this, route, opts.includeMeta) : null
        };
        mergedRouteArray.push({
          path: route.path,
          methods: [route.method],
          opts: [route.opts],
          handlers: [routeHandler]
        });
      }
      if (!mergedRouteArray.filter((r) => r.path === pathDelimiter).length) {
        const rootPath = {
          path: pathDelimiter,
          truncatedPath: "",
          methods: [],
          opts: [],
          handlers: [{}]
        };
        if (mergedRouteArray.filter((r) => r.path === wildcardDelimiter).length) {
          mergedRouteArray.splice(1, 0, rootPath);
        } else {
          mergedRouteArray.unshift(rootPath);
        }
      }
      const routeTree = buildRouteTree(mergedRouteArray);
      routeTree.forEach((rootBranch, idx) => {
        tree += drawBranch(rootBranch, null, idx === routeTree.length - 1, false, true);
        tree += "\n";
      });
      return tree;
    }
    function buildRouteTree(mergedRouteArray, rootPath) {
      rootPath = rootPath || pathDelimiter;
      const result = [];
      const temp = { result };
      mergedRouteArray.forEach((route, idx) => {
        let splitPath = route.path.split(pathRegExp);
        if (splitPath[0] !== pathDelimiter) {
          if (splitPath[0] !== wildcardDelimiter)
            splitPath = [pathDelimiter, splitPath[0].slice(1), ...splitPath.slice(1)];
        }
        splitPath.reduce((acc, path, pidx) => {
          if (!acc[path]) {
            acc[path] = { result: [] };
            const pathSeg = { path, children: acc[path].result };
            if (pidx === splitPath.length - 1)
              pathSeg.handlers = route.handlers;
            acc.result.push(pathSeg);
          }
          return acc[path];
        }, temp);
      });
      return result;
    }
    function drawBranch(pathSeg, prefix, endBranch, noPrefix, rootBranch) {
      let branch = "";
      if (!noPrefix && !rootBranch)
        branch += "\n";
      if (!noPrefix)
        branch += `${prefix || ""}${endBranch ? endBranchIndent : midBranchIndent}`;
      branch += `${pathSeg.path}`;
      if (pathSeg.handlers) {
        const flatHandlers = pathSeg.handlers.reduce((acc, curr) => {
          const match = acc.findIndex((h) => JSON.stringify(h.opts) === JSON.stringify(curr.opts));
          if (match !== -1) {
            acc[match].method = [acc[match].method, curr.method].join(", ");
          } else {
            acc.push(curr);
          }
          return acc;
        }, []);
        flatHandlers.forEach((handler, idx) => {
          if (idx > 0)
            branch += `${noPrefix ? "" : prefix || ""}${endBranch ? indent : branchIndent}${pathSeg.path}`;
          branch += ` (${handler.method || "-"})`;
          if (handler.opts && JSON.stringify(handler.opts) !== "{}")
            branch += ` ${JSON.stringify(handler.opts)}`;
          if (handler.meta) {
            Reflect.ownKeys(handler.meta).forEach((m, hidx) => {
              branch += `
${noPrefix ? "" : prefix || ""}${endBranch ? indent : branchIndent}`;
              branch += `\u2022 (${m}) ${JSON.stringify(handler.meta[m])}`;
            });
          }
          if (flatHandlers.length > 1 && idx !== flatHandlers.length - 1)
            branch += "\n";
        });
      } else {
        if (pathSeg.children.length > 1)
          branch += " (-)";
      }
      if (!noPrefix)
        prefix = `${prefix || ""}${endBranch ? indent : branchIndent}`;
      pathSeg.children.forEach((child, idx) => {
        const endBranch2 = idx === pathSeg.children.length - 1;
        const skipPrefix = !pathSeg.handlers && pathSeg.children.length === 1;
        branch += drawBranch(child, prefix, endBranch2, skipPrefix);
      });
      return branch;
    }
    function prettyPrintFlattenedNode2(flattenedNode, prefix, tail, opts) {
      if (!this.buildPrettyMeta)
        throw new Error("buildPrettyMeta not defined");
      opts.includeMeta = opts.includeMeta || null;
      let paramName = "";
      const printHandlers = [];
      for (const node of flattenedNode.nodes) {
        for (const handler of node.handlers) {
          printHandlers.push(__spreadValues({ method: node.method }, handler));
        }
      }
      if (printHandlers.length) {
        printHandlers.forEach((handler, index) => {
          let suffix = `(${handler.method || "-"})`;
          if (Object.keys(handler.constraints).length > 0) {
            suffix += " " + JSON.stringify(handler.constraints);
          }
          let name = "";
          const paramIndices = flattenedNode.prefix.split("").map((ch, idx) => ch === ":" ? idx : null).filter((idx) => idx !== null);
          if (paramIndices.length) {
            let prevLoc = 0;
            paramIndices.forEach((loc, idx) => {
              name += flattenedNode.prefix.slice(prevLoc, loc + 1);
              name += handler.params[handler.params.length - paramIndices.length + idx];
              if (idx === paramIndices.length - 1)
                name += flattenedNode.prefix.slice(loc + 1);
              prevLoc = loc + 1;
            });
          } else {
            name = flattenedNode.prefix;
          }
          if (index === 0) {
            paramName += `${name} ${suffix}`;
          } else {
            paramName += `
${prefix}${tail ? indent : branchIndent}${name} ${suffix}`;
          }
          if (opts.includeMeta) {
            const meta = buildMetaObject.call(this, handler, opts.includeMeta);
            Object.keys(meta).forEach((m, hidx) => {
              paramName += `
${prefix || ""}${tail ? indent : branchIndent}`;
              paramName += `\u2022 (${m}) ${JSON.stringify(meta[m])}`;
            });
          }
        });
      } else {
        paramName = flattenedNode.prefix;
      }
      let tree = `${prefix}${tail ? endBranchIndent : midBranchIndent}${paramName}
`;
      prefix = `${prefix}${tail ? indent : branchIndent}`;
      const labels = Object.keys(flattenedNode.children);
      for (let i = 0; i < labels.length; i++) {
        const child = flattenedNode.children[labels[i]];
        tree += prettyPrintFlattenedNode2.call(this, child, prefix, i === labels.length - 1, opts);
      }
      return tree;
    }
    function flattenNode2(flattened, node) {
      if (node.handlers.length > 0) {
        flattened.nodes.push(node);
      }
      if (node.children) {
        for (const child of Object.values(node.children)) {
          const childPrefixSegments = child.prefix.split(pathRegExp);
          let cursor = flattened;
          let parent;
          for (const segment of childPrefixSegments) {
            parent = cursor;
            cursor = cursor.children[segment];
            if (!cursor) {
              cursor = {
                prefix: segment,
                nodes: [],
                children: {}
              };
              parent.children[segment] = cursor;
            }
          }
          flattenNode2(cursor, child);
        }
      }
    }
    function compressFlattenedNode2(flattenedNode) {
      const childKeys = Object.keys(flattenedNode.children);
      if (flattenedNode.nodes.length === 0 && childKeys.length === 1) {
        const child = flattenedNode.children[childKeys[0]];
        if (child.nodes.length <= 1) {
          compressFlattenedNode2(child);
          flattenedNode.nodes = child.nodes;
          flattenedNode.prefix += child.prefix;
          flattenedNode.children = child.children;
          return flattenedNode;
        }
      }
      for (const key of Object.keys(flattenedNode.children)) {
        compressFlattenedNode2(flattenedNode.children[key]);
      }
      return flattenedNode;
    }
    module2.exports = { flattenNode: flattenNode2, compressFlattenedNode: compressFlattenedNode2, prettyPrintFlattenedNode: prettyPrintFlattenedNode2, prettyPrintRoutesArray: prettyPrintRoutesArray2 };
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/fast-deep-equal/index.js"(exports2, module2) {
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

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/node.js
var require_node = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/node.js"(exports2, module2) {
    "use strict";
    var assert2 = require("assert");
    var deepEqual = require_fast_deep_equal();
    var types = {
      STATIC: 0,
      PARAM: 1,
      MATCH_ALL: 2,
      REGEX: 3,
      MULTI_PARAM: 4
    };
    function Node2(options) {
      options = options || {};
      this.prefix = options.prefix || "/";
      this.label = this.prefix[0];
      this.method = options.method;
      this.handlers = options.handlers || [];
      this.unconstrainedHandler = options.unconstrainedHandler || null;
      this.children = options.children || {};
      this.numberOfChildren = Object.keys(this.children).length;
      this.kind = options.kind || this.types.STATIC;
      this.regex = options.regex || null;
      this.wildcardChild = null;
      this.parametricBrother = null;
      this.constrainer = options.constrainer;
      this.hasConstraints = options.hasConstraints || false;
      this.constrainedHandlerStores = null;
    }
    Object.defineProperty(Node2.prototype, "types", {
      value: types
    });
    Node2.prototype.getLabel = function() {
      return this.prefix[0];
    };
    Node2.prototype.addChild = function(node) {
      var label = "";
      switch (node.kind) {
        case this.types.STATIC:
          label = node.getLabel();
          break;
        case this.types.PARAM:
        case this.types.REGEX:
        case this.types.MULTI_PARAM:
          label = ":";
          break;
        case this.types.MATCH_ALL:
          this.wildcardChild = node;
          label = "*";
          break;
        default:
          throw new Error(`Unknown node kind: ${node.kind}`);
      }
      assert2(this.children[label] === void 0, `There is already a child with label '${label}'`);
      this.children[label] = node;
      this.numberOfChildren = Object.keys(this.children).length;
      const labels = Object.keys(this.children);
      var parametricBrother = this.parametricBrother;
      for (var i = 0; i < labels.length; i++) {
        const child = this.children[labels[i]];
        if (child.label === ":") {
          parametricBrother = child;
          break;
        }
      }
      const iterate = (node2) => {
        if (!node2) {
          return;
        }
        if (node2.kind !== this.types.STATIC) {
          return;
        }
        if (node2 !== this) {
          node2.parametricBrother = parametricBrother || node2.parametricBrother;
        }
        const labels2 = Object.keys(node2.children);
        for (var i2 = 0; i2 < labels2.length; i2++) {
          iterate(node2.children[labels2[i2]]);
        }
      };
      iterate(this);
      return this;
    };
    Node2.prototype.reset = function(prefix) {
      this.prefix = prefix;
      this.children = {};
      this.handlers = [];
      this.unconstrainedHandler = null;
      this.kind = this.types.STATIC;
      this.numberOfChildren = 0;
      this.regex = null;
      this.wildcardChild = null;
      this.hasConstraints = false;
      this._decompileGetHandlerMatchingConstraints();
      return this;
    };
    Node2.prototype.split = function(length) {
      const newChild = new Node2({
        prefix: this.prefix.slice(length),
        children: this.children,
        kind: this.kind,
        method: this.method,
        handlers: this.handlers.slice(0),
        regex: this.regex,
        constrainer: this.constrainer,
        hasConstraints: this.hasConstraints,
        unconstrainedHandler: this.unconstrainedHandler
      });
      if (this.wildcardChild !== null) {
        newChild.wildcardChild = this.wildcardChild;
      }
      this.reset(this.prefix.slice(0, length));
      this.addChild(newChild);
      return newChild;
    };
    Node2.prototype.findByLabel = function(path) {
      return this.children[path[0]];
    };
    Node2.prototype.findMatchingChild = function(derivedConstraints, path) {
      var child = this.children[path[0]];
      if (child !== void 0 && (child.numberOfChildren > 0 || child.getMatchingHandler(derivedConstraints) !== null)) {
        if (path.slice(0, child.prefix.length) === child.prefix) {
          return child;
        }
      }
      child = this.children[":"];
      if (child !== void 0 && (child.numberOfChildren > 0 || child.getMatchingHandler(derivedConstraints) !== null)) {
        return child;
      }
      child = this.children["*"];
      if (child !== void 0 && (child.numberOfChildren > 0 || child.getMatchingHandler(derivedConstraints) !== null)) {
        return child;
      }
      return null;
    };
    Node2.prototype.addHandler = function(handler, params, store, constraints) {
      if (!handler)
        return;
      assert2(!this.getHandler(constraints), `There is already a handler with constraints '${JSON.stringify(constraints)}' and method '${this.method}'`);
      const handlerObject = {
        handler,
        params,
        constraints,
        store: store || null,
        paramsLength: params.length
      };
      this.handlers.push(handlerObject);
      this.handlers.sort((a, b) => Object.keys(a.constraints).length - Object.keys(b.constraints).length);
      if (Object.keys(constraints).length > 0) {
        this.hasConstraints = true;
      } else {
        this.unconstrainedHandler = handlerObject;
      }
      if (this.hasConstraints && this.handlers.length > 32) {
        throw new Error("find-my-way supports a maximum of 32 route handlers per node when there are constraints, limit reached");
      }
      this._decompileGetHandlerMatchingConstraints();
    };
    Node2.prototype.getHandler = function(constraints) {
      return this.handlers.filter((handler) => deepEqual(constraints, handler.constraints))[0];
    };
    function compileThenGetHandlerMatchingConstraints(derivedConstraints) {
      this._compileGetHandlerMatchingConstraints();
      return this._getHandlerMatchingConstraints(derivedConstraints);
    }
    Node2.prototype.getMatchingHandler = function(derivedConstraints) {
      if (this.hasConstraints) {
        return this._getHandlerMatchingConstraints(derivedConstraints);
      } else {
        if (derivedConstraints && derivedConstraints.__hasMustMatchValues) {
          return null;
        } else {
          return this.unconstrainedHandler;
        }
      }
    };
    Node2.prototype._getHandlerMatchingConstraints = compileThenGetHandlerMatchingConstraints;
    Node2.prototype._decompileGetHandlerMatchingConstraints = function() {
      this._getHandlerMatchingConstraints = compileThenGetHandlerMatchingConstraints;
      return null;
    };
    Node2.prototype._buildConstraintStore = function(constraint) {
      const store = this.constrainer.newStoreForConstraint(constraint);
      for (let i = 0; i < this.handlers.length; i++) {
        const handler = this.handlers[i];
        const mustMatchValue = handler.constraints[constraint];
        if (typeof mustMatchValue !== "undefined") {
          let indexes = store.get(mustMatchValue);
          if (!indexes) {
            indexes = 0;
          }
          indexes |= 1 << i;
          store.set(mustMatchValue, indexes);
        }
      }
      return store;
    };
    Node2.prototype._constrainedIndexBitmask = function(constraint) {
      let mask = 0;
      for (let i = 0; i < this.handlers.length; i++) {
        const handler = this.handlers[i];
        if (handler.constraints && constraint in handler.constraints) {
          mask |= 1 << i;
        }
      }
      return ~mask;
    };
    Node2.prototype._compileGetHandlerMatchingConstraints = function() {
      this.constrainedHandlerStores = {};
      let constraints = new Set();
      for (const handler of this.handlers) {
        for (const key of Object.keys(handler.constraints)) {
          constraints.add(key);
        }
      }
      constraints = Array.from(constraints);
      const lines = [];
      constraints.sort((a, b) => a === "version" ? 1 : 0);
      for (const constraint of constraints) {
        this.constrainedHandlerStores[constraint] = this._buildConstraintStore(constraint);
      }
      lines.push(`
  let candidates = 0b${"1".repeat(this.handlers.length)}
  let mask, matches
  `);
      for (const constraint of constraints) {
        lines.push(`
    mask = ${this._constrainedIndexBitmask(constraint)}
    value = derivedConstraints.${constraint}
    `);
        lines.push(`
    if (typeof value === "undefined") {
      candidates &= mask
    } else {
      matches = this.constrainedHandlerStores.${constraint}.get(value) || 0
      candidates &= (matches | mask)
    }
    if (candidates === 0) return null;
    `);
      }
      lines.push(`
  const handler = this.handlers[Math.floor(Math.log2(candidates))]
  if (handler && derivedConstraints.__hasMustMatchValues && handler === this.unconstrainedHandler) {
    return null;
  }
  return handler;
  `);
      this._getHandlerMatchingConstraints = new Function("derivedConstraints", lines.join("\n"));
    };
    module2.exports = Node2;
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/semver-store/index.js
var require_semver_store = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/semver-store/index.js"(exports2, module2) {
    "use strict";
    function SemVerStore() {
      if (!(this instanceof SemVerStore)) {
        return new SemVerStore();
      }
      this.tree = new Node2();
    }
    SemVerStore.prototype.set = function(version, store) {
      if (typeof version !== "string") {
        throw new TypeError("Version should be a string");
      }
      var currentNode = this.tree;
      version = version.split(".");
      while (version.length) {
        currentNode = currentNode.addChild(new Node2(version.shift()));
      }
      currentNode.setStore(store);
      return this;
    };
    SemVerStore.prototype.get = function(version) {
      if (typeof version !== "string")
        return null;
      if (version === "*")
        version = "x.x.x";
      var node = this.tree;
      var firstDot = version.indexOf(".");
      var secondDot = version.indexOf(".", firstDot + 1);
      var major = version.slice(0, firstDot);
      var minor = secondDot === -1 ? version.slice(firstDot + 1) : version.slice(firstDot + 1, secondDot);
      var patch = secondDot === -1 ? "x" : version.slice(secondDot + 1);
      node = node.getChild(major);
      if (node === null)
        return null;
      node = node.getChild(minor);
      if (node === null)
        return null;
      node = node.getChild(patch);
      if (node === null)
        return null;
      return node.store;
    };
    SemVerStore.prototype.del = function(version) {
      if (typeof version !== "string") {
        throw new TypeError("Version should be a string");
      }
      var firstDot = version.indexOf(".");
      var secondDot = version.indexOf(".", firstDot + 1);
      var major = version.slice(0, firstDot);
      var minor = secondDot === -1 ? version.slice(firstDot + 1) : version.slice(firstDot + 1, secondDot);
      var patch = secondDot === -1 ? "x" : version.slice(secondDot + 1);
      var majorNode = this.tree.children[major];
      if (majorNode == null)
        return this;
      if (minor === "x") {
        this.tree.removeChild(major);
        return this;
      }
      var minorNode = majorNode.children[minor];
      if (minorNode == null)
        return this;
      if (patch === "x") {
        this.tree.children[major].removeChild(minor);
        if (this.tree.children[major].length === 0) {
          this.tree.removeChild(major);
        }
        return this;
      }
      var patchNode = minorNode.children[patch];
      if (patchNode == null)
        return this;
      this.tree.children[major].children[minor].removeChild(patch);
      if (this.tree.children[major].children[minor].length === 0) {
        this.tree.children[major].removeChild(minor);
        if (this.tree.children[major].length === 0) {
          this.tree.removeChild(major);
        }
      }
      return this;
    };
    SemVerStore.prototype.empty = function() {
      this.tree = new Node2();
      return this;
    };
    function getMax(arr) {
      var l = arr.length;
      var max = arr[0];
      for (var i = 1; i < l; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      return max;
    }
    function Node2(prefix, children, store) {
      this.prefix = Number(prefix) || 0;
      this.children = children || null;
      this.childrenPrefixes = children ? Object.keys(children) : [];
      this.store = store || null;
    }
    Node2.prototype.getChild = function(prefix) {
      if (this.children === null)
        return null;
      if (prefix === "x") {
        var max = getMax(this.childrenPrefixes);
        return this.children[max];
      }
      return this.children[prefix] || null;
    };
    Node2.prototype.addChild = function(node) {
      this.children = this.children || {};
      var child = this.getChild(node.prefix);
      if (child === null) {
        this.children[node.prefix] = node;
        this.childrenPrefixes.push(node.prefix);
      }
      return child || node;
    };
    Node2.prototype.removeChild = function(prefix) {
      if (prefix === "x") {
        this.children = null;
        this.childrenPrefixes = [];
        return this;
      }
      if (this.children[prefix] !== void 0) {
        prefix = Number(prefix);
        delete this.children[prefix];
        this.childrenPrefixes.splice(this.childrenPrefixes.indexOf(prefix), 1);
      }
      return this;
    };
    Node2.prototype.setStore = function(store) {
      this.store = store;
      return this;
    };
    Object.defineProperty(Node2.prototype, "length", {
      get: function() {
        return this.childrenPrefixes.length;
      }
    });
    module2.exports = SemVerStore;
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/strategies/accept-version.js
var require_accept_version = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/strategies/accept-version.js"(exports2, module2) {
    "use strict";
    var SemVerStore = require_semver_store();
    var assert2 = require("assert");
    module2.exports = {
      name: "version",
      mustMatchWhenDerived: true,
      storage: SemVerStore,
      validate(value) {
        assert2(typeof value === "string", "Version should be a string");
      }
    };
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/strategies/accept-host.js
var require_accept_host = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/strategies/accept-host.js"(exports2, module2) {
    "use strict";
    var assert2 = require("assert");
    function HostStorage() {
      var hosts = {};
      var regexHosts = [];
      return {
        get: (host) => {
          var exact = hosts[host];
          if (exact) {
            return exact;
          }
          var item;
          for (var i = 0; i < regexHosts.length; i++) {
            item = regexHosts[i];
            if (item.host.test(host)) {
              return item.value;
            }
          }
        },
        set: (host, value) => {
          if (host instanceof RegExp) {
            regexHosts.push({ host, value });
          } else {
            hosts[host] = value;
          }
        },
        del: (host) => {
          delete hosts[host];
          regexHosts = regexHosts.filter((obj) => String(obj.host) !== String(host));
        },
        empty: () => {
          hosts = {};
          regexHosts = [];
        }
      };
    }
    module2.exports = {
      name: "host",
      mustMatchWhenDerived: false,
      storage: HostStorage,
      validate(value) {
        assert2(typeof value === "string" || Object.prototype.toString.call(value) === "[object RegExp]", "Host should be a string or a RegExp");
      }
    };
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/constrainer.js
var require_constrainer = __commonJS({
  "../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/lib/constrainer.js"(exports2, module2) {
    "use strict";
    var acceptVersionStrategy = require_accept_version();
    var acceptHostStrategy = require_accept_host();
    var assert2 = require("assert");
    var Constrainer2 = class {
      constructor(customStrategies) {
        this.strategies = {
          version: acceptVersionStrategy,
          host: acceptHostStrategy
        };
        this.strategiesInUse = new Set();
        if (customStrategies) {
          var kCustomStrategies = Object.keys(customStrategies);
          var strategy;
          for (var i = 0; i < kCustomStrategies.length; i++) {
            strategy = customStrategies[kCustomStrategies[i]];
            assert2(typeof strategy.name === "string" && strategy.name !== "", "strategy.name is required.");
            assert2(strategy.storage && typeof strategy.storage === "function", "strategy.storage function is required.");
            assert2(strategy.deriveConstraint && typeof strategy.deriveConstraint === "function", "strategy.deriveConstraint function is required.");
            strategy.isCustom = true;
            this.strategies[strategy.name] = strategy;
            if (strategy.mustMatchWhenDerived) {
              this.noteUsage({ [kCustomStrategies[i]]: strategy });
            }
          }
        }
      }
      deriveConstraints(req, ctx) {
        return void 0;
      }
      noteUsage(constraints) {
        if (constraints) {
          const beforeSize = this.strategiesInUse.size;
          for (const key in constraints) {
            this.strategiesInUse.add(key);
          }
          if (beforeSize !== this.strategiesInUse.size) {
            this._buildDeriveConstraints();
          }
        }
      }
      newStoreForConstraint(constraint) {
        if (!this.strategies[constraint]) {
          throw new Error(`No strategy registered for constraint key ${constraint}`);
        }
        return this.strategies[constraint].storage();
      }
      validateConstraints(constraints) {
        for (const key in constraints) {
          const value = constraints[key];
          if (typeof value === "undefined") {
            throw new Error("Can't pass an undefined constraint value, must pass null or no key at all");
          }
          const strategy = this.strategies[key];
          if (!strategy) {
            throw new Error(`No strategy registered for constraint key ${key}`);
          }
          if (strategy.validate) {
            strategy.validate(value);
          }
        }
      }
      _buildDeriveConstraints() {
        if (this.strategiesInUse.size === 0)
          return;
        const lines = [`
      const derivedConstraints = {
        __hasMustMatchValues: false,
    `];
        const mustMatchKeys = [];
        for (const key of this.strategiesInUse) {
          const strategy = this.strategies[key];
          if (!strategy.isCustom) {
            if (key === "version") {
              lines.push("   version: req.headers['accept-version'],");
            } else if (key === "host") {
              lines.push("   host: req.headers.host,");
            } else {
              throw new Error("unknown non-custom strategy for compiling constraint derivation function");
            }
          } else {
            lines.push(`  ${strategy.name}: this.strategies.${key}.deriveConstraint(req, ctx),`);
          }
          if (strategy.mustMatchWhenDerived) {
            mustMatchKeys.push(key);
          }
        }
        lines.push("}");
        if (mustMatchKeys.length > 0) {
          lines.push(`derivedConstraints.__hasMustMatchValues = !!(${mustMatchKeys.map((key) => `derivedConstraints.${key}`).join(" || ")})`);
        }
        lines.push("return derivedConstraints");
        this.deriveConstraints = new Function("req", "ctx", lines.join("\n")).bind(this);
      }
    };
    module2.exports = Constrainer2;
  }
});

// ../../../../.kawi/packages/9b05095e5ac88813063ec49590f1f2cb/node_modules/find-my-way/index.js
"use strict";
var assert = require("assert");
var http = require("http");
var fastDecode = require_fast_decode_uri_component();
var isRegexSafe = require_safe_regex2();
var { flattenNode, compressFlattenedNode, prettyPrintFlattenedNode, prettyPrintRoutesArray } = require_pretty_print();
var Node = require_node();
var Constrainer = require_constrainer();
var NODE_TYPES = Node.prototype.types;
var httpMethods = http.METHODS;
var FULL_PATH_REGEXP = /^https?:\/\/.*?\//;
if (!isRegexSafe(FULL_PATH_REGEXP)) {
  throw new Error("the FULL_PATH_REGEXP is not safe, update this module");
}
function Router(opts) {
  if (!(this instanceof Router)) {
    return new Router(opts);
  }
  opts = opts || {};
  if (opts.defaultRoute) {
    assert(typeof opts.defaultRoute === "function", "The default route must be a function");
    this.defaultRoute = opts.defaultRoute;
  } else {
    this.defaultRoute = null;
  }
  if (opts.onBadUrl) {
    assert(typeof opts.onBadUrl === "function", "The bad url handler must be a function");
    this.onBadUrl = opts.onBadUrl;
  } else {
    this.onBadUrl = null;
  }
  if (opts.buildPrettyMeta) {
    assert(typeof opts.buildPrettyMeta === "function", "buildPrettyMeta must be a function");
    this.buildPrettyMeta = opts.buildPrettyMeta;
  } else {
    this.buildPrettyMeta = defaultBuildPrettyMeta;
  }
  this.caseSensitive = opts.caseSensitive === void 0 ? true : opts.caseSensitive;
  this.ignoreTrailingSlash = opts.ignoreTrailingSlash || false;
  this.maxParamLength = opts.maxParamLength || 100;
  this.allowUnsafeRegex = opts.allowUnsafeRegex || false;
  this.constrainer = new Constrainer(opts.constraints);
  this.trees = {};
  this.routes = [];
}
Router.prototype.on = function on(method, path, opts, handler, store) {
  if (typeof opts === "function") {
    if (handler !== void 0) {
      store = handler;
    }
    handler = opts;
    opts = {};
  }
  assert(typeof path === "string", "Path should be a string");
  assert(path.length > 0, "The path could not be empty");
  assert(path[0] === "/" || path[0] === "*", "The first character of a path should be `/` or `*`");
  assert(typeof handler === "function", "Handler should be a function");
  this._on(method, path, opts, handler, store);
  if (this.ignoreTrailingSlash && path !== "/" && !path.endsWith("*")) {
    if (path.endsWith("/")) {
      this._on(method, path.slice(0, -1), opts, handler, store);
    } else {
      this._on(method, path + "/", opts, handler, store);
    }
  }
};
Router.prototype._on = function _on(method, path, opts, handler, store) {
  if (Array.isArray(method)) {
    for (var k = 0; k < method.length; k++) {
      this._on(method[k], path, opts, handler, store);
    }
    return;
  }
  assert(typeof method === "string", "Method should be a string");
  assert(httpMethods.indexOf(method) !== -1, `Method '${method}' is not an http method.`);
  let constraints = {};
  if (opts.constraints !== void 0) {
    assert(typeof opts.constraints === "object" && opts.constraints !== null, "Constraints should be an object");
    if (Object.keys(opts.constraints).length !== 0) {
      constraints = opts.constraints;
    }
  }
  this.constrainer.validateConstraints(constraints);
  this.constrainer.noteUsage(constraints);
  const params = [];
  var j = 0;
  this.routes.push({
    method,
    path,
    opts,
    handler,
    store
  });
  for (var i = 0, len = path.length; i < len; i++) {
    if (path.charCodeAt(i) === 58) {
      if (i !== len - 1 && path.charCodeAt(i + 1) === 58) {
        path = path.slice(0, i) + path.slice(i + 1);
        len = path.length;
        continue;
      }
      var nodeType = NODE_TYPES.PARAM;
      j = i + 1;
      var staticPart = path.slice(0, i);
      if (this.caseSensitive === false) {
        staticPart = staticPart.toLowerCase();
      }
      this._insert(method, staticPart, NODE_TYPES.STATIC, null, null, null, null, constraints);
      var isRegex = false;
      while (i < len && path.charCodeAt(i) !== 47) {
        isRegex = isRegex || path[i] === "(";
        if (isRegex) {
          i = getClosingParenthensePosition(path, i) + 1;
          break;
        } else if (path.charCodeAt(i) !== 45 && path.charCodeAt(i) !== 46) {
          i++;
        } else {
          break;
        }
      }
      if (isRegex && (i === len || path.charCodeAt(i) === 47)) {
        nodeType = NODE_TYPES.REGEX;
      } else if (i < len && path.charCodeAt(i) !== 47) {
        nodeType = NODE_TYPES.MULTI_PARAM;
      }
      var parameter = path.slice(j, i);
      var regex = isRegex ? parameter.slice(parameter.indexOf("("), i) : null;
      if (isRegex) {
        regex = new RegExp(regex);
        if (!this.allowUnsafeRegex) {
          assert(isRegexSafe(regex), `The regex '${regex.toString()}' is not safe!`);
        }
      }
      params.push(parameter.slice(0, isRegex ? parameter.indexOf("(") : i));
      path = path.slice(0, j) + path.slice(i);
      i = j;
      len = path.length;
      if (i === len) {
        var completedPath = path.slice(0, i);
        if (this.caseSensitive === false) {
          completedPath = completedPath.toLowerCase();
        }
        return this._insert(method, completedPath, nodeType, params, handler, store, regex, constraints);
      }
      staticPart = path.slice(0, i);
      if (this.caseSensitive === false) {
        staticPart = staticPart.toLowerCase();
      }
      this._insert(method, staticPart, nodeType, params, null, null, regex, constraints);
      i--;
    } else if (path.charCodeAt(i) === 42) {
      this._insert(method, path.slice(0, i), NODE_TYPES.STATIC, null, null, null, null, constraints);
      params.push("*");
      return this._insert(method, path.slice(0, len), NODE_TYPES.MATCH_ALL, params, handler, store, null, constraints);
    }
  }
  if (this.caseSensitive === false) {
    path = path.toLowerCase();
  }
  this._insert(method, path, NODE_TYPES.STATIC, params, handler, store, null, constraints);
};
Router.prototype._insert = function _insert(method, path, kind, params, handler, store, regex, constraints) {
  const route = path;
  var prefix = "";
  var pathLen = 0;
  var prefixLen = 0;
  var len = 0;
  var max = 0;
  var node = null;
  var currentNode = this.trees[method];
  if (typeof currentNode === "undefined") {
    currentNode = new Node({ method, constrainer: this.constrainer });
    this.trees[method] = currentNode;
  }
  while (true) {
    prefix = currentNode.prefix;
    prefixLen = prefix.length;
    pathLen = path.length;
    len = 0;
    max = pathLen < prefixLen ? pathLen : prefixLen;
    while (len < max && path[len] === prefix[len])
      len++;
    if (len < prefixLen) {
      node = currentNode.split(len);
      if (len === pathLen) {
        assert(!currentNode.getHandler(constraints), `Method '${method}' already declared for route '${route}' with constraints '${JSON.stringify(constraints)}'`);
        currentNode.addHandler(handler, params, store, constraints);
        currentNode.kind = kind;
      } else {
        node = new Node({
          method,
          prefix: path.slice(len),
          kind,
          handlers: null,
          regex,
          constrainer: this.constrainer
        });
        node.addHandler(handler, params, store, constraints);
        currentNode.addChild(node);
      }
    } else if (len < pathLen) {
      path = path.slice(len);
      node = currentNode.findByLabel(path);
      if (node) {
        currentNode = node;
        continue;
      }
      node = new Node({ method, prefix: path, kind, handlers: null, regex, constrainer: this.constrainer });
      node.addHandler(handler, params, store, constraints);
      currentNode.addChild(node);
    } else if (handler) {
      assert(!currentNode.getHandler(constraints), `Method '${method}' already declared for route '${route}' with constraints '${JSON.stringify(constraints)}'`);
      currentNode.addHandler(handler, params, store, constraints);
    }
    return;
  }
};
Router.prototype.reset = function reset() {
  this.trees = {};
  this.routes = [];
};
Router.prototype.off = function off(method, path) {
  var self = this;
  if (Array.isArray(method)) {
    return method.map(function(method2) {
      return self.off(method2, path);
    });
  }
  assert(typeof method === "string", "Method should be a string");
  assert(httpMethods.indexOf(method) !== -1, `Method '${method}' is not an http method.`);
  assert(typeof path === "string", "Path should be a string");
  assert(path.length > 0, "The path could not be empty");
  assert(path[0] === "/" || path[0] === "*", "The first character of a path should be `/` or `*`");
  const ignoreTrailingSlash = this.ignoreTrailingSlash;
  var newRoutes = self.routes.filter(function(route) {
    if (!ignoreTrailingSlash) {
      return !(method === route.method && path === route.path);
    }
    if (path.endsWith("/")) {
      const routeMatches2 = path === route.path || path.slice(0, -1) === route.path;
      return !(method === route.method && routeMatches2);
    }
    const routeMatches = path === route.path || path + "/" === route.path;
    return !(method === route.method && routeMatches);
  });
  if (ignoreTrailingSlash) {
    newRoutes = newRoutes.filter(function(route, i, ar) {
      if (route.path.endsWith("/") && i < ar.length - 1) {
        return route.path.slice(0, -1) !== ar[i + 1].path;
      } else if (route.path.endsWith("/") === false && i < ar.length - 1) {
        return route.path + "/" !== ar[i + 1].path;
      }
      return true;
    });
  }
  self.reset();
  newRoutes.forEach(function(route) {
    self.on(route.method, route.path, route.opts, route.handler, route.store);
  });
};
Router.prototype.lookup = function lookup(req, res, ctx) {
  var handle = this.find(req.method, sanitizeUrl(req.url), this.constrainer.deriveConstraints(req, ctx));
  if (handle === null)
    return this._defaultRoute(req, res, ctx);
  return ctx === void 0 ? handle.handler(req, res, handle.params, handle.store) : handle.handler.call(ctx, req, res, handle.params, handle.store);
};
Router.prototype.find = function find(method, path, derivedConstraints) {
  var currentNode = this.trees[method];
  if (currentNode === void 0)
    return null;
  if (path.charCodeAt(0) !== 47) {
    path = path.replace(FULL_PATH_REGEXP, "/");
  }
  var originalPath = path;
  var originalPathLength = path.length;
  if (this.caseSensitive === false) {
    path = path.toLowerCase();
  }
  var maxParamLength = this.maxParamLength;
  var wildcardNode = null;
  var pathLenWildcard = 0;
  var decoded = null;
  var pindex = 0;
  var params = null;
  var i = 0;
  var idxInOriginalPath = 0;
  while (true) {
    var pathLen = path.length;
    var prefix = currentNode.prefix;
    if (pathLen === 0 || path === prefix) {
      var handle = derivedConstraints !== void 0 ? currentNode.getMatchingHandler(derivedConstraints) : currentNode.unconstrainedHandler;
      if (handle !== null && handle !== void 0) {
        var paramsObj = {};
        if (handle.paramsLength > 0) {
          var paramNames = handle.params;
          for (i = 0; i < handle.paramsLength; i++) {
            paramsObj[paramNames[i]] = params[i];
          }
        }
        return {
          handler: handle.handler,
          params: paramsObj,
          store: handle.store
        };
      }
    }
    var prefixLen = prefix.length;
    var len = 0;
    var previousPath = path;
    i = pathLen < prefixLen ? pathLen : prefixLen;
    while (len < i && path.charCodeAt(len) === prefix.charCodeAt(len))
      len++;
    if (len === prefixLen) {
      path = path.slice(len);
      pathLen = path.length;
      idxInOriginalPath += len;
    }
    var node = currentNode.findMatchingChild(derivedConstraints, path);
    if (node === null) {
      node = currentNode.parametricBrother;
      if (node === null) {
        return this._getWildcardNode(wildcardNode, originalPath, pathLenWildcard, derivedConstraints, params);
      }
      var goBack = previousPath.charCodeAt(0) === 47 ? previousPath : "/" + previousPath;
      if (originalPath.indexOf(goBack) === -1) {
        var pathDiff = originalPath.slice(0, originalPathLength - pathLen);
        previousPath = pathDiff.slice(pathDiff.lastIndexOf("/") + 1, pathDiff.length) + path;
      }
      idxInOriginalPath = idxInOriginalPath - (previousPath.length - path.length);
      path = previousPath;
      pathLen = previousPath.length;
      len = prefixLen;
    }
    var kind = node.kind;
    if (kind === NODE_TYPES.STATIC) {
      if (currentNode.wildcardChild !== null) {
        wildcardNode = currentNode.wildcardChild;
        pathLenWildcard = pathLen;
      }
      currentNode = node;
      continue;
    }
    if (len !== prefixLen) {
      return this._getWildcardNode(wildcardNode, originalPath, pathLenWildcard, derivedConstraints, params);
    }
    if (currentNode.wildcardChild !== null) {
      wildcardNode = currentNode.wildcardChild;
      pathLenWildcard = pathLen;
    }
    if (kind === NODE_TYPES.PARAM) {
      currentNode = node;
      i = path.indexOf("/");
      if (i === -1)
        i = pathLen;
      if (i > maxParamLength)
        return null;
      decoded = fastDecode(originalPath.slice(idxInOriginalPath, idxInOriginalPath + i));
      if (decoded === null) {
        return this.onBadUrl !== null ? this._onBadUrl(originalPath.slice(idxInOriginalPath, idxInOriginalPath + i)) : null;
      }
      params || (params = []);
      params[pindex++] = decoded;
      path = path.slice(i);
      idxInOriginalPath += i;
      continue;
    }
    if (kind === NODE_TYPES.MATCH_ALL) {
      decoded = fastDecode(originalPath.slice(idxInOriginalPath));
      if (decoded === null) {
        return this.onBadUrl !== null ? this._onBadUrl(originalPath.slice(idxInOriginalPath)) : null;
      }
      params || (params = []);
      params[pindex] = decoded;
      currentNode = node;
      path = "";
      continue;
    }
    if (kind === NODE_TYPES.REGEX) {
      currentNode = node;
      i = path.indexOf("/");
      if (i === -1)
        i = pathLen;
      if (i > maxParamLength)
        return null;
      decoded = fastDecode(originalPath.slice(idxInOriginalPath, idxInOriginalPath + i));
      if (decoded === null) {
        return this.onBadUrl !== null ? this._onBadUrl(originalPath.slice(idxInOriginalPath, idxInOriginalPath + i)) : null;
      }
      if (!node.regex.test(decoded))
        return null;
      params || (params = []);
      params[pindex++] = decoded;
      path = path.slice(i);
      idxInOriginalPath += i;
      continue;
    }
    if (kind === NODE_TYPES.MULTI_PARAM) {
      currentNode = node;
      i = 0;
      if (node.regex !== null) {
        var matchedParameter = path.match(node.regex);
        if (matchedParameter === null)
          return null;
        i = matchedParameter[1].length;
      } else {
        while (i < pathLen && path.charCodeAt(i) !== 47 && path.charCodeAt(i) !== 45 && path.charCodeAt(i) !== 46)
          i++;
        if (i > maxParamLength)
          return null;
      }
      decoded = fastDecode(originalPath.slice(idxInOriginalPath, idxInOriginalPath + i));
      if (decoded === null) {
        return this.onBadUrl !== null ? this._onBadUrl(originalPath.slice(idxInOriginalPath, idxInOriginalPath + i)) : null;
      }
      params || (params = []);
      params[pindex++] = decoded;
      path = path.slice(i);
      idxInOriginalPath += i;
      continue;
    }
    wildcardNode = null;
  }
};
Router.prototype._getWildcardNode = function(node, path, len, derivedConstraints, params) {
  if (node === null)
    return null;
  var decoded = fastDecode(path.slice(-len));
  if (decoded === null) {
    return this.onBadUrl !== null ? this._onBadUrl(path.slice(-len)) : null;
  }
  var handle = derivedConstraints !== void 0 ? node.getMatchingHandler(derivedConstraints) : node.unconstrainedHandler;
  if (handle !== null && handle !== void 0) {
    var paramsObj = {};
    if (handle.paramsLength > 0 && params !== null) {
      var paramNames = handle.params;
      for (i = 0; i < handle.paramsLength; i++) {
        paramsObj[paramNames[i]] = params[i];
      }
    }
    paramsObj["*"] = decoded;
    return {
      handler: handle.handler,
      params: paramsObj,
      store: handle.store
    };
  }
  return null;
};
Router.prototype._defaultRoute = function(req, res, ctx) {
  if (this.defaultRoute !== null) {
    return ctx === void 0 ? this.defaultRoute(req, res) : this.defaultRoute.call(ctx, req, res);
  } else {
    res.statusCode = 404;
    res.end();
  }
};
Router.prototype._onBadUrl = function(path) {
  const onBadUrl = this.onBadUrl;
  return {
    handler: (req, res, ctx) => onBadUrl(path, req, res),
    params: {},
    store: null
  };
};
Router.prototype.prettyPrint = function(opts = {}) {
  opts.commonPrefix = opts.commonPrefix === void 0 ? true : opts.commonPrefix;
  if (!opts.commonPrefix)
    return prettyPrintRoutesArray.call(this, this.routes, opts);
  const root = {
    prefix: "/",
    nodes: [],
    children: {}
  };
  for (const node of Object.values(this.trees)) {
    if (node) {
      flattenNode(root, node);
    }
  }
  compressFlattenedNode(root);
  return prettyPrintFlattenedNode.call(this, root, "", true, opts);
};
for (var i in http.METHODS) {
  if (!http.METHODS.hasOwnProperty(i))
    continue;
  const m = http.METHODS[i];
  const methodName = m.toLowerCase();
  if (Router.prototype[methodName])
    throw new Error("Method already exists: " + methodName);
  Router.prototype[methodName] = function(path, handler, store) {
    return this.on(m, path, handler, store);
  };
}
Router.prototype.all = function(path, handler, store) {
  this.on(httpMethods, path, handler, store);
};
module.exports = Router;
function sanitizeUrl(url) {
  for (var i = 0, len = url.length; i < len; i++) {
    var charCode = url.charCodeAt(i);
    if (charCode === 63 || charCode === 59 || charCode === 35) {
      return url.slice(0, i);
    }
  }
  return url;
}
function getClosingParenthensePosition(path, idx) {
  var parentheses = 1;
  while (idx < path.length) {
    idx++;
    if (path[idx] === "\\") {
      idx++;
      continue;
    }
    if (path[idx] === ")") {
      parentheses--;
    } else if (path[idx] === "(") {
      parentheses++;
    }
    if (!parentheses)
      return idx;
  }
  throw new TypeError('Invalid regexp expression in "' + path + '"');
}
function defaultBuildPrettyMeta(route) {
  if (!route)
    return {};
  if (!route.store)
    return {};
  return Object.assign({}, route.store);
}
