(function(global, context){
	var fileData=[]
	var cacheData=[]

	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.426Z",
			"mtimeMs": 1598589592425.9045,
			"atime": "2020-08-28T04:39:52.446Z",
			"atimeMs": 1598589592445.905,
			"isdirectory": true
		},
		"filename": ""
	}})
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.446Z",
			"atimeMs": 1598589592445.905,
			"isdirectory": true
		},
		"filename": "debug"
	}})
	fileData.push(function(){ var item= cacheData[2]; if(!item){ item= cacheData[2]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.482Z",
			"atimeMs": 1598589592481.906,
			"isfile": true
		},
		"filename": "debug/Makefile",
		"content": "# get Makefile directory name: http://stackoverflow.com/a/5982798/376773\nTHIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))\nTHIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)\n\n# BIN directory\nBIN := $(THIS_DIR)/node_modules/.bin\n\n# Path\nPATH := node_modules/.bin:$(PATH)\nSHELL := /bin/bash\n\n# applications\nNODE ?= $(shell which node)\nYARN ?= $(shell which yarn)\nPKG ?= $(if $(YARN),$(YARN),$(NODE) $(shell which npm))\nBROWSERIFY ?= $(NODE) $(BIN)/browserify\n\n.FORCE:\n\ninstall: node_modules\n\nnode_modules: package.json\n\t@NODE_ENV= $(PKG) install\n\t@touch node_modules\n\nlint: .FORCE\n\teslint browser.js debug.js index.js node.js\n\ntest-node: .FORCE\n\tistanbul cover node_modules/mocha/bin/_mocha -- test/**.js\n\ntest-browser: .FORCE\n\tmkdir -p dist\n\n\t@$(BROWSERIFY) \\\n\t\t--standalone debug \\\n\t\t. > dist/debug.js\n\n\tkarma start --single-run\n\trimraf dist\n\ntest: .FORCE\n\tconcurrently \\\n\t\t\"make test-node\" \\\n\t\t\"make test-browser\"\n\ncoveralls:\n\tcat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\n\n.PHONY: all install clean distclean\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[3]; if(!item){ item= cacheData[3]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.486Z",
			"atimeMs": 1598589592485.906,
			"isfile": true
		},
		"filename": "debug/component.json",
		"content": "{\n  \"name\": \"debug\",\n  \"repo\": \"visionmedia/debug\",\n  \"description\": \"small debugging utility\",\n  \"version\": \"2.6.9\",\n  \"keywords\": [\n    \"debug\",\n    \"log\",\n    \"debugger\"\n  ],\n  \"main\": \"src/browser.js\",\n  \"scripts\": [\n    \"src/browser.js\",\n    \"src/debug.js\"\n  ],\n  \"dependencies\": {\n    \"rauchg/ms.js\": \"0.7.1\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[4]; if(!item){ item= cacheData[4]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.486Z",
			"atimeMs": 1598589592485.906,
			"isfile": true
		},
		"filename": "debug/karma.conf.js",
		"content": "// Karma configuration\n// Generated on Fri Dec 16 2016 13:09:51 GMT+0000 (UTC)\n\nmodule.exports = function(config) {\n  config.set({\n\n    // base path that will be used to resolve all patterns (eg. files, exclude)\n    basePath: '',\n\n\n    // frameworks to use\n    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter\n    frameworks: ['mocha', 'chai', 'sinon'],\n\n\n    // list of files / patterns to load in the browser\n    files: [\n      'dist/debug.js',\n      'test/*spec.js'\n    ],\n\n\n    // list of files to exclude\n    exclude: [\n      'src/node.js'\n    ],\n\n\n    // preprocess matching files before serving them to the browser\n    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor\n    preprocessors: {\n    },\n\n    // test results reporter to use\n    // possible values: 'dots', 'progress'\n    // available reporters: https://npmjs.org/browse/keyword/karma-reporter\n    reporters: ['progress'],\n\n\n    // web server port\n    port: 9876,\n\n\n    // enable / disable colors in the output (reporters and logs)\n    colors: true,\n\n\n    // level of logging\n    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG\n    logLevel: config.LOG_INFO,\n\n\n    // enable / disable watching file and executing tests whenever any file changes\n    autoWatch: true,\n\n\n    // start these browsers\n    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher\n    browsers: ['PhantomJS'],\n\n\n    // Continuous Integration mode\n    // if true, Karma captures browsers, runs the tests and exits\n    singleRun: false,\n\n    // Concurrency level\n    // how many browser should be started simultaneous\n    concurrency: Infinity\n  })\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[5]; if(!item){ item= cacheData[5]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.490Z",
			"atimeMs": 1598589592489.9062,
			"isfile": true
		},
		"filename": "debug/node.js",
		"content": "module.exports = require('./src/node');\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.334Z",
			"mtimeMs": 1598589592333.9023,
			"atime": "2020-08-28T04:39:52.490Z",
			"atimeMs": 1598589592489.9062,
			"isdirectory": true
		},
		"filename": "debug/node_modules"
	}})
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.490Z",
			"atimeMs": 1598589592489.9062,
			"isdirectory": true
		},
		"filename": "debug/node_modules/ms"
	}})
	fileData.push(function(){ var item= cacheData[8]; if(!item){ item= cacheData[8]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.692Z",
			"mtimeMs": 1596929147692,
			"atime": "2020-08-28T04:39:52.494Z",
			"atimeMs": 1598589592493.9062,
			"isfile": true
		},
		"filename": "debug/node_modules/ms/index.js",
		"content": "/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options) {\n  options = options || {};\n  var type = typeof val;\n  if (type === 'string' && val.length > 0) {\n    return parse(val);\n  } else if (type === 'number' && isNaN(val) === false) {\n    return options.long ? fmtLong(val) : fmtShort(val);\n  }\n  throw new Error(\n    'val is not a non-empty string or a valid number. val=' +\n      JSON.stringify(val)\n  );\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  str = String(str);\n  if (str.length > 100) {\n    return;\n  }\n  var match = /^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(\n    str\n  );\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'yrs':\n    case 'yr':\n    case 'y':\n      return n * y;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'hrs':\n    case 'hr':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'mins':\n    case 'min':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 'secs':\n    case 'sec':\n    case 's':\n      return n * s;\n    case 'milliseconds':\n    case 'millisecond':\n    case 'msecs':\n    case 'msec':\n    case 'ms':\n      return n;\n    default:\n      return undefined;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtShort(ms) {\n  if (ms >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (ms >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (ms >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (ms >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtLong(ms) {\n  return plural(ms, d, 'day') ||\n    plural(ms, h, 'hour') ||\n    plural(ms, m, 'minute') ||\n    plural(ms, s, 'second') ||\n    ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, n, name) {\n  if (ms < n) {\n    return;\n  }\n  if (ms < n * 1.5) {\n    return Math.floor(ms / n) + ' ' + name;\n  }\n  return Math.ceil(ms / n) + ' ' + name + 's';\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[9]; if(!item){ item= cacheData[9]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.692Z",
			"mtimeMs": 1596929147692,
			"atime": "2020-08-28T04:39:52.494Z",
			"atimeMs": 1598589592493.9062,
			"isfile": true
		},
		"filename": "debug/node_modules/ms/package.json",
		"content": "{\n  \"name\": \"ms\",\n  \"version\": \"2.0.0\",\n  \"description\": \"Tiny milisecond conversion utility\",\n  \"repository\": \"zeit/ms\",\n  \"main\": \"./index\",\n  \"files\": [\n    \"index.js\"\n  ],\n  \"scripts\": {\n    \"precommit\": \"lint-staged\",\n    \"lint\": \"eslint lib/* bin/*\",\n    \"test\": \"mocha tests.js\"\n  },\n  \"eslintConfig\": {\n    \"extends\": \"eslint:recommended\",\n    \"env\": {\n      \"node\": true,\n      \"es6\": true\n    }\n  },\n  \"lint-staged\": {\n    \"*.js\": [\n      \"npm run lint\",\n      \"prettier --single-quote --write\",\n      \"git add\"\n    ]\n  },\n  \"license\": \"MIT\",\n  \"devDependencies\": {\n    \"eslint\": \"3.19.0\",\n    \"expect.js\": \"0.3.1\",\n    \"husky\": \"0.13.3\",\n    \"lint-staged\": \"3.4.1\",\n    \"mocha\": \"3.4.1\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[10]; if(!item){ item= cacheData[10]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.446Z",
			"atimeMs": 1598589592445.905,
			"isfile": true
		},
		"filename": "debug/package.json",
		"content": "{\n  \"name\": \"debug\",\n  \"version\": \"2.6.9\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git://github.com/visionmedia/debug.git\"\n  },\n  \"description\": \"small debugging utility\",\n  \"keywords\": [\n    \"debug\",\n    \"log\",\n    \"debugger\"\n  ],\n  \"author\": \"TJ Holowaychuk <tj@vision-media.ca>\",\n  \"contributors\": [\n    \"Nathan Rajlich <nathan@tootallnate.net> (http://n8.io)\",\n    \"Andrew Rhyne <rhyneandrew@gmail.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"dependencies\": {\n    \"ms\": \"2.0.0\"\n  },\n  \"devDependencies\": {\n    \"browserify\": \"9.0.3\",\n    \"chai\": \"^3.5.0\",\n    \"concurrently\": \"^3.1.0\",\n    \"coveralls\": \"^2.11.15\",\n    \"eslint\": \"^3.12.1\",\n    \"istanbul\": \"^0.4.5\",\n    \"karma\": \"^1.3.0\",\n    \"karma-chai\": \"^0.1.0\",\n    \"karma-mocha\": \"^1.3.0\",\n    \"karma-phantomjs-launcher\": \"^1.0.2\",\n    \"karma-sinon\": \"^1.0.5\",\n    \"mocha\": \"^3.2.0\",\n    \"mocha-lcov-reporter\": \"^1.2.0\",\n    \"rimraf\": \"^2.5.4\",\n    \"sinon\": \"^1.17.6\",\n    \"sinon-chai\": \"^2.8.0\"\n  },\n  \"main\": \"./src/index.js\",\n  \"browser\": \"./src/browser.js\",\n  \"component\": {\n    \"scripts\": {\n      \"debug/index.js\": \"browser.js\",\n      \"debug/debug.js\": \"debug.js\"\n    }\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.498Z",
			"atimeMs": 1598589592497.9065,
			"isdirectory": true
		},
		"filename": "debug/src"
	}})
	fileData.push(function(){ var item= cacheData[12]; if(!item){ item= cacheData[12]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.498Z",
			"atimeMs": 1598589592497.9065,
			"isfile": true
		},
		"filename": "debug/src/browser.js",
		"content": "/**\n * This is the web browser implementation of `debug()`.\n *\n * Expose `debug()` as the module.\n */\n\nexports = module.exports = require('./debug');\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\nexports.storage = 'undefined' != typeof chrome\n               && 'undefined' != typeof chrome.storage\n                  ? chrome.storage.local\n                  : localstorage();\n\n/**\n * Colors.\n */\n\nexports.colors = [\n  'lightseagreen',\n  'forestgreen',\n  'goldenrod',\n  'dodgerblue',\n  'darkorchid',\n  'crimson'\n];\n\n/**\n * Currently only WebKit-based Web Inspectors, Firefox >= v31,\n * and the Firebug extension (any Firefox version) are known\n * to support \"%c\" CSS customizations.\n *\n * TODO: add a `localStorage` variable to explicitly enable/disable colors\n */\n\nfunction useColors() {\n  // NB: In an Electron preload script, document will be defined but not fully\n  // initialized. Since we know we're in Chrome, we'll just detect this case\n  // explicitly\n  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {\n    return true;\n  }\n\n  // is webkit? http://stackoverflow.com/a/16459606/376773\n  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632\n  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||\n    // is firebug? http://stackoverflow.com/a/398120/376773\n    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||\n    // is firefox >= v31?\n    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages\n    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||\n    // double check webkit in userAgent just in case we are in a worker\n    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/));\n}\n\n/**\n * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.\n */\n\nexports.formatters.j = function(v) {\n  try {\n    return JSON.stringify(v);\n  } catch (err) {\n    return '[UnexpectedJSONParseError]: ' + err.message;\n  }\n};\n\n\n/**\n * Colorize log arguments if enabled.\n *\n * @api public\n */\n\nfunction formatArgs(args) {\n  var useColors = this.useColors;\n\n  args[0] = (useColors ? '%c' : '')\n    + this.namespace\n    + (useColors ? ' %c' : ' ')\n    + args[0]\n    + (useColors ? '%c ' : ' ')\n    + '+' + exports.humanize(this.diff);\n\n  if (!useColors) return;\n\n  var c = 'color: ' + this.color;\n  args.splice(1, 0, c, 'color: inherit')\n\n  // the final \"%c\" is somewhat tricky, because there could be other\n  // arguments passed either before or after the %c, so we need to\n  // figure out the correct index to insert the CSS into\n  var index = 0;\n  var lastC = 0;\n  args[0].replace(/%[a-zA-Z%]/g, function(match) {\n    if ('%%' === match) return;\n    index++;\n    if ('%c' === match) {\n      // we only are interested in the *last* %c\n      // (the user may have provided their own)\n      lastC = index;\n    }\n  });\n\n  args.splice(lastC, 0, c);\n}\n\n/**\n * Invokes `console.log()` when available.\n * No-op when `console.log` is not a \"function\".\n *\n * @api public\n */\n\nfunction log() {\n  // this hackery is required for IE8/9, where\n  // the `console.log` function doesn't have 'apply'\n  return 'object' === typeof console\n    && console.log\n    && Function.prototype.apply.call(console.log, console, arguments);\n}\n\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\n\nfunction save(namespaces) {\n  try {\n    if (null == namespaces) {\n      exports.storage.removeItem('debug');\n    } else {\n      exports.storage.debug = namespaces;\n    }\n  } catch(e) {}\n}\n\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\n\nfunction load() {\n  var r;\n  try {\n    r = exports.storage.debug;\n  } catch(e) {}\n\n  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG\n  if (!r && typeof process !== 'undefined' && 'env' in process) {\n    r = process.env.DEBUG;\n  }\n\n  return r;\n}\n\n/**\n * Enable namespaces listed in `localStorage.debug` initially.\n */\n\nexports.enable(load());\n\n/**\n * Localstorage attempts to return the localstorage.\n *\n * This is necessary because safari throws\n * when a user disables cookies/localstorage\n * and you attempt to access it.\n *\n * @return {LocalStorage}\n * @api private\n */\n\nfunction localstorage() {\n  try {\n    return window.localStorage;\n  } catch (e) {}\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[13]; if(!item){ item= cacheData[13]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.498Z",
			"atimeMs": 1598589592497.9065,
			"isfile": true
		},
		"filename": "debug/src/debug.js",
		"content": "\n/**\n * This is the common logic for both the Node.js and web browser\n * implementations of `debug()`.\n *\n * Expose `debug()` as the module.\n */\n\nexports = module.exports = createDebug.debug = createDebug['default'] = createDebug;\nexports.coerce = coerce;\nexports.disable = disable;\nexports.enable = enable;\nexports.enabled = enabled;\nexports.humanize = require('ms');\n\n/**\n * The currently active debug mode names, and names to skip.\n */\n\nexports.names = [];\nexports.skips = [];\n\n/**\n * Map of special \"%n\" handling functions, for the debug \"format\" argument.\n *\n * Valid key names are a single, lower or upper-case letter, i.e. \"n\" and \"N\".\n */\n\nexports.formatters = {};\n\n/**\n * Previous log timestamp.\n */\n\nvar prevTime;\n\n/**\n * Select a color.\n * @param {String} namespace\n * @return {Number}\n * @api private\n */\n\nfunction selectColor(namespace) {\n  var hash = 0, i;\n\n  for (i in namespace) {\n    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);\n    hash |= 0; // Convert to 32bit integer\n  }\n\n  return exports.colors[Math.abs(hash) % exports.colors.length];\n}\n\n/**\n * Create a debugger with the given `namespace`.\n *\n * @param {String} namespace\n * @return {Function}\n * @api public\n */\n\nfunction createDebug(namespace) {\n\n  function debug() {\n    // disabled?\n    if (!debug.enabled) return;\n\n    var self = debug;\n\n    // set `diff` timestamp\n    var curr = +new Date();\n    var ms = curr - (prevTime || curr);\n    self.diff = ms;\n    self.prev = prevTime;\n    self.curr = curr;\n    prevTime = curr;\n\n    // turn the `arguments` into a proper Array\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n\n    args[0] = exports.coerce(args[0]);\n\n    if ('string' !== typeof args[0]) {\n      // anything else let's inspect with %O\n      args.unshift('%O');\n    }\n\n    // apply any `formatters` transformations\n    var index = 0;\n    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {\n      // if we encounter an escaped % then don't increase the array index\n      if (match === '%%') return match;\n      index++;\n      var formatter = exports.formatters[format];\n      if ('function' === typeof formatter) {\n        var val = args[index];\n        match = formatter.call(self, val);\n\n        // now we need to remove `args[index]` since it's inlined in the `format`\n        args.splice(index, 1);\n        index--;\n      }\n      return match;\n    });\n\n    // apply env-specific formatting (colors, etc.)\n    exports.formatArgs.call(self, args);\n\n    var logFn = debug.log || exports.log || console.log.bind(console);\n    logFn.apply(self, args);\n  }\n\n  debug.namespace = namespace;\n  debug.enabled = exports.enabled(namespace);\n  debug.useColors = exports.useColors();\n  debug.color = selectColor(namespace);\n\n  // env-specific initialization logic for debug instances\n  if ('function' === typeof exports.init) {\n    exports.init(debug);\n  }\n\n  return debug;\n}\n\n/**\n * Enables a debug mode by namespaces. This can include modes\n * separated by a colon and wildcards.\n *\n * @param {String} namespaces\n * @api public\n */\n\nfunction enable(namespaces) {\n  exports.save(namespaces);\n\n  exports.names = [];\n  exports.skips = [];\n\n  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\\s,]+/);\n  var len = split.length;\n\n  for (var i = 0; i < len; i++) {\n    if (!split[i]) continue; // ignore empty strings\n    namespaces = split[i].replace(/\\*/g, '.*?');\n    if (namespaces[0] === '-') {\n      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));\n    } else {\n      exports.names.push(new RegExp('^' + namespaces + '$'));\n    }\n  }\n}\n\n/**\n * Disable debug output.\n *\n * @api public\n */\n\nfunction disable() {\n  exports.enable('');\n}\n\n/**\n * Returns true if the given mode name is enabled, false otherwise.\n *\n * @param {String} name\n * @return {Boolean}\n * @api public\n */\n\nfunction enabled(name) {\n  var i, len;\n  for (i = 0, len = exports.skips.length; i < len; i++) {\n    if (exports.skips[i].test(name)) {\n      return false;\n    }\n  }\n  for (i = 0, len = exports.names.length; i < len; i++) {\n    if (exports.names[i].test(name)) {\n      return true;\n    }\n  }\n  return false;\n}\n\n/**\n * Coerce `val`.\n *\n * @param {Mixed} val\n * @return {Mixed}\n * @api private\n */\n\nfunction coerce(val) {\n  if (val instanceof Error) return val.stack || val.message;\n  return val;\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[14]; if(!item){ item= cacheData[14]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.498Z",
			"atimeMs": 1598589592497.9065,
			"isfile": true
		},
		"filename": "debug/src/index.js",
		"content": "/**\n * Detect Electron renderer process, which is node, but we should\n * treat as a browser.\n */\n\nif (typeof process !== 'undefined' && process.type === 'renderer') {\n  module.exports = require('./browser.js');\n} else {\n  module.exports = require('./node.js');\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[15]; if(!item){ item= cacheData[15]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.502Z",
			"atimeMs": 1598589592501.9065,
			"isfile": true
		},
		"filename": "debug/src/inspector-log.js",
		"content": "module.exports = inspectorLog;\n\n// black hole\nconst nullStream = new (require('stream').Writable)();\nnullStream._write = () => {};\n\n/**\n * Outputs a `console.log()` to the Node.js Inspector console *only*.\n */\nfunction inspectorLog() {\n  const stdout = console._stdout;\n  console._stdout = nullStream;\n  console.log.apply(console, arguments);\n  console._stdout = stdout;\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[16]; if(!item){ item= cacheData[16]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.348Z",
			"mtimeMs": 1596929147348,
			"atime": "2020-08-28T04:39:52.502Z",
			"atimeMs": 1598589592501.9065,
			"isfile": true
		},
		"filename": "debug/src/node.js",
		"content": "/**\n * Module dependencies.\n */\n\nvar tty = require('tty');\nvar util = require('util');\n\n/**\n * This is the Node.js implementation of `debug()`.\n *\n * Expose `debug()` as the module.\n */\n\nexports = module.exports = require('./debug');\nexports.init = init;\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\n\n/**\n * Colors.\n */\n\nexports.colors = [6, 2, 3, 4, 5, 1];\n\n/**\n * Build up the default `inspectOpts` object from the environment variables.\n *\n *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js\n */\n\nexports.inspectOpts = Object.keys(process.env).filter(function (key) {\n  return /^debug_/i.test(key);\n}).reduce(function (obj, key) {\n  // camel-case\n  var prop = key\n    .substring(6)\n    .toLowerCase()\n    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });\n\n  // coerce string value into JS value\n  var val = process.env[key];\n  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;\n  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;\n  else if (val === 'null') val = null;\n  else val = Number(val);\n\n  obj[prop] = val;\n  return obj;\n}, {});\n\n/**\n * The file descriptor to write the `debug()` calls to.\n * Set the `DEBUG_FD` env variable to override with another value. i.e.:\n *\n *   $ DEBUG_FD=3 node script.js 3>debug.log\n */\n\nvar fd = parseInt(process.env.DEBUG_FD, 10) || 2;\n\nif (1 !== fd && 2 !== fd) {\n  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()\n}\n\nvar stream = 1 === fd ? process.stdout :\n             2 === fd ? process.stderr :\n             createWritableStdioStream(fd);\n\n/**\n * Is stdout a TTY? Colored output is enabled when `true`.\n */\n\nfunction useColors() {\n  return 'colors' in exports.inspectOpts\n    ? Boolean(exports.inspectOpts.colors)\n    : tty.isatty(fd);\n}\n\n/**\n * Map %o to `util.inspect()`, all on a single line.\n */\n\nexports.formatters.o = function(v) {\n  this.inspectOpts.colors = this.useColors;\n  return util.inspect(v, this.inspectOpts)\n    .split('\\n').map(function(str) {\n      return str.trim()\n    }).join(' ');\n};\n\n/**\n * Map %o to `util.inspect()`, allowing multiple lines if needed.\n */\n\nexports.formatters.O = function(v) {\n  this.inspectOpts.colors = this.useColors;\n  return util.inspect(v, this.inspectOpts);\n};\n\n/**\n * Adds ANSI color escape codes if enabled.\n *\n * @api public\n */\n\nfunction formatArgs(args) {\n  var name = this.namespace;\n  var useColors = this.useColors;\n\n  if (useColors) {\n    var c = this.color;\n    var prefix = '  \\u001b[3' + c + ';1m' + name + ' ' + '\\u001b[0m';\n\n    args[0] = prefix + args[0].split('\\n').join('\\n' + prefix);\n    args.push('\\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\\u001b[0m');\n  } else {\n    args[0] = new Date().toUTCString()\n      + ' ' + name + ' ' + args[0];\n  }\n}\n\n/**\n * Invokes `util.format()` with the specified arguments and writes to `stream`.\n */\n\nfunction log() {\n  return stream.write(util.format.apply(util, arguments) + '\\n');\n}\n\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\n\nfunction save(namespaces) {\n  if (null == namespaces) {\n    // If you set a process.env field to null or undefined, it gets cast to the\n    // string 'null' or 'undefined'. Just delete instead.\n    delete process.env.DEBUG;\n  } else {\n    process.env.DEBUG = namespaces;\n  }\n}\n\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\n\nfunction load() {\n  return process.env.DEBUG;\n}\n\n/**\n * Copied from `node/src/node.js`.\n *\n * XXX: It's lame that node doesn't expose this API out-of-the-box. It also\n * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.\n */\n\nfunction createWritableStdioStream (fd) {\n  var stream;\n  var tty_wrap = process.binding('tty_wrap');\n\n  // Note stream._type is used for test-module-load-list.js\n\n  switch (tty_wrap.guessHandleType(fd)) {\n    case 'TTY':\n      stream = new tty.WriteStream(fd);\n      stream._type = 'tty';\n\n      // Hack to have stream not keep the event loop alive.\n      // See https://github.com/joyent/node/issues/1726\n      if (stream._handle && stream._handle.unref) {\n        stream._handle.unref();\n      }\n      break;\n\n    case 'FILE':\n      var fs = require('fs');\n      stream = new fs.SyncWriteStream(fd, { autoClose: false });\n      stream._type = 'fs';\n      break;\n\n    case 'PIPE':\n    case 'TCP':\n      var net = require('net');\n      stream = new net.Socket({\n        fd: fd,\n        readable: false,\n        writable: true\n      });\n\n      // FIXME Should probably have an option in net.Socket to create a\n      // stream from an existing fd which is writable only. But for now\n      // we'll just add this hack and set the `readable` member to false.\n      // Test: ./node test/fixtures/echo.js < /etc/passwd\n      stream.readable = false;\n      stream.read = null;\n      stream._type = 'pipe';\n\n      // FIXME Hack to have stream not keep the event loop alive.\n      // See https://github.com/joyent/node/issues/1726\n      if (stream._handle && stream._handle.unref) {\n        stream._handle.unref();\n      }\n      break;\n\n    default:\n      // Probably an error on in uv_guess_handle()\n      throw new Error('Implement me. Unknown stream file type!');\n  }\n\n  // For supporting legacy API we put the FD here.\n  stream.fd = fd;\n\n  stream._isStdio = true;\n\n  return stream;\n}\n\n/**\n * Init logic for `debug` instances.\n *\n * Create a new `inspectOpts` object in case `useColors` is set\n * differently for a particular `debug` instance.\n */\n\nfunction init (debug) {\n  debug.inspectOpts = {};\n\n  var keys = Object.keys(exports.inspectOpts);\n  for (var i = 0; i < keys.length; i++) {\n    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];\n  }\n}\n\n/**\n * Enable namespaces listed in `process.env.DEBUG` initially.\n */\n\nexports.enable(load());\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.502Z",
			"atimeMs": 1598589592501.9065,
			"isdirectory": true
		},
		"filename": "depd"
	}})
	fileData.push(function(){ var item= cacheData[18]; if(!item){ item= cacheData[18]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.346Z",
			"mtimeMs": 1596929147346,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isfile": true
		},
		"filename": "depd/index.js",
		"content": "/*!\n * depd\n * Copyright(c) 2014-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar callSiteToString = require('./lib/compat').callSiteToString\nvar eventListenerCount = require('./lib/compat').eventListenerCount\nvar relative = require('path').relative\n\n/**\n * Module exports.\n */\n\nmodule.exports = depd\n\n/**\n * Get the path to base files on.\n */\n\nvar basePath = process.cwd()\n\n/**\n * Determine if namespace is contained in the string.\n */\n\nfunction containsNamespace (str, namespace) {\n  var vals = str.split(/[ ,]+/)\n  var ns = String(namespace).toLowerCase()\n\n  for (var i = 0; i < vals.length; i++) {\n    var val = vals[i]\n\n    // namespace contained\n    if (val && (val === '*' || val.toLowerCase() === ns)) {\n      return true\n    }\n  }\n\n  return false\n}\n\n/**\n * Convert a data descriptor to accessor descriptor.\n */\n\nfunction convertDataDescriptorToAccessor (obj, prop, message) {\n  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)\n  var value = descriptor.value\n\n  descriptor.get = function getter () { return value }\n\n  if (descriptor.writable) {\n    descriptor.set = function setter (val) { return (value = val) }\n  }\n\n  delete descriptor.value\n  delete descriptor.writable\n\n  Object.defineProperty(obj, prop, descriptor)\n\n  return descriptor\n}\n\n/**\n * Create arguments string to keep arity.\n */\n\nfunction createArgumentsString (arity) {\n  var str = ''\n\n  for (var i = 0; i < arity; i++) {\n    str += ', arg' + i\n  }\n\n  return str.substr(2)\n}\n\n/**\n * Create stack string from stack.\n */\n\nfunction createStackString (stack) {\n  var str = this.name + ': ' + this.namespace\n\n  if (this.message) {\n    str += ' deprecated ' + this.message\n  }\n\n  for (var i = 0; i < stack.length; i++) {\n    str += '\\n    at ' + callSiteToString(stack[i])\n  }\n\n  return str\n}\n\n/**\n * Create deprecate for namespace in caller.\n */\n\nfunction depd (namespace) {\n  if (!namespace) {\n    throw new TypeError('argument namespace is required')\n  }\n\n  var stack = getStack()\n  var site = callSiteLocation(stack[1])\n  var file = site[0]\n\n  function deprecate (message) {\n    // call to self as log\n    log.call(deprecate, message)\n  }\n\n  deprecate._file = file\n  deprecate._ignored = isignored(namespace)\n  deprecate._namespace = namespace\n  deprecate._traced = istraced(namespace)\n  deprecate._warned = Object.create(null)\n\n  deprecate.function = wrapfunction\n  deprecate.property = wrapproperty\n\n  return deprecate\n}\n\n/**\n * Determine if namespace is ignored.\n */\n\nfunction isignored (namespace) {\n  /* istanbul ignore next: tested in a child processs */\n  if (process.noDeprecation) {\n    // --no-deprecation support\n    return true\n  }\n\n  var str = process.env.NO_DEPRECATION || ''\n\n  // namespace ignored\n  return containsNamespace(str, namespace)\n}\n\n/**\n * Determine if namespace is traced.\n */\n\nfunction istraced (namespace) {\n  /* istanbul ignore next: tested in a child processs */\n  if (process.traceDeprecation) {\n    // --trace-deprecation support\n    return true\n  }\n\n  var str = process.env.TRACE_DEPRECATION || ''\n\n  // namespace traced\n  return containsNamespace(str, namespace)\n}\n\n/**\n * Display deprecation message.\n */\n\nfunction log (message, site) {\n  var haslisteners = eventListenerCount(process, 'deprecation') !== 0\n\n  // abort early if no destination\n  if (!haslisteners && this._ignored) {\n    return\n  }\n\n  var caller\n  var callFile\n  var callSite\n  var depSite\n  var i = 0\n  var seen = false\n  var stack = getStack()\n  var file = this._file\n\n  if (site) {\n    // provided site\n    depSite = site\n    callSite = callSiteLocation(stack[1])\n    callSite.name = depSite.name\n    file = callSite[0]\n  } else {\n    // get call site\n    i = 2\n    depSite = callSiteLocation(stack[i])\n    callSite = depSite\n  }\n\n  // get caller of deprecated thing in relation to file\n  for (; i < stack.length; i++) {\n    caller = callSiteLocation(stack[i])\n    callFile = caller[0]\n\n    if (callFile === file) {\n      seen = true\n    } else if (callFile === this._file) {\n      file = this._file\n    } else if (seen) {\n      break\n    }\n  }\n\n  var key = caller\n    ? depSite.join(':') + '__' + caller.join(':')\n    : undefined\n\n  if (key !== undefined && key in this._warned) {\n    // already warned\n    return\n  }\n\n  this._warned[key] = true\n\n  // generate automatic message from call site\n  var msg = message\n  if (!msg) {\n    msg = callSite === depSite || !callSite.name\n      ? defaultMessage(depSite)\n      : defaultMessage(callSite)\n  }\n\n  // emit deprecation if listeners exist\n  if (haslisteners) {\n    var err = DeprecationError(this._namespace, msg, stack.slice(i))\n    process.emit('deprecation', err)\n    return\n  }\n\n  // format and write message\n  var format = process.stderr.isTTY\n    ? formatColor\n    : formatPlain\n  var output = format.call(this, msg, caller, stack.slice(i))\n  process.stderr.write(output + '\\n', 'utf8')\n}\n\n/**\n * Get call site location as array.\n */\n\nfunction callSiteLocation (callSite) {\n  var file = callSite.getFileName() || '<anonymous>'\n  var line = callSite.getLineNumber()\n  var colm = callSite.getColumnNumber()\n\n  if (callSite.isEval()) {\n    file = callSite.getEvalOrigin() + ', ' + file\n  }\n\n  var site = [file, line, colm]\n\n  site.callSite = callSite\n  site.name = callSite.getFunctionName()\n\n  return site\n}\n\n/**\n * Generate a default message from the site.\n */\n\nfunction defaultMessage (site) {\n  var callSite = site.callSite\n  var funcName = site.name\n\n  // make useful anonymous name\n  if (!funcName) {\n    funcName = '<anonymous@' + formatLocation(site) + '>'\n  }\n\n  var context = callSite.getThis()\n  var typeName = context && callSite.getTypeName()\n\n  // ignore useless type name\n  if (typeName === 'Object') {\n    typeName = undefined\n  }\n\n  // make useful type name\n  if (typeName === 'Function') {\n    typeName = context.name || typeName\n  }\n\n  return typeName && callSite.getMethodName()\n    ? typeName + '.' + funcName\n    : funcName\n}\n\n/**\n * Format deprecation message without color.\n */\n\nfunction formatPlain (msg, caller, stack) {\n  var timestamp = new Date().toUTCString()\n\n  var formatted = timestamp +\n    ' ' + this._namespace +\n    ' deprecated ' + msg\n\n  // add stack trace\n  if (this._traced) {\n    for (var i = 0; i < stack.length; i++) {\n      formatted += '\\n    at ' + callSiteToString(stack[i])\n    }\n\n    return formatted\n  }\n\n  if (caller) {\n    formatted += ' at ' + formatLocation(caller)\n  }\n\n  return formatted\n}\n\n/**\n * Format deprecation message with color.\n */\n\nfunction formatColor (msg, caller, stack) {\n  var formatted = '\\x1b[36;1m' + this._namespace + '\\x1b[22;39m' + // bold cyan\n    ' \\x1b[33;1mdeprecated\\x1b[22;39m' + // bold yellow\n    ' \\x1b[0m' + msg + '\\x1b[39m' // reset\n\n  // add stack trace\n  if (this._traced) {\n    for (var i = 0; i < stack.length; i++) {\n      formatted += '\\n    \\x1b[36mat ' + callSiteToString(stack[i]) + '\\x1b[39m' // cyan\n    }\n\n    return formatted\n  }\n\n  if (caller) {\n    formatted += ' \\x1b[36m' + formatLocation(caller) + '\\x1b[39m' // cyan\n  }\n\n  return formatted\n}\n\n/**\n * Format call site location.\n */\n\nfunction formatLocation (callSite) {\n  return relative(basePath, callSite[0]) +\n    ':' + callSite[1] +\n    ':' + callSite[2]\n}\n\n/**\n * Get the stack as array of call sites.\n */\n\nfunction getStack () {\n  var limit = Error.stackTraceLimit\n  var obj = {}\n  var prep = Error.prepareStackTrace\n\n  Error.prepareStackTrace = prepareObjectStackTrace\n  Error.stackTraceLimit = Math.max(10, limit)\n\n  // capture the stack\n  Error.captureStackTrace(obj)\n\n  // slice this function off the top\n  var stack = obj.stack.slice(1)\n\n  Error.prepareStackTrace = prep\n  Error.stackTraceLimit = limit\n\n  return stack\n}\n\n/**\n * Capture call site stack from v8.\n */\n\nfunction prepareObjectStackTrace (obj, stack) {\n  return stack\n}\n\n/**\n * Return a wrapped function in a deprecation message.\n */\n\nfunction wrapfunction (fn, message) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('argument fn must be a function')\n  }\n\n  var args = createArgumentsString(fn.length)\n  var deprecate = this // eslint-disable-line no-unused-vars\n  var stack = getStack()\n  var site = callSiteLocation(stack[1])\n\n  site.name = fn.name\n\n   // eslint-disable-next-line no-eval\n  var deprecatedfn = eval('(function (' + args + ') {\\n' +\n    '\"use strict\"\\n' +\n    'log.call(deprecate, message, site)\\n' +\n    'return fn.apply(this, arguments)\\n' +\n    '})')\n\n  return deprecatedfn\n}\n\n/**\n * Wrap property in a deprecation message.\n */\n\nfunction wrapproperty (obj, prop, message) {\n  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {\n    throw new TypeError('argument obj must be object')\n  }\n\n  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)\n\n  if (!descriptor) {\n    throw new TypeError('must call property on owner object')\n  }\n\n  if (!descriptor.configurable) {\n    throw new TypeError('property must be configurable')\n  }\n\n  var deprecate = this\n  var stack = getStack()\n  var site = callSiteLocation(stack[1])\n\n  // set site name\n  site.name = prop\n\n  // convert data descriptor\n  if ('value' in descriptor) {\n    descriptor = convertDataDescriptorToAccessor(obj, prop, message)\n  }\n\n  var get = descriptor.get\n  var set = descriptor.set\n\n  // wrap getter\n  if (typeof get === 'function') {\n    descriptor.get = function getter () {\n      log.call(deprecate, message, site)\n      return get.apply(this, arguments)\n    }\n  }\n\n  // wrap setter\n  if (typeof set === 'function') {\n    descriptor.set = function setter () {\n      log.call(deprecate, message, site)\n      return set.apply(this, arguments)\n    }\n  }\n\n  Object.defineProperty(obj, prop, descriptor)\n}\n\n/**\n * Create DeprecationError for deprecation\n */\n\nfunction DeprecationError (namespace, message, stack) {\n  var error = new Error()\n  var stackString\n\n  Object.defineProperty(error, 'constructor', {\n    value: DeprecationError\n  })\n\n  Object.defineProperty(error, 'message', {\n    configurable: true,\n    enumerable: false,\n    value: message,\n    writable: true\n  })\n\n  Object.defineProperty(error, 'name', {\n    enumerable: false,\n    configurable: true,\n    value: 'DeprecationError',\n    writable: true\n  })\n\n  Object.defineProperty(error, 'namespace', {\n    configurable: true,\n    enumerable: false,\n    value: namespace,\n    writable: true\n  })\n\n  Object.defineProperty(error, 'stack', {\n    configurable: true,\n    enumerable: false,\n    get: function () {\n      if (stackString !== undefined) {\n        return stackString\n      }\n\n      // prepare stack trace\n      return (stackString = createStackString.call(this, stack))\n    },\n    set: function setter (val) {\n      stackString = val\n    }\n  })\n\n  return error\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.354Z",
			"mtimeMs": 1598589592353.9028,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isdirectory": true
		},
		"filename": "depd/lib"
	}})
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isdirectory": true
		},
		"filename": "depd/lib/browser"
	}})
	fileData.push(function(){ var item= cacheData[21]; if(!item){ item= cacheData[21]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.346Z",
			"mtimeMs": 1596929147346,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isfile": true
		},
		"filename": "depd/lib/browser/index.js",
		"content": "/*!\n * depd\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = depd\n\n/**\n * Create deprecate for namespace in caller.\n */\n\nfunction depd (namespace) {\n  if (!namespace) {\n    throw new TypeError('argument namespace is required')\n  }\n\n  function deprecate (message) {\n    // no-op in browser\n  }\n\n  deprecate._file = undefined\n  deprecate._ignored = true\n  deprecate._namespace = namespace\n  deprecate._traced = false\n  deprecate._warned = Object.create(null)\n\n  deprecate.function = wrapfunction\n  deprecate.property = wrapproperty\n\n  return deprecate\n}\n\n/**\n * Return a wrapped function in a deprecation message.\n *\n * This is a no-op version of the wrapper, which does nothing but call\n * validation.\n */\n\nfunction wrapfunction (fn, message) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('argument fn must be a function')\n  }\n\n  return fn\n}\n\n/**\n * Wrap property in a deprecation message.\n *\n * This is a no-op version of the wrapper, which does nothing but call\n * validation.\n */\n\nfunction wrapproperty (obj, prop, message) {\n  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {\n    throw new TypeError('argument obj must be object')\n  }\n\n  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)\n\n  if (!descriptor) {\n    throw new TypeError('must call property on owner object')\n  }\n\n  if (!descriptor.configurable) {\n    throw new TypeError('property must be configurable')\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isdirectory": true
		},
		"filename": "depd/lib/compat"
	}})
	fileData.push(function(){ var item= cacheData[23]; if(!item){ item= cacheData[23]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.346Z",
			"mtimeMs": 1596929147346,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isfile": true
		},
		"filename": "depd/lib/compat/callsite-tostring.js",
		"content": "/*!\n * depd\n * Copyright(c) 2014 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n */\n\nmodule.exports = callSiteToString\n\n/**\n * Format a CallSite file location to a string.\n */\n\nfunction callSiteFileLocation (callSite) {\n  var fileName\n  var fileLocation = ''\n\n  if (callSite.isNative()) {\n    fileLocation = 'native'\n  } else if (callSite.isEval()) {\n    fileName = callSite.getScriptNameOrSourceURL()\n    if (!fileName) {\n      fileLocation = callSite.getEvalOrigin()\n    }\n  } else {\n    fileName = callSite.getFileName()\n  }\n\n  if (fileName) {\n    fileLocation += fileName\n\n    var lineNumber = callSite.getLineNumber()\n    if (lineNumber != null) {\n      fileLocation += ':' + lineNumber\n\n      var columnNumber = callSite.getColumnNumber()\n      if (columnNumber) {\n        fileLocation += ':' + columnNumber\n      }\n    }\n  }\n\n  return fileLocation || 'unknown source'\n}\n\n/**\n * Format a CallSite to a string.\n */\n\nfunction callSiteToString (callSite) {\n  var addSuffix = true\n  var fileLocation = callSiteFileLocation(callSite)\n  var functionName = callSite.getFunctionName()\n  var isConstructor = callSite.isConstructor()\n  var isMethodCall = !(callSite.isToplevel() || isConstructor)\n  var line = ''\n\n  if (isMethodCall) {\n    var methodName = callSite.getMethodName()\n    var typeName = getConstructorName(callSite)\n\n    if (functionName) {\n      if (typeName && functionName.indexOf(typeName) !== 0) {\n        line += typeName + '.'\n      }\n\n      line += functionName\n\n      if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {\n        line += ' [as ' + methodName + ']'\n      }\n    } else {\n      line += typeName + '.' + (methodName || '<anonymous>')\n    }\n  } else if (isConstructor) {\n    line += 'new ' + (functionName || '<anonymous>')\n  } else if (functionName) {\n    line += functionName\n  } else {\n    addSuffix = false\n    line += fileLocation\n  }\n\n  if (addSuffix) {\n    line += ' (' + fileLocation + ')'\n  }\n\n  return line\n}\n\n/**\n * Get constructor name of reviver.\n */\n\nfunction getConstructorName (obj) {\n  var receiver = obj.receiver\n  return (receiver.constructor && receiver.constructor.name) || null\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[24]; if(!item){ item= cacheData[24]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.346Z",
			"mtimeMs": 1596929147346,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isfile": true
		},
		"filename": "depd/lib/compat/event-listener-count.js",
		"content": "/*!\n * depd\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = eventListenerCount\n\n/**\n * Get the count of listeners on an event emitter of a specific type.\n */\n\nfunction eventListenerCount (emitter, type) {\n  return emitter.listeners(type).length\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[25]; if(!item){ item= cacheData[25]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.346Z",
			"mtimeMs": 1596929147346,
			"atime": "2020-08-28T04:39:52.506Z",
			"atimeMs": 1598589592505.9067,
			"isfile": true
		},
		"filename": "depd/lib/compat/index.js",
		"content": "/*!\n * depd\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar EventEmitter = require('events').EventEmitter\n\n/**\n * Module exports.\n * @public\n */\n\nlazyProperty(module.exports, 'callSiteToString', function callSiteToString () {\n  var limit = Error.stackTraceLimit\n  var obj = {}\n  var prep = Error.prepareStackTrace\n\n  function prepareObjectStackTrace (obj, stack) {\n    return stack\n  }\n\n  Error.prepareStackTrace = prepareObjectStackTrace\n  Error.stackTraceLimit = 2\n\n  // capture the stack\n  Error.captureStackTrace(obj)\n\n  // slice the stack\n  var stack = obj.stack.slice()\n\n  Error.prepareStackTrace = prep\n  Error.stackTraceLimit = limit\n\n  return stack[0].toString ? toString : require('./callsite-tostring')\n})\n\nlazyProperty(module.exports, 'eventListenerCount', function eventListenerCount () {\n  return EventEmitter.listenerCount || require('./event-listener-count')\n})\n\n/**\n * Define a lazy property.\n */\n\nfunction lazyProperty (obj, prop, getter) {\n  function get () {\n    var val = getter()\n\n    Object.defineProperty(obj, prop, {\n      configurable: true,\n      enumerable: true,\n      value: val\n    })\n\n    return val\n  }\n\n  Object.defineProperty(obj, prop, {\n    configurable: true,\n    enumerable: true,\n    get: get\n  })\n}\n\n/**\n * Call toString() on the obj\n */\n\nfunction toString (obj) {\n  return obj.toString()\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[26]; if(!item){ item= cacheData[26]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.346Z",
			"mtimeMs": 1596929147346,
			"atime": "2020-08-28T04:39:52.446Z",
			"atimeMs": 1598589592445.905,
			"isfile": true
		},
		"filename": "depd/package.json",
		"content": "{\n  \"name\": \"depd\",\n  \"description\": \"Deprecate all the things\",\n  \"version\": \"1.1.2\",\n  \"author\": \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"deprecate\",\n    \"deprecated\"\n  ],\n  \"repository\": \"dougwilson/nodejs-depd\",\n  \"browser\": \"lib/browser/index.js\",\n  \"devDependencies\": {\n    \"benchmark\": \"2.1.4\",\n    \"beautify-benchmark\": \"0.2.4\",\n    \"eslint\": \"3.19.0\",\n    \"eslint-config-standard\": \"7.1.0\",\n    \"eslint-plugin-markdown\": \"1.0.0-beta.7\",\n    \"eslint-plugin-promise\": \"3.6.0\",\n    \"eslint-plugin-standard\": \"3.0.1\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"~1.21.5\"\n  },\n  \"files\": [\n    \"lib/\",\n    \"History.md\",\n    \"LICENSE\",\n    \"index.js\",\n    \"Readme.md\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.6\"\n  },\n  \"scripts\": {\n    \"bench\": \"node benchmark/index.js\",\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec --bail test/\",\n    \"test-ci\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --no-exit test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.510Z",
			"atimeMs": 1598589592509.9067,
			"isdirectory": true
		},
		"filename": "destroy"
	}})
	fileData.push(function(){ var item= cacheData[28]; if(!item){ item= cacheData[28]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.010Z",
			"mtimeMs": 1598589592010,
			"atime": "2020-08-28T04:39:52.510Z",
			"atimeMs": 1598589592509.9067,
			"isfile": true
		},
		"filename": "destroy/index.js",
		"content": "/*!\n * destroy\n * Copyright(c) 2014 Jonathan Ong\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar ReadStream = require('fs').ReadStream\nvar Stream = require('stream')\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = destroy\n\n/**\n * Destroy a stream.\n *\n * @param {object} stream\n * @public\n */\n\nfunction destroy(stream) {\n  if (stream instanceof ReadStream) {\n    return destroyReadStream(stream)\n  }\n\n  if (!(stream instanceof Stream)) {\n    return stream\n  }\n\n  if (typeof stream.destroy === 'function') {\n    stream.destroy()\n  }\n\n  return stream\n}\n\n/**\n * Destroy a ReadStream.\n *\n * @param {object} stream\n * @private\n */\n\nfunction destroyReadStream(stream) {\n  stream.destroy()\n\n  if (typeof stream.close === 'function') {\n    // node.js core bug work-around\n    stream.on('open', onOpenClose)\n  }\n\n  return stream\n}\n\n/**\n * On open handler to close stream.\n * @private\n */\n\nfunction onOpenClose() {\n  if (typeof this.fd === 'number') {\n    // actually close down the fd\n    this.close()\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[29]; if(!item){ item= cacheData[29]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.010Z",
			"mtimeMs": 1598589592010,
			"atime": "2020-08-28T04:39:52.450Z",
			"atimeMs": 1598589592449.9053,
			"isfile": true
		},
		"filename": "destroy/package.json",
		"content": "{\n  \"name\": \"destroy\",\n  \"description\": \"destroy a stream if possible\",\n  \"version\": \"1.0.4\",\n  \"author\": {\n    \"name\": \"Jonathan Ong\",\n    \"email\": \"me@jongleberry.com\",\n    \"url\": \"http://jongleberry.com\",\n    \"twitter\": \"https://twitter.com/jongleberry\"\n  },\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": \"stream-utils/destroy\",\n  \"devDependencies\": {\n    \"istanbul\": \"0.4.2\",\n    \"mocha\": \"2.3.4\"\n  },\n  \"scripts\": {\n    \"test\": \"mocha --reporter spec\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter dot\"\n  },\n  \"files\": [\n    \"index.js\",\n    \"LICENSE\"\n  ],\n  \"keywords\": [\n    \"stream\",\n    \"streams\",\n    \"destroy\",\n    \"cleanup\",\n    \"leak\",\n    \"fd\"\n  ]\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.510Z",
			"atimeMs": 1598589592509.9067,
			"isdirectory": true
		},
		"filename": "ee-first"
	}})
	fileData.push(function(){ var item= cacheData[31]; if(!item){ item= cacheData[31]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.702Z",
			"mtimeMs": 1596929147702,
			"atime": "2020-08-28T04:39:52.510Z",
			"atimeMs": 1598589592509.9067,
			"isfile": true
		},
		"filename": "ee-first/index.js",
		"content": "/*!\n * ee-first\n * Copyright(c) 2014 Jonathan Ong\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = first\n\n/**\n * Get the first event in a set of event emitters and event pairs.\n *\n * @param {array} stuff\n * @param {function} done\n * @public\n */\n\nfunction first(stuff, done) {\n  if (!Array.isArray(stuff))\n    throw new TypeError('arg must be an array of [ee, events...] arrays')\n\n  var cleanups = []\n\n  for (var i = 0; i < stuff.length; i++) {\n    var arr = stuff[i]\n\n    if (!Array.isArray(arr) || arr.length < 2)\n      throw new TypeError('each array member must be [ee, events...]')\n\n    var ee = arr[0]\n\n    for (var j = 1; j < arr.length; j++) {\n      var event = arr[j]\n      var fn = listener(event, callback)\n\n      // listen to the event\n      ee.on(event, fn)\n      // push this listener to the list of cleanups\n      cleanups.push({\n        ee: ee,\n        event: event,\n        fn: fn,\n      })\n    }\n  }\n\n  function callback() {\n    cleanup()\n    done.apply(null, arguments)\n  }\n\n  function cleanup() {\n    var x\n    for (var i = 0; i < cleanups.length; i++) {\n      x = cleanups[i]\n      x.ee.removeListener(x.event, x.fn)\n    }\n  }\n\n  function thunk(fn) {\n    done = fn\n  }\n\n  thunk.cancel = cleanup\n\n  return thunk\n}\n\n/**\n * Create the event listener.\n * @private\n */\n\nfunction listener(event, done) {\n  return function onevent(arg1) {\n    var args = new Array(arguments.length)\n    var ee = this\n    var err = event === 'error'\n      ? arg1\n      : null\n\n    // copy args to prevent arguments escaping scope\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i]\n    }\n\n    done(err, ee, event, args)\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[32]; if(!item){ item= cacheData[32]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.702Z",
			"mtimeMs": 1596929147702,
			"atime": "2020-08-28T04:39:52.450Z",
			"atimeMs": 1598589592449.9053,
			"isfile": true
		},
		"filename": "ee-first/package.json",
		"content": "{\n  \"name\": \"ee-first\",\n  \"description\": \"return the first event in a set of ee/event pairs\",\n  \"version\": \"1.1.1\",\n  \"author\": {\n    \"name\": \"Jonathan Ong\",\n    \"email\": \"me@jongleberry.com\",\n    \"url\": \"http://jongleberry.com\",\n    \"twitter\": \"https://twitter.com/jongleberry\"\n  },\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": \"jonathanong/ee-first\",\n  \"devDependencies\": {\n    \"istanbul\": \"0.3.9\",\n    \"mocha\": \"2.2.5\"\n  },\n  \"files\": [\n    \"index.js\",\n    \"LICENSE\"\n  ],\n  \"scripts\": {\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.514Z",
			"atimeMs": 1598589592513.9067,
			"isdirectory": true
		},
		"filename": "encodeurl"
	}})
	fileData.push(function(){ var item= cacheData[34]; if(!item){ item= cacheData[34]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:51.999Z",
			"mtimeMs": 1598589591999,
			"atime": "2020-08-28T04:39:52.514Z",
			"atimeMs": 1598589592513.9067,
			"isfile": true
		},
		"filename": "encodeurl/index.js",
		"content": "/*!\n * encodeurl\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = encodeUrl\n\n/**\n * RegExp to match non-URL code points, *after* encoding (i.e. not including \"%\")\n * and including invalid escape sequences.\n * @private\n */\n\nvar ENCODE_CHARS_REGEXP = /(?:[^\\x21\\x25\\x26-\\x3B\\x3D\\x3F-\\x5B\\x5D\\x5F\\x61-\\x7A\\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g\n\n/**\n * RegExp to match unmatched surrogate pair.\n * @private\n */\n\nvar UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\\uD800-\\uDBFF])[\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF]([^\\uDC00-\\uDFFF]|$)/g\n\n/**\n * String to replace unmatched surrogate pair with.\n * @private\n */\n\nvar UNMATCHED_SURROGATE_PAIR_REPLACE = '$1\\uFFFD$2'\n\n/**\n * Encode a URL to a percent-encoded form, excluding already-encoded sequences.\n *\n * This function will take an already-encoded URL and encode all the non-URL\n * code points. This function will not encode the \"%\" character unless it is\n * not part of a valid sequence (`%20` will be left as-is, but `%foo` will\n * be encoded as `%25foo`).\n *\n * This encode is meant to be \"safe\" and does not throw errors. It will try as\n * hard as it can to properly encode the given URL, including replacing any raw,\n * unpaired surrogate pairs with the Unicode replacement character prior to\n * encoding.\n *\n * @param {string} url\n * @return {string}\n * @public\n */\n\nfunction encodeUrl (url) {\n  return String(url)\n    .replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE)\n    .replace(ENCODE_CHARS_REGEXP, encodeURI)\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[35]; if(!item){ item= cacheData[35]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:51.999Z",
			"mtimeMs": 1598589591999,
			"atime": "2020-08-28T04:39:52.450Z",
			"atimeMs": 1598589592449.9053,
			"isfile": true
		},
		"filename": "encodeurl/package.json",
		"content": "{\n  \"name\": \"encodeurl\",\n  \"description\": \"Encode a URL to a percent-encoded form, excluding already-encoded sequences\",\n  \"version\": \"1.0.2\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"encode\",\n    \"encodeurl\",\n    \"url\"\n  ],\n  \"repository\": \"pillarjs/encodeurl\",\n  \"devDependencies\": {\n    \"eslint\": \"3.19.0\",\n    \"eslint-config-standard\": \"10.2.1\",\n    \"eslint-plugin-import\": \"2.8.0\",\n    \"eslint-plugin-node\": \"5.2.1\",\n    \"eslint-plugin-promise\": \"3.6.0\",\n    \"eslint-plugin-standard\": \"3.0.1\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"2.5.3\"\n  },\n  \"files\": [\n    \"LICENSE\",\n    \"HISTORY.md\",\n    \"README.md\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.8\"\n  },\n  \"scripts\": {\n    \"lint\": \"eslint .\",\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.514Z",
			"atimeMs": 1598589592513.9067,
			"isdirectory": true
		},
		"filename": "escape-html"
	}})
	fileData.push(function(){ var item= cacheData[37]; if(!item){ item= cacheData[37]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.002Z",
			"mtimeMs": 1598589592002,
			"atime": "2020-08-28T04:39:52.518Z",
			"atimeMs": 1598589592517.907,
			"isfile": true
		},
		"filename": "escape-html/index.js",
		"content": "/*!\n * escape-html\n * Copyright(c) 2012-2013 TJ Holowaychuk\n * Copyright(c) 2015 Andreas Lubbe\n * Copyright(c) 2015 Tiancheng \"Timothy\" Gu\n * MIT Licensed\n */\n\n'use strict';\n\n/**\n * Module variables.\n * @private\n */\n\nvar matchHtmlRegExp = /[\"'&<>]/;\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = escapeHtml;\n\n/**\n * Escape special characters in the given string of html.\n *\n * @param  {string} string The string to escape for inserting into HTML\n * @return {string}\n * @public\n */\n\nfunction escapeHtml(string) {\n  var str = '' + string;\n  var match = matchHtmlRegExp.exec(str);\n\n  if (!match) {\n    return str;\n  }\n\n  var escape;\n  var html = '';\n  var index = 0;\n  var lastIndex = 0;\n\n  for (index = match.index; index < str.length; index++) {\n    switch (str.charCodeAt(index)) {\n      case 34: // \"\n        escape = '&quot;';\n        break;\n      case 38: // &\n        escape = '&amp;';\n        break;\n      case 39: // '\n        escape = '&#39;';\n        break;\n      case 60: // <\n        escape = '&lt;';\n        break;\n      case 62: // >\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n\n    if (lastIndex !== index) {\n      html += str.substring(lastIndex, index);\n    }\n\n    lastIndex = index + 1;\n    html += escape;\n  }\n\n  return lastIndex !== index\n    ? html + str.substring(lastIndex, index)\n    : html;\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[38]; if(!item){ item= cacheData[38]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.002Z",
			"mtimeMs": 1598589592002,
			"atime": "2020-08-28T04:39:52.450Z",
			"atimeMs": 1598589592449.9053,
			"isfile": true
		},
		"filename": "escape-html/package.json",
		"content": "{\n  \"name\": \"escape-html\",\n  \"description\": \"Escape string for use in HTML\",\n  \"version\": \"1.0.3\",\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"escape\",\n    \"html\",\n    \"utility\"\n  ],\n  \"repository\": \"component/escape-html\",\n  \"devDependencies\": {\n    \"benchmark\": \"1.0.0\",\n    \"beautify-benchmark\": \"0.2.4\"\n  },\n  \"files\": [\n    \"LICENSE\",\n    \"Readme.md\",\n    \"index.js\"\n  ],\n  \"scripts\": {\n    \"bench\": \"node benchmark/index.js\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.518Z",
			"atimeMs": 1598589592517.907,
			"isdirectory": true
		},
		"filename": "etag"
	}})
	fileData.push(function(){ var item= cacheData[40]; if(!item){ item= cacheData[40]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.024Z",
			"mtimeMs": 1598589592024,
			"atime": "2020-08-28T04:39:52.518Z",
			"atimeMs": 1598589592517.907,
			"isfile": true
		},
		"filename": "etag/index.js",
		"content": "/*!\n * etag\n * Copyright(c) 2014-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = etag\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar crypto = require('crypto')\nvar Stats = require('fs').Stats\n\n/**\n * Module variables.\n * @private\n */\n\nvar toString = Object.prototype.toString\n\n/**\n * Generate an entity tag.\n *\n * @param {Buffer|string} entity\n * @return {string}\n * @private\n */\n\nfunction entitytag (entity) {\n  if (entity.length === 0) {\n    // fast-path empty\n    return '\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"'\n  }\n\n  // compute hash of entity\n  var hash = crypto\n    .createHash('sha1')\n    .update(entity, 'utf8')\n    .digest('base64')\n    .substring(0, 27)\n\n  // compute length of entity\n  var len = typeof entity === 'string'\n    ? Buffer.byteLength(entity, 'utf8')\n    : entity.length\n\n  return '\"' + len.toString(16) + '-' + hash + '\"'\n}\n\n/**\n * Create a simple ETag.\n *\n * @param {string|Buffer|Stats} entity\n * @param {object} [options]\n * @param {boolean} [options.weak]\n * @return {String}\n * @public\n */\n\nfunction etag (entity, options) {\n  if (entity == null) {\n    throw new TypeError('argument entity is required')\n  }\n\n  // support fs.Stats object\n  var isStats = isstats(entity)\n  var weak = options && typeof options.weak === 'boolean'\n    ? options.weak\n    : isStats\n\n  // validate argument\n  if (!isStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {\n    throw new TypeError('argument entity must be string, Buffer, or fs.Stats')\n  }\n\n  // generate entity tag\n  var tag = isStats\n    ? stattag(entity)\n    : entitytag(entity)\n\n  return weak\n    ? 'W/' + tag\n    : tag\n}\n\n/**\n * Determine if object is a Stats object.\n *\n * @param {object} obj\n * @return {boolean}\n * @api private\n */\n\nfunction isstats (obj) {\n  // genuine fs.Stats\n  if (typeof Stats === 'function' && obj instanceof Stats) {\n    return true\n  }\n\n  // quack quack\n  return obj && typeof obj === 'object' &&\n    'ctime' in obj && toString.call(obj.ctime) === '[object Date]' &&\n    'mtime' in obj && toString.call(obj.mtime) === '[object Date]' &&\n    'ino' in obj && typeof obj.ino === 'number' &&\n    'size' in obj && typeof obj.size === 'number'\n}\n\n/**\n * Generate a tag for a stat.\n *\n * @param {object} stat\n * @return {string}\n * @private\n */\n\nfunction stattag (stat) {\n  var mtime = stat.mtime.getTime().toString(16)\n  var size = stat.size.toString(16)\n\n  return '\"' + size + '-' + mtime + '\"'\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[41]; if(!item){ item= cacheData[41]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.024Z",
			"mtimeMs": 1598589592024,
			"atime": "2020-08-28T04:39:52.450Z",
			"atimeMs": 1598589592449.9053,
			"isfile": true
		},
		"filename": "etag/package.json",
		"content": "{\n  \"name\": \"etag\",\n  \"description\": \"Create simple HTTP ETags\",\n  \"version\": \"1.8.1\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"David BjÃ¶rklund <david.bjorklund@gmail.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"etag\",\n    \"http\",\n    \"res\"\n  ],\n  \"repository\": \"jshttp/etag\",\n  \"devDependencies\": {\n    \"beautify-benchmark\": \"0.2.4\",\n    \"benchmark\": \"2.1.4\",\n    \"eslint\": \"3.19.0\",\n    \"eslint-config-standard\": \"10.2.1\",\n    \"eslint-plugin-import\": \"2.7.0\",\n    \"eslint-plugin-markdown\": \"1.0.0-beta.6\",\n    \"eslint-plugin-node\": \"5.1.1\",\n    \"eslint-plugin-promise\": \"3.5.0\",\n    \"eslint-plugin-standard\": \"3.0.1\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"1.21.5\",\n    \"safe-buffer\": \"5.1.1\",\n    \"seedrandom\": \"2.4.3\"\n  },\n  \"files\": [\n    \"LICENSE\",\n    \"HISTORY.md\",\n    \"README.md\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.6\"\n  },\n  \"scripts\": {\n    \"bench\": \"node benchmark/index.js\",\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.518Z",
			"atimeMs": 1598589592517.907,
			"isdirectory": true
		},
		"filename": "fresh"
	}})
	fileData.push(function(){ var item= cacheData[43]; if(!item){ item= cacheData[43]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.181Z",
			"mtimeMs": 1598589592181,
			"atime": "2020-08-28T04:39:52.522Z",
			"atimeMs": 1598589592521.907,
			"isfile": true
		},
		"filename": "fresh/index.js",
		"content": "/*!\n * fresh\n * Copyright(c) 2012 TJ Holowaychuk\n * Copyright(c) 2016-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * RegExp to check for no-cache token in Cache-Control.\n * @private\n */\n\nvar CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\\s*?no-cache\\s*?(?:,|$)/\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = fresh\n\n/**\n * Check freshness of the response using request and response headers.\n *\n * @param {Object} reqHeaders\n * @param {Object} resHeaders\n * @return {Boolean}\n * @public\n */\n\nfunction fresh (reqHeaders, resHeaders) {\n  // fields\n  var modifiedSince = reqHeaders['if-modified-since']\n  var noneMatch = reqHeaders['if-none-match']\n\n  // unconditional request\n  if (!modifiedSince && !noneMatch) {\n    return false\n  }\n\n  // Always return stale when Cache-Control: no-cache\n  // to support end-to-end reload requests\n  // https://tools.ietf.org/html/rfc2616#section-14.9.4\n  var cacheControl = reqHeaders['cache-control']\n  if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {\n    return false\n  }\n\n  // if-none-match\n  if (noneMatch && noneMatch !== '*') {\n    var etag = resHeaders['etag']\n\n    if (!etag) {\n      return false\n    }\n\n    var etagStale = true\n    var matches = parseTokenList(noneMatch)\n    for (var i = 0; i < matches.length; i++) {\n      var match = matches[i]\n      if (match === etag || match === 'W/' + etag || 'W/' + match === etag) {\n        etagStale = false\n        break\n      }\n    }\n\n    if (etagStale) {\n      return false\n    }\n  }\n\n  // if-modified-since\n  if (modifiedSince) {\n    var lastModified = resHeaders['last-modified']\n    var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince))\n\n    if (modifiedStale) {\n      return false\n    }\n  }\n\n  return true\n}\n\n/**\n * Parse an HTTP Date into a number.\n *\n * @param {string} date\n * @private\n */\n\nfunction parseHttpDate (date) {\n  var timestamp = date && Date.parse(date)\n\n  // istanbul ignore next: guard against date.js Date.parse patching\n  return typeof timestamp === 'number'\n    ? timestamp\n    : NaN\n}\n\n/**\n * Parse a HTTP token list.\n *\n * @param {string} str\n * @private\n */\n\nfunction parseTokenList (str) {\n  var end = 0\n  var list = []\n  var start = 0\n\n  // gather tokens\n  for (var i = 0, len = str.length; i < len; i++) {\n    switch (str.charCodeAt(i)) {\n      case 0x20: /*   */\n        if (start === end) {\n          start = end = i + 1\n        }\n        break\n      case 0x2c: /* , */\n        list.push(str.substring(start, end))\n        start = end = i + 1\n        break\n      default:\n        end = i + 1\n        break\n    }\n  }\n\n  // final token\n  list.push(str.substring(start, end))\n\n  return list\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[44]; if(!item){ item= cacheData[44]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.181Z",
			"mtimeMs": 1598589592181,
			"atime": "2020-08-28T04:39:52.454Z",
			"atimeMs": 1598589592453.9053,
			"isfile": true
		},
		"filename": "fresh/package.json",
		"content": "{\n  \"name\": \"fresh\",\n  \"description\": \"HTTP response freshness testing\",\n  \"version\": \"0.5.2\",\n  \"author\": \"TJ Holowaychuk <tj@vision-media.ca> (http://tjholowaychuk.com)\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)\"\n  ],\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"fresh\",\n    \"http\",\n    \"conditional\",\n    \"cache\"\n  ],\n  \"repository\": \"jshttp/fresh\",\n  \"devDependencies\": {\n    \"beautify-benchmark\": \"0.2.4\",\n    \"benchmark\": \"2.1.4\",\n    \"eslint\": \"3.19.0\",\n    \"eslint-config-standard\": \"10.2.1\",\n    \"eslint-plugin-import\": \"2.7.0\",\n    \"eslint-plugin-markdown\": \"1.0.0-beta.6\",\n    \"eslint-plugin-node\": \"5.1.1\",\n    \"eslint-plugin-promise\": \"3.5.0\",\n    \"eslint-plugin-standard\": \"3.0.1\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"1.21.5\"\n  },\n  \"files\": [\n    \"HISTORY.md\",\n    \"LICENSE\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.6\"\n  },\n  \"scripts\": {\n    \"bench\": \"node benchmark/index.js\",\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.522Z",
			"atimeMs": 1598589592521.907,
			"isdirectory": true
		},
		"filename": "http-errors"
	}})
	fileData.push(function(){ var item= cacheData[46]; if(!item){ item= cacheData[46]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.184Z",
			"mtimeMs": 1598589592184,
			"atime": "2020-08-28T04:39:52.522Z",
			"atimeMs": 1598589592521.907,
			"isfile": true
		},
		"filename": "http-errors/index.js",
		"content": "/*!\n * http-errors\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar deprecate = require('depd')('http-errors')\nvar setPrototypeOf = require('setprototypeof')\nvar statuses = require('statuses')\nvar inherits = require('inherits')\nvar toIdentifier = require('toidentifier')\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = createError\nmodule.exports.HttpError = createHttpErrorConstructor()\n\n// Populate exports for all constructors\npopulateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)\n\n/**\n * Get the code class of a status code.\n * @private\n */\n\nfunction codeClass (status) {\n  return Number(String(status).charAt(0) + '00')\n}\n\n/**\n * Create a new HTTP Error.\n *\n * @returns {Error}\n * @public\n */\n\nfunction createError () {\n  // so much arity going on ~_~\n  var err\n  var msg\n  var status = 500\n  var props = {}\n  for (var i = 0; i < arguments.length; i++) {\n    var arg = arguments[i]\n    if (arg instanceof Error) {\n      err = arg\n      status = err.status || err.statusCode || status\n      continue\n    }\n    switch (typeof arg) {\n      case 'string':\n        msg = arg\n        break\n      case 'number':\n        status = arg\n        if (i !== 0) {\n          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')\n        }\n        break\n      case 'object':\n        props = arg\n        break\n    }\n  }\n\n  if (typeof status === 'number' && (status < 400 || status >= 600)) {\n    deprecate('non-error status code; use only 4xx or 5xx status codes')\n  }\n\n  if (typeof status !== 'number' ||\n    (!statuses[status] && (status < 400 || status >= 600))) {\n    status = 500\n  }\n\n  // constructor\n  var HttpError = createError[status] || createError[codeClass(status)]\n\n  if (!err) {\n    // create error\n    err = HttpError\n      ? new HttpError(msg)\n      : new Error(msg || statuses[status])\n    Error.captureStackTrace(err, createError)\n  }\n\n  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {\n    // add properties to generic error\n    err.expose = status < 500\n    err.status = err.statusCode = status\n  }\n\n  for (var key in props) {\n    if (key !== 'status' && key !== 'statusCode') {\n      err[key] = props[key]\n    }\n  }\n\n  return err\n}\n\n/**\n * Create HTTP error abstract base class.\n * @private\n */\n\nfunction createHttpErrorConstructor () {\n  function HttpError () {\n    throw new TypeError('cannot construct abstract class')\n  }\n\n  inherits(HttpError, Error)\n\n  return HttpError\n}\n\n/**\n * Create a constructor for a client error.\n * @private\n */\n\nfunction createClientErrorConstructor (HttpError, name, code) {\n  var className = name.match(/Error$/) ? name : name + 'Error'\n\n  function ClientError (message) {\n    // create the error object\n    var msg = message != null ? message : statuses[code]\n    var err = new Error(msg)\n\n    // capture a stack trace to the construction point\n    Error.captureStackTrace(err, ClientError)\n\n    // adjust the [[Prototype]]\n    setPrototypeOf(err, ClientError.prototype)\n\n    // redefine the error message\n    Object.defineProperty(err, 'message', {\n      enumerable: true,\n      configurable: true,\n      value: msg,\n      writable: true\n    })\n\n    // redefine the error name\n    Object.defineProperty(err, 'name', {\n      enumerable: false,\n      configurable: true,\n      value: className,\n      writable: true\n    })\n\n    return err\n  }\n\n  inherits(ClientError, HttpError)\n  nameFunc(ClientError, className)\n\n  ClientError.prototype.status = code\n  ClientError.prototype.statusCode = code\n  ClientError.prototype.expose = true\n\n  return ClientError\n}\n\n/**\n * Create a constructor for a server error.\n * @private\n */\n\nfunction createServerErrorConstructor (HttpError, name, code) {\n  var className = name.match(/Error$/) ? name : name + 'Error'\n\n  function ServerError (message) {\n    // create the error object\n    var msg = message != null ? message : statuses[code]\n    var err = new Error(msg)\n\n    // capture a stack trace to the construction point\n    Error.captureStackTrace(err, ServerError)\n\n    // adjust the [[Prototype]]\n    setPrototypeOf(err, ServerError.prototype)\n\n    // redefine the error message\n    Object.defineProperty(err, 'message', {\n      enumerable: true,\n      configurable: true,\n      value: msg,\n      writable: true\n    })\n\n    // redefine the error name\n    Object.defineProperty(err, 'name', {\n      enumerable: false,\n      configurable: true,\n      value: className,\n      writable: true\n    })\n\n    return err\n  }\n\n  inherits(ServerError, HttpError)\n  nameFunc(ServerError, className)\n\n  ServerError.prototype.status = code\n  ServerError.prototype.statusCode = code\n  ServerError.prototype.expose = false\n\n  return ServerError\n}\n\n/**\n * Set the name of a function, if possible.\n * @private\n */\n\nfunction nameFunc (func, name) {\n  var desc = Object.getOwnPropertyDescriptor(func, 'name')\n\n  if (desc && desc.configurable) {\n    desc.value = name\n    Object.defineProperty(func, 'name', desc)\n  }\n}\n\n/**\n * Populate the exports object with constructors for every error class.\n * @private\n */\n\nfunction populateConstructorExports (exports, codes, HttpError) {\n  codes.forEach(function forEachCode (code) {\n    var CodeError\n    var name = toIdentifier(statuses[code])\n\n    switch (codeClass(code)) {\n      case 400:\n        CodeError = createClientErrorConstructor(HttpError, name, code)\n        break\n      case 500:\n        CodeError = createServerErrorConstructor(HttpError, name, code)\n        break\n    }\n\n    if (CodeError) {\n      // export the constructor\n      exports[code] = CodeError\n      exports[name] = CodeError\n    }\n  })\n\n  // backwards-compatibility\n  exports[\"I'mateapot\"] = deprecate.function(exports.ImATeapot,\n    '\"I\\'mateapot\"; use \"ImATeapot\" instead')\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[47]; if(!item){ item= cacheData[47]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.184Z",
			"mtimeMs": 1598589592184,
			"atime": "2020-08-28T04:39:52.454Z",
			"atimeMs": 1598589592453.9053,
			"isfile": true
		},
		"filename": "http-errors/package.json",
		"content": "{\n  \"name\": \"http-errors\",\n  \"description\": \"Create HTTP error objects\",\n  \"version\": \"1.7.3\",\n  \"author\": \"Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)\",\n  \"contributors\": [\n    \"Alan Plum <me@pluma.io>\",\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": \"jshttp/http-errors\",\n  \"dependencies\": {\n    \"depd\": \"~1.1.2\",\n    \"inherits\": \"2.0.4\",\n    \"setprototypeof\": \"1.1.1\",\n    \"statuses\": \">= 1.5.0 < 2\",\n    \"toidentifier\": \"1.0.0\"\n  },\n  \"devDependencies\": {\n    \"eslint\": \"5.16.0\",\n    \"eslint-config-standard\": \"12.0.0\",\n    \"eslint-plugin-import\": \"2.18.0\",\n    \"eslint-plugin-markdown\": \"1.0.0\",\n    \"eslint-plugin-node\": \"8.0.1\",\n    \"eslint-plugin-promise\": \"4.1.1\",\n    \"eslint-plugin-standard\": \"4.0.0\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"6.1.4\"\n  },\n  \"engines\": {\n    \"node\": \">= 0.6\"\n  },\n  \"scripts\": {\n    \"lint\": \"eslint --plugin markdown --ext js,md . && node ./scripts/lint-readme-list.js\",\n    \"test\": \"mocha --reporter spec --bail\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter dot\"\n  },\n  \"keywords\": [\n    \"http\",\n    \"error\"\n  ],\n  \"files\": [\n    \"index.js\",\n    \"HISTORY.md\",\n    \"LICENSE\",\n    \"README.md\"\n  ]\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.522Z",
			"atimeMs": 1598589592521.907,
			"isdirectory": true
		},
		"filename": "inherits"
	}})
	fileData.push(function(){ var item= cacheData[49]; if(!item){ item= cacheData[49]= 	{
		"stat": {
			"mtime": "2020-08-06T07:48:12.456Z",
			"mtimeMs": 1596700092456,
			"atime": "2020-08-28T04:39:52.522Z",
			"atimeMs": 1598589592521.907,
			"isfile": true
		},
		"filename": "inherits/inherits.js",
		"content": "try {\n  var util = require('util');\n  /* istanbul ignore next */\n  if (typeof util.inherits !== 'function') throw '';\n  module.exports = util.inherits;\n} catch (e) {\n  /* istanbul ignore next */\n  module.exports = require('./inherits_browser.js');\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[50]; if(!item){ item= cacheData[50]= 	{
		"stat": {
			"mtime": "2020-08-06T07:48:12.456Z",
			"mtimeMs": 1596700092456,
			"atime": "2020-08-28T04:39:52.522Z",
			"atimeMs": 1598589592521.907,
			"isfile": true
		},
		"filename": "inherits/inherits_browser.js",
		"content": "if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      ctor.prototype = Object.create(superCtor.prototype, {\n        constructor: {\n          value: ctor,\n          enumerable: false,\n          writable: true,\n          configurable: true\n        }\n      })\n    }\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      var TempCtor = function () {}\n      TempCtor.prototype = superCtor.prototype\n      ctor.prototype = new TempCtor()\n      ctor.prototype.constructor = ctor\n    }\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[51]; if(!item){ item= cacheData[51]= 	{
		"stat": {
			"mtime": "2020-08-06T07:48:12.456Z",
			"mtimeMs": 1596700092456,
			"atime": "2020-08-28T04:39:52.458Z",
			"atimeMs": 1598589592457.9055,
			"isfile": true
		},
		"filename": "inherits/package.json",
		"content": "{\n  \"name\": \"inherits\",\n  \"description\": \"Browser-friendly inheritance fully compatible with standard node.js inherits()\",\n  \"version\": \"2.0.4\",\n  \"keywords\": [\n    \"inheritance\",\n    \"class\",\n    \"klass\",\n    \"oop\",\n    \"object-oriented\",\n    \"inherits\",\n    \"browser\",\n    \"browserify\"\n  ],\n  \"main\": \"./inherits.js\",\n  \"browser\": \"./inherits_browser.js\",\n  \"repository\": \"git://github.com/isaacs/inherits\",\n  \"license\": \"ISC\",\n  \"scripts\": {\n    \"test\": \"tap\"\n  },\n  \"devDependencies\": {\n    \"tap\": \"^14.2.4\"\n  },\n  \"files\": [\n    \"inherits.js\",\n    \"inherits_browser.js\"\n  ]\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.526Z",
			"atimeMs": 1598589592525.9072,
			"isdirectory": true
		},
		"filename": "mime"
	}})
	fileData.push(function(){ var item= cacheData[53]; if(!item){ item= cacheData[53]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.185Z",
			"mtimeMs": 1598589592185,
			"atime": "2020-08-28T04:39:52.526Z",
			"atimeMs": 1598589592525.9072,
			"isfile": true
		},
		"filename": "mime/cli.js",
		"content": "#!/usr/bin/env node\n\nvar mime = require('./mime.js');\nvar file = process.argv[2];\nvar type = mime.lookup(file);\n\nprocess.stdout.write(type + '\\n');\n\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[54]; if(!item){ item= cacheData[54]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.185Z",
			"mtimeMs": 1598589592185,
			"atime": "2020-08-28T04:39:52.526Z",
			"atimeMs": 1598589592525.9072,
			"isfile": true
		},
		"filename": "mime/mime.js",
		"content": "var path = require('path');\nvar fs = require('fs');\n\nfunction Mime() {\n  // Map of extension -> mime type\n  this.types = Object.create(null);\n\n  // Map of mime type -> extension\n  this.extensions = Object.create(null);\n}\n\n/**\n * Define mimetype -> extension mappings.  Each key is a mime-type that maps\n * to an array of extensions associated with the type.  The first extension is\n * used as the default extension for the type.\n *\n * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});\n *\n * @param map (Object) type definitions\n */\nMime.prototype.define = function (map) {\n  for (var type in map) {\n    var exts = map[type];\n    for (var i = 0; i < exts.length; i++) {\n      if (process.env.DEBUG_MIME && this.types[exts[i]]) {\n        console.warn((this._loading || \"define()\").replace(/.*\\//, ''), 'changes \"' + exts[i] + '\" extension type from ' +\n          this.types[exts[i]] + ' to ' + type);\n      }\n\n      this.types[exts[i]] = type;\n    }\n\n    // Default extension is the first one we encounter\n    if (!this.extensions[type]) {\n      this.extensions[type] = exts[0];\n    }\n  }\n};\n\n/**\n * Load an Apache2-style \".types\" file\n *\n * This may be called multiple times (it's expected).  Where files declare\n * overlapping types/extensions, the last file wins.\n *\n * @param file (String) path of file to load.\n */\nMime.prototype.load = function(file) {\n  this._loading = file;\n  // Read file and split into lines\n  var map = {},\n      content = fs.readFileSync(file, 'ascii'),\n      lines = content.split(/[\\r\\n]+/);\n\n  lines.forEach(function(line) {\n    // Clean up whitespace/comments, and split into fields\n    var fields = line.replace(/\\s*#.*|^\\s*|\\s*$/g, '').split(/\\s+/);\n    map[fields.shift()] = fields;\n  });\n\n  this.define(map);\n\n  this._loading = null;\n};\n\n/**\n * Lookup a mime type based on extension\n */\nMime.prototype.lookup = function(path, fallback) {\n  var ext = path.replace(/^.*[\\.\\/\\\\]/, '').toLowerCase();\n\n  return this.types[ext] || fallback || this.default_type;\n};\n\n/**\n * Return file extension associated with a mime type\n */\nMime.prototype.extension = function(mimeType) {\n  var type = mimeType.match(/^\\s*([^;\\s]*)(?:;|\\s|$)/)[1].toLowerCase();\n  return this.extensions[type];\n};\n\n// Default instance\nvar mime = new Mime();\n\n// Define built-in types\nmime.define(require('./types.json'));\n\n// Default type\nmime.default_type = mime.lookup('bin');\n\n//\n// Additional API specific to the default instance\n//\n\nmime.Mime = Mime;\n\n/**\n * Lookup a charset based on mime type.\n */\nmime.charsets = {\n  lookup: function(mimeType, fallback) {\n    // Assume text types are utf8\n    return (/^text\\/|^application\\/(javascript|json)/).test(mimeType) ? 'UTF-8' : fallback;\n  }\n};\n\nmodule.exports = mime;\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[55]; if(!item){ item= cacheData[55]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.185Z",
			"mtimeMs": 1598589592185,
			"atime": "2020-08-28T04:39:52.458Z",
			"atimeMs": 1598589592457.9055,
			"isfile": true
		},
		"filename": "mime/package.json",
		"content": "{\n  \"author\": {\n    \"name\": \"Robert Kieffer\",\n    \"url\": \"http://github.com/broofa\",\n    \"email\": \"robert@broofa.com\"\n  },\n  \"bin\": {\n    \"mime\": \"cli.js\"\n  },\n  \"engines\": {\n    \"node\": \">=4\"\n  },\n  \"contributors\": [\n    {\n      \"name\": \"Benjamin Thomas\",\n      \"url\": \"http://github.com/bentomas\",\n      \"email\": \"benjamin@benjaminthomas.org\"\n    }\n  ],\n  \"description\": \"A comprehensive library for mime-type mapping\",\n  \"license\": \"MIT\",\n  \"dependencies\": {},\n  \"devDependencies\": {\n    \"github-release-notes\": \"0.13.1\",\n    \"mime-db\": \"1.31.0\",\n    \"mime-score\": \"1.1.0\"\n  },\n  \"scripts\": {\n    \"prepare\": \"node src/build.js\",\n    \"changelog\": \"gren changelog --tags=all --generate --override\",\n    \"test\": \"node src/test.js\"\n  },\n  \"keywords\": [\n    \"util\",\n    \"mime\"\n  ],\n  \"main\": \"mime.js\",\n  \"name\": \"mime\",\n  \"repository\": {\n    \"url\": \"https://github.com/broofa/node-mime\",\n    \"type\": \"git\"\n  },\n  \"version\": \"1.6.0\"\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.526Z",
			"atimeMs": 1598589592525.9072,
			"isdirectory": true
		},
		"filename": "mime/src"
	}})
	fileData.push(function(){ var item= cacheData[57]; if(!item){ item= cacheData[57]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.185Z",
			"mtimeMs": 1598589592185,
			"atime": "2020-08-28T04:39:52.526Z",
			"atimeMs": 1598589592525.9072,
			"isfile": true
		},
		"filename": "mime/src/build.js",
		"content": "#!/usr/bin/env node\n\n'use strict';\n\nconst fs = require('fs');\nconst path = require('path');\nconst mimeScore = require('mime-score');\n\nlet db = require('mime-db');\nlet chalk = require('chalk');\n\nconst STANDARD_FACET_SCORE = 900;\n\nconst byExtension = {};\n\n// Clear out any conflict extensions in mime-db\nfor (let type in db) {\n  let entry = db[type];\n  entry.type = type;\n\n  if (!entry.extensions) continue;\n\n  entry.extensions.forEach(ext => {\n    if (ext in byExtension) {\n      const e0 = entry;\n      const e1 = byExtension[ext];\n      e0.pri = mimeScore(e0.type, e0.source);\n      e1.pri = mimeScore(e1.type, e1.source);\n\n      let drop = e0.pri < e1.pri ? e0 : e1;\n      let keep = e0.pri >= e1.pri ? e0 : e1;\n      drop.extensions = drop.extensions.filter(e => e !== ext);\n\n      console.log(`${ext}: Keeping ${chalk.green(keep.type)} (${keep.pri}), dropping ${chalk.red(drop.type)} (${drop.pri})`);\n    }\n    byExtension[ext] = entry;\n  });\n}\n\nfunction writeTypesFile(types, path) {\n  fs.writeFileSync(path, JSON.stringify(types));\n}\n\n// Segregate into standard and non-standard types based on facet per\n// https://tools.ietf.org/html/rfc6838#section-3.1\nconst types = {};\n\nObject.keys(db).sort().forEach(k => {\n  const entry = db[k];\n  types[entry.type] = entry.extensions;\n});\n\nwriteTypesFile(types, path.join(__dirname, '..', 'types.json'));\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[58]; if(!item){ item= cacheData[58]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.185Z",
			"mtimeMs": 1598589592185,
			"atime": "2020-08-28T04:39:52.530Z",
			"atimeMs": 1598589592529.9072,
			"isfile": true
		},
		"filename": "mime/src/test.js",
		"content": "/**\n * Usage: node test.js\n */\n\nvar mime = require('../mime');\nvar assert = require('assert');\nvar path = require('path');\n\n//\n// Test mime lookups\n//\n\nassert.equal('text/plain', mime.lookup('text.txt'));     // normal file\nassert.equal('text/plain', mime.lookup('TEXT.TXT'));     // uppercase\nassert.equal('text/plain', mime.lookup('dir/text.txt')); // dir + file\nassert.equal('text/plain', mime.lookup('.text.txt'));    // hidden file\nassert.equal('text/plain', mime.lookup('.txt'));         // nameless\nassert.equal('text/plain', mime.lookup('txt'));          // extension-only\nassert.equal('text/plain', mime.lookup('/txt'));         // extension-less ()\nassert.equal('text/plain', mime.lookup('\\\\txt'));        // Windows, extension-less\nassert.equal('application/octet-stream', mime.lookup('text.nope')); // unrecognized\nassert.equal('fallback', mime.lookup('text.fallback', 'fallback')); // alternate default\n\n//\n// Test extensions\n//\n\nassert.equal('txt', mime.extension(mime.types.text));\nassert.equal('html', mime.extension(mime.types.htm));\nassert.equal('bin', mime.extension('application/octet-stream'));\nassert.equal('bin', mime.extension('application/octet-stream '));\nassert.equal('html', mime.extension(' text/html; charset=UTF-8'));\nassert.equal('html', mime.extension('text/html; charset=UTF-8 '));\nassert.equal('html', mime.extension('text/html; charset=UTF-8'));\nassert.equal('html', mime.extension('text/html ; charset=UTF-8'));\nassert.equal('html', mime.extension('text/html;charset=UTF-8'));\nassert.equal('html', mime.extension('text/Html;charset=UTF-8'));\nassert.equal(undefined, mime.extension('unrecognized'));\n\n//\n// Test node.types lookups\n//\n\nassert.equal('font/woff', mime.lookup('file.woff'));\nassert.equal('application/octet-stream', mime.lookup('file.buffer'));\n// TODO: Uncomment once #157 is resolved\n// assert.equal('audio/mp4', mime.lookup('file.m4a'));\nassert.equal('font/otf', mime.lookup('file.otf'));\n\n//\n// Test charsets\n//\n\nassert.equal('UTF-8', mime.charsets.lookup('text/plain'));\nassert.equal('UTF-8', mime.charsets.lookup(mime.types.js));\nassert.equal('UTF-8', mime.charsets.lookup(mime.types.json));\nassert.equal(undefined, mime.charsets.lookup(mime.types.bin));\nassert.equal('fallback', mime.charsets.lookup('application/octet-stream', 'fallback'));\n\nconsole.log('\\nAll tests passed');\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[59]; if(!item){ item= cacheData[59]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.185Z",
			"mtimeMs": 1598589592185,
			"atime": "2020-08-28T04:39:52.534Z",
			"atimeMs": 1598589592533.9072,
			"isfile": true
		},
		"filename": "mime/types.json",
		"content": "{\"application/andrew-inset\":[\"ez\"],\"application/applixware\":[\"aw\"],\"application/atom+xml\":[\"atom\"],\"application/atomcat+xml\":[\"atomcat\"],\"application/atomsvc+xml\":[\"atomsvc\"],\"application/bdoc\":[\"bdoc\"],\"application/ccxml+xml\":[\"ccxml\"],\"application/cdmi-capability\":[\"cdmia\"],\"application/cdmi-container\":[\"cdmic\"],\"application/cdmi-domain\":[\"cdmid\"],\"application/cdmi-object\":[\"cdmio\"],\"application/cdmi-queue\":[\"cdmiq\"],\"application/cu-seeme\":[\"cu\"],\"application/dash+xml\":[\"mpd\"],\"application/davmount+xml\":[\"davmount\"],\"application/docbook+xml\":[\"dbk\"],\"application/dssc+der\":[\"dssc\"],\"application/dssc+xml\":[\"xdssc\"],\"application/ecmascript\":[\"ecma\"],\"application/emma+xml\":[\"emma\"],\"application/epub+zip\":[\"epub\"],\"application/exi\":[\"exi\"],\"application/font-tdpfr\":[\"pfr\"],\"application/font-woff\":[],\"application/font-woff2\":[],\"application/geo+json\":[\"geojson\"],\"application/gml+xml\":[\"gml\"],\"application/gpx+xml\":[\"gpx\"],\"application/gxf\":[\"gxf\"],\"application/gzip\":[\"gz\"],\"application/hyperstudio\":[\"stk\"],\"application/inkml+xml\":[\"ink\",\"inkml\"],\"application/ipfix\":[\"ipfix\"],\"application/java-archive\":[\"jar\",\"war\",\"ear\"],\"application/java-serialized-object\":[\"ser\"],\"application/java-vm\":[\"class\"],\"application/javascript\":[\"js\",\"mjs\"],\"application/json\":[\"json\",\"map\"],\"application/json5\":[\"json5\"],\"application/jsonml+json\":[\"jsonml\"],\"application/ld+json\":[\"jsonld\"],\"application/lost+xml\":[\"lostxml\"],\"application/mac-binhex40\":[\"hqx\"],\"application/mac-compactpro\":[\"cpt\"],\"application/mads+xml\":[\"mads\"],\"application/manifest+json\":[\"webmanifest\"],\"application/marc\":[\"mrc\"],\"application/marcxml+xml\":[\"mrcx\"],\"application/mathematica\":[\"ma\",\"nb\",\"mb\"],\"application/mathml+xml\":[\"mathml\"],\"application/mbox\":[\"mbox\"],\"application/mediaservercontrol+xml\":[\"mscml\"],\"application/metalink+xml\":[\"metalink\"],\"application/metalink4+xml\":[\"meta4\"],\"application/mets+xml\":[\"mets\"],\"application/mods+xml\":[\"mods\"],\"application/mp21\":[\"m21\",\"mp21\"],\"application/mp4\":[\"mp4s\",\"m4p\"],\"application/msword\":[\"doc\",\"dot\"],\"application/mxf\":[\"mxf\"],\"application/octet-stream\":[\"bin\",\"dms\",\"lrf\",\"mar\",\"so\",\"dist\",\"distz\",\"pkg\",\"bpk\",\"dump\",\"elc\",\"deploy\",\"exe\",\"dll\",\"deb\",\"dmg\",\"iso\",\"img\",\"msi\",\"msp\",\"msm\",\"buffer\"],\"application/oda\":[\"oda\"],\"application/oebps-package+xml\":[\"opf\"],\"application/ogg\":[\"ogx\"],\"application/omdoc+xml\":[\"omdoc\"],\"application/onenote\":[\"onetoc\",\"onetoc2\",\"onetmp\",\"onepkg\"],\"application/oxps\":[\"oxps\"],\"application/patch-ops-error+xml\":[\"xer\"],\"application/pdf\":[\"pdf\"],\"application/pgp-encrypted\":[\"pgp\"],\"application/pgp-signature\":[\"asc\",\"sig\"],\"application/pics-rules\":[\"prf\"],\"application/pkcs10\":[\"p10\"],\"application/pkcs7-mime\":[\"p7m\",\"p7c\"],\"application/pkcs7-signature\":[\"p7s\"],\"application/pkcs8\":[\"p8\"],\"application/pkix-attr-cert\":[\"ac\"],\"application/pkix-cert\":[\"cer\"],\"application/pkix-crl\":[\"crl\"],\"application/pkix-pkipath\":[\"pkipath\"],\"application/pkixcmp\":[\"pki\"],\"application/pls+xml\":[\"pls\"],\"application/postscript\":[\"ai\",\"eps\",\"ps\"],\"application/prs.cww\":[\"cww\"],\"application/pskc+xml\":[\"pskcxml\"],\"application/raml+yaml\":[\"raml\"],\"application/rdf+xml\":[\"rdf\"],\"application/reginfo+xml\":[\"rif\"],\"application/relax-ng-compact-syntax\":[\"rnc\"],\"application/resource-lists+xml\":[\"rl\"],\"application/resource-lists-diff+xml\":[\"rld\"],\"application/rls-services+xml\":[\"rs\"],\"application/rpki-ghostbusters\":[\"gbr\"],\"application/rpki-manifest\":[\"mft\"],\"application/rpki-roa\":[\"roa\"],\"application/rsd+xml\":[\"rsd\"],\"application/rss+xml\":[\"rss\"],\"application/rtf\":[\"rtf\"],\"application/sbml+xml\":[\"sbml\"],\"application/scvp-cv-request\":[\"scq\"],\"application/scvp-cv-response\":[\"scs\"],\"application/scvp-vp-request\":[\"spq\"],\"application/scvp-vp-response\":[\"spp\"],\"application/sdp\":[\"sdp\"],\"application/set-payment-initiation\":[\"setpay\"],\"application/set-registration-initiation\":[\"setreg\"],\"application/shf+xml\":[\"shf\"],\"application/smil+xml\":[\"smi\",\"smil\"],\"application/sparql-query\":[\"rq\"],\"application/sparql-results+xml\":[\"srx\"],\"application/srgs\":[\"gram\"],\"application/srgs+xml\":[\"grxml\"],\"application/sru+xml\":[\"sru\"],\"application/ssdl+xml\":[\"ssdl\"],\"application/ssml+xml\":[\"ssml\"],\"application/tei+xml\":[\"tei\",\"teicorpus\"],\"application/thraud+xml\":[\"tfi\"],\"application/timestamped-data\":[\"tsd\"],\"application/vnd.3gpp.pic-bw-large\":[\"plb\"],\"application/vnd.3gpp.pic-bw-small\":[\"psb\"],\"application/vnd.3gpp.pic-bw-var\":[\"pvb\"],\"application/vnd.3gpp2.tcap\":[\"tcap\"],\"application/vnd.3m.post-it-notes\":[\"pwn\"],\"application/vnd.accpac.simply.aso\":[\"aso\"],\"application/vnd.accpac.simply.imp\":[\"imp\"],\"application/vnd.acucobol\":[\"acu\"],\"application/vnd.acucorp\":[\"atc\",\"acutc\"],\"application/vnd.adobe.air-application-installer-package+zip\":[\"air\"],\"application/vnd.adobe.formscentral.fcdt\":[\"fcdt\"],\"application/vnd.adobe.fxp\":[\"fxp\",\"fxpl\"],\"application/vnd.adobe.xdp+xml\":[\"xdp\"],\"application/vnd.adobe.xfdf\":[\"xfdf\"],\"application/vnd.ahead.space\":[\"ahead\"],\"application/vnd.airzip.filesecure.azf\":[\"azf\"],\"application/vnd.airzip.filesecure.azs\":[\"azs\"],\"application/vnd.amazon.ebook\":[\"azw\"],\"application/vnd.americandynamics.acc\":[\"acc\"],\"application/vnd.amiga.ami\":[\"ami\"],\"application/vnd.android.package-archive\":[\"apk\"],\"application/vnd.anser-web-certificate-issue-initiation\":[\"cii\"],\"application/vnd.anser-web-funds-transfer-initiation\":[\"fti\"],\"application/vnd.antix.game-component\":[\"atx\"],\"application/vnd.apple.installer+xml\":[\"mpkg\"],\"application/vnd.apple.mpegurl\":[\"m3u8\"],\"application/vnd.apple.pkpass\":[\"pkpass\"],\"application/vnd.aristanetworks.swi\":[\"swi\"],\"application/vnd.astraea-software.iota\":[\"iota\"],\"application/vnd.audiograph\":[\"aep\"],\"application/vnd.blueice.multipass\":[\"mpm\"],\"application/vnd.bmi\":[\"bmi\"],\"application/vnd.businessobjects\":[\"rep\"],\"application/vnd.chemdraw+xml\":[\"cdxml\"],\"application/vnd.chipnuts.karaoke-mmd\":[\"mmd\"],\"application/vnd.cinderella\":[\"cdy\"],\"application/vnd.claymore\":[\"cla\"],\"application/vnd.cloanto.rp9\":[\"rp9\"],\"application/vnd.clonk.c4group\":[\"c4g\",\"c4d\",\"c4f\",\"c4p\",\"c4u\"],\"application/vnd.cluetrust.cartomobile-config\":[\"c11amc\"],\"application/vnd.cluetrust.cartomobile-config-pkg\":[\"c11amz\"],\"application/vnd.commonspace\":[\"csp\"],\"application/vnd.contact.cmsg\":[\"cdbcmsg\"],\"application/vnd.cosmocaller\":[\"cmc\"],\"application/vnd.crick.clicker\":[\"clkx\"],\"application/vnd.crick.clicker.keyboard\":[\"clkk\"],\"application/vnd.crick.clicker.palette\":[\"clkp\"],\"application/vnd.crick.clicker.template\":[\"clkt\"],\"application/vnd.crick.clicker.wordbank\":[\"clkw\"],\"application/vnd.criticaltools.wbs+xml\":[\"wbs\"],\"application/vnd.ctc-posml\":[\"pml\"],\"application/vnd.cups-ppd\":[\"ppd\"],\"application/vnd.curl.car\":[\"car\"],\"application/vnd.curl.pcurl\":[\"pcurl\"],\"application/vnd.dart\":[\"dart\"],\"application/vnd.data-vision.rdz\":[\"rdz\"],\"application/vnd.dece.data\":[\"uvf\",\"uvvf\",\"uvd\",\"uvvd\"],\"application/vnd.dece.ttml+xml\":[\"uvt\",\"uvvt\"],\"application/vnd.dece.unspecified\":[\"uvx\",\"uvvx\"],\"application/vnd.dece.zip\":[\"uvz\",\"uvvz\"],\"application/vnd.denovo.fcselayout-link\":[\"fe_launch\"],\"application/vnd.dna\":[\"dna\"],\"application/vnd.dolby.mlp\":[\"mlp\"],\"application/vnd.dpgraph\":[\"dpg\"],\"application/vnd.dreamfactory\":[\"dfac\"],\"application/vnd.ds-keypoint\":[\"kpxx\"],\"application/vnd.dvb.ait\":[\"ait\"],\"application/vnd.dvb.service\":[\"svc\"],\"application/vnd.dynageo\":[\"geo\"],\"application/vnd.ecowin.chart\":[\"mag\"],\"application/vnd.enliven\":[\"nml\"],\"application/vnd.epson.esf\":[\"esf\"],\"application/vnd.epson.msf\":[\"msf\"],\"application/vnd.epson.quickanime\":[\"qam\"],\"application/vnd.epson.salt\":[\"slt\"],\"application/vnd.epson.ssf\":[\"ssf\"],\"application/vnd.eszigno3+xml\":[\"es3\",\"et3\"],\"application/vnd.ezpix-album\":[\"ez2\"],\"application/vnd.ezpix-package\":[\"ez3\"],\"application/vnd.fdf\":[\"fdf\"],\"application/vnd.fdsn.mseed\":[\"mseed\"],\"application/vnd.fdsn.seed\":[\"seed\",\"dataless\"],\"application/vnd.flographit\":[\"gph\"],\"application/vnd.fluxtime.clip\":[\"ftc\"],\"application/vnd.framemaker\":[\"fm\",\"frame\",\"maker\",\"book\"],\"application/vnd.frogans.fnc\":[\"fnc\"],\"application/vnd.frogans.ltf\":[\"ltf\"],\"application/vnd.fsc.weblaunch\":[\"fsc\"],\"application/vnd.fujitsu.oasys\":[\"oas\"],\"application/vnd.fujitsu.oasys2\":[\"oa2\"],\"application/vnd.fujitsu.oasys3\":[\"oa3\"],\"application/vnd.fujitsu.oasysgp\":[\"fg5\"],\"application/vnd.fujitsu.oasysprs\":[\"bh2\"],\"application/vnd.fujixerox.ddd\":[\"ddd\"],\"application/vnd.fujixerox.docuworks\":[\"xdw\"],\"application/vnd.fujixerox.docuworks.binder\":[\"xbd\"],\"application/vnd.fuzzysheet\":[\"fzs\"],\"application/vnd.genomatix.tuxedo\":[\"txd\"],\"application/vnd.geogebra.file\":[\"ggb\"],\"application/vnd.geogebra.tool\":[\"ggt\"],\"application/vnd.geometry-explorer\":[\"gex\",\"gre\"],\"application/vnd.geonext\":[\"gxt\"],\"application/vnd.geoplan\":[\"g2w\"],\"application/vnd.geospace\":[\"g3w\"],\"application/vnd.gmx\":[\"gmx\"],\"application/vnd.google-apps.document\":[\"gdoc\"],\"application/vnd.google-apps.presentation\":[\"gslides\"],\"application/vnd.google-apps.spreadsheet\":[\"gsheet\"],\"application/vnd.google-earth.kml+xml\":[\"kml\"],\"application/vnd.google-earth.kmz\":[\"kmz\"],\"application/vnd.grafeq\":[\"gqf\",\"gqs\"],\"application/vnd.groove-account\":[\"gac\"],\"application/vnd.groove-help\":[\"ghf\"],\"application/vnd.groove-identity-message\":[\"gim\"],\"application/vnd.groove-injector\":[\"grv\"],\"application/vnd.groove-tool-message\":[\"gtm\"],\"application/vnd.groove-tool-template\":[\"tpl\"],\"application/vnd.groove-vcard\":[\"vcg\"],\"application/vnd.hal+xml\":[\"hal\"],\"application/vnd.handheld-entertainment+xml\":[\"zmm\"],\"application/vnd.hbci\":[\"hbci\"],\"application/vnd.hhe.lesson-player\":[\"les\"],\"application/vnd.hp-hpgl\":[\"hpgl\"],\"application/vnd.hp-hpid\":[\"hpid\"],\"application/vnd.hp-hps\":[\"hps\"],\"application/vnd.hp-jlyt\":[\"jlt\"],\"application/vnd.hp-pcl\":[\"pcl\"],\"application/vnd.hp-pclxl\":[\"pclxl\"],\"application/vnd.hydrostatix.sof-data\":[\"sfd-hdstx\"],\"application/vnd.ibm.minipay\":[\"mpy\"],\"application/vnd.ibm.modcap\":[\"afp\",\"listafp\",\"list3820\"],\"application/vnd.ibm.rights-management\":[\"irm\"],\"application/vnd.ibm.secure-container\":[\"sc\"],\"application/vnd.iccprofile\":[\"icc\",\"icm\"],\"application/vnd.igloader\":[\"igl\"],\"application/vnd.immervision-ivp\":[\"ivp\"],\"application/vnd.immervision-ivu\":[\"ivu\"],\"application/vnd.insors.igm\":[\"igm\"],\"application/vnd.intercon.formnet\":[\"xpw\",\"xpx\"],\"application/vnd.intergeo\":[\"i2g\"],\"application/vnd.intu.qbo\":[\"qbo\"],\"application/vnd.intu.qfx\":[\"qfx\"],\"application/vnd.ipunplugged.rcprofile\":[\"rcprofile\"],\"application/vnd.irepository.package+xml\":[\"irp\"],\"application/vnd.is-xpr\":[\"xpr\"],\"application/vnd.isac.fcs\":[\"fcs\"],\"application/vnd.jam\":[\"jam\"],\"application/vnd.jcp.javame.midlet-rms\":[\"rms\"],\"application/vnd.jisp\":[\"jisp\"],\"application/vnd.joost.joda-archive\":[\"joda\"],\"application/vnd.kahootz\":[\"ktz\",\"ktr\"],\"application/vnd.kde.karbon\":[\"karbon\"],\"application/vnd.kde.kchart\":[\"chrt\"],\"application/vnd.kde.kformula\":[\"kfo\"],\"application/vnd.kde.kivio\":[\"flw\"],\"application/vnd.kde.kontour\":[\"kon\"],\"application/vnd.kde.kpresenter\":[\"kpr\",\"kpt\"],\"application/vnd.kde.kspread\":[\"ksp\"],\"application/vnd.kde.kword\":[\"kwd\",\"kwt\"],\"application/vnd.kenameaapp\":[\"htke\"],\"application/vnd.kidspiration\":[\"kia\"],\"application/vnd.kinar\":[\"kne\",\"knp\"],\"application/vnd.koan\":[\"skp\",\"skd\",\"skt\",\"skm\"],\"application/vnd.kodak-descriptor\":[\"sse\"],\"application/vnd.las.las+xml\":[\"lasxml\"],\"application/vnd.llamagraphics.life-balance.desktop\":[\"lbd\"],\"application/vnd.llamagraphics.life-balance.exchange+xml\":[\"lbe\"],\"application/vnd.lotus-1-2-3\":[\"123\"],\"application/vnd.lotus-approach\":[\"apr\"],\"application/vnd.lotus-freelance\":[\"pre\"],\"application/vnd.lotus-notes\":[\"nsf\"],\"application/vnd.lotus-organizer\":[\"org\"],\"application/vnd.lotus-screencam\":[\"scm\"],\"application/vnd.lotus-wordpro\":[\"lwp\"],\"application/vnd.macports.portpkg\":[\"portpkg\"],\"application/vnd.mcd\":[\"mcd\"],\"application/vnd.medcalcdata\":[\"mc1\"],\"application/vnd.mediastation.cdkey\":[\"cdkey\"],\"application/vnd.mfer\":[\"mwf\"],\"application/vnd.mfmp\":[\"mfm\"],\"application/vnd.micrografx.flo\":[\"flo\"],\"application/vnd.micrografx.igx\":[\"igx\"],\"application/vnd.mif\":[\"mif\"],\"application/vnd.mobius.daf\":[\"daf\"],\"application/vnd.mobius.dis\":[\"dis\"],\"application/vnd.mobius.mbk\":[\"mbk\"],\"application/vnd.mobius.mqy\":[\"mqy\"],\"application/vnd.mobius.msl\":[\"msl\"],\"application/vnd.mobius.plc\":[\"plc\"],\"application/vnd.mobius.txf\":[\"txf\"],\"application/vnd.mophun.application\":[\"mpn\"],\"application/vnd.mophun.certificate\":[\"mpc\"],\"application/vnd.mozilla.xul+xml\":[\"xul\"],\"application/vnd.ms-artgalry\":[\"cil\"],\"application/vnd.ms-cab-compressed\":[\"cab\"],\"application/vnd.ms-excel\":[\"xls\",\"xlm\",\"xla\",\"xlc\",\"xlt\",\"xlw\"],\"application/vnd.ms-excel.addin.macroenabled.12\":[\"xlam\"],\"application/vnd.ms-excel.sheet.binary.macroenabled.12\":[\"xlsb\"],\"application/vnd.ms-excel.sheet.macroenabled.12\":[\"xlsm\"],\"application/vnd.ms-excel.template.macroenabled.12\":[\"xltm\"],\"application/vnd.ms-fontobject\":[\"eot\"],\"application/vnd.ms-htmlhelp\":[\"chm\"],\"application/vnd.ms-ims\":[\"ims\"],\"application/vnd.ms-lrm\":[\"lrm\"],\"application/vnd.ms-officetheme\":[\"thmx\"],\"application/vnd.ms-outlook\":[\"msg\"],\"application/vnd.ms-pki.seccat\":[\"cat\"],\"application/vnd.ms-pki.stl\":[\"stl\"],\"application/vnd.ms-powerpoint\":[\"ppt\",\"pps\",\"pot\"],\"application/vnd.ms-powerpoint.addin.macroenabled.12\":[\"ppam\"],\"application/vnd.ms-powerpoint.presentation.macroenabled.12\":[\"pptm\"],\"application/vnd.ms-powerpoint.slide.macroenabled.12\":[\"sldm\"],\"application/vnd.ms-powerpoint.slideshow.macroenabled.12\":[\"ppsm\"],\"application/vnd.ms-powerpoint.template.macroenabled.12\":[\"potm\"],\"application/vnd.ms-project\":[\"mpp\",\"mpt\"],\"application/vnd.ms-word.document.macroenabled.12\":[\"docm\"],\"application/vnd.ms-word.template.macroenabled.12\":[\"dotm\"],\"application/vnd.ms-works\":[\"wps\",\"wks\",\"wcm\",\"wdb\"],\"application/vnd.ms-wpl\":[\"wpl\"],\"application/vnd.ms-xpsdocument\":[\"xps\"],\"application/vnd.mseq\":[\"mseq\"],\"application/vnd.musician\":[\"mus\"],\"application/vnd.muvee.style\":[\"msty\"],\"application/vnd.mynfc\":[\"taglet\"],\"application/vnd.neurolanguage.nlu\":[\"nlu\"],\"application/vnd.nitf\":[\"ntf\",\"nitf\"],\"application/vnd.noblenet-directory\":[\"nnd\"],\"application/vnd.noblenet-sealer\":[\"nns\"],\"application/vnd.noblenet-web\":[\"nnw\"],\"application/vnd.nokia.n-gage.data\":[\"ngdat\"],\"application/vnd.nokia.n-gage.symbian.install\":[\"n-gage\"],\"application/vnd.nokia.radio-preset\":[\"rpst\"],\"application/vnd.nokia.radio-presets\":[\"rpss\"],\"application/vnd.novadigm.edm\":[\"edm\"],\"application/vnd.novadigm.edx\":[\"edx\"],\"application/vnd.novadigm.ext\":[\"ext\"],\"application/vnd.oasis.opendocument.chart\":[\"odc\"],\"application/vnd.oasis.opendocument.chart-template\":[\"otc\"],\"application/vnd.oasis.opendocument.database\":[\"odb\"],\"application/vnd.oasis.opendocument.formula\":[\"odf\"],\"application/vnd.oasis.opendocument.formula-template\":[\"odft\"],\"application/vnd.oasis.opendocument.graphics\":[\"odg\"],\"application/vnd.oasis.opendocument.graphics-template\":[\"otg\"],\"application/vnd.oasis.opendocument.image\":[\"odi\"],\"application/vnd.oasis.opendocument.image-template\":[\"oti\"],\"application/vnd.oasis.opendocument.presentation\":[\"odp\"],\"application/vnd.oasis.opendocument.presentation-template\":[\"otp\"],\"application/vnd.oasis.opendocument.spreadsheet\":[\"ods\"],\"application/vnd.oasis.opendocument.spreadsheet-template\":[\"ots\"],\"application/vnd.oasis.opendocument.text\":[\"odt\"],\"application/vnd.oasis.opendocument.text-master\":[\"odm\"],\"application/vnd.oasis.opendocument.text-template\":[\"ott\"],\"application/vnd.oasis.opendocument.text-web\":[\"oth\"],\"application/vnd.olpc-sugar\":[\"xo\"],\"application/vnd.oma.dd2+xml\":[\"dd2\"],\"application/vnd.openofficeorg.extension\":[\"oxt\"],\"application/vnd.openxmlformats-officedocument.presentationml.presentation\":[\"pptx\"],\"application/vnd.openxmlformats-officedocument.presentationml.slide\":[\"sldx\"],\"application/vnd.openxmlformats-officedocument.presentationml.slideshow\":[\"ppsx\"],\"application/vnd.openxmlformats-officedocument.presentationml.template\":[\"potx\"],\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\":[\"xlsx\"],\"application/vnd.openxmlformats-officedocument.spreadsheetml.template\":[\"xltx\"],\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\":[\"docx\"],\"application/vnd.openxmlformats-officedocument.wordprocessingml.template\":[\"dotx\"],\"application/vnd.osgeo.mapguide.package\":[\"mgp\"],\"application/vnd.osgi.dp\":[\"dp\"],\"application/vnd.osgi.subsystem\":[\"esa\"],\"application/vnd.palm\":[\"pdb\",\"pqa\",\"oprc\"],\"application/vnd.pawaafile\":[\"paw\"],\"application/vnd.pg.format\":[\"str\"],\"application/vnd.pg.osasli\":[\"ei6\"],\"application/vnd.picsel\":[\"efif\"],\"application/vnd.pmi.widget\":[\"wg\"],\"application/vnd.pocketlearn\":[\"plf\"],\"application/vnd.powerbuilder6\":[\"pbd\"],\"application/vnd.previewsystems.box\":[\"box\"],\"application/vnd.proteus.magazine\":[\"mgz\"],\"application/vnd.publishare-delta-tree\":[\"qps\"],\"application/vnd.pvi.ptid1\":[\"ptid\"],\"application/vnd.quark.quarkxpress\":[\"qxd\",\"qxt\",\"qwd\",\"qwt\",\"qxl\",\"qxb\"],\"application/vnd.realvnc.bed\":[\"bed\"],\"application/vnd.recordare.musicxml\":[\"mxl\"],\"application/vnd.recordare.musicxml+xml\":[\"musicxml\"],\"application/vnd.rig.cryptonote\":[\"cryptonote\"],\"application/vnd.rim.cod\":[\"cod\"],\"application/vnd.rn-realmedia\":[\"rm\"],\"application/vnd.rn-realmedia-vbr\":[\"rmvb\"],\"application/vnd.route66.link66+xml\":[\"link66\"],\"application/vnd.sailingtracker.track\":[\"st\"],\"application/vnd.seemail\":[\"see\"],\"application/vnd.sema\":[\"sema\"],\"application/vnd.semd\":[\"semd\"],\"application/vnd.semf\":[\"semf\"],\"application/vnd.shana.informed.formdata\":[\"ifm\"],\"application/vnd.shana.informed.formtemplate\":[\"itp\"],\"application/vnd.shana.informed.interchange\":[\"iif\"],\"application/vnd.shana.informed.package\":[\"ipk\"],\"application/vnd.simtech-mindmapper\":[\"twd\",\"twds\"],\"application/vnd.smaf\":[\"mmf\"],\"application/vnd.smart.teacher\":[\"teacher\"],\"application/vnd.solent.sdkm+xml\":[\"sdkm\",\"sdkd\"],\"application/vnd.spotfire.dxp\":[\"dxp\"],\"application/vnd.spotfire.sfs\":[\"sfs\"],\"application/vnd.stardivision.calc\":[\"sdc\"],\"application/vnd.stardivision.draw\":[\"sda\"],\"application/vnd.stardivision.impress\":[\"sdd\"],\"application/vnd.stardivision.math\":[\"smf\"],\"application/vnd.stardivision.writer\":[\"sdw\",\"vor\"],\"application/vnd.stardivision.writer-global\":[\"sgl\"],\"application/vnd.stepmania.package\":[\"smzip\"],\"application/vnd.stepmania.stepchart\":[\"sm\"],\"application/vnd.sun.wadl+xml\":[\"wadl\"],\"application/vnd.sun.xml.calc\":[\"sxc\"],\"application/vnd.sun.xml.calc.template\":[\"stc\"],\"application/vnd.sun.xml.draw\":[\"sxd\"],\"application/vnd.sun.xml.draw.template\":[\"std\"],\"application/vnd.sun.xml.impress\":[\"sxi\"],\"application/vnd.sun.xml.impress.template\":[\"sti\"],\"application/vnd.sun.xml.math\":[\"sxm\"],\"application/vnd.sun.xml.writer\":[\"sxw\"],\"application/vnd.sun.xml.writer.global\":[\"sxg\"],\"application/vnd.sun.xml.writer.template\":[\"stw\"],\"application/vnd.sus-calendar\":[\"sus\",\"susp\"],\"application/vnd.svd\":[\"svd\"],\"application/vnd.symbian.install\":[\"sis\",\"sisx\"],\"application/vnd.syncml+xml\":[\"xsm\"],\"application/vnd.syncml.dm+wbxml\":[\"bdm\"],\"application/vnd.syncml.dm+xml\":[\"xdm\"],\"application/vnd.tao.intent-module-archive\":[\"tao\"],\"application/vnd.tcpdump.pcap\":[\"pcap\",\"cap\",\"dmp\"],\"application/vnd.tmobile-livetv\":[\"tmo\"],\"application/vnd.trid.tpt\":[\"tpt\"],\"application/vnd.triscape.mxs\":[\"mxs\"],\"application/vnd.trueapp\":[\"tra\"],\"application/vnd.ufdl\":[\"ufd\",\"ufdl\"],\"application/vnd.uiq.theme\":[\"utz\"],\"application/vnd.umajin\":[\"umj\"],\"application/vnd.unity\":[\"unityweb\"],\"application/vnd.uoml+xml\":[\"uoml\"],\"application/vnd.vcx\":[\"vcx\"],\"application/vnd.visio\":[\"vsd\",\"vst\",\"vss\",\"vsw\"],\"application/vnd.visionary\":[\"vis\"],\"application/vnd.vsf\":[\"vsf\"],\"application/vnd.wap.wbxml\":[\"wbxml\"],\"application/vnd.wap.wmlc\":[\"wmlc\"],\"application/vnd.wap.wmlscriptc\":[\"wmlsc\"],\"application/vnd.webturbo\":[\"wtb\"],\"application/vnd.wolfram.player\":[\"nbp\"],\"application/vnd.wordperfect\":[\"wpd\"],\"application/vnd.wqd\":[\"wqd\"],\"application/vnd.wt.stf\":[\"stf\"],\"application/vnd.xara\":[\"xar\"],\"application/vnd.xfdl\":[\"xfdl\"],\"application/vnd.yamaha.hv-dic\":[\"hvd\"],\"application/vnd.yamaha.hv-script\":[\"hvs\"],\"application/vnd.yamaha.hv-voice\":[\"hvp\"],\"application/vnd.yamaha.openscoreformat\":[\"osf\"],\"application/vnd.yamaha.openscoreformat.osfpvg+xml\":[\"osfpvg\"],\"application/vnd.yamaha.smaf-audio\":[\"saf\"],\"application/vnd.yamaha.smaf-phrase\":[\"spf\"],\"application/vnd.yellowriver-custom-menu\":[\"cmp\"],\"application/vnd.zul\":[\"zir\",\"zirz\"],\"application/vnd.zzazz.deck+xml\":[\"zaz\"],\"application/voicexml+xml\":[\"vxml\"],\"application/wasm\":[\"wasm\"],\"application/widget\":[\"wgt\"],\"application/winhlp\":[\"hlp\"],\"application/wsdl+xml\":[\"wsdl\"],\"application/wspolicy+xml\":[\"wspolicy\"],\"application/x-7z-compressed\":[\"7z\"],\"application/x-abiword\":[\"abw\"],\"application/x-ace-compressed\":[\"ace\"],\"application/x-apple-diskimage\":[],\"application/x-arj\":[\"arj\"],\"application/x-authorware-bin\":[\"aab\",\"x32\",\"u32\",\"vox\"],\"application/x-authorware-map\":[\"aam\"],\"application/x-authorware-seg\":[\"aas\"],\"application/x-bcpio\":[\"bcpio\"],\"application/x-bdoc\":[],\"application/x-bittorrent\":[\"torrent\"],\"application/x-blorb\":[\"blb\",\"blorb\"],\"application/x-bzip\":[\"bz\"],\"application/x-bzip2\":[\"bz2\",\"boz\"],\"application/x-cbr\":[\"cbr\",\"cba\",\"cbt\",\"cbz\",\"cb7\"],\"application/x-cdlink\":[\"vcd\"],\"application/x-cfs-compressed\":[\"cfs\"],\"application/x-chat\":[\"chat\"],\"application/x-chess-pgn\":[\"pgn\"],\"application/x-chrome-extension\":[\"crx\"],\"application/x-cocoa\":[\"cco\"],\"application/x-conference\":[\"nsc\"],\"application/x-cpio\":[\"cpio\"],\"application/x-csh\":[\"csh\"],\"application/x-debian-package\":[\"udeb\"],\"application/x-dgc-compressed\":[\"dgc\"],\"application/x-director\":[\"dir\",\"dcr\",\"dxr\",\"cst\",\"cct\",\"cxt\",\"w3d\",\"fgd\",\"swa\"],\"application/x-doom\":[\"wad\"],\"application/x-dtbncx+xml\":[\"ncx\"],\"application/x-dtbook+xml\":[\"dtb\"],\"application/x-dtbresource+xml\":[\"res\"],\"application/x-dvi\":[\"dvi\"],\"application/x-envoy\":[\"evy\"],\"application/x-eva\":[\"eva\"],\"application/x-font-bdf\":[\"bdf\"],\"application/x-font-ghostscript\":[\"gsf\"],\"application/x-font-linux-psf\":[\"psf\"],\"application/x-font-pcf\":[\"pcf\"],\"application/x-font-snf\":[\"snf\"],\"application/x-font-type1\":[\"pfa\",\"pfb\",\"pfm\",\"afm\"],\"application/x-freearc\":[\"arc\"],\"application/x-futuresplash\":[\"spl\"],\"application/x-gca-compressed\":[\"gca\"],\"application/x-glulx\":[\"ulx\"],\"application/x-gnumeric\":[\"gnumeric\"],\"application/x-gramps-xml\":[\"gramps\"],\"application/x-gtar\":[\"gtar\"],\"application/x-hdf\":[\"hdf\"],\"application/x-httpd-php\":[\"php\"],\"application/x-install-instructions\":[\"install\"],\"application/x-iso9660-image\":[],\"application/x-java-archive-diff\":[\"jardiff\"],\"application/x-java-jnlp-file\":[\"jnlp\"],\"application/x-latex\":[\"latex\"],\"application/x-lua-bytecode\":[\"luac\"],\"application/x-lzh-compressed\":[\"lzh\",\"lha\"],\"application/x-makeself\":[\"run\"],\"application/x-mie\":[\"mie\"],\"application/x-mobipocket-ebook\":[\"prc\",\"mobi\"],\"application/x-ms-application\":[\"application\"],\"application/x-ms-shortcut\":[\"lnk\"],\"application/x-ms-wmd\":[\"wmd\"],\"application/x-ms-wmz\":[\"wmz\"],\"application/x-ms-xbap\":[\"xbap\"],\"application/x-msaccess\":[\"mdb\"],\"application/x-msbinder\":[\"obd\"],\"application/x-mscardfile\":[\"crd\"],\"application/x-msclip\":[\"clp\"],\"application/x-msdos-program\":[],\"application/x-msdownload\":[\"com\",\"bat\"],\"application/x-msmediaview\":[\"mvb\",\"m13\",\"m14\"],\"application/x-msmetafile\":[\"wmf\",\"emf\",\"emz\"],\"application/x-msmoney\":[\"mny\"],\"application/x-mspublisher\":[\"pub\"],\"application/x-msschedule\":[\"scd\"],\"application/x-msterminal\":[\"trm\"],\"application/x-mswrite\":[\"wri\"],\"application/x-netcdf\":[\"nc\",\"cdf\"],\"application/x-ns-proxy-autoconfig\":[\"pac\"],\"application/x-nzb\":[\"nzb\"],\"application/x-perl\":[\"pl\",\"pm\"],\"application/x-pilot\":[],\"application/x-pkcs12\":[\"p12\",\"pfx\"],\"application/x-pkcs7-certificates\":[\"p7b\",\"spc\"],\"application/x-pkcs7-certreqresp\":[\"p7r\"],\"application/x-rar-compressed\":[\"rar\"],\"application/x-redhat-package-manager\":[\"rpm\"],\"application/x-research-info-systems\":[\"ris\"],\"application/x-sea\":[\"sea\"],\"application/x-sh\":[\"sh\"],\"application/x-shar\":[\"shar\"],\"application/x-shockwave-flash\":[\"swf\"],\"application/x-silverlight-app\":[\"xap\"],\"application/x-sql\":[\"sql\"],\"application/x-stuffit\":[\"sit\"],\"application/x-stuffitx\":[\"sitx\"],\"application/x-subrip\":[\"srt\"],\"application/x-sv4cpio\":[\"sv4cpio\"],\"application/x-sv4crc\":[\"sv4crc\"],\"application/x-t3vm-image\":[\"t3\"],\"application/x-tads\":[\"gam\"],\"application/x-tar\":[\"tar\"],\"application/x-tcl\":[\"tcl\",\"tk\"],\"application/x-tex\":[\"tex\"],\"application/x-tex-tfm\":[\"tfm\"],\"application/x-texinfo\":[\"texinfo\",\"texi\"],\"application/x-tgif\":[\"obj\"],\"application/x-ustar\":[\"ustar\"],\"application/x-virtualbox-hdd\":[\"hdd\"],\"application/x-virtualbox-ova\":[\"ova\"],\"application/x-virtualbox-ovf\":[\"ovf\"],\"application/x-virtualbox-vbox\":[\"vbox\"],\"application/x-virtualbox-vbox-extpack\":[\"vbox-extpack\"],\"application/x-virtualbox-vdi\":[\"vdi\"],\"application/x-virtualbox-vhd\":[\"vhd\"],\"application/x-virtualbox-vmdk\":[\"vmdk\"],\"application/x-wais-source\":[\"src\"],\"application/x-web-app-manifest+json\":[\"webapp\"],\"application/x-x509-ca-cert\":[\"der\",\"crt\",\"pem\"],\"application/x-xfig\":[\"fig\"],\"application/x-xliff+xml\":[\"xlf\"],\"application/x-xpinstall\":[\"xpi\"],\"application/x-xz\":[\"xz\"],\"application/x-zmachine\":[\"z1\",\"z2\",\"z3\",\"z4\",\"z5\",\"z6\",\"z7\",\"z8\"],\"application/xaml+xml\":[\"xaml\"],\"application/xcap-diff+xml\":[\"xdf\"],\"application/xenc+xml\":[\"xenc\"],\"application/xhtml+xml\":[\"xhtml\",\"xht\"],\"application/xml\":[\"xml\",\"xsl\",\"xsd\",\"rng\"],\"application/xml-dtd\":[\"dtd\"],\"application/xop+xml\":[\"xop\"],\"application/xproc+xml\":[\"xpl\"],\"application/xslt+xml\":[\"xslt\"],\"application/xspf+xml\":[\"xspf\"],\"application/xv+xml\":[\"mxml\",\"xhvml\",\"xvml\",\"xvm\"],\"application/yang\":[\"yang\"],\"application/yin+xml\":[\"yin\"],\"application/zip\":[\"zip\"],\"audio/3gpp\":[],\"audio/adpcm\":[\"adp\"],\"audio/basic\":[\"au\",\"snd\"],\"audio/midi\":[\"mid\",\"midi\",\"kar\",\"rmi\"],\"audio/mp3\":[],\"audio/mp4\":[\"m4a\",\"mp4a\"],\"audio/mpeg\":[\"mpga\",\"mp2\",\"mp2a\",\"mp3\",\"m2a\",\"m3a\"],\"audio/ogg\":[\"oga\",\"ogg\",\"spx\"],\"audio/s3m\":[\"s3m\"],\"audio/silk\":[\"sil\"],\"audio/vnd.dece.audio\":[\"uva\",\"uvva\"],\"audio/vnd.digital-winds\":[\"eol\"],\"audio/vnd.dra\":[\"dra\"],\"audio/vnd.dts\":[\"dts\"],\"audio/vnd.dts.hd\":[\"dtshd\"],\"audio/vnd.lucent.voice\":[\"lvp\"],\"audio/vnd.ms-playready.media.pya\":[\"pya\"],\"audio/vnd.nuera.ecelp4800\":[\"ecelp4800\"],\"audio/vnd.nuera.ecelp7470\":[\"ecelp7470\"],\"audio/vnd.nuera.ecelp9600\":[\"ecelp9600\"],\"audio/vnd.rip\":[\"rip\"],\"audio/wav\":[\"wav\"],\"audio/wave\":[],\"audio/webm\":[\"weba\"],\"audio/x-aac\":[\"aac\"],\"audio/x-aiff\":[\"aif\",\"aiff\",\"aifc\"],\"audio/x-caf\":[\"caf\"],\"audio/x-flac\":[\"flac\"],\"audio/x-m4a\":[],\"audio/x-matroska\":[\"mka\"],\"audio/x-mpegurl\":[\"m3u\"],\"audio/x-ms-wax\":[\"wax\"],\"audio/x-ms-wma\":[\"wma\"],\"audio/x-pn-realaudio\":[\"ram\",\"ra\"],\"audio/x-pn-realaudio-plugin\":[\"rmp\"],\"audio/x-realaudio\":[],\"audio/x-wav\":[],\"audio/xm\":[\"xm\"],\"chemical/x-cdx\":[\"cdx\"],\"chemical/x-cif\":[\"cif\"],\"chemical/x-cmdf\":[\"cmdf\"],\"chemical/x-cml\":[\"cml\"],\"chemical/x-csml\":[\"csml\"],\"chemical/x-xyz\":[\"xyz\"],\"font/collection\":[\"ttc\"],\"font/otf\":[\"otf\"],\"font/ttf\":[\"ttf\"],\"font/woff\":[\"woff\"],\"font/woff2\":[\"woff2\"],\"image/apng\":[\"apng\"],\"image/bmp\":[\"bmp\"],\"image/cgm\":[\"cgm\"],\"image/g3fax\":[\"g3\"],\"image/gif\":[\"gif\"],\"image/ief\":[\"ief\"],\"image/jp2\":[\"jp2\",\"jpg2\"],\"image/jpeg\":[\"jpeg\",\"jpg\",\"jpe\"],\"image/jpm\":[\"jpm\"],\"image/jpx\":[\"jpx\",\"jpf\"],\"image/ktx\":[\"ktx\"],\"image/png\":[\"png\"],\"image/prs.btif\":[\"btif\"],\"image/sgi\":[\"sgi\"],\"image/svg+xml\":[\"svg\",\"svgz\"],\"image/tiff\":[\"tiff\",\"tif\"],\"image/vnd.adobe.photoshop\":[\"psd\"],\"image/vnd.dece.graphic\":[\"uvi\",\"uvvi\",\"uvg\",\"uvvg\"],\"image/vnd.djvu\":[\"djvu\",\"djv\"],\"image/vnd.dvb.subtitle\":[],\"image/vnd.dwg\":[\"dwg\"],\"image/vnd.dxf\":[\"dxf\"],\"image/vnd.fastbidsheet\":[\"fbs\"],\"image/vnd.fpx\":[\"fpx\"],\"image/vnd.fst\":[\"fst\"],\"image/vnd.fujixerox.edmics-mmr\":[\"mmr\"],\"image/vnd.fujixerox.edmics-rlc\":[\"rlc\"],\"image/vnd.ms-modi\":[\"mdi\"],\"image/vnd.ms-photo\":[\"wdp\"],\"image/vnd.net-fpx\":[\"npx\"],\"image/vnd.wap.wbmp\":[\"wbmp\"],\"image/vnd.xiff\":[\"xif\"],\"image/webp\":[\"webp\"],\"image/x-3ds\":[\"3ds\"],\"image/x-cmu-raster\":[\"ras\"],\"image/x-cmx\":[\"cmx\"],\"image/x-freehand\":[\"fh\",\"fhc\",\"fh4\",\"fh5\",\"fh7\"],\"image/x-icon\":[\"ico\"],\"image/x-jng\":[\"jng\"],\"image/x-mrsid-image\":[\"sid\"],\"image/x-ms-bmp\":[],\"image/x-pcx\":[\"pcx\"],\"image/x-pict\":[\"pic\",\"pct\"],\"image/x-portable-anymap\":[\"pnm\"],\"image/x-portable-bitmap\":[\"pbm\"],\"image/x-portable-graymap\":[\"pgm\"],\"image/x-portable-pixmap\":[\"ppm\"],\"image/x-rgb\":[\"rgb\"],\"image/x-tga\":[\"tga\"],\"image/x-xbitmap\":[\"xbm\"],\"image/x-xpixmap\":[\"xpm\"],\"image/x-xwindowdump\":[\"xwd\"],\"message/rfc822\":[\"eml\",\"mime\"],\"model/gltf+json\":[\"gltf\"],\"model/gltf-binary\":[\"glb\"],\"model/iges\":[\"igs\",\"iges\"],\"model/mesh\":[\"msh\",\"mesh\",\"silo\"],\"model/vnd.collada+xml\":[\"dae\"],\"model/vnd.dwf\":[\"dwf\"],\"model/vnd.gdl\":[\"gdl\"],\"model/vnd.gtw\":[\"gtw\"],\"model/vnd.mts\":[\"mts\"],\"model/vnd.vtu\":[\"vtu\"],\"model/vrml\":[\"wrl\",\"vrml\"],\"model/x3d+binary\":[\"x3db\",\"x3dbz\"],\"model/x3d+vrml\":[\"x3dv\",\"x3dvz\"],\"model/x3d+xml\":[\"x3d\",\"x3dz\"],\"text/cache-manifest\":[\"appcache\",\"manifest\"],\"text/calendar\":[\"ics\",\"ifb\"],\"text/coffeescript\":[\"coffee\",\"litcoffee\"],\"text/css\":[\"css\"],\"text/csv\":[\"csv\"],\"text/hjson\":[\"hjson\"],\"text/html\":[\"html\",\"htm\",\"shtml\"],\"text/jade\":[\"jade\"],\"text/jsx\":[\"jsx\"],\"text/less\":[\"less\"],\"text/markdown\":[\"markdown\",\"md\"],\"text/mathml\":[\"mml\"],\"text/n3\":[\"n3\"],\"text/plain\":[\"txt\",\"text\",\"conf\",\"def\",\"list\",\"log\",\"in\",\"ini\"],\"text/prs.lines.tag\":[\"dsc\"],\"text/richtext\":[\"rtx\"],\"text/rtf\":[],\"text/sgml\":[\"sgml\",\"sgm\"],\"text/slim\":[\"slim\",\"slm\"],\"text/stylus\":[\"stylus\",\"styl\"],\"text/tab-separated-values\":[\"tsv\"],\"text/troff\":[\"t\",\"tr\",\"roff\",\"man\",\"me\",\"ms\"],\"text/turtle\":[\"ttl\"],\"text/uri-list\":[\"uri\",\"uris\",\"urls\"],\"text/vcard\":[\"vcard\"],\"text/vnd.curl\":[\"curl\"],\"text/vnd.curl.dcurl\":[\"dcurl\"],\"text/vnd.curl.mcurl\":[\"mcurl\"],\"text/vnd.curl.scurl\":[\"scurl\"],\"text/vnd.dvb.subtitle\":[\"sub\"],\"text/vnd.fly\":[\"fly\"],\"text/vnd.fmi.flexstor\":[\"flx\"],\"text/vnd.graphviz\":[\"gv\"],\"text/vnd.in3d.3dml\":[\"3dml\"],\"text/vnd.in3d.spot\":[\"spot\"],\"text/vnd.sun.j2me.app-descriptor\":[\"jad\"],\"text/vnd.wap.wml\":[\"wml\"],\"text/vnd.wap.wmlscript\":[\"wmls\"],\"text/vtt\":[\"vtt\"],\"text/x-asm\":[\"s\",\"asm\"],\"text/x-c\":[\"c\",\"cc\",\"cxx\",\"cpp\",\"h\",\"hh\",\"dic\"],\"text/x-component\":[\"htc\"],\"text/x-fortran\":[\"f\",\"for\",\"f77\",\"f90\"],\"text/x-handlebars-template\":[\"hbs\"],\"text/x-java-source\":[\"java\"],\"text/x-lua\":[\"lua\"],\"text/x-markdown\":[\"mkd\"],\"text/x-nfo\":[\"nfo\"],\"text/x-opml\":[\"opml\"],\"text/x-org\":[],\"text/x-pascal\":[\"p\",\"pas\"],\"text/x-processing\":[\"pde\"],\"text/x-sass\":[\"sass\"],\"text/x-scss\":[\"scss\"],\"text/x-setext\":[\"etx\"],\"text/x-sfv\":[\"sfv\"],\"text/x-suse-ymp\":[\"ymp\"],\"text/x-uuencode\":[\"uu\"],\"text/x-vcalendar\":[\"vcs\"],\"text/x-vcard\":[\"vcf\"],\"text/xml\":[],\"text/yaml\":[\"yaml\",\"yml\"],\"video/3gpp\":[\"3gp\",\"3gpp\"],\"video/3gpp2\":[\"3g2\"],\"video/h261\":[\"h261\"],\"video/h263\":[\"h263\"],\"video/h264\":[\"h264\"],\"video/jpeg\":[\"jpgv\"],\"video/jpm\":[\"jpgm\"],\"video/mj2\":[\"mj2\",\"mjp2\"],\"video/mp2t\":[\"ts\"],\"video/mp4\":[\"mp4\",\"mp4v\",\"mpg4\"],\"video/mpeg\":[\"mpeg\",\"mpg\",\"mpe\",\"m1v\",\"m2v\"],\"video/ogg\":[\"ogv\"],\"video/quicktime\":[\"qt\",\"mov\"],\"video/vnd.dece.hd\":[\"uvh\",\"uvvh\"],\"video/vnd.dece.mobile\":[\"uvm\",\"uvvm\"],\"video/vnd.dece.pd\":[\"uvp\",\"uvvp\"],\"video/vnd.dece.sd\":[\"uvs\",\"uvvs\"],\"video/vnd.dece.video\":[\"uvv\",\"uvvv\"],\"video/vnd.dvb.file\":[\"dvb\"],\"video/vnd.fvt\":[\"fvt\"],\"video/vnd.mpegurl\":[\"mxu\",\"m4u\"],\"video/vnd.ms-playready.media.pyv\":[\"pyv\"],\"video/vnd.uvvu.mp4\":[\"uvu\",\"uvvu\"],\"video/vnd.vivo\":[\"viv\"],\"video/webm\":[\"webm\"],\"video/x-f4v\":[\"f4v\"],\"video/x-fli\":[\"fli\"],\"video/x-flv\":[\"flv\"],\"video/x-m4v\":[\"m4v\"],\"video/x-matroska\":[\"mkv\",\"mk3d\",\"mks\"],\"video/x-mng\":[\"mng\"],\"video/x-ms-asf\":[\"asf\",\"asx\"],\"video/x-ms-vob\":[\"vob\"],\"video/x-ms-wm\":[\"wm\"],\"video/x-ms-wmv\":[\"wmv\"],\"video/x-ms-wmx\":[\"wmx\"],\"video/x-ms-wvx\":[\"wvx\"],\"video/x-msvideo\":[\"avi\"],\"video/x-sgi-movie\":[\"movie\"],\"video/x-smv\":[\"smv\"],\"x-conference/x-cooltalk\":[\"ice\"]}",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.534Z",
			"atimeMs": 1598589592533.9072,
			"isdirectory": true
		},
		"filename": "ms"
	}})
	fileData.push(function(){ var item= cacheData[61]; if(!item){ item= cacheData[61]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.187Z",
			"mtimeMs": 1598589592187,
			"atime": "2020-08-28T04:39:52.534Z",
			"atimeMs": 1598589592533.9072,
			"isfile": true
		},
		"filename": "ms/index.js",
		"content": "/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar w = d * 7;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options) {\n  options = options || {};\n  var type = typeof val;\n  if (type === 'string' && val.length > 0) {\n    return parse(val);\n  } else if (type === 'number' && isNaN(val) === false) {\n    return options.long ? fmtLong(val) : fmtShort(val);\n  }\n  throw new Error(\n    'val is not a non-empty string or a valid number. val=' +\n      JSON.stringify(val)\n  );\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  str = String(str);\n  if (str.length > 100) {\n    return;\n  }\n  var match = /^((?:\\d+)?\\-?\\d?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(\n    str\n  );\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'yrs':\n    case 'yr':\n    case 'y':\n      return n * y;\n    case 'weeks':\n    case 'week':\n    case 'w':\n      return n * w;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'hrs':\n    case 'hr':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'mins':\n    case 'min':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 'secs':\n    case 'sec':\n    case 's':\n      return n * s;\n    case 'milliseconds':\n    case 'millisecond':\n    case 'msecs':\n    case 'msec':\n    case 'ms':\n      return n;\n    default:\n      return undefined;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtShort(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (msAbs >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (msAbs >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (msAbs >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtLong(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return plural(ms, msAbs, d, 'day');\n  }\n  if (msAbs >= h) {\n    return plural(ms, msAbs, h, 'hour');\n  }\n  if (msAbs >= m) {\n    return plural(ms, msAbs, m, 'minute');\n  }\n  if (msAbs >= s) {\n    return plural(ms, msAbs, s, 'second');\n  }\n  return ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, msAbs, n, name) {\n  var isPlural = msAbs >= n * 1.5;\n  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[62]; if(!item){ item= cacheData[62]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.187Z",
			"mtimeMs": 1598589592187,
			"atime": "2020-08-28T04:39:52.462Z",
			"atimeMs": 1598589592461.9055,
			"isfile": true
		},
		"filename": "ms/package.json",
		"content": "{\n  \"name\": \"ms\",\n  \"version\": \"2.1.1\",\n  \"description\": \"Tiny millisecond conversion utility\",\n  \"repository\": \"zeit/ms\",\n  \"main\": \"./index\",\n  \"files\": [\n    \"index.js\"\n  ],\n  \"scripts\": {\n    \"precommit\": \"lint-staged\",\n    \"lint\": \"eslint lib/* bin/*\",\n    \"test\": \"mocha tests.js\"\n  },\n  \"eslintConfig\": {\n    \"extends\": \"eslint:recommended\",\n    \"env\": {\n      \"node\": true,\n      \"es6\": true\n    }\n  },\n  \"lint-staged\": {\n    \"*.js\": [\n      \"npm run lint\",\n      \"prettier --single-quote --write\",\n      \"git add\"\n    ]\n  },\n  \"license\": \"MIT\",\n  \"devDependencies\": {\n    \"eslint\": \"4.12.1\",\n    \"expect.js\": \"0.3.1\",\n    \"husky\": \"0.14.3\",\n    \"lint-staged\": \"5.0.0\",\n    \"mocha\": \"4.0.1\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.534Z",
			"atimeMs": 1598589592533.9072,
			"isdirectory": true
		},
		"filename": "on-finished"
	}})
	fileData.push(function(){ var item= cacheData[64]; if(!item){ item= cacheData[64]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.345Z",
			"mtimeMs": 1596929147345,
			"atime": "2020-08-28T04:39:52.534Z",
			"atimeMs": 1598589592533.9072,
			"isfile": true
		},
		"filename": "on-finished/index.js",
		"content": "/*!\n * on-finished\n * Copyright(c) 2013 Jonathan Ong\n * Copyright(c) 2014 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = onFinished\nmodule.exports.isFinished = isFinished\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar first = require('ee-first')\n\n/**\n * Variables.\n * @private\n */\n\n/* istanbul ignore next */\nvar defer = typeof setImmediate === 'function'\n  ? setImmediate\n  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }\n\n/**\n * Invoke callback when the response has finished, useful for\n * cleaning up resources afterwards.\n *\n * @param {object} msg\n * @param {function} listener\n * @return {object}\n * @public\n */\n\nfunction onFinished(msg, listener) {\n  if (isFinished(msg) !== false) {\n    defer(listener, null, msg)\n    return msg\n  }\n\n  // attach the listener to the message\n  attachListener(msg, listener)\n\n  return msg\n}\n\n/**\n * Determine if message is already finished.\n *\n * @param {object} msg\n * @return {boolean}\n * @public\n */\n\nfunction isFinished(msg) {\n  var socket = msg.socket\n\n  if (typeof msg.finished === 'boolean') {\n    // OutgoingMessage\n    return Boolean(msg.finished || (socket && !socket.writable))\n  }\n\n  if (typeof msg.complete === 'boolean') {\n    // IncomingMessage\n    return Boolean(msg.upgrade || !socket || !socket.readable || (msg.complete && !msg.readable))\n  }\n\n  // don't know\n  return undefined\n}\n\n/**\n * Attach a finished listener to the message.\n *\n * @param {object} msg\n * @param {function} callback\n * @private\n */\n\nfunction attachFinishedListener(msg, callback) {\n  var eeMsg\n  var eeSocket\n  var finished = false\n\n  function onFinish(error) {\n    eeMsg.cancel()\n    eeSocket.cancel()\n\n    finished = true\n    callback(error)\n  }\n\n  // finished on first message event\n  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish)\n\n  function onSocket(socket) {\n    // remove listener\n    msg.removeListener('socket', onSocket)\n\n    if (finished) return\n    if (eeMsg !== eeSocket) return\n\n    // finished on first socket event\n    eeSocket = first([[socket, 'error', 'close']], onFinish)\n  }\n\n  if (msg.socket) {\n    // socket already assigned\n    onSocket(msg.socket)\n    return\n  }\n\n  // wait for socket to be assigned\n  msg.on('socket', onSocket)\n\n  if (msg.socket === undefined) {\n    // node.js 0.8 patch\n    patchAssignSocket(msg, onSocket)\n  }\n}\n\n/**\n * Attach the listener to the message.\n *\n * @param {object} msg\n * @return {function}\n * @private\n */\n\nfunction attachListener(msg, listener) {\n  var attached = msg.__onFinished\n\n  // create a private single listener with queue\n  if (!attached || !attached.queue) {\n    attached = msg.__onFinished = createListener(msg)\n    attachFinishedListener(msg, attached)\n  }\n\n  attached.queue.push(listener)\n}\n\n/**\n * Create listener on message.\n *\n * @param {object} msg\n * @return {function}\n * @private\n */\n\nfunction createListener(msg) {\n  function listener(err) {\n    if (msg.__onFinished === listener) msg.__onFinished = null\n    if (!listener.queue) return\n\n    var queue = listener.queue\n    listener.queue = null\n\n    for (var i = 0; i < queue.length; i++) {\n      queue[i](err, msg)\n    }\n  }\n\n  listener.queue = []\n\n  return listener\n}\n\n/**\n * Patch ServerResponse.prototype.assignSocket for node.js 0.8.\n *\n * @param {ServerResponse} res\n * @param {function} callback\n * @private\n */\n\nfunction patchAssignSocket(res, callback) {\n  var assignSocket = res.assignSocket\n\n  if (typeof assignSocket !== 'function') return\n\n  // res.on('socket', callback) is broken in 0.8\n  res.assignSocket = function _assignSocket(socket) {\n    assignSocket.call(this, socket)\n    callback(socket)\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[65]; if(!item){ item= cacheData[65]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.345Z",
			"mtimeMs": 1596929147345,
			"atime": "2020-08-28T04:39:52.462Z",
			"atimeMs": 1598589592461.9055,
			"isfile": true
		},
		"filename": "on-finished/package.json",
		"content": "{\n  \"name\": \"on-finished\",\n  \"description\": \"Execute a callback when a request closes, finishes, or errors\",\n  \"version\": \"2.3.0\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": \"jshttp/on-finished\",\n  \"dependencies\": {\n    \"ee-first\": \"1.1.1\"\n  },\n  \"devDependencies\": {\n    \"istanbul\": \"0.3.9\",\n    \"mocha\": \"2.2.5\"\n  },\n  \"engines\": {\n    \"node\": \">= 0.8\"\n  },\n  \"files\": [\n    \"HISTORY.md\",\n    \"LICENSE\",\n    \"index.js\"\n  ],\n  \"scripts\": {\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.534Z",
			"atimeMs": 1598589592533.9072,
			"isdirectory": true
		},
		"filename": "parseurl"
	}})
	fileData.push(function(){ var item= cacheData[67]; if(!item){ item= cacheData[67]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.003Z",
			"mtimeMs": 1598589592003,
			"atime": "2020-08-28T04:39:52.538Z",
			"atimeMs": 1598589592537.9075,
			"isfile": true
		},
		"filename": "parseurl/index.js",
		"content": "/*!\n * parseurl\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2014-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar url = require('url')\nvar parse = url.parse\nvar Url = url.Url\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = parseurl\nmodule.exports.original = originalurl\n\n/**\n * Parse the `req` url with memoization.\n *\n * @param {ServerRequest} req\n * @return {Object}\n * @public\n */\n\nfunction parseurl (req) {\n  var url = req.url\n\n  if (url === undefined) {\n    // URL is undefined\n    return undefined\n  }\n\n  var parsed = req._parsedUrl\n\n  if (fresh(url, parsed)) {\n    // Return cached URL parse\n    return parsed\n  }\n\n  // Parse the URL\n  parsed = fastparse(url)\n  parsed._raw = url\n\n  return (req._parsedUrl = parsed)\n};\n\n/**\n * Parse the `req` original url with fallback and memoization.\n *\n * @param {ServerRequest} req\n * @return {Object}\n * @public\n */\n\nfunction originalurl (req) {\n  var url = req.originalUrl\n\n  if (typeof url !== 'string') {\n    // Fallback\n    return parseurl(req)\n  }\n\n  var parsed = req._parsedOriginalUrl\n\n  if (fresh(url, parsed)) {\n    // Return cached URL parse\n    return parsed\n  }\n\n  // Parse the URL\n  parsed = fastparse(url)\n  parsed._raw = url\n\n  return (req._parsedOriginalUrl = parsed)\n};\n\n/**\n * Parse the `str` url with fast-path short-cut.\n *\n * @param {string} str\n * @return {Object}\n * @private\n */\n\nfunction fastparse (str) {\n  if (typeof str !== 'string' || str.charCodeAt(0) !== 0x2f /* / */) {\n    return parse(str)\n  }\n\n  var pathname = str\n  var query = null\n  var search = null\n\n  // This takes the regexp from https://github.com/joyent/node/pull/7878\n  // Which is /^(\\/[^?#\\s]*)(\\?[^#\\s]*)?$/\n  // And unrolls it into a for loop\n  for (var i = 1; i < str.length; i++) {\n    switch (str.charCodeAt(i)) {\n      case 0x3f: /* ?  */\n        if (search === null) {\n          pathname = str.substring(0, i)\n          query = str.substring(i + 1)\n          search = str.substring(i)\n        }\n        break\n      case 0x09: /* \\t */\n      case 0x0a: /* \\n */\n      case 0x0c: /* \\f */\n      case 0x0d: /* \\r */\n      case 0x20: /*    */\n      case 0x23: /* #  */\n      case 0xa0:\n      case 0xfeff:\n        return parse(str)\n    }\n  }\n\n  var url = Url !== undefined\n    ? new Url()\n    : {}\n\n  url.path = str\n  url.href = str\n  url.pathname = pathname\n\n  if (search !== null) {\n    url.query = query\n    url.search = search\n  }\n\n  return url\n}\n\n/**\n * Determine if parsed is still fresh for url.\n *\n * @param {string} url\n * @param {object} parsedUrl\n * @return {boolean}\n * @private\n */\n\nfunction fresh (url, parsedUrl) {\n  return typeof parsedUrl === 'object' &&\n    parsedUrl !== null &&\n    (Url === undefined || parsedUrl instanceof Url) &&\n    parsedUrl._raw === url\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[68]; if(!item){ item= cacheData[68]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.003Z",
			"mtimeMs": 1598589592003,
			"atime": "2020-08-28T04:39:52.466Z",
			"atimeMs": 1598589592465.9055,
			"isfile": true
		},
		"filename": "parseurl/package.json",
		"content": "{\n  \"name\": \"parseurl\",\n  \"description\": \"parse a url with memoization\",\n  \"version\": \"1.3.3\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)\"\n  ],\n  \"repository\": \"pillarjs/parseurl\",\n  \"license\": \"MIT\",\n  \"devDependencies\": {\n    \"beautify-benchmark\": \"0.2.4\",\n    \"benchmark\": \"2.1.4\",\n    \"eslint\": \"5.16.0\",\n    \"eslint-config-standard\": \"12.0.0\",\n    \"eslint-plugin-import\": \"2.17.1\",\n    \"eslint-plugin-node\": \"7.0.1\",\n    \"eslint-plugin-promise\": \"4.1.1\",\n    \"eslint-plugin-standard\": \"4.0.0\",\n    \"fast-url-parser\": \"1.1.3\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"6.1.3\"\n  },\n  \"files\": [\n    \"LICENSE\",\n    \"HISTORY.md\",\n    \"README.md\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.8\"\n  },\n  \"scripts\": {\n    \"bench\": \"node benchmark/index.js\",\n    \"lint\": \"eslint .\",\n    \"test\": \"mocha --check-leaks --bail --reporter spec test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --check-leaks --reporter dot test/\",\n    \"test-travis\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --check-leaks --reporter spec test/\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.382Z",
			"mtimeMs": 1598589592381.9036,
			"atime": "2020-08-28T04:39:52.538Z",
			"atimeMs": 1598589592537.9075,
			"isdirectory": true
		},
		"filename": "range-parser"
	}})
	fileData.push(function(){ var item= cacheData[70]; if(!item){ item= cacheData[70]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.025Z",
			"mtimeMs": 1598589592025,
			"atime": "2020-08-28T04:39:52.538Z",
			"atimeMs": 1598589592537.9075,
			"isfile": true
		},
		"filename": "range-parser/index.js",
		"content": "/*!\n * range-parser\n * Copyright(c) 2012-2014 TJ Holowaychuk\n * Copyright(c) 2015-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = rangeParser\n\n/**\n * Parse \"Range\" header `str` relative to the given file `size`.\n *\n * @param {Number} size\n * @param {String} str\n * @param {Object} [options]\n * @return {Array}\n * @public\n */\n\nfunction rangeParser (size, str, options) {\n  if (typeof str !== 'string') {\n    throw new TypeError('argument str must be a string')\n  }\n\n  var index = str.indexOf('=')\n\n  if (index === -1) {\n    return -2\n  }\n\n  // split the range string\n  var arr = str.slice(index + 1).split(',')\n  var ranges = []\n\n  // add ranges type\n  ranges.type = str.slice(0, index)\n\n  // parse all ranges\n  for (var i = 0; i < arr.length; i++) {\n    var range = arr[i].split('-')\n    var start = parseInt(range[0], 10)\n    var end = parseInt(range[1], 10)\n\n    // -nnn\n    if (isNaN(start)) {\n      start = size - end\n      end = size - 1\n    // nnn-\n    } else if (isNaN(end)) {\n      end = size - 1\n    }\n\n    // limit last-byte-pos to current length\n    if (end > size - 1) {\n      end = size - 1\n    }\n\n    // invalid or unsatisifiable\n    if (isNaN(start) || isNaN(end) || start > end || start < 0) {\n      continue\n    }\n\n    // add range\n    ranges.push({\n      start: start,\n      end: end\n    })\n  }\n\n  if (ranges.length < 1) {\n    // unsatisifiable\n    return -1\n  }\n\n  return options && options.combine\n    ? combineRanges(ranges)\n    : ranges\n}\n\n/**\n * Combine overlapping & adjacent ranges.\n * @private\n */\n\nfunction combineRanges (ranges) {\n  var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart)\n\n  for (var j = 0, i = 1; i < ordered.length; i++) {\n    var range = ordered[i]\n    var current = ordered[j]\n\n    if (range.start > current.end + 1) {\n      // next range\n      ordered[++j] = range\n    } else if (range.end > current.end) {\n      // extend range\n      current.end = range.end\n      current.index = Math.min(current.index, range.index)\n    }\n  }\n\n  // trim ordered array\n  ordered.length = j + 1\n\n  // generate combined range\n  var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex)\n\n  // copy ranges type\n  combined.type = ranges.type\n\n  return combined\n}\n\n/**\n * Map function to add index value to ranges.\n * @private\n */\n\nfunction mapWithIndex (range, index) {\n  return {\n    start: range.start,\n    end: range.end,\n    index: index\n  }\n}\n\n/**\n * Map function to remove index value from ranges.\n * @private\n */\n\nfunction mapWithoutIndex (range) {\n  return {\n    start: range.start,\n    end: range.end\n  }\n}\n\n/**\n * Sort function to sort ranges by index.\n * @private\n */\n\nfunction sortByRangeIndex (a, b) {\n  return a.index - b.index\n}\n\n/**\n * Sort function to sort ranges by start position.\n * @private\n */\n\nfunction sortByRangeStart (a, b) {\n  return a.start - b.start\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[71]; if(!item){ item= cacheData[71]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.025Z",
			"mtimeMs": 1598589592025,
			"atime": "2020-08-28T04:39:52.466Z",
			"atimeMs": 1598589592465.9055,
			"isfile": true
		},
		"filename": "range-parser/package.json",
		"content": "{\n  \"name\": \"range-parser\",\n  \"author\": \"TJ Holowaychuk <tj@vision-media.ca> (http://tjholowaychuk.com)\",\n  \"description\": \"Range header field string parser\",\n  \"version\": \"1.2.1\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"James Wyatt Cready <wyatt.cready@lanetix.com>\",\n    \"Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)\"\n  ],\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"range\",\n    \"parser\",\n    \"http\"\n  ],\n  \"repository\": \"jshttp/range-parser\",\n  \"devDependencies\": {\n    \"deep-equal\": \"1.0.1\",\n    \"eslint\": \"5.16.0\",\n    \"eslint-config-standard\": \"12.0.0\",\n    \"eslint-plugin-markdown\": \"1.0.0\",\n    \"eslint-plugin-import\": \"2.17.2\",\n    \"eslint-plugin-node\": \"8.0.1\",\n    \"eslint-plugin-promise\": \"4.1.1\",\n    \"eslint-plugin-standard\": \"4.0.0\",\n    \"mocha\": \"6.1.4\",\n    \"nyc\": \"14.1.1\"\n  },\n  \"files\": [\n    \"HISTORY.md\",\n    \"LICENSE\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.6\"\n  },\n  \"scripts\": {\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec\",\n    \"test-cov\": \"nyc --reporter=html --reporter=text npm test\",\n    \"test-travis\": \"nyc --reporter=text npm test\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.414Z",
			"mtimeMs": 1598589592413.9043,
			"atime": "2020-08-28T04:39:52.466Z",
			"atimeMs": 1598589592465.9055,
			"isdirectory": true
		},
		"filename": "send"
	}})
	fileData.push(function(){ var item= cacheData[73]; if(!item){ item= cacheData[73]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.001Z",
			"mtimeMs": 1598589592001,
			"atime": "2020-08-28T04:39:52.538Z",
			"atimeMs": 1598589592537.9075,
			"isfile": true
		},
		"filename": "send/index.js",
		"content": "/*!\n * send\n * Copyright(c) 2012 TJ Holowaychuk\n * Copyright(c) 2014-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar createError = require('http-errors')\nvar debug = require('debug')('send')\nvar deprecate = require('depd')('send')\nvar destroy = require('destroy')\nvar encodeUrl = require('encodeurl')\nvar escapeHtml = require('escape-html')\nvar etag = require('etag')\nvar fresh = require('fresh')\nvar fs = require('fs')\nvar mime = require('mime')\nvar ms = require('ms')\nvar onFinished = require('on-finished')\nvar parseRange = require('range-parser')\nvar path = require('path')\nvar statuses = require('statuses')\nvar Stream = require('stream')\nvar util = require('util')\n\n/**\n * Path function references.\n * @private\n */\n\nvar extname = path.extname\nvar join = path.join\nvar normalize = path.normalize\nvar resolve = path.resolve\nvar sep = path.sep\n\n/**\n * Regular expression for identifying a bytes Range header.\n * @private\n */\n\nvar BYTES_RANGE_REGEXP = /^ *bytes=/\n\n/**\n * Maximum value allowed for the max age.\n * @private\n */\n\nvar MAX_MAXAGE = 60 * 60 * 24 * 365 * 1000 // 1 year\n\n/**\n * Regular expression to match a path with a directory up component.\n * @private\n */\n\nvar UP_PATH_REGEXP = /(?:^|[\\\\/])\\.\\.(?:[\\\\/]|$)/\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = send\nmodule.exports.mime = mime\n\n/**\n * Return a `SendStream` for `req` and `path`.\n *\n * @param {object} req\n * @param {string} path\n * @param {object} [options]\n * @return {SendStream}\n * @public\n */\n\nfunction send (req, path, options) {\n  return new SendStream(req, path, options)\n}\n\n/**\n * Initialize a `SendStream` with the given `path`.\n *\n * @param {Request} req\n * @param {String} path\n * @param {object} [options]\n * @private\n */\n\nfunction SendStream (req, path, options) {\n  Stream.call(this)\n\n  var opts = options || {}\n\n  this.options = opts\n  this.path = path\n  this.req = req\n\n  this._acceptRanges = opts.acceptRanges !== undefined\n    ? Boolean(opts.acceptRanges)\n    : true\n\n  this._cacheControl = opts.cacheControl !== undefined\n    ? Boolean(opts.cacheControl)\n    : true\n\n  this._etag = opts.etag !== undefined\n    ? Boolean(opts.etag)\n    : true\n\n  this._dotfiles = opts.dotfiles !== undefined\n    ? opts.dotfiles\n    : 'ignore'\n\n  if (this._dotfiles !== 'ignore' && this._dotfiles !== 'allow' && this._dotfiles !== 'deny') {\n    throw new TypeError('dotfiles option must be \"allow\", \"deny\", or \"ignore\"')\n  }\n\n  this._hidden = Boolean(opts.hidden)\n\n  if (opts.hidden !== undefined) {\n    deprecate('hidden: use dotfiles: \\'' + (this._hidden ? 'allow' : 'ignore') + '\\' instead')\n  }\n\n  // legacy support\n  if (opts.dotfiles === undefined) {\n    this._dotfiles = undefined\n  }\n\n  this._extensions = opts.extensions !== undefined\n    ? normalizeList(opts.extensions, 'extensions option')\n    : []\n\n  this._immutable = opts.immutable !== undefined\n    ? Boolean(opts.immutable)\n    : false\n\n  this._index = opts.index !== undefined\n    ? normalizeList(opts.index, 'index option')\n    : ['index.html']\n\n  this._lastModified = opts.lastModified !== undefined\n    ? Boolean(opts.lastModified)\n    : true\n\n  this._maxage = opts.maxAge || opts.maxage\n  this._maxage = typeof this._maxage === 'string'\n    ? ms(this._maxage)\n    : Number(this._maxage)\n  this._maxage = !isNaN(this._maxage)\n    ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE)\n    : 0\n\n  this._root = opts.root\n    ? resolve(opts.root)\n    : null\n\n  if (!this._root && opts.from) {\n    this.from(opts.from)\n  }\n}\n\n/**\n * Inherits from `Stream`.\n */\n\nutil.inherits(SendStream, Stream)\n\n/**\n * Enable or disable etag generation.\n *\n * @param {Boolean} val\n * @return {SendStream}\n * @api public\n */\n\nSendStream.prototype.etag = deprecate.function(function etag (val) {\n  this._etag = Boolean(val)\n  debug('etag %s', this._etag)\n  return this\n}, 'send.etag: pass etag as option')\n\n/**\n * Enable or disable \"hidden\" (dot) files.\n *\n * @param {Boolean} path\n * @return {SendStream}\n * @api public\n */\n\nSendStream.prototype.hidden = deprecate.function(function hidden (val) {\n  this._hidden = Boolean(val)\n  this._dotfiles = undefined\n  debug('hidden %s', this._hidden)\n  return this\n}, 'send.hidden: use dotfiles option')\n\n/**\n * Set index `paths`, set to a falsy\n * value to disable index support.\n *\n * @param {String|Boolean|Array} paths\n * @return {SendStream}\n * @api public\n */\n\nSendStream.prototype.index = deprecate.function(function index (paths) {\n  var index = !paths ? [] : normalizeList(paths, 'paths argument')\n  debug('index %o', paths)\n  this._index = index\n  return this\n}, 'send.index: pass index as option')\n\n/**\n * Set root `path`.\n *\n * @param {String} path\n * @return {SendStream}\n * @api public\n */\n\nSendStream.prototype.root = function root (path) {\n  this._root = resolve(String(path))\n  debug('root %s', this._root)\n  return this\n}\n\nSendStream.prototype.from = deprecate.function(SendStream.prototype.root,\n  'send.from: pass root as option')\n\nSendStream.prototype.root = deprecate.function(SendStream.prototype.root,\n  'send.root: pass root as option')\n\n/**\n * Set max-age to `maxAge`.\n *\n * @param {Number} maxAge\n * @return {SendStream}\n * @api public\n */\n\nSendStream.prototype.maxage = deprecate.function(function maxage (maxAge) {\n  this._maxage = typeof maxAge === 'string'\n    ? ms(maxAge)\n    : Number(maxAge)\n  this._maxage = !isNaN(this._maxage)\n    ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE)\n    : 0\n  debug('max-age %d', this._maxage)\n  return this\n}, 'send.maxage: pass maxAge as option')\n\n/**\n * Emit error with `status`.\n *\n * @param {number} status\n * @param {Error} [err]\n * @private\n */\n\nSendStream.prototype.error = function error (status, err) {\n  // emit if listeners instead of responding\n  if (hasListeners(this, 'error')) {\n    return this.emit('error', createError(status, err, {\n      expose: false\n    }))\n  }\n\n  var res = this.res\n  var msg = statuses[status] || String(status)\n  var doc = createHtmlDocument('Error', escapeHtml(msg))\n\n  // clear existing headers\n  clearHeaders(res)\n\n  // add error headers\n  if (err && err.headers) {\n    setHeaders(res, err.headers)\n  }\n\n  // send basic response\n  res.statusCode = status\n  res.setHeader('Content-Type', 'text/html; charset=UTF-8')\n  res.setHeader('Content-Length', Buffer.byteLength(doc))\n  res.setHeader('Content-Security-Policy', \"default-src 'none'\")\n  res.setHeader('X-Content-Type-Options', 'nosniff')\n  res.end(doc)\n}\n\n/**\n * Check if the pathname ends with \"/\".\n *\n * @return {boolean}\n * @private\n */\n\nSendStream.prototype.hasTrailingSlash = function hasTrailingSlash () {\n  return this.path[this.path.length - 1] === '/'\n}\n\n/**\n * Check if this is a conditional GET request.\n *\n * @return {Boolean}\n * @api private\n */\n\nSendStream.prototype.isConditionalGET = function isConditionalGET () {\n  return this.req.headers['if-match'] ||\n    this.req.headers['if-unmodified-since'] ||\n    this.req.headers['if-none-match'] ||\n    this.req.headers['if-modified-since']\n}\n\n/**\n * Check if the request preconditions failed.\n *\n * @return {boolean}\n * @private\n */\n\nSendStream.prototype.isPreconditionFailure = function isPreconditionFailure () {\n  var req = this.req\n  var res = this.res\n\n  // if-match\n  var match = req.headers['if-match']\n  if (match) {\n    var etag = res.getHeader('ETag')\n    return !etag || (match !== '*' && parseTokenList(match).every(function (match) {\n      return match !== etag && match !== 'W/' + etag && 'W/' + match !== etag\n    }))\n  }\n\n  // if-unmodified-since\n  var unmodifiedSince = parseHttpDate(req.headers['if-unmodified-since'])\n  if (!isNaN(unmodifiedSince)) {\n    var lastModified = parseHttpDate(res.getHeader('Last-Modified'))\n    return isNaN(lastModified) || lastModified > unmodifiedSince\n  }\n\n  return false\n}\n\n/**\n * Strip content-* header fields.\n *\n * @private\n */\n\nSendStream.prototype.removeContentHeaderFields = function removeContentHeaderFields () {\n  var res = this.res\n  var headers = getHeaderNames(res)\n\n  for (var i = 0; i < headers.length; i++) {\n    var header = headers[i]\n    if (header.substr(0, 8) === 'content-' && header !== 'content-location') {\n      res.removeHeader(header)\n    }\n  }\n}\n\n/**\n * Respond with 304 not modified.\n *\n * @api private\n */\n\nSendStream.prototype.notModified = function notModified () {\n  var res = this.res\n  debug('not modified')\n  this.removeContentHeaderFields()\n  res.statusCode = 304\n  res.end()\n}\n\n/**\n * Raise error that headers already sent.\n *\n * @api private\n */\n\nSendStream.prototype.headersAlreadySent = function headersAlreadySent () {\n  var err = new Error('Can\\'t set headers after they are sent.')\n  debug('headers already sent')\n  this.error(500, err)\n}\n\n/**\n * Check if the request is cacheable, aka\n * responded with 2xx or 304 (see RFC 2616 section 14.2{5,6}).\n *\n * @return {Boolean}\n * @api private\n */\n\nSendStream.prototype.isCachable = function isCachable () {\n  var statusCode = this.res.statusCode\n  return (statusCode >= 200 && statusCode < 300) ||\n    statusCode === 304\n}\n\n/**\n * Handle stat() error.\n *\n * @param {Error} error\n * @private\n */\n\nSendStream.prototype.onStatError = function onStatError (error) {\n  switch (error.code) {\n    case 'ENAMETOOLONG':\n    case 'ENOENT':\n    case 'ENOTDIR':\n      this.error(404, error)\n      break\n    default:\n      this.error(500, error)\n      break\n  }\n}\n\n/**\n * Check if the cache is fresh.\n *\n * @return {Boolean}\n * @api private\n */\n\nSendStream.prototype.isFresh = function isFresh () {\n  return fresh(this.req.headers, {\n    'etag': this.res.getHeader('ETag'),\n    'last-modified': this.res.getHeader('Last-Modified')\n  })\n}\n\n/**\n * Check if the range is fresh.\n *\n * @return {Boolean}\n * @api private\n */\n\nSendStream.prototype.isRangeFresh = function isRangeFresh () {\n  var ifRange = this.req.headers['if-range']\n\n  if (!ifRange) {\n    return true\n  }\n\n  // if-range as etag\n  if (ifRange.indexOf('\"') !== -1) {\n    var etag = this.res.getHeader('ETag')\n    return Boolean(etag && ifRange.indexOf(etag) !== -1)\n  }\n\n  // if-range as modified date\n  var lastModified = this.res.getHeader('Last-Modified')\n  return parseHttpDate(lastModified) <= parseHttpDate(ifRange)\n}\n\n/**\n * Redirect to path.\n *\n * @param {string} path\n * @private\n */\n\nSendStream.prototype.redirect = function redirect (path) {\n  var res = this.res\n\n  if (hasListeners(this, 'directory')) {\n    this.emit('directory', res, path)\n    return\n  }\n\n  if (this.hasTrailingSlash()) {\n    this.error(403)\n    return\n  }\n\n  var loc = encodeUrl(collapseLeadingSlashes(this.path + '/'))\n  var doc = createHtmlDocument('Redirecting', 'Redirecting to <a href=\"' + escapeHtml(loc) + '\">' +\n    escapeHtml(loc) + '</a>')\n\n  // redirect\n  res.statusCode = 301\n  res.setHeader('Content-Type', 'text/html; charset=UTF-8')\n  res.setHeader('Content-Length', Buffer.byteLength(doc))\n  res.setHeader('Content-Security-Policy', \"default-src 'none'\")\n  res.setHeader('X-Content-Type-Options', 'nosniff')\n  res.setHeader('Location', loc)\n  res.end(doc)\n}\n\n/**\n * Pipe to `res.\n *\n * @param {Stream} res\n * @return {Stream} res\n * @api public\n */\n\nSendStream.prototype.pipe = function pipe (res) {\n  // root path\n  var root = this._root\n\n  // references\n  this.res = res\n\n  // decode the path\n  var path = decode(this.path)\n  if (path === -1) {\n    this.error(400)\n    return res\n  }\n\n  // null byte(s)\n  if (~path.indexOf('\\0')) {\n    this.error(400)\n    return res\n  }\n\n  var parts\n  if (root !== null) {\n    // normalize\n    if (path) {\n      path = normalize('.' + sep + path)\n    }\n\n    // malicious path\n    if (UP_PATH_REGEXP.test(path)) {\n      debug('malicious path \"%s\"', path)\n      this.error(403)\n      return res\n    }\n\n    // explode path parts\n    parts = path.split(sep)\n\n    // join / normalize from optional root dir\n    path = normalize(join(root, path))\n  } else {\n    // \"..\" is malicious without \"root\"\n    if (UP_PATH_REGEXP.test(path)) {\n      debug('malicious path \"%s\"', path)\n      this.error(403)\n      return res\n    }\n\n    // explode path parts\n    parts = normalize(path).split(sep)\n\n    // resolve the path\n    path = resolve(path)\n  }\n\n  // dotfile handling\n  if (containsDotFile(parts)) {\n    var access = this._dotfiles\n\n    // legacy support\n    if (access === undefined) {\n      access = parts[parts.length - 1][0] === '.'\n        ? (this._hidden ? 'allow' : 'ignore')\n        : 'allow'\n    }\n\n    debug('%s dotfile \"%s\"', access, path)\n    switch (access) {\n      case 'allow':\n        break\n      case 'deny':\n        this.error(403)\n        return res\n      case 'ignore':\n      default:\n        this.error(404)\n        return res\n    }\n  }\n\n  // index file support\n  if (this._index.length && this.hasTrailingSlash()) {\n    this.sendIndex(path)\n    return res\n  }\n\n  this.sendFile(path)\n  return res\n}\n\n/**\n * Transfer `path`.\n *\n * @param {String} path\n * @api public\n */\n\nSendStream.prototype.send = function send (path, stat) {\n  var len = stat.size\n  var options = this.options\n  var opts = {}\n  var res = this.res\n  var req = this.req\n  var ranges = req.headers.range\n  var offset = options.start || 0\n\n  if (headersSent(res)) {\n    // impossible to send now\n    this.headersAlreadySent()\n    return\n  }\n\n  debug('pipe \"%s\"', path)\n\n  // set header fields\n  this.setHeader(path, stat)\n\n  // set content-type\n  this.type(path)\n\n  // conditional GET support\n  if (this.isConditionalGET()) {\n    if (this.isPreconditionFailure()) {\n      this.error(412)\n      return\n    }\n\n    if (this.isCachable() && this.isFresh()) {\n      this.notModified()\n      return\n    }\n  }\n\n  // adjust len to start/end options\n  len = Math.max(0, len - offset)\n  if (options.end !== undefined) {\n    var bytes = options.end - offset + 1\n    if (len > bytes) len = bytes\n  }\n\n  // Range support\n  if (this._acceptRanges && BYTES_RANGE_REGEXP.test(ranges)) {\n    // parse\n    ranges = parseRange(len, ranges, {\n      combine: true\n    })\n\n    // If-Range support\n    if (!this.isRangeFresh()) {\n      debug('range stale')\n      ranges = -2\n    }\n\n    // unsatisfiable\n    if (ranges === -1) {\n      debug('range unsatisfiable')\n\n      // Content-Range\n      res.setHeader('Content-Range', contentRange('bytes', len))\n\n      // 416 Requested Range Not Satisfiable\n      return this.error(416, {\n        headers: { 'Content-Range': res.getHeader('Content-Range') }\n      })\n    }\n\n    // valid (syntactically invalid/multiple ranges are treated as a regular response)\n    if (ranges !== -2 && ranges.length === 1) {\n      debug('range %j', ranges)\n\n      // Content-Range\n      res.statusCode = 206\n      res.setHeader('Content-Range', contentRange('bytes', len, ranges[0]))\n\n      // adjust for requested range\n      offset += ranges[0].start\n      len = ranges[0].end - ranges[0].start + 1\n    }\n  }\n\n  // clone options\n  for (var prop in options) {\n    opts[prop] = options[prop]\n  }\n\n  // set read options\n  opts.start = offset\n  opts.end = Math.max(offset, offset + len - 1)\n\n  // content-length\n  res.setHeader('Content-Length', len)\n\n  // HEAD support\n  if (req.method === 'HEAD') {\n    res.end()\n    return\n  }\n\n  this.stream(path, opts)\n}\n\n/**\n * Transfer file for `path`.\n *\n * @param {String} path\n * @api private\n */\nSendStream.prototype.sendFile = function sendFile (path) {\n  var i = 0\n  var self = this\n\n  debug('stat \"%s\"', path)\n  fs.stat(path, function onstat (err, stat) {\n    if (err && err.code === 'ENOENT' && !extname(path) && path[path.length - 1] !== sep) {\n      // not found, check extensions\n      return next(err)\n    }\n    if (err) return self.onStatError(err)\n    if (stat.isDirectory()) return self.redirect(path)\n    self.emit('file', path, stat)\n    self.send(path, stat)\n  })\n\n  function next (err) {\n    if (self._extensions.length <= i) {\n      return err\n        ? self.onStatError(err)\n        : self.error(404)\n    }\n\n    var p = path + '.' + self._extensions[i++]\n\n    debug('stat \"%s\"', p)\n    fs.stat(p, function (err, stat) {\n      if (err) return next(err)\n      if (stat.isDirectory()) return next()\n      self.emit('file', p, stat)\n      self.send(p, stat)\n    })\n  }\n}\n\n/**\n * Transfer index for `path`.\n *\n * @param {String} path\n * @api private\n */\nSendStream.prototype.sendIndex = function sendIndex (path) {\n  var i = -1\n  var self = this\n\n  function next (err) {\n    if (++i >= self._index.length) {\n      if (err) return self.onStatError(err)\n      return self.error(404)\n    }\n\n    var p = join(path, self._index[i])\n\n    debug('stat \"%s\"', p)\n    fs.stat(p, function (err, stat) {\n      if (err) return next(err)\n      if (stat.isDirectory()) return next()\n      self.emit('file', p, stat)\n      self.send(p, stat)\n    })\n  }\n\n  next()\n}\n\n/**\n * Stream `path` to the response.\n *\n * @param {String} path\n * @param {Object} options\n * @api private\n */\n\nSendStream.prototype.stream = function stream (path, options) {\n  // TODO: this is all lame, refactor meeee\n  var finished = false\n  var self = this\n  var res = this.res\n\n  // pipe\n  var stream = fs.createReadStream(path, options)\n  this.emit('stream', stream)\n  stream.pipe(res)\n\n  // response finished, done with the fd\n  onFinished(res, function onfinished () {\n    finished = true\n    destroy(stream)\n  })\n\n  // error handling code-smell\n  stream.on('error', function onerror (err) {\n    // request already finished\n    if (finished) return\n\n    // clean up stream\n    finished = true\n    destroy(stream)\n\n    // error\n    self.onStatError(err)\n  })\n\n  // end\n  stream.on('end', function onend () {\n    self.emit('end')\n  })\n}\n\n/**\n * Set content-type based on `path`\n * if it hasn't been explicitly set.\n *\n * @param {String} path\n * @api private\n */\n\nSendStream.prototype.type = function type (path) {\n  var res = this.res\n\n  if (res.getHeader('Content-Type')) return\n\n  var type = mime.lookup(path)\n\n  if (!type) {\n    debug('no content-type')\n    return\n  }\n\n  var charset = mime.charsets.lookup(type)\n\n  debug('content-type %s', type)\n  res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''))\n}\n\n/**\n * Set response header fields, most\n * fields may be pre-defined.\n *\n * @param {String} path\n * @param {Object} stat\n * @api private\n */\n\nSendStream.prototype.setHeader = function setHeader (path, stat) {\n  var res = this.res\n\n  this.emit('headers', res, path, stat)\n\n  if (this._acceptRanges && !res.getHeader('Accept-Ranges')) {\n    debug('accept ranges')\n    res.setHeader('Accept-Ranges', 'bytes')\n  }\n\n  if (this._cacheControl && !res.getHeader('Cache-Control')) {\n    var cacheControl = 'public, max-age=' + Math.floor(this._maxage / 1000)\n\n    if (this._immutable) {\n      cacheControl += ', immutable'\n    }\n\n    debug('cache-control %s', cacheControl)\n    res.setHeader('Cache-Control', cacheControl)\n  }\n\n  if (this._lastModified && !res.getHeader('Last-Modified')) {\n    var modified = stat.mtime.toUTCString()\n    debug('modified %s', modified)\n    res.setHeader('Last-Modified', modified)\n  }\n\n  if (this._etag && !res.getHeader('ETag')) {\n    var val = etag(stat)\n    debug('etag %s', val)\n    res.setHeader('ETag', val)\n  }\n}\n\n/**\n * Clear all headers from a response.\n *\n * @param {object} res\n * @private\n */\n\nfunction clearHeaders (res) {\n  var headers = getHeaderNames(res)\n\n  for (var i = 0; i < headers.length; i++) {\n    res.removeHeader(headers[i])\n  }\n}\n\n/**\n * Collapse all leading slashes into a single slash\n *\n * @param {string} str\n * @private\n */\nfunction collapseLeadingSlashes (str) {\n  for (var i = 0; i < str.length; i++) {\n    if (str[i] !== '/') {\n      break\n    }\n  }\n\n  return i > 1\n    ? '/' + str.substr(i)\n    : str\n}\n\n/**\n * Determine if path parts contain a dotfile.\n *\n * @api private\n */\n\nfunction containsDotFile (parts) {\n  for (var i = 0; i < parts.length; i++) {\n    var part = parts[i]\n    if (part.length > 1 && part[0] === '.') {\n      return true\n    }\n  }\n\n  return false\n}\n\n/**\n * Create a Content-Range header.\n *\n * @param {string} type\n * @param {number} size\n * @param {array} [range]\n */\n\nfunction contentRange (type, size, range) {\n  return type + ' ' + (range ? range.start + '-' + range.end : '*') + '/' + size\n}\n\n/**\n * Create a minimal HTML document.\n *\n * @param {string} title\n * @param {string} body\n * @private\n */\n\nfunction createHtmlDocument (title, body) {\n  return '<!DOCTYPE html>\\n' +\n    '<html lang=\"en\">\\n' +\n    '<head>\\n' +\n    '<meta charset=\"utf-8\">\\n' +\n    '<title>' + title + '</title>\\n' +\n    '</head>\\n' +\n    '<body>\\n' +\n    '<pre>' + body + '</pre>\\n' +\n    '</body>\\n' +\n    '</html>\\n'\n}\n\n/**\n * decodeURIComponent.\n *\n * Allows V8 to only deoptimize this fn instead of all\n * of send().\n *\n * @param {String} path\n * @api private\n */\n\nfunction decode (path) {\n  try {\n    return decodeURIComponent(path)\n  } catch (err) {\n    return -1\n  }\n}\n\n/**\n * Get the header names on a respnse.\n *\n * @param {object} res\n * @returns {array[string]}\n * @private\n */\n\nfunction getHeaderNames (res) {\n  return typeof res.getHeaderNames !== 'function'\n    ? Object.keys(res._headers || {})\n    : res.getHeaderNames()\n}\n\n/**\n * Determine if emitter has listeners of a given type.\n *\n * The way to do this check is done three different ways in Node.js >= 0.8\n * so this consolidates them into a minimal set using instance methods.\n *\n * @param {EventEmitter} emitter\n * @param {string} type\n * @returns {boolean}\n * @private\n */\n\nfunction hasListeners (emitter, type) {\n  var count = typeof emitter.listenerCount !== 'function'\n    ? emitter.listeners(type).length\n    : emitter.listenerCount(type)\n\n  return count > 0\n}\n\n/**\n * Determine if the response headers have been sent.\n *\n * @param {object} res\n * @returns {boolean}\n * @private\n */\n\nfunction headersSent (res) {\n  return typeof res.headersSent !== 'boolean'\n    ? Boolean(res._header)\n    : res.headersSent\n}\n\n/**\n * Normalize the index option into an array.\n *\n * @param {boolean|string|array} val\n * @param {string} name\n * @private\n */\n\nfunction normalizeList (val, name) {\n  var list = [].concat(val || [])\n\n  for (var i = 0; i < list.length; i++) {\n    if (typeof list[i] !== 'string') {\n      throw new TypeError(name + ' must be array of strings or false')\n    }\n  }\n\n  return list\n}\n\n/**\n * Parse an HTTP Date into a number.\n *\n * @param {string} date\n * @private\n */\n\nfunction parseHttpDate (date) {\n  var timestamp = date && Date.parse(date)\n\n  return typeof timestamp === 'number'\n    ? timestamp\n    : NaN\n}\n\n/**\n * Parse a HTTP token list.\n *\n * @param {string} str\n * @private\n */\n\nfunction parseTokenList (str) {\n  var end = 0\n  var list = []\n  var start = 0\n\n  // gather tokens\n  for (var i = 0, len = str.length; i < len; i++) {\n    switch (str.charCodeAt(i)) {\n      case 0x20: /*   */\n        if (start === end) {\n          start = end = i + 1\n        }\n        break\n      case 0x2c: /* , */\n        list.push(str.substring(start, end))\n        start = end = i + 1\n        break\n      default:\n        end = i + 1\n        break\n    }\n  }\n\n  // final token\n  list.push(str.substring(start, end))\n\n  return list\n}\n\n/**\n * Set an object of headers on a response.\n *\n * @param {object} res\n * @param {object} headers\n * @private\n */\n\nfunction setHeaders (res, headers) {\n  var keys = Object.keys(headers)\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i]\n    res.setHeader(key, headers[key])\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.418Z",
			"mtimeMs": 1598589592417.9043,
			"atime": "2020-08-28T04:39:52.538Z",
			"atimeMs": 1598589592537.9075,
			"isdirectory": true
		},
		"filename": "send/node_modules"
	}})
	fileData.push(function(){ var item= cacheData[75]; if(!item){ item= cacheData[75]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.001Z",
			"mtimeMs": 1598589592001,
			"atime": "2020-08-28T04:39:52.466Z",
			"atimeMs": 1598589592465.9055,
			"isfile": true
		},
		"filename": "send/package.json",
		"content": "{\n  \"name\": \"send\",\n  \"description\": \"Better streaming static file server with Range and conditional-GET support\",\n  \"version\": \"0.17.1\",\n  \"author\": \"TJ Holowaychuk <tj@vision-media.ca>\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"James Wyatt Cready <jcready@gmail.com>\",\n    \"JesÃºs LeganÃ©s Combarro <piranna@gmail.com>\"\n  ],\n  \"license\": \"MIT\",\n  \"repository\": \"pillarjs/send\",\n  \"keywords\": [\n    \"static\",\n    \"file\",\n    \"server\"\n  ],\n  \"dependencies\": {\n    \"debug\": \"2.6.9\",\n    \"depd\": \"~1.1.2\",\n    \"destroy\": \"~1.0.4\",\n    \"encodeurl\": \"~1.0.2\",\n    \"escape-html\": \"~1.0.3\",\n    \"etag\": \"~1.8.1\",\n    \"fresh\": \"0.5.2\",\n    \"http-errors\": \"~1.7.2\",\n    \"mime\": \"1.6.0\",\n    \"ms\": \"2.1.1\",\n    \"on-finished\": \"~2.3.0\",\n    \"range-parser\": \"~1.2.1\",\n    \"statuses\": \"~1.5.0\"\n  },\n  \"devDependencies\": {\n    \"after\": \"0.8.2\",\n    \"eslint\": \"5.16.0\",\n    \"eslint-config-standard\": \"12.0.0\",\n    \"eslint-plugin-import\": \"2.17.2\",\n    \"eslint-plugin-markdown\": \"1.0.0\",\n    \"eslint-plugin-node\": \"8.0.1\",\n    \"eslint-plugin-promise\": \"4.1.1\",\n    \"eslint-plugin-standard\": \"4.0.0\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"6.1.4\",\n    \"supertest\": \"4.0.2\"\n  },\n  \"files\": [\n    \"HISTORY.md\",\n    \"LICENSE\",\n    \"README.md\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.8.0\"\n  },\n  \"scripts\": {\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --check-leaks --reporter spec --bail\",\n    \"test-ci\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --check-leaks --reporter spec\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --check-leaks --reporter dot\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isdirectory": true
		},
		"filename": "serve-static"
	}})
	fileData.push(function(){ var item= cacheData[77]; if(!item){ item= cacheData[77]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:51.992Z",
			"mtimeMs": 1598589591992,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isfile": true
		},
		"filename": "serve-static/index.js",
		"content": "/*!\n * serve-static\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2014-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar encodeUrl = require('encodeurl')\nvar escapeHtml = require('escape-html')\nvar parseUrl = require('parseurl')\nvar resolve = require('path').resolve\nvar send = require('send')\nvar url = require('url')\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = serveStatic\nmodule.exports.mime = send.mime\n\n/**\n * @param {string} root\n * @param {object} [options]\n * @return {function}\n * @public\n */\n\nfunction serveStatic (root, options) {\n  if (!root) {\n    throw new TypeError('root path required')\n  }\n\n  if (typeof root !== 'string') {\n    throw new TypeError('root path must be a string')\n  }\n\n  // copy options object\n  var opts = Object.create(options || null)\n\n  // fall-though\n  var fallthrough = opts.fallthrough !== false\n\n  // default redirect\n  var redirect = opts.redirect !== false\n\n  // headers listener\n  var setHeaders = opts.setHeaders\n\n  if (setHeaders && typeof setHeaders !== 'function') {\n    throw new TypeError('option setHeaders must be function')\n  }\n\n  // setup options for send\n  opts.maxage = opts.maxage || opts.maxAge || 0\n  opts.root = resolve(root)\n\n  // construct directory listener\n  var onDirectory = redirect\n    ? createRedirectDirectoryListener()\n    : createNotFoundDirectoryListener()\n\n  return function serveStatic (req, res, next) {\n    if (req.method !== 'GET' && req.method !== 'HEAD') {\n      if (fallthrough) {\n        return next()\n      }\n\n      // method not allowed\n      res.statusCode = 405\n      res.setHeader('Allow', 'GET, HEAD')\n      res.setHeader('Content-Length', '0')\n      res.end()\n      return\n    }\n\n    var forwardError = !fallthrough\n    var originalUrl = parseUrl.original(req)\n    var path = parseUrl(req).pathname\n\n    // make sure redirect occurs at mount\n    if (path === '/' && originalUrl.pathname.substr(-1) !== '/') {\n      path = ''\n    }\n\n    // create send stream\n    var stream = send(req, path, opts)\n\n    // add directory handler\n    stream.on('directory', onDirectory)\n\n    // add headers listener\n    if (setHeaders) {\n      stream.on('headers', setHeaders)\n    }\n\n    // add file listener for fallthrough\n    if (fallthrough) {\n      stream.on('file', function onFile () {\n        // once file is determined, always forward error\n        forwardError = true\n      })\n    }\n\n    // forward errors\n    stream.on('error', function error (err) {\n      if (forwardError || !(err.statusCode < 500)) {\n        next(err)\n        return\n      }\n\n      next()\n    })\n\n    // pipe\n    stream.pipe(res)\n  }\n}\n\n/**\n * Collapse all leading slashes into a single slash\n * @private\n */\nfunction collapseLeadingSlashes (str) {\n  for (var i = 0; i < str.length; i++) {\n    if (str.charCodeAt(i) !== 0x2f /* / */) {\n      break\n    }\n  }\n\n  return i > 1\n    ? '/' + str.substr(i)\n    : str\n}\n\n/**\n * Create a minimal HTML document.\n *\n * @param {string} title\n * @param {string} body\n * @private\n */\n\nfunction createHtmlDocument (title, body) {\n  return '<!DOCTYPE html>\\n' +\n    '<html lang=\"en\">\\n' +\n    '<head>\\n' +\n    '<meta charset=\"utf-8\">\\n' +\n    '<title>' + title + '</title>\\n' +\n    '</head>\\n' +\n    '<body>\\n' +\n    '<pre>' + body + '</pre>\\n' +\n    '</body>\\n' +\n    '</html>\\n'\n}\n\n/**\n * Create a directory listener that just 404s.\n * @private\n */\n\nfunction createNotFoundDirectoryListener () {\n  return function notFound () {\n    this.error(404)\n  }\n}\n\n/**\n * Create a directory listener that performs a redirect.\n * @private\n */\n\nfunction createRedirectDirectoryListener () {\n  return function redirect (res) {\n    if (this.hasTrailingSlash()) {\n      this.error(404)\n      return\n    }\n\n    // get original URL\n    var originalUrl = parseUrl.original(this.req)\n\n    // append trailing slash\n    originalUrl.path = null\n    originalUrl.pathname = collapseLeadingSlashes(originalUrl.pathname + '/')\n\n    // reformat the URL\n    var loc = encodeUrl(url.format(originalUrl))\n    var doc = createHtmlDocument('Redirecting', 'Redirecting to <a href=\"' + escapeHtml(loc) + '\">' +\n      escapeHtml(loc) + '</a>')\n\n    // send redirect response\n    res.statusCode = 301\n    res.setHeader('Content-Type', 'text/html; charset=UTF-8')\n    res.setHeader('Content-Length', Buffer.byteLength(doc))\n    res.setHeader('Content-Security-Policy', \"default-src 'none'\")\n    res.setHeader('X-Content-Type-Options', 'nosniff')\n    res.setHeader('Location', loc)\n    res.end(doc)\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[78]; if(!item){ item= cacheData[78]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:51.992Z",
			"mtimeMs": 1598589591992,
			"atime": "2020-08-28T04:39:52.470Z",
			"atimeMs": 1598589592469.9058,
			"isfile": true
		},
		"filename": "serve-static/package.json",
		"content": "{\n  \"name\": \"serve-static\",\n  \"description\": \"Serve static files\",\n  \"version\": \"1.14.1\",\n  \"author\": \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n  \"license\": \"MIT\",\n  \"repository\": \"expressjs/serve-static\",\n  \"dependencies\": {\n    \"encodeurl\": \"~1.0.2\",\n    \"escape-html\": \"~1.0.3\",\n    \"parseurl\": \"~1.3.3\",\n    \"send\": \"0.17.1\"\n  },\n  \"devDependencies\": {\n    \"eslint\": \"5.16.0\",\n    \"eslint-config-standard\": \"12.0.0\",\n    \"eslint-plugin-import\": \"2.17.2\",\n    \"eslint-plugin-markdown\": \"1.0.0\",\n    \"eslint-plugin-node\": \"8.0.1\",\n    \"eslint-plugin-promise\": \"4.1.1\",\n    \"eslint-plugin-standard\": \"4.0.0\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"6.1.4\",\n    \"safe-buffer\": \"5.1.2\",\n    \"supertest\": \"4.0.2\"\n  },\n  \"files\": [\n    \"LICENSE\",\n    \"HISTORY.md\",\n    \"index.js\"\n  ],\n  \"engines\": {\n    \"node\": \">= 0.8.0\"\n  },\n  \"scripts\": {\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-ci\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"version\": \"node scripts/version-history.js && git add HISTORY.md\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isdirectory": true
		},
		"filename": "setprototypeof"
	}})
	fileData.push(function(){ var item= cacheData[80]; if(!item){ item= cacheData[80]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.189Z",
			"mtimeMs": 1598589592189,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isfile": true
		},
		"filename": "setprototypeof/index.d.ts",
		"content": "declare function setPrototypeOf(o: any, proto: object | null): any;\nexport = setPrototypeOf;\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[81]; if(!item){ item= cacheData[81]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.189Z",
			"mtimeMs": 1598589592189,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isfile": true
		},
		"filename": "setprototypeof/index.js",
		"content": "'use strict'\n/* eslint no-proto: 0 */\nmodule.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)\n\nfunction setProtoOf (obj, proto) {\n  obj.__proto__ = proto\n  return obj\n}\n\nfunction mixinProperties (obj, proto) {\n  for (var prop in proto) {\n    if (!obj.hasOwnProperty(prop)) {\n      obj[prop] = proto[prop]\n    }\n  }\n  return obj\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[82]; if(!item){ item= cacheData[82]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.189Z",
			"mtimeMs": 1598589592189,
			"atime": "2020-08-28T04:39:52.470Z",
			"atimeMs": 1598589592469.9058,
			"isfile": true
		},
		"filename": "setprototypeof/package.json",
		"content": "{\n  \"name\": \"setprototypeof\",\n  \"version\": \"1.1.1\",\n  \"description\": \"A small polyfill for Object.setprototypeof\",\n  \"main\": \"index.js\",\n  \"typings\": \"index.d.ts\",\n  \"scripts\": {\n    \"test\": \"standard && mocha\",\n    \"testallversions\": \"npm run node010 && npm run node4 && npm run node6 && npm run node9 && npm run node11\",\n    \"testversion\": \"docker run -it --rm -v $(PWD):/usr/src/app -w /usr/src/app node:${NODE_VER} npm install mocha@${MOCHA_VER:-latest} && npm t\",\n    \"node010\": \"NODE_VER=0.10 MOCHA_VER=3 npm run testversion\",\n    \"node4\": \"NODE_VER=4 npm run testversion\",\n    \"node6\": \"NODE_VER=6 npm run testversion\",\n    \"node9\": \"NODE_VER=9 npm run testversion\",\n    \"node11\": \"NODE_VER=11 npm run testversion\"\n  },\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/wesleytodd/setprototypeof.git\"\n  },\n  \"keywords\": [\n    \"polyfill\",\n    \"object\",\n    \"setprototypeof\"\n  ],\n  \"author\": \"Wes Todd\",\n  \"license\": \"ISC\",\n  \"bugs\": {\n    \"url\": \"https://github.com/wesleytodd/setprototypeof/issues\"\n  },\n  \"homepage\": \"https://github.com/wesleytodd/setprototypeof\",\n  \"devDependencies\": {\n    \"mocha\": \"^5.2.0\",\n    \"standard\": \"^12.0.1\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isdirectory": true
		},
		"filename": "statuses"
	}})
	fileData.push(function(){ var item= cacheData[84]; if(!item){ item= cacheData[84]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.690Z",
			"mtimeMs": 1596929147690,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isfile": true
		},
		"filename": "statuses/codes.json",
		"content": "{\n  \"100\": \"Continue\",\n  \"101\": \"Switching Protocols\",\n  \"102\": \"Processing\",\n  \"103\": \"Early Hints\",\n  \"200\": \"OK\",\n  \"201\": \"Created\",\n  \"202\": \"Accepted\",\n  \"203\": \"Non-Authoritative Information\",\n  \"204\": \"No Content\",\n  \"205\": \"Reset Content\",\n  \"206\": \"Partial Content\",\n  \"207\": \"Multi-Status\",\n  \"208\": \"Already Reported\",\n  \"226\": \"IM Used\",\n  \"300\": \"Multiple Choices\",\n  \"301\": \"Moved Permanently\",\n  \"302\": \"Found\",\n  \"303\": \"See Other\",\n  \"304\": \"Not Modified\",\n  \"305\": \"Use Proxy\",\n  \"306\": \"(Unused)\",\n  \"307\": \"Temporary Redirect\",\n  \"308\": \"Permanent Redirect\",\n  \"400\": \"Bad Request\",\n  \"401\": \"Unauthorized\",\n  \"402\": \"Payment Required\",\n  \"403\": \"Forbidden\",\n  \"404\": \"Not Found\",\n  \"405\": \"Method Not Allowed\",\n  \"406\": \"Not Acceptable\",\n  \"407\": \"Proxy Authentication Required\",\n  \"408\": \"Request Timeout\",\n  \"409\": \"Conflict\",\n  \"410\": \"Gone\",\n  \"411\": \"Length Required\",\n  \"412\": \"Precondition Failed\",\n  \"413\": \"Payload Too Large\",\n  \"414\": \"URI Too Long\",\n  \"415\": \"Unsupported Media Type\",\n  \"416\": \"Range Not Satisfiable\",\n  \"417\": \"Expectation Failed\",\n  \"418\": \"I'm a teapot\",\n  \"421\": \"Misdirected Request\",\n  \"422\": \"Unprocessable Entity\",\n  \"423\": \"Locked\",\n  \"424\": \"Failed Dependency\",\n  \"425\": \"Unordered Collection\",\n  \"426\": \"Upgrade Required\",\n  \"428\": \"Precondition Required\",\n  \"429\": \"Too Many Requests\",\n  \"431\": \"Request Header Fields Too Large\",\n  \"451\": \"Unavailable For Legal Reasons\",\n  \"500\": \"Internal Server Error\",\n  \"501\": \"Not Implemented\",\n  \"502\": \"Bad Gateway\",\n  \"503\": \"Service Unavailable\",\n  \"504\": \"Gateway Timeout\",\n  \"505\": \"HTTP Version Not Supported\",\n  \"506\": \"Variant Also Negotiates\",\n  \"507\": \"Insufficient Storage\",\n  \"508\": \"Loop Detected\",\n  \"509\": \"Bandwidth Limit Exceeded\",\n  \"510\": \"Not Extended\",\n  \"511\": \"Network Authentication Required\"\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[85]; if(!item){ item= cacheData[85]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.690Z",
			"mtimeMs": 1596929147690,
			"atime": "2020-08-28T04:39:52.542Z",
			"atimeMs": 1598589592541.9075,
			"isfile": true
		},
		"filename": "statuses/index.js",
		"content": "/*!\n * statuses\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar codes = require('./codes.json')\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = status\n\n// status code to message map\nstatus.STATUS_CODES = codes\n\n// array of status codes\nstatus.codes = populateStatusesMap(status, codes)\n\n// status codes for redirects\nstatus.redirect = {\n  300: true,\n  301: true,\n  302: true,\n  303: true,\n  305: true,\n  307: true,\n  308: true\n}\n\n// status codes for empty bodies\nstatus.empty = {\n  204: true,\n  205: true,\n  304: true\n}\n\n// status codes for when you should retry the request\nstatus.retry = {\n  502: true,\n  503: true,\n  504: true\n}\n\n/**\n * Populate the statuses map for given codes.\n * @private\n */\n\nfunction populateStatusesMap (statuses, codes) {\n  var arr = []\n\n  Object.keys(codes).forEach(function forEachCode (code) {\n    var message = codes[code]\n    var status = Number(code)\n\n    // Populate properties\n    statuses[status] = message\n    statuses[message] = status\n    statuses[message.toLowerCase()] = status\n\n    // Add to array\n    arr.push(status)\n  })\n\n  return arr\n}\n\n/**\n * Get the status code.\n *\n * Given a number, this will throw if it is not a known status\n * code, otherwise the code will be returned. Given a string,\n * the string will be parsed for a number and return the code\n * if valid, otherwise will lookup the code assuming this is\n * the status message.\n *\n * @param {string|number} code\n * @returns {number}\n * @public\n */\n\nfunction status (code) {\n  if (typeof code === 'number') {\n    if (!status[code]) throw new Error('invalid status code: ' + code)\n    return code\n  }\n\n  if (typeof code !== 'string') {\n    throw new TypeError('code must be a number or string')\n  }\n\n  // '403'\n  var n = parseInt(code, 10)\n  if (!isNaN(n)) {\n    if (!status[n]) throw new Error('invalid status code: ' + n)\n    return n\n  }\n\n  n = status[code.toLowerCase()]\n  if (!n) throw new Error('invalid status message: \"' + code + '\"')\n  return n\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[86]; if(!item){ item= cacheData[86]= 	{
		"stat": {
			"mtime": "2020-08-08T23:25:47.690Z",
			"mtimeMs": 1596929147690,
			"atime": "2020-08-28T04:39:52.470Z",
			"atimeMs": 1598589592469.9058,
			"isfile": true
		},
		"filename": "statuses/package.json",
		"content": "{\n  \"name\": \"statuses\",\n  \"description\": \"HTTP status utility\",\n  \"version\": \"1.5.0\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)\"\n  ],\n  \"repository\": \"jshttp/statuses\",\n  \"license\": \"MIT\",\n  \"keywords\": [\n    \"http\",\n    \"status\",\n    \"code\"\n  ],\n  \"files\": [\n    \"HISTORY.md\",\n    \"index.js\",\n    \"codes.json\",\n    \"LICENSE\"\n  ],\n  \"devDependencies\": {\n    \"csv-parse\": \"1.2.4\",\n    \"eslint\": \"4.19.1\",\n    \"eslint-config-standard\": \"11.0.0\",\n    \"eslint-plugin-import\": \"2.9.0\",\n    \"eslint-plugin-markdown\": \"1.0.0-beta.6\",\n    \"eslint-plugin-node\": \"6.0.1\",\n    \"eslint-plugin-promise\": \"3.7.0\",\n    \"eslint-plugin-standard\": \"3.0.1\",\n    \"istanbul\": \"0.4.5\",\n    \"mocha\": \"1.21.5\",\n    \"raw-body\": \"2.3.2\",\n    \"stream-to-array\": \"2.3.0\"\n  },\n  \"engines\": {\n    \"node\": \">= 0.6\"\n  },\n  \"scripts\": {\n    \"build\": \"node scripts/build.js\",\n    \"fetch\": \"node scripts/fetch-apache.js && node scripts/fetch-iana.js && node scripts/fetch-nginx.js && node scripts/fetch-node.js\",\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec --check-leaks --bail test/\",\n    \"test-ci\": \"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/\",\n    \"test-cov\": \"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/\",\n    \"update\": \"npm run fetch && npm run build\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.386Z",
			"mtimeMs": 1598589592385.9036,
			"atime": "2020-08-28T04:39:52.546Z",
			"atimeMs": 1598589592545.9077,
			"isdirectory": true
		},
		"filename": "toidentifier"
	}})
	fileData.push(function(){ var item= cacheData[88]; if(!item){ item= cacheData[88]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.193Z",
			"mtimeMs": 1598589592193,
			"atime": "2020-08-28T04:39:52.546Z",
			"atimeMs": 1598589592545.9077,
			"isfile": true
		},
		"filename": "toidentifier/index.js",
		"content": "/*!\n * toidentifier\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = toIdentifier\n\n/**\n * Trasform the given string into a JavaScript identifier\n *\n * @param {string} str\n * @returns {string}\n * @public\n */\n\nfunction toIdentifier (str) {\n  return str\n    .split(' ')\n    .map(function (token) {\n      return token.slice(0, 1).toUpperCase() + token.slice(1)\n    })\n    .join('')\n    .replace(/[^ _0-9a-z]/gi, '')\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[89]; if(!item){ item= cacheData[89]= 	{
		"stat": {
			"mtime": "2020-08-28T04:39:52.193Z",
			"mtimeMs": 1598589592193,
			"atime": "2020-08-28T04:39:52.474Z",
			"atimeMs": 1598589592473.9058,
			"isfile": true
		},
		"filename": "toidentifier/package.json",
		"content": "{\n  \"name\": \"toidentifier\",\n  \"description\": \"Convert a string of words to a JavaScript identifier\",\n  \"version\": \"1.0.0\",\n  \"author\": \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n  \"contributors\": [\n    \"Douglas Christopher Wilson <doug@somethingdoug.com>\",\n    \"Nick Baugh <niftylettuce@gmail.com> (http://niftylettuce.com/)\"\n  ],\n  \"repository\": \"component/toidentifier\",\n  \"devDependencies\": {\n    \"eslint\": \"4.19.1\",\n    \"eslint-config-standard\": \"11.0.0\",\n    \"eslint-plugin-import\": \"2.11.0\",\n    \"eslint-plugin-markdown\": \"1.0.0-beta.6\",\n    \"eslint-plugin-node\": \"6.0.1\",\n    \"eslint-plugin-promise\": \"3.7.0\",\n    \"eslint-plugin-standard\": \"3.1.0\",\n    \"mocha\": \"1.21.5\",\n    \"nyc\": \"11.8.0\"\n  },\n  \"engines\": {\n    \"node\": \">=0.6\"\n  },\n  \"license\": \"MIT\",\n  \"files\": [\n    \"index.js\"\n  ],\n  \"scripts\": {\n    \"lint\": \"eslint --plugin markdown --ext js,md .\",\n    \"test\": \"mocha --reporter spec --bail --check-leaks test/\",\n    \"test-cov\": \"nyc --reporter=html --reporter=text npm test\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	var filenames={
	"": 0,
	"debug": 1,
	"debug/Makefile": 2,
	"debug/component.json": 3,
	"debug/karma.conf.js": 4,
	"debug/node.js": 5,
	"debug/node_modules": 6,
	"debug/node_modules/ms": 7,
	"debug/node_modules/ms/index.js": 8,
	"debug/node_modules/ms/package.json": 9,
	"debug/package.json": 10,
	"debug/src": 11,
	"debug/src/browser.js": 12,
	"debug/src/debug.js": 13,
	"debug/src/index.js": 14,
	"debug/src/inspector-log.js": 15,
	"debug/src/node.js": 16,
	"depd": 17,
	"depd/index.js": 18,
	"depd/lib": 19,
	"depd/lib/browser": 20,
	"depd/lib/browser/index.js": 21,
	"depd/lib/compat": 22,
	"depd/lib/compat/callsite-tostring.js": 23,
	"depd/lib/compat/event-listener-count.js": 24,
	"depd/lib/compat/index.js": 25,
	"depd/package.json": 26,
	"destroy": 27,
	"destroy/index.js": 28,
	"destroy/package.json": 29,
	"ee-first": 30,
	"ee-first/index.js": 31,
	"ee-first/package.json": 32,
	"encodeurl": 33,
	"encodeurl/index.js": 34,
	"encodeurl/package.json": 35,
	"escape-html": 36,
	"escape-html/index.js": 37,
	"escape-html/package.json": 38,
	"etag": 39,
	"etag/index.js": 40,
	"etag/package.json": 41,
	"fresh": 42,
	"fresh/index.js": 43,
	"fresh/package.json": 44,
	"http-errors": 45,
	"http-errors/index.js": 46,
	"http-errors/package.json": 47,
	"inherits": 48,
	"inherits/inherits.js": 49,
	"inherits/inherits_browser.js": 50,
	"inherits/package.json": 51,
	"mime": 52,
	"mime/cli.js": 53,
	"mime/mime.js": 54,
	"mime/package.json": 55,
	"mime/src": 56,
	"mime/src/build.js": 57,
	"mime/src/test.js": 58,
	"mime/types.json": 59,
	"ms": 60,
	"ms/index.js": 61,
	"ms/package.json": 62,
	"on-finished": 63,
	"on-finished/index.js": 64,
	"on-finished/package.json": 65,
	"parseurl": 66,
	"parseurl/index.js": 67,
	"parseurl/package.json": 68,
	"range-parser": 69,
	"range-parser/index.js": 70,
	"range-parser/package.json": 71,
	"send": 72,
	"send/index.js": 73,
	"send/node_modules": 74,
	"send/package.json": 75,
	"serve-static": 76,
	"serve-static/index.js": 77,
	"serve-static/package.json": 78,
	"setprototypeof": 79,
	"setprototypeof/index.d.ts": 80,
	"setprototypeof/index.js": 81,
	"setprototypeof/package.json": 82,
	"statuses": 83,
	"statuses/codes.json": 84,
	"statuses/index.js": 85,
	"statuses/package.json": 86,
	"toidentifier": 87,
	"toidentifier/index.js": 88,
	"toidentifier/package.json": 89
}
		var mod1= function(KModule, exports){
			var i=0,main, pe, filecount, pjson
			for(var id in filenames){
				i = filenames[id]
				if(typeof module == "object"){
					
				main= "serve-static"
				main= "serve-static$0/node_modules" + (main ? ("/"+main) : "")
				
				}
				KModule.addVirtualFile("serve-static$0/node_modules" + (id ? ("/"+id) : ""), fileData[i])
			}
			if(pjson){
				main= pjson.main
				if(!main){
					main= "index.js"
				}
				if(main.substring(0,2)=="./"){
					main= main.substring(2)
				}
				main= "serve-static$0/node_modules" + (main ? ("/" + main) : "")
			}
			if(main){
				return KModule.import("/virtual/" + main)
			}
			if(typeof module == "object"){
				return exports
			}
			return {}
		}

		var transpiledExtensions= {".json":true,".js":true,".es6":true,".ts":true,".kwsh":true}


		/*
		if(typeof module == "object"){
			module.exports.__kawi= mod1
		}*/
		if(global.Buffer){
			context.Buffer= global.Buffer
		}

		if(typeof window == "object"){
			if(window.KModuleLoader){
				for(var id in transpiledExtensions){
					if(!window.KModuleLoader.extensions[id])
						window.KModuleLoader.extensions[id]= null
				}
				context.Buffer= global.___kmodule___basic.mod.buffer.Buffer
				context.module= window.KModuleLoader.generateModule()
				context.module.exports= mod1(window.KModuleLoader, context.module.exports)
				return mod1
			}
		}
		if(typeof KModule == "object"){
			for(var id in transpiledExtensions){
				if(!KModule.extensions[id])
					KModule.extensions[id]= null
			}
			module.exports= mod1(KModule, module.exports)
		}
		return mod1
		
})(typeof global == 'object' ? global : window, {})
// kawi converted. Preserve this line, Kawi transpiler will not reprocess if this line found