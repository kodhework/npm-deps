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

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/high-level-opt.js
var require_high_level_opt = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/high-level-opt.js"(exports2, module2) {
    "use strict";
    var argmap = new Map([
      ["C", "cwd"],
      ["f", "file"],
      ["z", "gzip"],
      ["P", "preservePaths"],
      ["U", "unlink"],
      ["strip-components", "strip"],
      ["stripComponents", "strip"],
      ["keep-newer", "newer"],
      ["keepNewer", "newer"],
      ["keep-newer-files", "newer"],
      ["keepNewerFiles", "newer"],
      ["k", "keep"],
      ["keep-existing", "keep"],
      ["keepExisting", "keep"],
      ["m", "noMtime"],
      ["no-mtime", "noMtime"],
      ["p", "preserveOwner"],
      ["L", "follow"],
      ["h", "follow"]
    ]);
    module2.exports = (opt) => opt ? Object.keys(opt).map((k) => [
      argmap.has(k) ? argmap.get(k) : k,
      opt[k]
    ]).reduce((set, kv) => (set[kv[0]] = kv[1], set), Object.create(null)) : {};
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/yallist/iterator.js"(exports2, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/yallist/yallist.js"(exports2, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self, node, value) {
      var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }
      self.length++;
      return inserted;
    }
    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/minipass/index.js
var require_minipass = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/minipass/index.js"(exports2, module2) {
    "use strict";
    var EE = require("events");
    var Stream = require("stream");
    var Yallist = require_yallist();
    var SD = require("string_decoder").StringDecoder;
    var EOF = Symbol("EOF");
    var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
    var EMITTED_END = Symbol("emittedEnd");
    var EMITTING_END = Symbol("emittingEnd");
    var CLOSED = Symbol("closed");
    var READ = Symbol("read");
    var FLUSH = Symbol("flush");
    var FLUSHCHUNK = Symbol("flushChunk");
    var ENCODING = Symbol("encoding");
    var DECODER = Symbol("decoder");
    var FLOWING = Symbol("flowing");
    var PAUSED = Symbol("paused");
    var RESUME = Symbol("resume");
    var BUFFERLENGTH = Symbol("bufferLength");
    var BUFFERPUSH = Symbol("bufferPush");
    var BUFFERSHIFT = Symbol("bufferShift");
    var OBJECTMODE = Symbol("objectMode");
    var DESTROYED = Symbol("destroyed");
    var doIter = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
    var ASYNCITERATOR = doIter && Symbol.asyncIterator || Symbol("asyncIterator not implemented");
    var ITERATOR = doIter && Symbol.iterator || Symbol("iterator not implemented");
    var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
    var isArrayBuffer = (b) => b instanceof ArrayBuffer || typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
    var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);
    module2.exports = class Minipass extends Stream {
      constructor(options) {
        super();
        this[FLOWING] = false;
        this[PAUSED] = false;
        this.pipes = new Yallist();
        this.buffer = new Yallist();
        this[OBJECTMODE] = options && options.objectMode || false;
        if (this[OBJECTMODE])
          this[ENCODING] = null;
        else
          this[ENCODING] = options && options.encoding || null;
        if (this[ENCODING] === "buffer")
          this[ENCODING] = null;
        this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null;
        this[EOF] = false;
        this[EMITTED_END] = false;
        this[EMITTING_END] = false;
        this[CLOSED] = false;
        this.writable = true;
        this.readable = true;
        this[BUFFERLENGTH] = 0;
        this[DESTROYED] = false;
      }
      get bufferLength() {
        return this[BUFFERLENGTH];
      }
      get encoding() {
        return this[ENCODING];
      }
      set encoding(enc) {
        if (this[OBJECTMODE])
          throw new Error("cannot set encoding in objectMode");
        if (this[ENCODING] && enc !== this[ENCODING] && (this[DECODER] && this[DECODER].lastNeed || this[BUFFERLENGTH]))
          throw new Error("cannot change encoding");
        if (this[ENCODING] !== enc) {
          this[DECODER] = enc ? new SD(enc) : null;
          if (this.buffer.length)
            this.buffer = this.buffer.map((chunk) => this[DECODER].write(chunk));
        }
        this[ENCODING] = enc;
      }
      setEncoding(enc) {
        this.encoding = enc;
      }
      get objectMode() {
        return this[OBJECTMODE];
      }
      set objectMode(om) {
        this[OBJECTMODE] = this[OBJECTMODE] || !!om;
      }
      write(chunk, encoding, cb) {
        if (this[EOF])
          throw new Error("write after end");
        if (this[DESTROYED]) {
          this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" }));
          return true;
        }
        if (typeof encoding === "function")
          cb = encoding, encoding = "utf8";
        if (!encoding)
          encoding = "utf8";
        if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
          if (isArrayBufferView(chunk))
            chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
          else if (isArrayBuffer(chunk))
            chunk = Buffer.from(chunk);
          else if (typeof chunk !== "string")
            this.objectMode = true;
        }
        if (!this.objectMode && !chunk.length) {
          if (this[BUFFERLENGTH] !== 0)
            this.emit("readable");
          if (cb)
            cb();
          return this.flowing;
        }
        if (typeof chunk === "string" && !this[OBJECTMODE] && !(encoding === this[ENCODING] && !this[DECODER].lastNeed)) {
          chunk = Buffer.from(chunk, encoding);
        }
        if (Buffer.isBuffer(chunk) && this[ENCODING])
          chunk = this[DECODER].write(chunk);
        if (this.flowing) {
          if (this[BUFFERLENGTH] !== 0)
            this[FLUSH](true);
          this.emit("data", chunk);
        } else
          this[BUFFERPUSH](chunk);
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          cb();
        return this.flowing;
      }
      read(n) {
        if (this[DESTROYED])
          return null;
        try {
          if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH])
            return null;
          if (this[OBJECTMODE])
            n = null;
          if (this.buffer.length > 1 && !this[OBJECTMODE]) {
            if (this.encoding)
              this.buffer = new Yallist([
                Array.from(this.buffer).join("")
              ]);
            else
              this.buffer = new Yallist([
                Buffer.concat(Array.from(this.buffer), this[BUFFERLENGTH])
              ]);
          }
          return this[READ](n || null, this.buffer.head.value);
        } finally {
          this[MAYBE_EMIT_END]();
        }
      }
      [READ](n, chunk) {
        if (n === chunk.length || n === null)
          this[BUFFERSHIFT]();
        else {
          this.buffer.head.value = chunk.slice(n);
          chunk = chunk.slice(0, n);
          this[BUFFERLENGTH] -= n;
        }
        this.emit("data", chunk);
        if (!this.buffer.length && !this[EOF])
          this.emit("drain");
        return chunk;
      }
      end(chunk, encoding, cb) {
        if (typeof chunk === "function")
          cb = chunk, chunk = null;
        if (typeof encoding === "function")
          cb = encoding, encoding = "utf8";
        if (chunk)
          this.write(chunk, encoding);
        if (cb)
          this.once("end", cb);
        this[EOF] = true;
        this.writable = false;
        if (this.flowing || !this[PAUSED])
          this[MAYBE_EMIT_END]();
        return this;
      }
      [RESUME]() {
        if (this[DESTROYED])
          return;
        this[PAUSED] = false;
        this[FLOWING] = true;
        this.emit("resume");
        if (this.buffer.length)
          this[FLUSH]();
        else if (this[EOF])
          this[MAYBE_EMIT_END]();
        else
          this.emit("drain");
      }
      resume() {
        return this[RESUME]();
      }
      pause() {
        this[FLOWING] = false;
        this[PAUSED] = true;
      }
      get destroyed() {
        return this[DESTROYED];
      }
      get flowing() {
        return this[FLOWING];
      }
      get paused() {
        return this[PAUSED];
      }
      [BUFFERPUSH](chunk) {
        if (this[OBJECTMODE])
          this[BUFFERLENGTH] += 1;
        else
          this[BUFFERLENGTH] += chunk.length;
        return this.buffer.push(chunk);
      }
      [BUFFERSHIFT]() {
        if (this.buffer.length) {
          if (this[OBJECTMODE])
            this[BUFFERLENGTH] -= 1;
          else
            this[BUFFERLENGTH] -= this.buffer.head.value.length;
        }
        return this.buffer.shift();
      }
      [FLUSH](noDrain) {
        do {
        } while (this[FLUSHCHUNK](this[BUFFERSHIFT]()));
        if (!noDrain && !this.buffer.length && !this[EOF])
          this.emit("drain");
      }
      [FLUSHCHUNK](chunk) {
        return chunk ? (this.emit("data", chunk), this.flowing) : false;
      }
      pipe(dest, opts) {
        if (this[DESTROYED])
          return;
        const ended = this[EMITTED_END];
        opts = opts || {};
        if (dest === process.stdout || dest === process.stderr)
          opts.end = false;
        else
          opts.end = opts.end !== false;
        const p = { dest, opts, ondrain: (_) => this[RESUME]() };
        this.pipes.push(p);
        dest.on("drain", p.ondrain);
        this[RESUME]();
        if (ended && p.opts.end)
          p.dest.end();
        return dest;
      }
      addListener(ev, fn) {
        return this.on(ev, fn);
      }
      on(ev, fn) {
        try {
          return super.on(ev, fn);
        } finally {
          if (ev === "data" && !this.pipes.length && !this.flowing)
            this[RESUME]();
          else if (isEndish(ev) && this[EMITTED_END]) {
            super.emit(ev);
            this.removeAllListeners(ev);
          }
        }
      }
      get emittedEnd() {
        return this[EMITTED_END];
      }
      [MAYBE_EMIT_END]() {
        if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this.buffer.length === 0 && this[EOF]) {
          this[EMITTING_END] = true;
          this.emit("end");
          this.emit("prefinish");
          this.emit("finish");
          if (this[CLOSED])
            this.emit("close");
          this[EMITTING_END] = false;
        }
      }
      emit(ev, data) {
        if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED])
          return;
        else if (ev === "data") {
          if (!data)
            return;
          if (this.pipes.length)
            this.pipes.forEach((p) => p.dest.write(data) === false && this.pause());
        } else if (ev === "end") {
          if (this[EMITTED_END] === true)
            return;
          this[EMITTED_END] = true;
          this.readable = false;
          if (this[DECODER]) {
            data = this[DECODER].end();
            if (data) {
              this.pipes.forEach((p) => p.dest.write(data));
              super.emit("data", data);
            }
          }
          this.pipes.forEach((p) => {
            p.dest.removeListener("drain", p.ondrain);
            if (p.opts.end)
              p.dest.end();
          });
        } else if (ev === "close") {
          this[CLOSED] = true;
          if (!this[EMITTED_END] && !this[DESTROYED])
            return;
        }
        const args = new Array(arguments.length);
        args[0] = ev;
        args[1] = data;
        if (arguments.length > 2) {
          for (let i = 2; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
        }
        try {
          return super.emit.apply(this, args);
        } finally {
          if (!isEndish(ev))
            this[MAYBE_EMIT_END]();
          else
            this.removeAllListeners(ev);
        }
      }
      collect() {
        const buf = [];
        if (!this[OBJECTMODE])
          buf.dataLength = 0;
        const p = this.promise();
        this.on("data", (c) => {
          buf.push(c);
          if (!this[OBJECTMODE])
            buf.dataLength += c.length;
        });
        return p.then(() => buf);
      }
      concat() {
        return this[OBJECTMODE] ? Promise.reject(new Error("cannot concat in objectMode")) : this.collect().then((buf) => this[OBJECTMODE] ? Promise.reject(new Error("cannot concat in objectMode")) : this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength));
      }
      promise() {
        return new Promise((resolve, reject) => {
          this.on(DESTROYED, () => reject(new Error("stream destroyed")));
          this.on("end", () => resolve());
          this.on("error", (er) => reject(er));
        });
      }
      [ASYNCITERATOR]() {
        const next = () => {
          const res = this.read();
          if (res !== null)
            return Promise.resolve({ done: false, value: res });
          if (this[EOF])
            return Promise.resolve({ done: true });
          let resolve = null;
          let reject = null;
          const onerr = (er) => {
            this.removeListener("data", ondata);
            this.removeListener("end", onend);
            reject(er);
          };
          const ondata = (value) => {
            this.removeListener("error", onerr);
            this.removeListener("end", onend);
            this.pause();
            resolve({ value, done: !!this[EOF] });
          };
          const onend = () => {
            this.removeListener("error", onerr);
            this.removeListener("data", ondata);
            resolve({ done: true });
          };
          const ondestroy = () => onerr(new Error("stream destroyed"));
          return new Promise((res2, rej) => {
            reject = rej;
            resolve = res2;
            this.once(DESTROYED, ondestroy);
            this.once("error", onerr);
            this.once("end", onend);
            this.once("data", ondata);
          });
        };
        return { next };
      }
      [ITERATOR]() {
        const next = () => {
          const value = this.read();
          const done = value === null;
          return { value, done };
        };
        return { next };
      }
      destroy(er) {
        if (this[DESTROYED]) {
          if (er)
            this.emit("error", er);
          else
            this.emit(DESTROYED);
          return this;
        }
        this[DESTROYED] = true;
        this.buffer = new Yallist();
        this[BUFFERLENGTH] = 0;
        if (typeof this.close === "function" && !this[CLOSED])
          this.close();
        if (er)
          this.emit("error", er);
        else
          this.emit(DESTROYED);
        return this;
      }
      static isStream(s) {
        return !!s && (s instanceof Minipass || s instanceof Stream || s instanceof EE && (typeof s.pipe === "function" || typeof s.write === "function" && typeof s.end === "function"));
      }
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/minizlib/constants.js
var require_constants = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/minizlib/constants.js"(exports2, module2) {
    var realZlibConstants = require("zlib").constants || { ZLIB_VERNUM: 4736 };
    module2.exports = Object.freeze(Object.assign(Object.create(null), {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_VERSION_ERROR: -6,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      DEFLATE: 1,
      INFLATE: 2,
      GZIP: 3,
      GUNZIP: 4,
      DEFLATERAW: 5,
      INFLATERAW: 6,
      UNZIP: 7,
      BROTLI_DECODE: 8,
      BROTLI_ENCODE: 9,
      Z_MIN_WINDOWBITS: 8,
      Z_MAX_WINDOWBITS: 15,
      Z_DEFAULT_WINDOWBITS: 15,
      Z_MIN_CHUNK: 64,
      Z_MAX_CHUNK: Infinity,
      Z_DEFAULT_CHUNK: 16384,
      Z_MIN_MEMLEVEL: 1,
      Z_MAX_MEMLEVEL: 9,
      Z_DEFAULT_MEMLEVEL: 8,
      Z_MIN_LEVEL: -1,
      Z_MAX_LEVEL: 9,
      Z_DEFAULT_LEVEL: -1,
      BROTLI_OPERATION_PROCESS: 0,
      BROTLI_OPERATION_FLUSH: 1,
      BROTLI_OPERATION_FINISH: 2,
      BROTLI_OPERATION_EMIT_METADATA: 3,
      BROTLI_MODE_GENERIC: 0,
      BROTLI_MODE_TEXT: 1,
      BROTLI_MODE_FONT: 2,
      BROTLI_DEFAULT_MODE: 0,
      BROTLI_MIN_QUALITY: 0,
      BROTLI_MAX_QUALITY: 11,
      BROTLI_DEFAULT_QUALITY: 11,
      BROTLI_MIN_WINDOW_BITS: 10,
      BROTLI_MAX_WINDOW_BITS: 24,
      BROTLI_LARGE_MAX_WINDOW_BITS: 30,
      BROTLI_DEFAULT_WINDOW: 22,
      BROTLI_MIN_INPUT_BLOCK_BITS: 16,
      BROTLI_MAX_INPUT_BLOCK_BITS: 24,
      BROTLI_PARAM_MODE: 0,
      BROTLI_PARAM_QUALITY: 1,
      BROTLI_PARAM_LGWIN: 2,
      BROTLI_PARAM_LGBLOCK: 3,
      BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
      BROTLI_PARAM_SIZE_HINT: 5,
      BROTLI_PARAM_LARGE_WINDOW: 6,
      BROTLI_PARAM_NPOSTFIX: 7,
      BROTLI_PARAM_NDIRECT: 8,
      BROTLI_DECODER_RESULT_ERROR: 0,
      BROTLI_DECODER_RESULT_SUCCESS: 1,
      BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
      BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
      BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
      BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
      BROTLI_DECODER_NO_ERROR: 0,
      BROTLI_DECODER_SUCCESS: 1,
      BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
      BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
      BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
      BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
      BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
      BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
      BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
      BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
      BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
      BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
      BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
      BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
      BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
      BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
      BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
      BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
      BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
      BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
      BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
      BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
      BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
      BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
      BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
      BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
      BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
      BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
      BROTLI_DECODER_ERROR_UNREACHABLE: -31
    }, realZlibConstants));
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/minizlib/index.js
var require_minizlib = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/minizlib/index.js"(exports2) {
    "use strict";
    var assert = require("assert");
    var Buffer2 = require("buffer").Buffer;
    var realZlib = require("zlib");
    var constants = exports2.constants = require_constants();
    var Minipass = require_minipass();
    var OriginalBufferConcat = Buffer2.concat;
    var _superWrite = Symbol("_superWrite");
    var ZlibError = class extends Error {
      constructor(err) {
        super("zlib: " + err.message);
        this.code = err.code;
        this.errno = err.errno;
        if (!this.code)
          this.code = "ZLIB_ERROR";
        this.message = "zlib: " + err.message;
        Error.captureStackTrace(this, this.constructor);
      }
      get name() {
        return "ZlibError";
      }
    };
    var _opts = Symbol("opts");
    var _flushFlag = Symbol("flushFlag");
    var _finishFlushFlag = Symbol("finishFlushFlag");
    var _fullFlushFlag = Symbol("fullFlushFlag");
    var _handle = Symbol("handle");
    var _onError = Symbol("onError");
    var _sawError = Symbol("sawError");
    var _level = Symbol("level");
    var _strategy = Symbol("strategy");
    var _ended = Symbol("ended");
    var _defaultFullFlush = Symbol("_defaultFullFlush");
    var ZlibBase = class extends Minipass {
      constructor(opts, mode) {
        if (!opts || typeof opts !== "object")
          throw new TypeError("invalid options for ZlibBase constructor");
        super(opts);
        this[_sawError] = false;
        this[_ended] = false;
        this[_opts] = opts;
        this[_flushFlag] = opts.flush;
        this[_finishFlushFlag] = opts.finishFlush;
        try {
          this[_handle] = new realZlib[mode](opts);
        } catch (er) {
          throw new ZlibError(er);
        }
        this[_onError] = (err) => {
          if (this[_sawError])
            return;
          this[_sawError] = true;
          this.close();
          this.emit("error", err);
        };
        this[_handle].on("error", (er) => this[_onError](new ZlibError(er)));
        this.once("end", () => this.close);
      }
      close() {
        if (this[_handle]) {
          this[_handle].close();
          this[_handle] = null;
          this.emit("close");
        }
      }
      reset() {
        if (!this[_sawError]) {
          assert(this[_handle], "zlib binding closed");
          return this[_handle].reset();
        }
      }
      flush(flushFlag) {
        if (this.ended)
          return;
        if (typeof flushFlag !== "number")
          flushFlag = this[_fullFlushFlag];
        this.write(Object.assign(Buffer2.alloc(0), { [_flushFlag]: flushFlag }));
      }
      end(chunk, encoding, cb) {
        if (chunk)
          this.write(chunk, encoding);
        this.flush(this[_finishFlushFlag]);
        this[_ended] = true;
        return super.end(null, null, cb);
      }
      get ended() {
        return this[_ended];
      }
      write(chunk, encoding, cb) {
        if (typeof encoding === "function")
          cb = encoding, encoding = "utf8";
        if (typeof chunk === "string")
          chunk = Buffer2.from(chunk, encoding);
        if (this[_sawError])
          return;
        assert(this[_handle], "zlib binding closed");
        const nativeHandle = this[_handle]._handle;
        const originalNativeClose = nativeHandle.close;
        nativeHandle.close = () => {
        };
        const originalClose = this[_handle].close;
        this[_handle].close = () => {
        };
        Buffer2.concat = (args) => args;
        let result;
        try {
          const flushFlag = typeof chunk[_flushFlag] === "number" ? chunk[_flushFlag] : this[_flushFlag];
          result = this[_handle]._processChunk(chunk, flushFlag);
          Buffer2.concat = OriginalBufferConcat;
        } catch (err) {
          Buffer2.concat = OriginalBufferConcat;
          this[_onError](new ZlibError(err));
        } finally {
          if (this[_handle]) {
            this[_handle]._handle = nativeHandle;
            nativeHandle.close = originalNativeClose;
            this[_handle].close = originalClose;
            this[_handle].removeAllListeners("error");
          }
        }
        if (this[_handle])
          this[_handle].on("error", (er) => this[_onError](new ZlibError(er)));
        let writeReturn;
        if (result) {
          if (Array.isArray(result) && result.length > 0) {
            writeReturn = this[_superWrite](Buffer2.from(result[0]));
            for (let i = 1; i < result.length; i++) {
              writeReturn = this[_superWrite](result[i]);
            }
          } else {
            writeReturn = this[_superWrite](Buffer2.from(result));
          }
        }
        if (cb)
          cb();
        return writeReturn;
      }
      [_superWrite](data) {
        return super.write(data);
      }
    };
    var Zlib = class extends ZlibBase {
      constructor(opts, mode) {
        opts = opts || {};
        opts.flush = opts.flush || constants.Z_NO_FLUSH;
        opts.finishFlush = opts.finishFlush || constants.Z_FINISH;
        super(opts, mode);
        this[_fullFlushFlag] = constants.Z_FULL_FLUSH;
        this[_level] = opts.level;
        this[_strategy] = opts.strategy;
      }
      params(level, strategy) {
        if (this[_sawError])
          return;
        if (!this[_handle])
          throw new Error("cannot switch params when binding is closed");
        if (!this[_handle].params)
          throw new Error("not supported in this implementation");
        if (this[_level] !== level || this[_strategy] !== strategy) {
          this.flush(constants.Z_SYNC_FLUSH);
          assert(this[_handle], "zlib binding closed");
          const origFlush = this[_handle].flush;
          this[_handle].flush = (flushFlag, cb) => {
            this.flush(flushFlag);
            cb();
          };
          try {
            this[_handle].params(level, strategy);
          } finally {
            this[_handle].flush = origFlush;
          }
          if (this[_handle]) {
            this[_level] = level;
            this[_strategy] = strategy;
          }
        }
      }
    };
    var Deflate = class extends Zlib {
      constructor(opts) {
        super(opts, "Deflate");
      }
    };
    var Inflate = class extends Zlib {
      constructor(opts) {
        super(opts, "Inflate");
      }
    };
    var _portable = Symbol("_portable");
    var Gzip = class extends Zlib {
      constructor(opts) {
        super(opts, "Gzip");
        this[_portable] = opts && !!opts.portable;
      }
      [_superWrite](data) {
        if (!this[_portable])
          return super[_superWrite](data);
        this[_portable] = false;
        data[9] = 255;
        return super[_superWrite](data);
      }
    };
    var Gunzip = class extends Zlib {
      constructor(opts) {
        super(opts, "Gunzip");
      }
    };
    var DeflateRaw = class extends Zlib {
      constructor(opts) {
        super(opts, "DeflateRaw");
      }
    };
    var InflateRaw = class extends Zlib {
      constructor(opts) {
        super(opts, "InflateRaw");
      }
    };
    var Unzip = class extends Zlib {
      constructor(opts) {
        super(opts, "Unzip");
      }
    };
    var Brotli = class extends ZlibBase {
      constructor(opts, mode) {
        opts = opts || {};
        opts.flush = opts.flush || constants.BROTLI_OPERATION_PROCESS;
        opts.finishFlush = opts.finishFlush || constants.BROTLI_OPERATION_FINISH;
        super(opts, mode);
        this[_fullFlushFlag] = constants.BROTLI_OPERATION_FLUSH;
      }
    };
    var BrotliCompress = class extends Brotli {
      constructor(opts) {
        super(opts, "BrotliCompress");
      }
    };
    var BrotliDecompress = class extends Brotli {
      constructor(opts) {
        super(opts, "BrotliDecompress");
      }
    };
    exports2.Deflate = Deflate;
    exports2.Inflate = Inflate;
    exports2.Gzip = Gzip;
    exports2.Gunzip = Gunzip;
    exports2.DeflateRaw = DeflateRaw;
    exports2.InflateRaw = InflateRaw;
    exports2.Unzip = Unzip;
    if (typeof realZlib.BrotliCompress === "function") {
      exports2.BrotliCompress = BrotliCompress;
      exports2.BrotliDecompress = BrotliDecompress;
    } else {
      exports2.BrotliCompress = exports2.BrotliDecompress = class {
        constructor() {
          throw new Error("Brotli is not supported in this version of Node.js");
        }
      };
    }
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/read-entry.js
var require_read_entry = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/read-entry.js"(exports2, module2) {
    "use strict";
    var MiniPass = require_minipass();
    var SLURP = Symbol("slurp");
    module2.exports = class ReadEntry extends MiniPass {
      constructor(header, ex, gex) {
        super();
        this.pause();
        this.extended = ex;
        this.globalExtended = gex;
        this.header = header;
        this.startBlockSize = 512 * Math.ceil(header.size / 512);
        this.blockRemain = this.startBlockSize;
        this.remain = header.size;
        this.type = header.type;
        this.meta = false;
        this.ignore = false;
        switch (this.type) {
          case "File":
          case "OldFile":
          case "Link":
          case "SymbolicLink":
          case "CharacterDevice":
          case "BlockDevice":
          case "Directory":
          case "FIFO":
          case "ContiguousFile":
          case "GNUDumpDir":
            break;
          case "NextFileHasLongLinkpath":
          case "NextFileHasLongPath":
          case "OldGnuLongPath":
          case "GlobalExtendedHeader":
          case "ExtendedHeader":
          case "OldExtendedHeader":
            this.meta = true;
            break;
          default:
            this.ignore = true;
        }
        this.path = header.path;
        this.mode = header.mode;
        if (this.mode)
          this.mode = this.mode & 4095;
        this.uid = header.uid;
        this.gid = header.gid;
        this.uname = header.uname;
        this.gname = header.gname;
        this.size = header.size;
        this.mtime = header.mtime;
        this.atime = header.atime;
        this.ctime = header.ctime;
        this.linkpath = header.linkpath;
        this.uname = header.uname;
        this.gname = header.gname;
        if (ex)
          this[SLURP](ex);
        if (gex)
          this[SLURP](gex, true);
      }
      write(data) {
        const writeLen = data.length;
        if (writeLen > this.blockRemain)
          throw new Error("writing more to entry than is appropriate");
        const r = this.remain;
        const br = this.blockRemain;
        this.remain = Math.max(0, r - writeLen);
        this.blockRemain = Math.max(0, br - writeLen);
        if (this.ignore)
          return true;
        if (r >= writeLen)
          return super.write(data);
        return super.write(data.slice(0, r));
      }
      [SLURP](ex, global2) {
        for (const k in ex) {
          if (ex[k] !== null && ex[k] !== void 0 && !(global2 && k === "path"))
            this[k] = ex[k];
        }
      }
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/types.js
var require_types = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/types.js"(exports2) {
    "use strict";
    exports2.name = new Map([
      ["0", "File"],
      ["", "OldFile"],
      ["1", "Link"],
      ["2", "SymbolicLink"],
      ["3", "CharacterDevice"],
      ["4", "BlockDevice"],
      ["5", "Directory"],
      ["6", "FIFO"],
      ["7", "ContiguousFile"],
      ["g", "GlobalExtendedHeader"],
      ["x", "ExtendedHeader"],
      ["A", "SolarisACL"],
      ["D", "GNUDumpDir"],
      ["I", "Inode"],
      ["K", "NextFileHasLongLinkpath"],
      ["L", "NextFileHasLongPath"],
      ["M", "ContinuationFile"],
      ["N", "OldGnuLongPath"],
      ["S", "SparseFile"],
      ["V", "TapeVolumeHeader"],
      ["X", "OldExtendedHeader"]
    ]);
    exports2.code = new Map(Array.from(exports2.name).map((kv) => [kv[1], kv[0]]));
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/large-numbers.js
var require_large_numbers = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/large-numbers.js"(exports2, module2) {
    "use strict";
    var encode = (num, buf) => {
      if (!Number.isSafeInteger(num))
        throw Error("cannot encode number outside of javascript safe integer range");
      else if (num < 0)
        encodeNegative(num, buf);
      else
        encodePositive(num, buf);
      return buf;
    };
    var encodePositive = (num, buf) => {
      buf[0] = 128;
      for (var i = buf.length; i > 1; i--) {
        buf[i - 1] = num & 255;
        num = Math.floor(num / 256);
      }
    };
    var encodeNegative = (num, buf) => {
      buf[0] = 255;
      var flipped = false;
      num = num * -1;
      for (var i = buf.length; i > 1; i--) {
        var byte = num & 255;
        num = Math.floor(num / 256);
        if (flipped)
          buf[i - 1] = onesComp(byte);
        else if (byte === 0)
          buf[i - 1] = 0;
        else {
          flipped = true;
          buf[i - 1] = twosComp(byte);
        }
      }
    };
    var parse = (buf) => {
      const pre = buf[0];
      const value = pre === 128 ? pos(buf.slice(1, buf.length)) : pre === 255 ? twos(buf) : null;
      if (value === null)
        throw Error("invalid base256 encoding");
      if (!Number.isSafeInteger(value))
        throw Error("parsed number outside of javascript safe integer range");
      return value;
    };
    var twos = (buf) => {
      var len = buf.length;
      var sum = 0;
      var flipped = false;
      for (var i = len - 1; i > -1; i--) {
        var byte = buf[i];
        var f;
        if (flipped)
          f = onesComp(byte);
        else if (byte === 0)
          f = byte;
        else {
          flipped = true;
          f = twosComp(byte);
        }
        if (f !== 0)
          sum -= f * Math.pow(256, len - i - 1);
      }
      return sum;
    };
    var pos = (buf) => {
      var len = buf.length;
      var sum = 0;
      for (var i = len - 1; i > -1; i--) {
        var byte = buf[i];
        if (byte !== 0)
          sum += byte * Math.pow(256, len - i - 1);
      }
      return sum;
    };
    var onesComp = (byte) => (255 ^ byte) & 255;
    var twosComp = (byte) => (255 ^ byte) + 1 & 255;
    module2.exports = {
      encode,
      parse
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/header.js
var require_header = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/header.js"(exports2, module2) {
    "use strict";
    var types = require_types();
    var pathModule = require("path").posix;
    var large = require_large_numbers();
    var SLURP = Symbol("slurp");
    var TYPE = Symbol("type");
    var Header = class {
      constructor(data, off, ex, gex) {
        this.cksumValid = false;
        this.needPax = false;
        this.nullBlock = false;
        this.block = null;
        this.path = null;
        this.mode = null;
        this.uid = null;
        this.gid = null;
        this.size = null;
        this.mtime = null;
        this.cksum = null;
        this[TYPE] = "0";
        this.linkpath = null;
        this.uname = null;
        this.gname = null;
        this.devmaj = 0;
        this.devmin = 0;
        this.atime = null;
        this.ctime = null;
        if (Buffer.isBuffer(data))
          this.decode(data, off || 0, ex, gex);
        else if (data)
          this.set(data);
      }
      decode(buf, off, ex, gex) {
        if (!off)
          off = 0;
        if (!buf || !(buf.length >= off + 512))
          throw new Error("need 512 bytes for header");
        this.path = decString(buf, off, 100);
        this.mode = decNumber(buf, off + 100, 8);
        this.uid = decNumber(buf, off + 108, 8);
        this.gid = decNumber(buf, off + 116, 8);
        this.size = decNumber(buf, off + 124, 12);
        this.mtime = decDate(buf, off + 136, 12);
        this.cksum = decNumber(buf, off + 148, 12);
        this[SLURP](ex);
        this[SLURP](gex, true);
        this[TYPE] = decString(buf, off + 156, 1);
        if (this[TYPE] === "")
          this[TYPE] = "0";
        if (this[TYPE] === "0" && this.path.substr(-1) === "/")
          this[TYPE] = "5";
        if (this[TYPE] === "5")
          this.size = 0;
        this.linkpath = decString(buf, off + 157, 100);
        if (buf.slice(off + 257, off + 265).toString() === "ustar\x0000") {
          this.uname = decString(buf, off + 265, 32);
          this.gname = decString(buf, off + 297, 32);
          this.devmaj = decNumber(buf, off + 329, 8);
          this.devmin = decNumber(buf, off + 337, 8);
          if (buf[off + 475] !== 0) {
            const prefix = decString(buf, off + 345, 155);
            this.path = prefix + "/" + this.path;
          } else {
            const prefix = decString(buf, off + 345, 130);
            if (prefix)
              this.path = prefix + "/" + this.path;
            this.atime = decDate(buf, off + 476, 12);
            this.ctime = decDate(buf, off + 488, 12);
          }
        }
        let sum = 8 * 32;
        for (let i = off; i < off + 148; i++)
          sum += buf[i];
        for (let i = off + 156; i < off + 512; i++)
          sum += buf[i];
        this.cksumValid = sum === this.cksum;
        if (this.cksum === null && sum === 8 * 32)
          this.nullBlock = true;
      }
      [SLURP](ex, global2) {
        for (const k in ex) {
          if (ex[k] !== null && ex[k] !== void 0 && !(global2 && k === "path"))
            this[k] = ex[k];
        }
      }
      encode(buf, off) {
        if (!buf) {
          buf = this.block = Buffer.alloc(512);
          off = 0;
        }
        if (!off)
          off = 0;
        if (!(buf.length >= off + 512))
          throw new Error("need 512 bytes for header");
        const prefixSize = this.ctime || this.atime ? 130 : 155;
        const split = splitPrefix(this.path || "", prefixSize);
        const path = split[0];
        const prefix = split[1];
        this.needPax = split[2];
        this.needPax = encString(buf, off, 100, path) || this.needPax;
        this.needPax = encNumber(buf, off + 100, 8, this.mode) || this.needPax;
        this.needPax = encNumber(buf, off + 108, 8, this.uid) || this.needPax;
        this.needPax = encNumber(buf, off + 116, 8, this.gid) || this.needPax;
        this.needPax = encNumber(buf, off + 124, 12, this.size) || this.needPax;
        this.needPax = encDate(buf, off + 136, 12, this.mtime) || this.needPax;
        buf[off + 156] = this[TYPE].charCodeAt(0);
        this.needPax = encString(buf, off + 157, 100, this.linkpath) || this.needPax;
        buf.write("ustar\x0000", off + 257, 8);
        this.needPax = encString(buf, off + 265, 32, this.uname) || this.needPax;
        this.needPax = encString(buf, off + 297, 32, this.gname) || this.needPax;
        this.needPax = encNumber(buf, off + 329, 8, this.devmaj) || this.needPax;
        this.needPax = encNumber(buf, off + 337, 8, this.devmin) || this.needPax;
        this.needPax = encString(buf, off + 345, prefixSize, prefix) || this.needPax;
        if (buf[off + 475] !== 0)
          this.needPax = encString(buf, off + 345, 155, prefix) || this.needPax;
        else {
          this.needPax = encString(buf, off + 345, 130, prefix) || this.needPax;
          this.needPax = encDate(buf, off + 476, 12, this.atime) || this.needPax;
          this.needPax = encDate(buf, off + 488, 12, this.ctime) || this.needPax;
        }
        let sum = 8 * 32;
        for (let i = off; i < off + 148; i++)
          sum += buf[i];
        for (let i = off + 156; i < off + 512; i++)
          sum += buf[i];
        this.cksum = sum;
        encNumber(buf, off + 148, 8, this.cksum);
        this.cksumValid = true;
        return this.needPax;
      }
      set(data) {
        for (const i in data) {
          if (data[i] !== null && data[i] !== void 0)
            this[i] = data[i];
        }
      }
      get type() {
        return types.name.get(this[TYPE]) || this[TYPE];
      }
      get typeKey() {
        return this[TYPE];
      }
      set type(type) {
        if (types.code.has(type))
          this[TYPE] = types.code.get(type);
        else
          this[TYPE] = type;
      }
    };
    var splitPrefix = (p, prefixSize) => {
      const pathSize = 100;
      let pp = p;
      let prefix = "";
      let ret;
      const root = pathModule.parse(p).root || ".";
      if (Buffer.byteLength(pp) < pathSize)
        ret = [pp, prefix, false];
      else {
        prefix = pathModule.dirname(pp);
        pp = pathModule.basename(pp);
        do {
          if (Buffer.byteLength(pp) <= pathSize && Buffer.byteLength(prefix) <= prefixSize)
            ret = [pp, prefix, false];
          else if (Buffer.byteLength(pp) > pathSize && Buffer.byteLength(prefix) <= prefixSize)
            ret = [pp.substr(0, pathSize - 1), prefix, true];
          else {
            pp = pathModule.join(pathModule.basename(prefix), pp);
            prefix = pathModule.dirname(prefix);
          }
        } while (prefix !== root && !ret);
        if (!ret)
          ret = [p.substr(0, pathSize - 1), "", true];
      }
      return ret;
    };
    var decString = (buf, off, size) => buf.slice(off, off + size).toString("utf8").replace(/\0.*/, "");
    var decDate = (buf, off, size) => numToDate(decNumber(buf, off, size));
    var numToDate = (num) => num === null ? null : new Date(num * 1e3);
    var decNumber = (buf, off, size) => buf[off] & 128 ? large.parse(buf.slice(off, off + size)) : decSmallNumber(buf, off, size);
    var nanNull = (value) => isNaN(value) ? null : value;
    var decSmallNumber = (buf, off, size) => nanNull(parseInt(buf.slice(off, off + size).toString("utf8").replace(/\0.*$/, "").trim(), 8));
    var MAXNUM = {
      12: 8589934591,
      8: 2097151
    };
    var encNumber = (buf, off, size, number) => number === null ? false : number > MAXNUM[size] || number < 0 ? (large.encode(number, buf.slice(off, off + size)), true) : (encSmallNumber(buf, off, size, number), false);
    var encSmallNumber = (buf, off, size, number) => buf.write(octalString(number, size), off, size, "ascii");
    var octalString = (number, size) => padOctal(Math.floor(number).toString(8), size);
    var padOctal = (string, size) => (string.length === size - 1 ? string : new Array(size - string.length - 1).join("0") + string + " ") + "\0";
    var encDate = (buf, off, size, date) => date === null ? false : encNumber(buf, off, size, date.getTime() / 1e3);
    var NULLS = new Array(156).join("\0");
    var encString = (buf, off, size, string) => string === null ? false : (buf.write(string + NULLS, off, size, "utf8"), string.length !== Buffer.byteLength(string) || string.length > size);
    module2.exports = Header;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/pax.js
var require_pax = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/pax.js"(exports2, module2) {
    "use strict";
    var Header = require_header();
    var path = require("path");
    var Pax = class {
      constructor(obj, global2) {
        this.atime = obj.atime || null;
        this.charset = obj.charset || null;
        this.comment = obj.comment || null;
        this.ctime = obj.ctime || null;
        this.gid = obj.gid || null;
        this.gname = obj.gname || null;
        this.linkpath = obj.linkpath || null;
        this.mtime = obj.mtime || null;
        this.path = obj.path || null;
        this.size = obj.size || null;
        this.uid = obj.uid || null;
        this.uname = obj.uname || null;
        this.dev = obj.dev || null;
        this.ino = obj.ino || null;
        this.nlink = obj.nlink || null;
        this.global = global2 || false;
      }
      encode() {
        const body = this.encodeBody();
        if (body === "")
          return null;
        const bodyLen = Buffer.byteLength(body);
        const bufLen = 512 * Math.ceil(1 + bodyLen / 512);
        const buf = Buffer.allocUnsafe(bufLen);
        for (let i = 0; i < 512; i++)
          buf[i] = 0;
        new Header({
          path: ("PaxHeader/" + path.basename(this.path)).slice(0, 99),
          mode: this.mode || 420,
          uid: this.uid || null,
          gid: this.gid || null,
          size: bodyLen,
          mtime: this.mtime || null,
          type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader",
          linkpath: "",
          uname: this.uname || "",
          gname: this.gname || "",
          devmaj: 0,
          devmin: 0,
          atime: this.atime || null,
          ctime: this.ctime || null
        }).encode(buf);
        buf.write(body, 512, bodyLen, "utf8");
        for (let i = bodyLen + 512; i < buf.length; i++)
          buf[i] = 0;
        return buf;
      }
      encodeBody() {
        return this.encodeField("path") + this.encodeField("ctime") + this.encodeField("atime") + this.encodeField("dev") + this.encodeField("ino") + this.encodeField("nlink") + this.encodeField("charset") + this.encodeField("comment") + this.encodeField("gid") + this.encodeField("gname") + this.encodeField("linkpath") + this.encodeField("mtime") + this.encodeField("size") + this.encodeField("uid") + this.encodeField("uname");
      }
      encodeField(field) {
        if (this[field] === null || this[field] === void 0)
          return "";
        const v = this[field] instanceof Date ? this[field].getTime() / 1e3 : this[field];
        const s = " " + (field === "dev" || field === "ino" || field === "nlink" ? "SCHILY." : "") + field + "=" + v + "\n";
        const byteLen = Buffer.byteLength(s);
        let digits = Math.floor(Math.log(byteLen) / Math.log(10)) + 1;
        if (byteLen + digits >= Math.pow(10, digits))
          digits += 1;
        const len = digits + byteLen;
        return len + s;
      }
    };
    Pax.parse = (string, ex, g) => new Pax(merge(parseKV(string), ex), g);
    var merge = (a, b) => b ? Object.keys(a).reduce((s, k) => (s[k] = a[k], s), b) : a;
    var parseKV = (string) => string.replace(/\n$/, "").split("\n").reduce(parseKVLine, Object.create(null));
    var parseKVLine = (set, line) => {
      const n = parseInt(line, 10);
      if (n !== Buffer.byteLength(line) + 1)
        return set;
      line = line.substr((n + " ").length);
      const kv = line.split("=");
      const k = kv.shift().replace(/^SCHILY\.(dev|ino|nlink)/, "$1");
      if (!k)
        return set;
      const v = kv.join("=");
      set[k] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(k) ? new Date(v * 1e3) : /^[0-9]+$/.test(v) ? +v : v;
      return set;
    };
    module2.exports = Pax;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/warn-mixin.js
var require_warn_mixin = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/warn-mixin.js"(exports2, module2) {
    "use strict";
    module2.exports = (Base) => class extends Base {
      warn(code, message, data = {}) {
        if (this.file)
          data.file = this.file;
        if (this.cwd)
          data.cwd = this.cwd;
        data.code = message instanceof Error && message.code || code;
        data.tarCode = code;
        if (!this.strict && data.recoverable !== false) {
          if (message instanceof Error) {
            data = Object.assign(message, data);
            message = message.message;
          }
          this.emit("warn", data.tarCode, message, data);
        } else if (message instanceof Error)
          this.emit("error", Object.assign(message, data));
        else
          this.emit("error", Object.assign(new Error(`${code}: ${message}`), data));
      }
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/winchars.js
var require_winchars = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/winchars.js"(exports2, module2) {
    "use strict";
    var raw = [
      "|",
      "<",
      ">",
      "?",
      ":"
    ];
    var win = raw.map((char) => String.fromCharCode(61440 + char.charCodeAt(0)));
    var toWin = new Map(raw.map((char, i) => [char, win[i]]));
    var toRaw = new Map(win.map((char, i) => [char, raw[i]]));
    module2.exports = {
      encode: (s) => raw.reduce((s2, c) => s2.split(c).join(toWin.get(c)), s),
      decode: (s) => win.reduce((s2, c) => s2.split(c).join(toRaw.get(c)), s)
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/mode-fix.js
var require_mode_fix = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/mode-fix.js"(exports2, module2) {
    "use strict";
    module2.exports = (mode, isDir, portable) => {
      mode &= 4095;
      if (portable)
        mode = (mode | 384) & ~18;
      if (isDir) {
        if (mode & 256)
          mode |= 64;
        if (mode & 32)
          mode |= 8;
        if (mode & 4)
          mode |= 1;
      }
      return mode;
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/write-entry.js
var require_write_entry = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/write-entry.js"(exports2, module2) {
    "use strict";
    var MiniPass = require_minipass();
    var Pax = require_pax();
    var Header = require_header();
    var fs = require("fs");
    var path = require("path");
    var maxReadSize = 16 * 1024 * 1024;
    var PROCESS = Symbol("process");
    var FILE = Symbol("file");
    var DIRECTORY = Symbol("directory");
    var SYMLINK = Symbol("symlink");
    var HARDLINK = Symbol("hardlink");
    var HEADER = Symbol("header");
    var READ = Symbol("read");
    var LSTAT = Symbol("lstat");
    var ONLSTAT = Symbol("onlstat");
    var ONREAD = Symbol("onread");
    var ONREADLINK = Symbol("onreadlink");
    var OPENFILE = Symbol("openfile");
    var ONOPENFILE = Symbol("onopenfile");
    var CLOSE = Symbol("close");
    var MODE = Symbol("mode");
    var warner = require_warn_mixin();
    var winchars = require_winchars();
    var modeFix = require_mode_fix();
    var WriteEntry = warner(class WriteEntry extends MiniPass {
      constructor(p, opt) {
        opt = opt || {};
        super(opt);
        if (typeof p !== "string")
          throw new TypeError("path is required");
        this.path = p;
        this.portable = !!opt.portable;
        this.myuid = process.getuid && process.getuid();
        this.myuser = process.env.USER || "";
        this.maxReadSize = opt.maxReadSize || maxReadSize;
        this.linkCache = opt.linkCache || new Map();
        this.statCache = opt.statCache || new Map();
        this.preservePaths = !!opt.preservePaths;
        this.cwd = opt.cwd || process.cwd();
        this.strict = !!opt.strict;
        this.noPax = !!opt.noPax;
        this.noMtime = !!opt.noMtime;
        this.mtime = opt.mtime || null;
        if (typeof opt.onwarn === "function")
          this.on("warn", opt.onwarn);
        let pathWarn = false;
        if (!this.preservePaths && path.win32.isAbsolute(p)) {
          const parsed = path.win32.parse(p);
          this.path = p.substr(parsed.root.length);
          pathWarn = parsed.root;
        }
        this.win32 = !!opt.win32 || process.platform === "win32";
        if (this.win32) {
          this.path = winchars.decode(this.path.replace(/\\/g, "/"));
          p = p.replace(/\\/g, "/");
        }
        this.absolute = opt.absolute || path.resolve(this.cwd, p);
        if (this.path === "")
          this.path = "./";
        if (pathWarn) {
          this.warn("TAR_ENTRY_INFO", `stripping ${pathWarn} from absolute path`, {
            entry: this,
            path: pathWarn + this.path
          });
        }
        if (this.statCache.has(this.absolute))
          this[ONLSTAT](this.statCache.get(this.absolute));
        else
          this[LSTAT]();
      }
      [LSTAT]() {
        fs.lstat(this.absolute, (er, stat) => {
          if (er)
            return this.emit("error", er);
          this[ONLSTAT](stat);
        });
      }
      [ONLSTAT](stat) {
        this.statCache.set(this.absolute, stat);
        this.stat = stat;
        if (!stat.isFile())
          stat.size = 0;
        this.type = getType(stat);
        this.emit("stat", stat);
        this[PROCESS]();
      }
      [PROCESS]() {
        switch (this.type) {
          case "File":
            return this[FILE]();
          case "Directory":
            return this[DIRECTORY]();
          case "SymbolicLink":
            return this[SYMLINK]();
          default:
            return this.end();
        }
      }
      [MODE](mode) {
        return modeFix(mode, this.type === "Directory", this.portable);
      }
      [HEADER]() {
        if (this.type === "Directory" && this.portable)
          this.noMtime = true;
        this.header = new Header({
          path: this.path,
          linkpath: this.linkpath,
          mode: this[MODE](this.stat.mode),
          uid: this.portable ? null : this.stat.uid,
          gid: this.portable ? null : this.stat.gid,
          size: this.stat.size,
          mtime: this.noMtime ? null : this.mtime || this.stat.mtime,
          type: this.type,
          uname: this.portable ? null : this.stat.uid === this.myuid ? this.myuser : "",
          atime: this.portable ? null : this.stat.atime,
          ctime: this.portable ? null : this.stat.ctime
        });
        if (this.header.encode() && !this.noPax) {
          this.write(new Pax({
            atime: this.portable ? null : this.header.atime,
            ctime: this.portable ? null : this.header.ctime,
            gid: this.portable ? null : this.header.gid,
            mtime: this.noMtime ? null : this.mtime || this.header.mtime,
            path: this.path,
            linkpath: this.linkpath,
            size: this.header.size,
            uid: this.portable ? null : this.header.uid,
            uname: this.portable ? null : this.header.uname,
            dev: this.portable ? null : this.stat.dev,
            ino: this.portable ? null : this.stat.ino,
            nlink: this.portable ? null : this.stat.nlink
          }).encode());
        }
        this.write(this.header.block);
      }
      [DIRECTORY]() {
        if (this.path.substr(-1) !== "/")
          this.path += "/";
        this.stat.size = 0;
        this[HEADER]();
        this.end();
      }
      [SYMLINK]() {
        fs.readlink(this.absolute, (er, linkpath) => {
          if (er)
            return this.emit("error", er);
          this[ONREADLINK](linkpath);
        });
      }
      [ONREADLINK](linkpath) {
        this.linkpath = linkpath.replace(/\\/g, "/");
        this[HEADER]();
        this.end();
      }
      [HARDLINK](linkpath) {
        this.type = "Link";
        this.linkpath = path.relative(this.cwd, linkpath).replace(/\\/g, "/");
        this.stat.size = 0;
        this[HEADER]();
        this.end();
      }
      [FILE]() {
        if (this.stat.nlink > 1) {
          const linkKey = this.stat.dev + ":" + this.stat.ino;
          if (this.linkCache.has(linkKey)) {
            const linkpath = this.linkCache.get(linkKey);
            if (linkpath.indexOf(this.cwd) === 0)
              return this[HARDLINK](linkpath);
          }
          this.linkCache.set(linkKey, this.absolute);
        }
        this[HEADER]();
        if (this.stat.size === 0)
          return this.end();
        this[OPENFILE]();
      }
      [OPENFILE]() {
        fs.open(this.absolute, "r", (er, fd) => {
          if (er)
            return this.emit("error", er);
          this[ONOPENFILE](fd);
        });
      }
      [ONOPENFILE](fd) {
        const blockLen = 512 * Math.ceil(this.stat.size / 512);
        const bufLen = Math.min(blockLen, this.maxReadSize);
        const buf = Buffer.allocUnsafe(bufLen);
        this[READ](fd, buf, 0, buf.length, 0, this.stat.size, blockLen);
      }
      [READ](fd, buf, offset, length, pos, remain, blockRemain) {
        fs.read(fd, buf, offset, length, pos, (er, bytesRead) => {
          if (er) {
            return this[CLOSE](fd, () => this.emit("error", er));
          }
          this[ONREAD](fd, buf, offset, length, pos, remain, blockRemain, bytesRead);
        });
      }
      [CLOSE](fd, cb) {
        fs.close(fd, cb);
      }
      [ONREAD](fd, buf, offset, length, pos, remain, blockRemain, bytesRead) {
        if (bytesRead <= 0 && remain > 0) {
          const er = new Error("encountered unexpected EOF");
          er.path = this.absolute;
          er.syscall = "read";
          er.code = "EOF";
          return this[CLOSE](fd, () => this.emit("error", er));
        }
        if (bytesRead > remain) {
          const er = new Error("did not encounter expected EOF");
          er.path = this.absolute;
          er.syscall = "read";
          er.code = "EOF";
          return this[CLOSE](fd, () => this.emit("error", er));
        }
        if (bytesRead === remain) {
          for (let i = bytesRead; i < length && bytesRead < blockRemain; i++) {
            buf[i + offset] = 0;
            bytesRead++;
            remain++;
          }
        }
        const writeBuf = offset === 0 && bytesRead === buf.length ? buf : buf.slice(offset, offset + bytesRead);
        remain -= bytesRead;
        blockRemain -= bytesRead;
        pos += bytesRead;
        offset += bytesRead;
        this.write(writeBuf);
        if (!remain) {
          if (blockRemain)
            this.write(Buffer.alloc(blockRemain));
          return this[CLOSE](fd, (er) => er ? this.emit("error", er) : this.end());
        }
        if (offset >= length) {
          buf = Buffer.allocUnsafe(length);
          offset = 0;
        }
        length = buf.length - offset;
        this[READ](fd, buf, offset, length, pos, remain, blockRemain);
      }
    });
    var WriteEntrySync = class extends WriteEntry {
      [LSTAT]() {
        this[ONLSTAT](fs.lstatSync(this.absolute));
      }
      [SYMLINK]() {
        this[ONREADLINK](fs.readlinkSync(this.absolute));
      }
      [OPENFILE]() {
        this[ONOPENFILE](fs.openSync(this.absolute, "r"));
      }
      [READ](fd, buf, offset, length, pos, remain, blockRemain) {
        let threw = true;
        try {
          const bytesRead = fs.readSync(fd, buf, offset, length, pos);
          this[ONREAD](fd, buf, offset, length, pos, remain, blockRemain, bytesRead);
          threw = false;
        } finally {
          if (threw) {
            try {
              this[CLOSE](fd, () => {
              });
            } catch (er) {
            }
          }
        }
      }
      [CLOSE](fd, cb) {
        fs.closeSync(fd);
        cb();
      }
    };
    var WriteEntryTar = warner(class WriteEntryTar extends MiniPass {
      constructor(readEntry, opt) {
        opt = opt || {};
        super(opt);
        this.preservePaths = !!opt.preservePaths;
        this.portable = !!opt.portable;
        this.strict = !!opt.strict;
        this.noPax = !!opt.noPax;
        this.noMtime = !!opt.noMtime;
        this.readEntry = readEntry;
        this.type = readEntry.type;
        if (this.type === "Directory" && this.portable)
          this.noMtime = true;
        this.path = readEntry.path;
        this.mode = this[MODE](readEntry.mode);
        this.uid = this.portable ? null : readEntry.uid;
        this.gid = this.portable ? null : readEntry.gid;
        this.uname = this.portable ? null : readEntry.uname;
        this.gname = this.portable ? null : readEntry.gname;
        this.size = readEntry.size;
        this.mtime = this.noMtime ? null : opt.mtime || readEntry.mtime;
        this.atime = this.portable ? null : readEntry.atime;
        this.ctime = this.portable ? null : readEntry.ctime;
        this.linkpath = readEntry.linkpath;
        if (typeof opt.onwarn === "function")
          this.on("warn", opt.onwarn);
        let pathWarn = false;
        if (path.isAbsolute(this.path) && !this.preservePaths) {
          const parsed = path.parse(this.path);
          pathWarn = parsed.root;
          this.path = this.path.substr(parsed.root.length);
        }
        this.remain = readEntry.size;
        this.blockRemain = readEntry.startBlockSize;
        this.header = new Header({
          path: this.path,
          linkpath: this.linkpath,
          mode: this.mode,
          uid: this.portable ? null : this.uid,
          gid: this.portable ? null : this.gid,
          size: this.size,
          mtime: this.noMtime ? null : this.mtime,
          type: this.type,
          uname: this.portable ? null : this.uname,
          atime: this.portable ? null : this.atime,
          ctime: this.portable ? null : this.ctime
        });
        if (pathWarn) {
          this.warn("TAR_ENTRY_INFO", `stripping ${pathWarn} from absolute path`, {
            entry: this,
            path: pathWarn + this.path
          });
        }
        if (this.header.encode() && !this.noPax) {
          super.write(new Pax({
            atime: this.portable ? null : this.atime,
            ctime: this.portable ? null : this.ctime,
            gid: this.portable ? null : this.gid,
            mtime: this.noMtime ? null : this.mtime,
            path: this.path,
            linkpath: this.linkpath,
            size: this.size,
            uid: this.portable ? null : this.uid,
            uname: this.portable ? null : this.uname,
            dev: this.portable ? null : this.readEntry.dev,
            ino: this.portable ? null : this.readEntry.ino,
            nlink: this.portable ? null : this.readEntry.nlink
          }).encode());
        }
        super.write(this.header.block);
        readEntry.pipe(this);
      }
      [MODE](mode) {
        return modeFix(mode, this.type === "Directory", this.portable);
      }
      write(data) {
        const writeLen = data.length;
        if (writeLen > this.blockRemain)
          throw new Error("writing more to entry than is appropriate");
        this.blockRemain -= writeLen;
        return super.write(data);
      }
      end() {
        if (this.blockRemain)
          this.write(Buffer.alloc(this.blockRemain));
        return super.end();
      }
    });
    WriteEntry.Sync = WriteEntrySync;
    WriteEntry.Tar = WriteEntryTar;
    var getType = (stat) => stat.isFile() ? "File" : stat.isDirectory() ? "Directory" : stat.isSymbolicLink() ? "SymbolicLink" : "Unsupported";
    module2.exports = WriteEntry;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/pack.js
var require_pack = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/pack.js"(exports2, module2) {
    "use strict";
    var PackJob = class {
      constructor(path2, absolute) {
        this.path = path2 || "./";
        this.absolute = absolute;
        this.entry = null;
        this.stat = null;
        this.readdir = null;
        this.pending = false;
        this.ignore = false;
        this.piped = false;
      }
    };
    var MiniPass = require_minipass();
    var zlib = require_minizlib();
    var ReadEntry = require_read_entry();
    var WriteEntry = require_write_entry();
    var WriteEntrySync = WriteEntry.Sync;
    var WriteEntryTar = WriteEntry.Tar;
    var Yallist = require_yallist();
    var EOF = Buffer.alloc(1024);
    var ONSTAT = Symbol("onStat");
    var ENDED = Symbol("ended");
    var QUEUE = Symbol("queue");
    var CURRENT = Symbol("current");
    var PROCESS = Symbol("process");
    var PROCESSING = Symbol("processing");
    var PROCESSJOB = Symbol("processJob");
    var JOBS = Symbol("jobs");
    var JOBDONE = Symbol("jobDone");
    var ADDFSENTRY = Symbol("addFSEntry");
    var ADDTARENTRY = Symbol("addTarEntry");
    var STAT = Symbol("stat");
    var READDIR = Symbol("readdir");
    var ONREADDIR = Symbol("onreaddir");
    var PIPE = Symbol("pipe");
    var ENTRY = Symbol("entry");
    var ENTRYOPT = Symbol("entryOpt");
    var WRITEENTRYCLASS = Symbol("writeEntryClass");
    var WRITE = Symbol("write");
    var ONDRAIN = Symbol("ondrain");
    var fs = require("fs");
    var path = require("path");
    var warner = require_warn_mixin();
    var Pack = warner(class Pack extends MiniPass {
      constructor(opt) {
        super(opt);
        opt = opt || Object.create(null);
        this.opt = opt;
        this.file = opt.file || "";
        this.cwd = opt.cwd || process.cwd();
        this.maxReadSize = opt.maxReadSize;
        this.preservePaths = !!opt.preservePaths;
        this.strict = !!opt.strict;
        this.noPax = !!opt.noPax;
        this.prefix = (opt.prefix || "").replace(/(\\|\/)+$/, "");
        this.linkCache = opt.linkCache || new Map();
        this.statCache = opt.statCache || new Map();
        this.readdirCache = opt.readdirCache || new Map();
        this[WRITEENTRYCLASS] = WriteEntry;
        if (typeof opt.onwarn === "function")
          this.on("warn", opt.onwarn);
        this.portable = !!opt.portable;
        this.zip = null;
        if (opt.gzip) {
          if (typeof opt.gzip !== "object")
            opt.gzip = {};
          if (this.portable)
            opt.gzip.portable = true;
          this.zip = new zlib.Gzip(opt.gzip);
          this.zip.on("data", (chunk) => super.write(chunk));
          this.zip.on("end", (_) => super.end());
          this.zip.on("drain", (_) => this[ONDRAIN]());
          this.on("resume", (_) => this.zip.resume());
        } else
          this.on("drain", this[ONDRAIN]);
        this.noDirRecurse = !!opt.noDirRecurse;
        this.follow = !!opt.follow;
        this.noMtime = !!opt.noMtime;
        this.mtime = opt.mtime || null;
        this.filter = typeof opt.filter === "function" ? opt.filter : (_) => true;
        this[QUEUE] = new Yallist();
        this[JOBS] = 0;
        this.jobs = +opt.jobs || 4;
        this[PROCESSING] = false;
        this[ENDED] = false;
      }
      [WRITE](chunk) {
        return super.write(chunk);
      }
      add(path2) {
        this.write(path2);
        return this;
      }
      end(path2) {
        if (path2)
          this.write(path2);
        this[ENDED] = true;
        this[PROCESS]();
        return this;
      }
      write(path2) {
        if (this[ENDED])
          throw new Error("write after end");
        if (path2 instanceof ReadEntry)
          this[ADDTARENTRY](path2);
        else
          this[ADDFSENTRY](path2);
        return this.flowing;
      }
      [ADDTARENTRY](p) {
        const absolute = path.resolve(this.cwd, p.path);
        if (this.prefix)
          p.path = this.prefix + "/" + p.path.replace(/^\.(\/+|$)/, "");
        if (!this.filter(p.path, p))
          p.resume();
        else {
          const job = new PackJob(p.path, absolute, false);
          job.entry = new WriteEntryTar(p, this[ENTRYOPT](job));
          job.entry.on("end", (_) => this[JOBDONE](job));
          this[JOBS] += 1;
          this[QUEUE].push(job);
        }
        this[PROCESS]();
      }
      [ADDFSENTRY](p) {
        const absolute = path.resolve(this.cwd, p);
        if (this.prefix)
          p = this.prefix + "/" + p.replace(/^\.(\/+|$)/, "");
        this[QUEUE].push(new PackJob(p, absolute));
        this[PROCESS]();
      }
      [STAT](job) {
        job.pending = true;
        this[JOBS] += 1;
        const stat = this.follow ? "stat" : "lstat";
        fs[stat](job.absolute, (er, stat2) => {
          job.pending = false;
          this[JOBS] -= 1;
          if (er)
            this.emit("error", er);
          else
            this[ONSTAT](job, stat2);
        });
      }
      [ONSTAT](job, stat) {
        this.statCache.set(job.absolute, stat);
        job.stat = stat;
        if (!this.filter(job.path, stat))
          job.ignore = true;
        this[PROCESS]();
      }
      [READDIR](job) {
        job.pending = true;
        this[JOBS] += 1;
        fs.readdir(job.absolute, (er, entries) => {
          job.pending = false;
          this[JOBS] -= 1;
          if (er)
            return this.emit("error", er);
          this[ONREADDIR](job, entries);
        });
      }
      [ONREADDIR](job, entries) {
        this.readdirCache.set(job.absolute, entries);
        job.readdir = entries;
        this[PROCESS]();
      }
      [PROCESS]() {
        if (this[PROCESSING])
          return;
        this[PROCESSING] = true;
        for (let w = this[QUEUE].head; w !== null && this[JOBS] < this.jobs; w = w.next) {
          this[PROCESSJOB](w.value);
          if (w.value.ignore) {
            const p = w.next;
            this[QUEUE].removeNode(w);
            w.next = p;
          }
        }
        this[PROCESSING] = false;
        if (this[ENDED] && !this[QUEUE].length && this[JOBS] === 0) {
          if (this.zip)
            this.zip.end(EOF);
          else {
            super.write(EOF);
            super.end();
          }
        }
      }
      get [CURRENT]() {
        return this[QUEUE] && this[QUEUE].head && this[QUEUE].head.value;
      }
      [JOBDONE](job) {
        this[QUEUE].shift();
        this[JOBS] -= 1;
        this[PROCESS]();
      }
      [PROCESSJOB](job) {
        if (job.pending)
          return;
        if (job.entry) {
          if (job === this[CURRENT] && !job.piped)
            this[PIPE](job);
          return;
        }
        if (!job.stat) {
          if (this.statCache.has(job.absolute))
            this[ONSTAT](job, this.statCache.get(job.absolute));
          else
            this[STAT](job);
        }
        if (!job.stat)
          return;
        if (job.ignore)
          return;
        if (!this.noDirRecurse && job.stat.isDirectory() && !job.readdir) {
          if (this.readdirCache.has(job.absolute))
            this[ONREADDIR](job, this.readdirCache.get(job.absolute));
          else
            this[READDIR](job);
          if (!job.readdir)
            return;
        }
        job.entry = this[ENTRY](job);
        if (!job.entry) {
          job.ignore = true;
          return;
        }
        if (job === this[CURRENT] && !job.piped)
          this[PIPE](job);
      }
      [ENTRYOPT](job) {
        return {
          onwarn: (code, msg, data) => this.warn(code, msg, data),
          noPax: this.noPax,
          cwd: this.cwd,
          absolute: job.absolute,
          preservePaths: this.preservePaths,
          maxReadSize: this.maxReadSize,
          strict: this.strict,
          portable: this.portable,
          linkCache: this.linkCache,
          statCache: this.statCache,
          noMtime: this.noMtime,
          mtime: this.mtime
        };
      }
      [ENTRY](job) {
        this[JOBS] += 1;
        try {
          return new this[WRITEENTRYCLASS](job.path, this[ENTRYOPT](job)).on("end", () => this[JOBDONE](job)).on("error", (er) => this.emit("error", er));
        } catch (er) {
          this.emit("error", er);
        }
      }
      [ONDRAIN]() {
        if (this[CURRENT] && this[CURRENT].entry)
          this[CURRENT].entry.resume();
      }
      [PIPE](job) {
        job.piped = true;
        if (job.readdir) {
          job.readdir.forEach((entry) => {
            const p = this.prefix ? job.path.slice(this.prefix.length + 1) || "./" : job.path;
            const base = p === "./" ? "" : p.replace(/\/*$/, "/");
            this[ADDFSENTRY](base + entry);
          });
        }
        const source = job.entry;
        const zip = this.zip;
        if (zip) {
          source.on("data", (chunk) => {
            if (!zip.write(chunk))
              source.pause();
          });
        } else {
          source.on("data", (chunk) => {
            if (!super.write(chunk))
              source.pause();
          });
        }
      }
      pause() {
        if (this.zip)
          this.zip.pause();
        return super.pause();
      }
    });
    var PackSync = class extends Pack {
      constructor(opt) {
        super(opt);
        this[WRITEENTRYCLASS] = WriteEntrySync;
      }
      pause() {
      }
      resume() {
      }
      [STAT](job) {
        const stat = this.follow ? "statSync" : "lstatSync";
        this[ONSTAT](job, fs[stat](job.absolute));
      }
      [READDIR](job, stat) {
        this[ONREADDIR](job, fs.readdirSync(job.absolute));
      }
      [PIPE](job) {
        const source = job.entry;
        const zip = this.zip;
        if (job.readdir) {
          job.readdir.forEach((entry) => {
            const p = this.prefix ? job.path.slice(this.prefix.length + 1) || "./" : job.path;
            const base = p === "./" ? "" : p.replace(/\/*$/, "/");
            this[ADDFSENTRY](base + entry);
          });
        }
        if (zip) {
          source.on("data", (chunk) => {
            zip.write(chunk);
          });
        } else {
          source.on("data", (chunk) => {
            super[WRITE](chunk);
          });
        }
      }
    };
    Pack.Sync = PackSync;
    module2.exports = Pack;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/fs-minipass/index.js
var require_fs_minipass = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/fs-minipass/index.js"(exports2) {
    "use strict";
    var MiniPass = require_minipass();
    var EE = require("events").EventEmitter;
    var fs = require("fs");
    var writev = fs.writev;
    if (!writev) {
      const binding = process.binding("fs");
      const FSReqWrap = binding.FSReqWrap || binding.FSReqCallback;
      writev = (fd, iovec, pos, cb) => {
        const done = (er, bw) => cb(er, bw, iovec);
        const req = new FSReqWrap();
        req.oncomplete = done;
        binding.writeBuffers(fd, iovec, pos, req);
      };
    }
    var _autoClose = Symbol("_autoClose");
    var _close = Symbol("_close");
    var _ended = Symbol("_ended");
    var _fd = Symbol("_fd");
    var _finished = Symbol("_finished");
    var _flags = Symbol("_flags");
    var _flush = Symbol("_flush");
    var _handleChunk = Symbol("_handleChunk");
    var _makeBuf = Symbol("_makeBuf");
    var _mode = Symbol("_mode");
    var _needDrain = Symbol("_needDrain");
    var _onerror = Symbol("_onerror");
    var _onopen = Symbol("_onopen");
    var _onread = Symbol("_onread");
    var _onwrite = Symbol("_onwrite");
    var _open = Symbol("_open");
    var _path = Symbol("_path");
    var _pos = Symbol("_pos");
    var _queue = Symbol("_queue");
    var _read = Symbol("_read");
    var _readSize = Symbol("_readSize");
    var _reading = Symbol("_reading");
    var _remain = Symbol("_remain");
    var _size = Symbol("_size");
    var _write = Symbol("_write");
    var _writing = Symbol("_writing");
    var _defaultFlag = Symbol("_defaultFlag");
    var _errored = Symbol("_errored");
    var ReadStream = class extends MiniPass {
      constructor(path, opt) {
        opt = opt || {};
        super(opt);
        this.readable = true;
        this.writable = false;
        if (typeof path !== "string")
          throw new TypeError("path must be a string");
        this[_errored] = false;
        this[_fd] = typeof opt.fd === "number" ? opt.fd : null;
        this[_path] = path;
        this[_readSize] = opt.readSize || 16 * 1024 * 1024;
        this[_reading] = false;
        this[_size] = typeof opt.size === "number" ? opt.size : Infinity;
        this[_remain] = this[_size];
        this[_autoClose] = typeof opt.autoClose === "boolean" ? opt.autoClose : true;
        if (typeof this[_fd] === "number")
          this[_read]();
        else
          this[_open]();
      }
      get fd() {
        return this[_fd];
      }
      get path() {
        return this[_path];
      }
      write() {
        throw new TypeError("this is a readable stream");
      }
      end() {
        throw new TypeError("this is a readable stream");
      }
      [_open]() {
        fs.open(this[_path], "r", (er, fd) => this[_onopen](er, fd));
      }
      [_onopen](er, fd) {
        if (er)
          this[_onerror](er);
        else {
          this[_fd] = fd;
          this.emit("open", fd);
          this[_read]();
        }
      }
      [_makeBuf]() {
        return Buffer.allocUnsafe(Math.min(this[_readSize], this[_remain]));
      }
      [_read]() {
        if (!this[_reading]) {
          this[_reading] = true;
          const buf = this[_makeBuf]();
          if (buf.length === 0)
            return process.nextTick(() => this[_onread](null, 0, buf));
          fs.read(this[_fd], buf, 0, buf.length, null, (er, br, buf2) => this[_onread](er, br, buf2));
        }
      }
      [_onread](er, br, buf) {
        this[_reading] = false;
        if (er)
          this[_onerror](er);
        else if (this[_handleChunk](br, buf))
          this[_read]();
      }
      [_close]() {
        if (this[_autoClose] && typeof this[_fd] === "number") {
          const fd = this[_fd];
          this[_fd] = null;
          fs.close(fd, (er) => er ? this.emit("error", er) : this.emit("close"));
        }
      }
      [_onerror](er) {
        this[_reading] = true;
        this[_close]();
        this.emit("error", er);
      }
      [_handleChunk](br, buf) {
        let ret = false;
        this[_remain] -= br;
        if (br > 0)
          ret = super.write(br < buf.length ? buf.slice(0, br) : buf);
        if (br === 0 || this[_remain] <= 0) {
          ret = false;
          this[_close]();
          super.end();
        }
        return ret;
      }
      emit(ev, data) {
        switch (ev) {
          case "prefinish":
          case "finish":
            break;
          case "drain":
            if (typeof this[_fd] === "number")
              this[_read]();
            break;
          case "error":
            if (this[_errored])
              return;
            this[_errored] = true;
            return super.emit(ev, data);
          default:
            return super.emit(ev, data);
        }
      }
    };
    var ReadStreamSync = class extends ReadStream {
      [_open]() {
        let threw = true;
        try {
          this[_onopen](null, fs.openSync(this[_path], "r"));
          threw = false;
        } finally {
          if (threw)
            this[_close]();
        }
      }
      [_read]() {
        let threw = true;
        try {
          if (!this[_reading]) {
            this[_reading] = true;
            do {
              const buf = this[_makeBuf]();
              const br = buf.length === 0 ? 0 : fs.readSync(this[_fd], buf, 0, buf.length, null);
              if (!this[_handleChunk](br, buf))
                break;
            } while (true);
            this[_reading] = false;
          }
          threw = false;
        } finally {
          if (threw)
            this[_close]();
        }
      }
      [_close]() {
        if (this[_autoClose] && typeof this[_fd] === "number") {
          const fd = this[_fd];
          this[_fd] = null;
          fs.closeSync(fd);
          this.emit("close");
        }
      }
    };
    var WriteStream = class extends EE {
      constructor(path, opt) {
        opt = opt || {};
        super(opt);
        this.readable = false;
        this.writable = true;
        this[_errored] = false;
        this[_writing] = false;
        this[_ended] = false;
        this[_needDrain] = false;
        this[_queue] = [];
        this[_path] = path;
        this[_fd] = typeof opt.fd === "number" ? opt.fd : null;
        this[_mode] = opt.mode === void 0 ? 438 : opt.mode;
        this[_pos] = typeof opt.start === "number" ? opt.start : null;
        this[_autoClose] = typeof opt.autoClose === "boolean" ? opt.autoClose : true;
        const defaultFlag = this[_pos] !== null ? "r+" : "w";
        this[_defaultFlag] = opt.flags === void 0;
        this[_flags] = this[_defaultFlag] ? defaultFlag : opt.flags;
        if (this[_fd] === null)
          this[_open]();
      }
      emit(ev, data) {
        if (ev === "error") {
          if (this[_errored])
            return;
          this[_errored] = true;
        }
        return super.emit(ev, data);
      }
      get fd() {
        return this[_fd];
      }
      get path() {
        return this[_path];
      }
      [_onerror](er) {
        this[_close]();
        this[_writing] = true;
        this.emit("error", er);
      }
      [_open]() {
        fs.open(this[_path], this[_flags], this[_mode], (er, fd) => this[_onopen](er, fd));
      }
      [_onopen](er, fd) {
        if (this[_defaultFlag] && this[_flags] === "r+" && er && er.code === "ENOENT") {
          this[_flags] = "w";
          this[_open]();
        } else if (er)
          this[_onerror](er);
        else {
          this[_fd] = fd;
          this.emit("open", fd);
          this[_flush]();
        }
      }
      end(buf, enc) {
        if (buf)
          this.write(buf, enc);
        this[_ended] = true;
        if (!this[_writing] && !this[_queue].length && typeof this[_fd] === "number")
          this[_onwrite](null, 0);
        return this;
      }
      write(buf, enc) {
        if (typeof buf === "string")
          buf = Buffer.from(buf, enc);
        if (this[_ended]) {
          this.emit("error", new Error("write() after end()"));
          return false;
        }
        if (this[_fd] === null || this[_writing] || this[_queue].length) {
          this[_queue].push(buf);
          this[_needDrain] = true;
          return false;
        }
        this[_writing] = true;
        this[_write](buf);
        return true;
      }
      [_write](buf) {
        fs.write(this[_fd], buf, 0, buf.length, this[_pos], (er, bw) => this[_onwrite](er, bw));
      }
      [_onwrite](er, bw) {
        if (er)
          this[_onerror](er);
        else {
          if (this[_pos] !== null)
            this[_pos] += bw;
          if (this[_queue].length)
            this[_flush]();
          else {
            this[_writing] = false;
            if (this[_ended] && !this[_finished]) {
              this[_finished] = true;
              this[_close]();
              this.emit("finish");
            } else if (this[_needDrain]) {
              this[_needDrain] = false;
              this.emit("drain");
            }
          }
        }
      }
      [_flush]() {
        if (this[_queue].length === 0) {
          if (this[_ended])
            this[_onwrite](null, 0);
        } else if (this[_queue].length === 1)
          this[_write](this[_queue].pop());
        else {
          const iovec = this[_queue];
          this[_queue] = [];
          writev(this[_fd], iovec, this[_pos], (er, bw) => this[_onwrite](er, bw));
        }
      }
      [_close]() {
        if (this[_autoClose] && typeof this[_fd] === "number") {
          const fd = this[_fd];
          this[_fd] = null;
          fs.close(fd, (er) => er ? this.emit("error", er) : this.emit("close"));
        }
      }
    };
    var WriteStreamSync = class extends WriteStream {
      [_open]() {
        let fd;
        if (this[_defaultFlag] && this[_flags] === "r+") {
          try {
            fd = fs.openSync(this[_path], this[_flags], this[_mode]);
          } catch (er) {
            if (er.code === "ENOENT") {
              this[_flags] = "w";
              return this[_open]();
            } else
              throw er;
          }
        } else
          fd = fs.openSync(this[_path], this[_flags], this[_mode]);
        this[_onopen](null, fd);
      }
      [_close]() {
        if (this[_autoClose] && typeof this[_fd] === "number") {
          const fd = this[_fd];
          this[_fd] = null;
          fs.closeSync(fd);
          this.emit("close");
        }
      }
      [_write](buf) {
        let threw = true;
        try {
          this[_onwrite](null, fs.writeSync(this[_fd], buf, 0, buf.length, this[_pos]));
          threw = false;
        } finally {
          if (threw)
            try {
              this[_close]();
            } catch (_) {
            }
        }
      }
    };
    exports2.ReadStream = ReadStream;
    exports2.ReadStreamSync = ReadStreamSync;
    exports2.WriteStream = WriteStream;
    exports2.WriteStreamSync = WriteStreamSync;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/parse.js
var require_parse = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/parse.js"(exports2, module2) {
    "use strict";
    var warner = require_warn_mixin();
    var Header = require_header();
    var EE = require("events");
    var Yallist = require_yallist();
    var maxMetaEntrySize = 1024 * 1024;
    var Entry = require_read_entry();
    var Pax = require_pax();
    var zlib = require_minizlib();
    var gzipHeader = Buffer.from([31, 139]);
    var STATE = Symbol("state");
    var WRITEENTRY = Symbol("writeEntry");
    var READENTRY = Symbol("readEntry");
    var NEXTENTRY = Symbol("nextEntry");
    var PROCESSENTRY = Symbol("processEntry");
    var EX = Symbol("extendedHeader");
    var GEX = Symbol("globalExtendedHeader");
    var META = Symbol("meta");
    var EMITMETA = Symbol("emitMeta");
    var BUFFER = Symbol("buffer");
    var QUEUE = Symbol("queue");
    var ENDED = Symbol("ended");
    var EMITTEDEND = Symbol("emittedEnd");
    var EMIT = Symbol("emit");
    var UNZIP = Symbol("unzip");
    var CONSUMECHUNK = Symbol("consumeChunk");
    var CONSUMECHUNKSUB = Symbol("consumeChunkSub");
    var CONSUMEBODY = Symbol("consumeBody");
    var CONSUMEMETA = Symbol("consumeMeta");
    var CONSUMEHEADER = Symbol("consumeHeader");
    var CONSUMING = Symbol("consuming");
    var BUFFERCONCAT = Symbol("bufferConcat");
    var MAYBEEND = Symbol("maybeEnd");
    var WRITING = Symbol("writing");
    var ABORTED = Symbol("aborted");
    var DONE = Symbol("onDone");
    var SAW_VALID_ENTRY = Symbol("sawValidEntry");
    var SAW_NULL_BLOCK = Symbol("sawNullBlock");
    var SAW_EOF = Symbol("sawEOF");
    var noop = (_) => true;
    module2.exports = warner(class Parser extends EE {
      constructor(opt) {
        opt = opt || {};
        super(opt);
        this.file = opt.file || "";
        this[SAW_VALID_ENTRY] = null;
        this.on(DONE, (_) => {
          if (this[STATE] === "begin" || this[SAW_VALID_ENTRY] === false) {
            this.warn("TAR_BAD_ARCHIVE", "Unrecognized archive format");
          }
        });
        if (opt.ondone)
          this.on(DONE, opt.ondone);
        else {
          this.on(DONE, (_) => {
            this.emit("prefinish");
            this.emit("finish");
            this.emit("end");
            this.emit("close");
          });
        }
        this.strict = !!opt.strict;
        this.maxMetaEntrySize = opt.maxMetaEntrySize || maxMetaEntrySize;
        this.filter = typeof opt.filter === "function" ? opt.filter : noop;
        this.writable = true;
        this.readable = false;
        this[QUEUE] = new Yallist();
        this[BUFFER] = null;
        this[READENTRY] = null;
        this[WRITEENTRY] = null;
        this[STATE] = "begin";
        this[META] = "";
        this[EX] = null;
        this[GEX] = null;
        this[ENDED] = false;
        this[UNZIP] = null;
        this[ABORTED] = false;
        this[SAW_NULL_BLOCK] = false;
        this[SAW_EOF] = false;
        if (typeof opt.onwarn === "function")
          this.on("warn", opt.onwarn);
        if (typeof opt.onentry === "function")
          this.on("entry", opt.onentry);
      }
      [CONSUMEHEADER](chunk, position) {
        if (this[SAW_VALID_ENTRY] === null)
          this[SAW_VALID_ENTRY] = false;
        let header;
        try {
          header = new Header(chunk, position, this[EX], this[GEX]);
        } catch (er) {
          return this.warn("TAR_ENTRY_INVALID", er);
        }
        if (header.nullBlock) {
          if (this[SAW_NULL_BLOCK]) {
            this[SAW_EOF] = true;
            if (this[STATE] === "begin")
              this[STATE] = "header";
            this[EMIT]("eof");
          } else {
            this[SAW_NULL_BLOCK] = true;
            this[EMIT]("nullBlock");
          }
        } else {
          this[SAW_NULL_BLOCK] = false;
          if (!header.cksumValid)
            this.warn("TAR_ENTRY_INVALID", "checksum failure", { header });
          else if (!header.path)
            this.warn("TAR_ENTRY_INVALID", "path is required", { header });
          else {
            const type = header.type;
            if (/^(Symbolic)?Link$/.test(type) && !header.linkpath)
              this.warn("TAR_ENTRY_INVALID", "linkpath required", { header });
            else if (!/^(Symbolic)?Link$/.test(type) && header.linkpath)
              this.warn("TAR_ENTRY_INVALID", "linkpath forbidden", { header });
            else {
              const entry = this[WRITEENTRY] = new Entry(header, this[EX], this[GEX]);
              if (!this[SAW_VALID_ENTRY]) {
                if (entry.remain) {
                  const onend = () => {
                    if (!entry.invalid)
                      this[SAW_VALID_ENTRY] = true;
                  };
                  entry.on("end", onend);
                } else
                  this[SAW_VALID_ENTRY] = true;
              }
              if (entry.meta) {
                if (entry.size > this.maxMetaEntrySize) {
                  entry.ignore = true;
                  this[EMIT]("ignoredEntry", entry);
                  this[STATE] = "ignore";
                  entry.resume();
                } else if (entry.size > 0) {
                  this[META] = "";
                  entry.on("data", (c) => this[META] += c);
                  this[STATE] = "meta";
                }
              } else {
                this[EX] = null;
                entry.ignore = entry.ignore || !this.filter(entry.path, entry);
                if (entry.ignore) {
                  this[EMIT]("ignoredEntry", entry);
                  this[STATE] = entry.remain ? "ignore" : "header";
                  entry.resume();
                } else {
                  if (entry.remain)
                    this[STATE] = "body";
                  else {
                    this[STATE] = "header";
                    entry.end();
                  }
                  if (!this[READENTRY]) {
                    this[QUEUE].push(entry);
                    this[NEXTENTRY]();
                  } else
                    this[QUEUE].push(entry);
                }
              }
            }
          }
        }
      }
      [PROCESSENTRY](entry) {
        let go = true;
        if (!entry) {
          this[READENTRY] = null;
          go = false;
        } else if (Array.isArray(entry))
          this.emit.apply(this, entry);
        else {
          this[READENTRY] = entry;
          this.emit("entry", entry);
          if (!entry.emittedEnd) {
            entry.on("end", (_) => this[NEXTENTRY]());
            go = false;
          }
        }
        return go;
      }
      [NEXTENTRY]() {
        do {
        } while (this[PROCESSENTRY](this[QUEUE].shift()));
        if (!this[QUEUE].length) {
          const re = this[READENTRY];
          const drainNow = !re || re.flowing || re.size === re.remain;
          if (drainNow) {
            if (!this[WRITING])
              this.emit("drain");
          } else
            re.once("drain", (_) => this.emit("drain"));
        }
      }
      [CONSUMEBODY](chunk, position) {
        const entry = this[WRITEENTRY];
        const br = entry.blockRemain;
        const c = br >= chunk.length && position === 0 ? chunk : chunk.slice(position, position + br);
        entry.write(c);
        if (!entry.blockRemain) {
          this[STATE] = "header";
          this[WRITEENTRY] = null;
          entry.end();
        }
        return c.length;
      }
      [CONSUMEMETA](chunk, position) {
        const entry = this[WRITEENTRY];
        const ret = this[CONSUMEBODY](chunk, position);
        if (!this[WRITEENTRY])
          this[EMITMETA](entry);
        return ret;
      }
      [EMIT](ev, data, extra) {
        if (!this[QUEUE].length && !this[READENTRY])
          this.emit(ev, data, extra);
        else
          this[QUEUE].push([ev, data, extra]);
      }
      [EMITMETA](entry) {
        this[EMIT]("meta", this[META]);
        switch (entry.type) {
          case "ExtendedHeader":
          case "OldExtendedHeader":
            this[EX] = Pax.parse(this[META], this[EX], false);
            break;
          case "GlobalExtendedHeader":
            this[GEX] = Pax.parse(this[META], this[GEX], true);
            break;
          case "NextFileHasLongPath":
          case "OldGnuLongPath":
            this[EX] = this[EX] || Object.create(null);
            this[EX].path = this[META].replace(/\0.*/, "");
            break;
          case "NextFileHasLongLinkpath":
            this[EX] = this[EX] || Object.create(null);
            this[EX].linkpath = this[META].replace(/\0.*/, "");
            break;
          default:
            throw new Error("unknown meta: " + entry.type);
        }
      }
      abort(error) {
        this[ABORTED] = true;
        this.emit("abort", error);
        this.warn("TAR_ABORT", error, { recoverable: false });
      }
      write(chunk) {
        if (this[ABORTED])
          return;
        if (this[UNZIP] === null && chunk) {
          if (this[BUFFER]) {
            chunk = Buffer.concat([this[BUFFER], chunk]);
            this[BUFFER] = null;
          }
          if (chunk.length < gzipHeader.length) {
            this[BUFFER] = chunk;
            return true;
          }
          for (let i = 0; this[UNZIP] === null && i < gzipHeader.length; i++) {
            if (chunk[i] !== gzipHeader[i])
              this[UNZIP] = false;
          }
          if (this[UNZIP] === null) {
            const ended = this[ENDED];
            this[ENDED] = false;
            this[UNZIP] = new zlib.Unzip();
            this[UNZIP].on("data", (chunk2) => this[CONSUMECHUNK](chunk2));
            this[UNZIP].on("error", (er) => this.abort(er));
            this[UNZIP].on("end", (_) => {
              this[ENDED] = true;
              this[CONSUMECHUNK]();
            });
            this[WRITING] = true;
            const ret2 = this[UNZIP][ended ? "end" : "write"](chunk);
            this[WRITING] = false;
            return ret2;
          }
        }
        this[WRITING] = true;
        if (this[UNZIP])
          this[UNZIP].write(chunk);
        else
          this[CONSUMECHUNK](chunk);
        this[WRITING] = false;
        const ret = this[QUEUE].length ? false : this[READENTRY] ? this[READENTRY].flowing : true;
        if (!ret && !this[QUEUE].length)
          this[READENTRY].once("drain", (_) => this.emit("drain"));
        return ret;
      }
      [BUFFERCONCAT](c) {
        if (c && !this[ABORTED])
          this[BUFFER] = this[BUFFER] ? Buffer.concat([this[BUFFER], c]) : c;
      }
      [MAYBEEND]() {
        if (this[ENDED] && !this[EMITTEDEND] && !this[ABORTED] && !this[CONSUMING]) {
          this[EMITTEDEND] = true;
          const entry = this[WRITEENTRY];
          if (entry && entry.blockRemain) {
            const have = this[BUFFER] ? this[BUFFER].length : 0;
            this.warn("TAR_BAD_ARCHIVE", `Truncated input (needed ${entry.blockRemain} more bytes, only ${have} available)`, { entry });
            if (this[BUFFER])
              entry.write(this[BUFFER]);
            entry.end();
          }
          this[EMIT](DONE);
        }
      }
      [CONSUMECHUNK](chunk) {
        if (this[CONSUMING])
          this[BUFFERCONCAT](chunk);
        else if (!chunk && !this[BUFFER])
          this[MAYBEEND]();
        else {
          this[CONSUMING] = true;
          if (this[BUFFER]) {
            this[BUFFERCONCAT](chunk);
            const c = this[BUFFER];
            this[BUFFER] = null;
            this[CONSUMECHUNKSUB](c);
          } else
            this[CONSUMECHUNKSUB](chunk);
          while (this[BUFFER] && this[BUFFER].length >= 512 && !this[ABORTED] && !this[SAW_EOF]) {
            const c = this[BUFFER];
            this[BUFFER] = null;
            this[CONSUMECHUNKSUB](c);
          }
          this[CONSUMING] = false;
        }
        if (!this[BUFFER] || this[ENDED])
          this[MAYBEEND]();
      }
      [CONSUMECHUNKSUB](chunk) {
        let position = 0;
        const length = chunk.length;
        while (position + 512 <= length && !this[ABORTED] && !this[SAW_EOF]) {
          switch (this[STATE]) {
            case "begin":
            case "header":
              this[CONSUMEHEADER](chunk, position);
              position += 512;
              break;
            case "ignore":
            case "body":
              position += this[CONSUMEBODY](chunk, position);
              break;
            case "meta":
              position += this[CONSUMEMETA](chunk, position);
              break;
            default:
              throw new Error("invalid state: " + this[STATE]);
          }
        }
        if (position < length) {
          if (this[BUFFER])
            this[BUFFER] = Buffer.concat([chunk.slice(position), this[BUFFER]]);
          else
            this[BUFFER] = chunk.slice(position);
        }
      }
      end(chunk) {
        if (!this[ABORTED]) {
          if (this[UNZIP])
            this[UNZIP].end(chunk);
          else {
            this[ENDED] = true;
            this.write(chunk);
          }
        }
      }
    });
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/list.js
var require_list = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/list.js"(exports2, module2) {
    "use strict";
    var hlo = require_high_level_opt();
    var Parser = require_parse();
    var fs = require("fs");
    var fsm = require_fs_minipass();
    var path = require("path");
    module2.exports = (opt_, files, cb) => {
      if (typeof opt_ === "function")
        cb = opt_, files = null, opt_ = {};
      else if (Array.isArray(opt_))
        files = opt_, opt_ = {};
      if (typeof files === "function")
        cb = files, files = null;
      if (!files)
        files = [];
      else
        files = Array.from(files);
      const opt = hlo(opt_);
      if (opt.sync && typeof cb === "function")
        throw new TypeError("callback not supported for sync tar functions");
      if (!opt.file && typeof cb === "function")
        throw new TypeError("callback only supported with file option");
      if (files.length)
        filesFilter(opt, files);
      if (!opt.noResume)
        onentryFunction(opt);
      return opt.file && opt.sync ? listFileSync(opt) : opt.file ? listFile(opt, cb) : list(opt);
    };
    var onentryFunction = (opt) => {
      const onentry = opt.onentry;
      opt.onentry = onentry ? (e) => {
        onentry(e);
        e.resume();
      } : (e) => e.resume();
    };
    var filesFilter = (opt, files) => {
      const map = new Map(files.map((f) => [f.replace(/\/+$/, ""), true]));
      const filter = opt.filter;
      const mapHas = (file, r) => {
        const root = r || path.parse(file).root || ".";
        const ret = file === root ? false : map.has(file) ? map.get(file) : mapHas(path.dirname(file), root);
        map.set(file, ret);
        return ret;
      };
      opt.filter = filter ? (file, entry) => filter(file, entry) && mapHas(file.replace(/\/+$/, "")) : (file) => mapHas(file.replace(/\/+$/, ""));
    };
    var listFileSync = (opt) => {
      const p = list(opt);
      const file = opt.file;
      let threw = true;
      let fd;
      try {
        const stat = fs.statSync(file);
        const readSize = opt.maxReadSize || 16 * 1024 * 1024;
        if (stat.size < readSize)
          p.end(fs.readFileSync(file));
        else {
          let pos = 0;
          const buf = Buffer.allocUnsafe(readSize);
          fd = fs.openSync(file, "r");
          while (pos < stat.size) {
            const bytesRead = fs.readSync(fd, buf, 0, readSize, pos);
            pos += bytesRead;
            p.write(buf.slice(0, bytesRead));
          }
          p.end();
        }
        threw = false;
      } finally {
        if (threw && fd) {
          try {
            fs.closeSync(fd);
          } catch (er) {
          }
        }
      }
    };
    var listFile = (opt, cb) => {
      const parse = new Parser(opt);
      const readSize = opt.maxReadSize || 16 * 1024 * 1024;
      const file = opt.file;
      const p = new Promise((resolve, reject) => {
        parse.on("error", reject);
        parse.on("end", resolve);
        fs.stat(file, (er, stat) => {
          if (er)
            reject(er);
          else {
            const stream = new fsm.ReadStream(file, {
              readSize,
              size: stat.size
            });
            stream.on("error", reject);
            stream.pipe(parse);
          }
        });
      });
      return cb ? p.then(cb, cb) : p;
    };
    var list = (opt) => new Parser(opt);
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/create.js
var require_create = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/create.js"(exports2, module2) {
    "use strict";
    var hlo = require_high_level_opt();
    var Pack = require_pack();
    var fsm = require_fs_minipass();
    var t = require_list();
    var path = require("path");
    module2.exports = (opt_, files, cb) => {
      if (typeof files === "function")
        cb = files;
      if (Array.isArray(opt_))
        files = opt_, opt_ = {};
      if (!files || !Array.isArray(files) || !files.length)
        throw new TypeError("no files or directories specified");
      files = Array.from(files);
      const opt = hlo(opt_);
      if (opt.sync && typeof cb === "function")
        throw new TypeError("callback not supported for sync tar functions");
      if (!opt.file && typeof cb === "function")
        throw new TypeError("callback only supported with file option");
      return opt.file && opt.sync ? createFileSync(opt, files) : opt.file ? createFile(opt, files, cb) : opt.sync ? createSync(opt, files) : create(opt, files);
    };
    var createFileSync = (opt, files) => {
      const p = new Pack.Sync(opt);
      const stream = new fsm.WriteStreamSync(opt.file, {
        mode: opt.mode || 438
      });
      p.pipe(stream);
      addFilesSync(p, files);
    };
    var createFile = (opt, files, cb) => {
      const p = new Pack(opt);
      const stream = new fsm.WriteStream(opt.file, {
        mode: opt.mode || 438
      });
      p.pipe(stream);
      const promise = new Promise((res, rej) => {
        stream.on("error", rej);
        stream.on("close", res);
        p.on("error", rej);
      });
      addFilesAsync(p, files);
      return cb ? promise.then(cb, cb) : promise;
    };
    var addFilesSync = (p, files) => {
      files.forEach((file) => {
        if (file.charAt(0) === "@") {
          t({
            file: path.resolve(p.cwd, file.substr(1)),
            sync: true,
            noResume: true,
            onentry: (entry) => p.add(entry)
          });
        } else
          p.add(file);
      });
      p.end();
    };
    var addFilesAsync = (p, files) => {
      while (files.length) {
        const file = files.shift();
        if (file.charAt(0) === "@") {
          return t({
            file: path.resolve(p.cwd, file.substr(1)),
            noResume: true,
            onentry: (entry) => p.add(entry)
          }).then((_) => addFilesAsync(p, files));
        } else
          p.add(file);
      }
      p.end();
    };
    var createSync = (opt, files) => {
      const p = new Pack.Sync(opt);
      addFilesSync(p, files);
      return p;
    };
    var create = (opt, files) => {
      const p = new Pack(opt);
      addFilesAsync(p, files);
      return p;
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/replace.js
var require_replace = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/replace.js"(exports2, module2) {
    "use strict";
    var hlo = require_high_level_opt();
    var Pack = require_pack();
    var fs = require("fs");
    var fsm = require_fs_minipass();
    var t = require_list();
    var path = require("path");
    var Header = require_header();
    module2.exports = (opt_, files, cb) => {
      const opt = hlo(opt_);
      if (!opt.file)
        throw new TypeError("file is required");
      if (opt.gzip)
        throw new TypeError("cannot append to compressed archives");
      if (!files || !Array.isArray(files) || !files.length)
        throw new TypeError("no files or directories specified");
      files = Array.from(files);
      return opt.sync ? replaceSync(opt, files) : replace(opt, files, cb);
    };
    var replaceSync = (opt, files) => {
      const p = new Pack.Sync(opt);
      let threw = true;
      let fd;
      let position;
      try {
        try {
          fd = fs.openSync(opt.file, "r+");
        } catch (er) {
          if (er.code === "ENOENT")
            fd = fs.openSync(opt.file, "w+");
          else
            throw er;
        }
        const st = fs.fstatSync(fd);
        const headBuf = Buffer.alloc(512);
        POSITION:
          for (position = 0; position < st.size; position += 512) {
            for (let bufPos = 0, bytes = 0; bufPos < 512; bufPos += bytes) {
              bytes = fs.readSync(fd, headBuf, bufPos, headBuf.length - bufPos, position + bufPos);
              if (position === 0 && headBuf[0] === 31 && headBuf[1] === 139)
                throw new Error("cannot append to compressed archives");
              if (!bytes)
                break POSITION;
            }
            const h = new Header(headBuf);
            if (!h.cksumValid)
              break;
            const entryBlockSize = 512 * Math.ceil(h.size / 512);
            if (position + entryBlockSize + 512 > st.size)
              break;
            position += entryBlockSize;
            if (opt.mtimeCache)
              opt.mtimeCache.set(h.path, h.mtime);
          }
        threw = false;
        streamSync(opt, p, position, fd, files);
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd);
          } catch (er) {
          }
        }
      }
    };
    var streamSync = (opt, p, position, fd, files) => {
      const stream = new fsm.WriteStreamSync(opt.file, {
        fd,
        start: position
      });
      p.pipe(stream);
      addFilesSync(p, files);
    };
    var replace = (opt, files, cb) => {
      files = Array.from(files);
      const p = new Pack(opt);
      const getPos = (fd, size, cb_) => {
        const cb2 = (er, pos) => {
          if (er)
            fs.close(fd, (_) => cb_(er));
          else
            cb_(null, pos);
        };
        let position = 0;
        if (size === 0)
          return cb2(null, 0);
        let bufPos = 0;
        const headBuf = Buffer.alloc(512);
        const onread = (er, bytes) => {
          if (er)
            return cb2(er);
          bufPos += bytes;
          if (bufPos < 512 && bytes) {
            return fs.read(fd, headBuf, bufPos, headBuf.length - bufPos, position + bufPos, onread);
          }
          if (position === 0 && headBuf[0] === 31 && headBuf[1] === 139)
            return cb2(new Error("cannot append to compressed archives"));
          if (bufPos < 512)
            return cb2(null, position);
          const h = new Header(headBuf);
          if (!h.cksumValid)
            return cb2(null, position);
          const entryBlockSize = 512 * Math.ceil(h.size / 512);
          if (position + entryBlockSize + 512 > size)
            return cb2(null, position);
          position += entryBlockSize + 512;
          if (position >= size)
            return cb2(null, position);
          if (opt.mtimeCache)
            opt.mtimeCache.set(h.path, h.mtime);
          bufPos = 0;
          fs.read(fd, headBuf, 0, 512, position, onread);
        };
        fs.read(fd, headBuf, 0, 512, position, onread);
      };
      const promise = new Promise((resolve, reject) => {
        p.on("error", reject);
        let flag = "r+";
        const onopen = (er, fd) => {
          if (er && er.code === "ENOENT" && flag === "r+") {
            flag = "w+";
            return fs.open(opt.file, flag, onopen);
          }
          if (er)
            return reject(er);
          fs.fstat(fd, (er2, st) => {
            if (er2)
              return reject(er2);
            getPos(fd, st.size, (er3, position) => {
              if (er3)
                return reject(er3);
              const stream = new fsm.WriteStream(opt.file, {
                fd,
                start: position
              });
              p.pipe(stream);
              stream.on("error", reject);
              stream.on("close", resolve);
              addFilesAsync(p, files);
            });
          });
        };
        fs.open(opt.file, flag, onopen);
      });
      return cb ? promise.then(cb, cb) : promise;
    };
    var addFilesSync = (p, files) => {
      files.forEach((file) => {
        if (file.charAt(0) === "@") {
          t({
            file: path.resolve(p.cwd, file.substr(1)),
            sync: true,
            noResume: true,
            onentry: (entry) => p.add(entry)
          });
        } else
          p.add(file);
      });
      p.end();
    };
    var addFilesAsync = (p, files) => {
      while (files.length) {
        const file = files.shift();
        if (file.charAt(0) === "@") {
          return t({
            file: path.resolve(p.cwd, file.substr(1)),
            noResume: true,
            onentry: (entry) => p.add(entry)
          }).then((_) => addFilesAsync(p, files));
        } else
          p.add(file);
      }
      p.end();
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/update.js
var require_update = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/update.js"(exports2, module2) {
    "use strict";
    var hlo = require_high_level_opt();
    var r = require_replace();
    module2.exports = (opt_, files, cb) => {
      const opt = hlo(opt_);
      if (!opt.file)
        throw new TypeError("file is required");
      if (opt.gzip)
        throw new TypeError("cannot append to compressed archives");
      if (!files || !Array.isArray(files) || !files.length)
        throw new TypeError("no files or directories specified");
      files = Array.from(files);
      mtimeFilter(opt);
      return r(opt, files, cb);
    };
    var mtimeFilter = (opt) => {
      const filter = opt.filter;
      if (!opt.mtimeCache)
        opt.mtimeCache = new Map();
      opt.filter = filter ? (path, stat) => filter(path, stat) && !(opt.mtimeCache.get(path) > stat.mtime) : (path, stat) => !(opt.mtimeCache.get(path) > stat.mtime);
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/opts-arg.js
var require_opts_arg = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/opts-arg.js"(exports2, module2) {
    var { promisify } = require("util");
    var fs = require("fs");
    var optsArg = (opts) => {
      if (!opts)
        opts = { mode: 511, fs };
      else if (typeof opts === "object")
        opts = __spreadValues({ mode: 511, fs }, opts);
      else if (typeof opts === "number")
        opts = { mode: opts, fs };
      else if (typeof opts === "string")
        opts = { mode: parseInt(opts, 8), fs };
      else
        throw new TypeError("invalid options argument");
      opts.mkdir = opts.mkdir || opts.fs.mkdir || fs.mkdir;
      opts.mkdirAsync = promisify(opts.mkdir);
      opts.stat = opts.stat || opts.fs.stat || fs.stat;
      opts.statAsync = promisify(opts.stat);
      opts.statSync = opts.statSync || opts.fs.statSync || fs.statSync;
      opts.mkdirSync = opts.mkdirSync || opts.fs.mkdirSync || fs.mkdirSync;
      return opts;
    };
    module2.exports = optsArg;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/path-arg.js
var require_path_arg = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/path-arg.js"(exports2, module2) {
    var platform = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform;
    var { resolve, parse } = require("path");
    var pathArg = (path) => {
      if (/\0/.test(path)) {
        throw Object.assign(new TypeError("path must be a string without null bytes"), {
          path,
          code: "ERR_INVALID_ARG_VALUE"
        });
      }
      path = resolve(path);
      if (platform === "win32") {
        const badWinChars = /[*|"<>?:]/;
        const { root } = parse(path);
        if (badWinChars.test(path.substr(root.length))) {
          throw Object.assign(new Error("Illegal characters in path."), {
            path,
            code: "EINVAL"
          });
        }
      }
      return path;
    };
    module2.exports = pathArg;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/find-made.js
var require_find_made = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/find-made.js"(exports2, module2) {
    var { dirname } = require("path");
    var findMade = (opts, parent, path = void 0) => {
      if (path === parent)
        return Promise.resolve();
      return opts.statAsync(parent).then((st) => st.isDirectory() ? path : void 0, (er) => er.code === "ENOENT" ? findMade(opts, dirname(parent), parent) : void 0);
    };
    var findMadeSync = (opts, parent, path = void 0) => {
      if (path === parent)
        return void 0;
      try {
        return opts.statSync(parent).isDirectory() ? path : void 0;
      } catch (er) {
        return er.code === "ENOENT" ? findMadeSync(opts, dirname(parent), parent) : void 0;
      }
    };
    module2.exports = { findMade, findMadeSync };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/mkdirp-manual.js
var require_mkdirp_manual = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/mkdirp-manual.js"(exports2, module2) {
    var { dirname } = require("path");
    var mkdirpManual = (path, opts, made) => {
      opts.recursive = false;
      const parent = dirname(path);
      if (parent === path) {
        return opts.mkdirAsync(path, opts).catch((er) => {
          if (er.code !== "EISDIR")
            throw er;
        });
      }
      return opts.mkdirAsync(path, opts).then(() => made || path, (er) => {
        if (er.code === "ENOENT")
          return mkdirpManual(parent, opts).then((made2) => mkdirpManual(path, opts, made2));
        if (er.code !== "EEXIST" && er.code !== "EROFS")
          throw er;
        return opts.statAsync(path).then((st) => {
          if (st.isDirectory())
            return made;
          else
            throw er;
        }, () => {
          throw er;
        });
      });
    };
    var mkdirpManualSync = (path, opts, made) => {
      const parent = dirname(path);
      opts.recursive = false;
      if (parent === path) {
        try {
          return opts.mkdirSync(path, opts);
        } catch (er) {
          if (er.code !== "EISDIR")
            throw er;
          else
            return;
        }
      }
      try {
        opts.mkdirSync(path, opts);
        return made || path;
      } catch (er) {
        if (er.code === "ENOENT")
          return mkdirpManualSync(path, opts, mkdirpManualSync(parent, opts, made));
        if (er.code !== "EEXIST" && er.code !== "EROFS")
          throw er;
        try {
          if (!opts.statSync(path).isDirectory())
            throw er;
        } catch (_) {
          throw er;
        }
      }
    };
    module2.exports = { mkdirpManual, mkdirpManualSync };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/mkdirp-native.js
var require_mkdirp_native = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/mkdirp-native.js"(exports2, module2) {
    var { dirname } = require("path");
    var { findMade, findMadeSync } = require_find_made();
    var { mkdirpManual, mkdirpManualSync } = require_mkdirp_manual();
    var mkdirpNative = (path, opts) => {
      opts.recursive = true;
      const parent = dirname(path);
      if (parent === path)
        return opts.mkdirAsync(path, opts);
      return findMade(opts, path).then((made) => opts.mkdirAsync(path, opts).then(() => made).catch((er) => {
        if (er.code === "ENOENT")
          return mkdirpManual(path, opts);
        else
          throw er;
      }));
    };
    var mkdirpNativeSync = (path, opts) => {
      opts.recursive = true;
      const parent = dirname(path);
      if (parent === path)
        return opts.mkdirSync(path, opts);
      const made = findMadeSync(opts, path);
      try {
        opts.mkdirSync(path, opts);
        return made;
      } catch (er) {
        if (er.code === "ENOENT")
          return mkdirpManualSync(path, opts);
        else
          throw er;
      }
    };
    module2.exports = { mkdirpNative, mkdirpNativeSync };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/use-native.js
var require_use_native = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/lib/use-native.js"(exports2, module2) {
    var fs = require("fs");
    var version = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version;
    var versArr = version.replace(/^v/, "").split(".");
    var hasNative = +versArr[0] > 10 || +versArr[0] === 10 && +versArr[1] >= 12;
    var useNative = !hasNative ? () => false : (opts) => opts.mkdir === fs.mkdir;
    var useNativeSync = !hasNative ? () => false : (opts) => opts.mkdirSync === fs.mkdirSync;
    module2.exports = { useNative, useNativeSync };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/index.js
var require_mkdirp = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/mkdirp/index.js"(exports2, module2) {
    var optsArg = require_opts_arg();
    var pathArg = require_path_arg();
    var { mkdirpNative, mkdirpNativeSync } = require_mkdirp_native();
    var { mkdirpManual, mkdirpManualSync } = require_mkdirp_manual();
    var { useNative, useNativeSync } = require_use_native();
    var mkdirp = (path, opts) => {
      path = pathArg(path);
      opts = optsArg(opts);
      return useNative(opts) ? mkdirpNative(path, opts) : mkdirpManual(path, opts);
    };
    var mkdirpSync = (path, opts) => {
      path = pathArg(path);
      opts = optsArg(opts);
      return useNativeSync(opts) ? mkdirpNativeSync(path, opts) : mkdirpManualSync(path, opts);
    };
    mkdirp.sync = mkdirpSync;
    mkdirp.native = (path, opts) => mkdirpNative(pathArg(path), optsArg(opts));
    mkdirp.manual = (path, opts) => mkdirpManual(pathArg(path), optsArg(opts));
    mkdirp.nativeSync = (path, opts) => mkdirpNativeSync(pathArg(path), optsArg(opts));
    mkdirp.manualSync = (path, opts) => mkdirpManualSync(pathArg(path), optsArg(opts));
    module2.exports = mkdirp;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/chownr/chownr.js
var require_chownr = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/chownr/chownr.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var LCHOWN = fs.lchown ? "lchown" : "chown";
    var LCHOWNSYNC = fs.lchownSync ? "lchownSync" : "chownSync";
    var needEISDIRHandled = fs.lchown && !process.version.match(/v1[1-9]+\./) && !process.version.match(/v10\.[6-9]/);
    var lchownSync = (path2, uid, gid) => {
      try {
        return fs[LCHOWNSYNC](path2, uid, gid);
      } catch (er) {
        if (er.code !== "ENOENT")
          throw er;
      }
    };
    var chownSync = (path2, uid, gid) => {
      try {
        return fs.chownSync(path2, uid, gid);
      } catch (er) {
        if (er.code !== "ENOENT")
          throw er;
      }
    };
    var handleEISDIR = needEISDIRHandled ? (path2, uid, gid, cb) => (er) => {
      if (!er || er.code !== "EISDIR")
        cb(er);
      else
        fs.chown(path2, uid, gid, cb);
    } : (_, __, ___, cb) => cb;
    var handleEISDirSync = needEISDIRHandled ? (path2, uid, gid) => {
      try {
        return lchownSync(path2, uid, gid);
      } catch (er) {
        if (er.code !== "EISDIR")
          throw er;
        chownSync(path2, uid, gid);
      }
    } : (path2, uid, gid) => lchownSync(path2, uid, gid);
    var nodeVersion = process.version;
    var readdir = (path2, options, cb) => fs.readdir(path2, options, cb);
    var readdirSync = (path2, options) => fs.readdirSync(path2, options);
    if (/^v4\./.test(nodeVersion))
      readdir = (path2, options, cb) => fs.readdir(path2, cb);
    var chown = (cpath, uid, gid, cb) => {
      fs[LCHOWN](cpath, uid, gid, handleEISDIR(cpath, uid, gid, (er) => {
        cb(er && er.code !== "ENOENT" ? er : null);
      }));
    };
    var chownrKid = (p, child, uid, gid, cb) => {
      if (typeof child === "string")
        return fs.lstat(path.resolve(p, child), (er, stats) => {
          if (er)
            return cb(er.code !== "ENOENT" ? er : null);
          stats.name = child;
          chownrKid(p, stats, uid, gid, cb);
        });
      if (child.isDirectory()) {
        chownr(path.resolve(p, child.name), uid, gid, (er) => {
          if (er)
            return cb(er);
          const cpath = path.resolve(p, child.name);
          chown(cpath, uid, gid, cb);
        });
      } else {
        const cpath = path.resolve(p, child.name);
        chown(cpath, uid, gid, cb);
      }
    };
    var chownr = (p, uid, gid, cb) => {
      readdir(p, { withFileTypes: true }, (er, children) => {
        if (er) {
          if (er.code === "ENOENT")
            return cb();
          else if (er.code !== "ENOTDIR" && er.code !== "ENOTSUP")
            return cb(er);
        }
        if (er || !children.length)
          return chown(p, uid, gid, cb);
        let len = children.length;
        let errState = null;
        const then = (er2) => {
          if (errState)
            return;
          if (er2)
            return cb(errState = er2);
          if (--len === 0)
            return chown(p, uid, gid, cb);
        };
        children.forEach((child) => chownrKid(p, child, uid, gid, then));
      });
    };
    var chownrKidSync = (p, child, uid, gid) => {
      if (typeof child === "string") {
        try {
          const stats = fs.lstatSync(path.resolve(p, child));
          stats.name = child;
          child = stats;
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          else
            throw er;
        }
      }
      if (child.isDirectory())
        chownrSync(path.resolve(p, child.name), uid, gid);
      handleEISDirSync(path.resolve(p, child.name), uid, gid);
    };
    var chownrSync = (p, uid, gid) => {
      let children;
      try {
        children = readdirSync(p, { withFileTypes: true });
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        else if (er.code === "ENOTDIR" || er.code === "ENOTSUP")
          return handleEISDirSync(p, uid, gid);
        else
          throw er;
      }
      if (children && children.length)
        children.forEach((child) => chownrKidSync(p, child, uid, gid));
      return handleEISDirSync(p, uid, gid);
    };
    module2.exports = chownr;
    chownr.sync = chownrSync;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/mkdir.js
var require_mkdir = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/mkdir.js"(exports2, module2) {
    "use strict";
    var mkdirp = require_mkdirp();
    var fs = require("fs");
    var path = require("path");
    var chownr = require_chownr();
    var SymlinkError = class extends Error {
      constructor(symlink, path2) {
        super("Cannot extract through symbolic link");
        this.path = path2;
        this.symlink = symlink;
      }
      get name() {
        return "SylinkError";
      }
    };
    var CwdError = class extends Error {
      constructor(path2, code) {
        super(code + ": Cannot cd into '" + path2 + "'");
        this.path = path2;
        this.code = code;
      }
      get name() {
        return "CwdError";
      }
    };
    module2.exports = (dir, opt, cb) => {
      const umask = opt.umask;
      const mode = opt.mode | 448;
      const needChmod = (mode & umask) !== 0;
      const uid = opt.uid;
      const gid = opt.gid;
      const doChown = typeof uid === "number" && typeof gid === "number" && (uid !== opt.processUid || gid !== opt.processGid);
      const preserve = opt.preserve;
      const unlink = opt.unlink;
      const cache = opt.cache;
      const cwd = opt.cwd;
      const done = (er, created) => {
        if (er)
          cb(er);
        else {
          cache.set(dir, true);
          if (created && doChown)
            chownr(created, uid, gid, (er2) => done(er2));
          else if (needChmod)
            fs.chmod(dir, mode, cb);
          else
            cb();
        }
      };
      if (cache && cache.get(dir) === true)
        return done();
      if (dir === cwd) {
        return fs.stat(dir, (er, st) => {
          if (er || !st.isDirectory())
            er = new CwdError(dir, er && er.code || "ENOTDIR");
          done(er);
        });
      }
      if (preserve)
        return mkdirp(dir, { mode }).then((made) => done(null, made), done);
      const sub = path.relative(cwd, dir);
      const parts = sub.split(/\/|\\/);
      mkdir_(cwd, parts, mode, cache, unlink, cwd, null, done);
    };
    var mkdir_ = (base, parts, mode, cache, unlink, cwd, created, cb) => {
      if (!parts.length)
        return cb(null, created);
      const p = parts.shift();
      const part = base + "/" + p;
      if (cache.get(part))
        return mkdir_(part, parts, mode, cache, unlink, cwd, created, cb);
      fs.mkdir(part, mode, onmkdir(part, parts, mode, cache, unlink, cwd, created, cb));
    };
    var onmkdir = (part, parts, mode, cache, unlink, cwd, created, cb) => (er) => {
      if (er) {
        if (er.path && path.dirname(er.path) === cwd && (er.code === "ENOTDIR" || er.code === "ENOENT"))
          return cb(new CwdError(cwd, er.code));
        fs.lstat(part, (statEr, st) => {
          if (statEr)
            cb(statEr);
          else if (st.isDirectory())
            mkdir_(part, parts, mode, cache, unlink, cwd, created, cb);
          else if (unlink) {
            fs.unlink(part, (er2) => {
              if (er2)
                return cb(er2);
              fs.mkdir(part, mode, onmkdir(part, parts, mode, cache, unlink, cwd, created, cb));
            });
          } else if (st.isSymbolicLink())
            return cb(new SymlinkError(part, part + "/" + parts.join("/")));
          else
            cb(er);
        });
      } else {
        created = created || part;
        mkdir_(part, parts, mode, cache, unlink, cwd, created, cb);
      }
    };
    module2.exports.sync = (dir, opt) => {
      const umask = opt.umask;
      const mode = opt.mode | 448;
      const needChmod = (mode & umask) !== 0;
      const uid = opt.uid;
      const gid = opt.gid;
      const doChown = typeof uid === "number" && typeof gid === "number" && (uid !== opt.processUid || gid !== opt.processGid);
      const preserve = opt.preserve;
      const unlink = opt.unlink;
      const cache = opt.cache;
      const cwd = opt.cwd;
      const done = (created2) => {
        cache.set(dir, true);
        if (created2 && doChown)
          chownr.sync(created2, uid, gid);
        if (needChmod)
          fs.chmodSync(dir, mode);
      };
      if (cache && cache.get(dir) === true)
        return done();
      if (dir === cwd) {
        let ok = false;
        let code = "ENOTDIR";
        try {
          ok = fs.statSync(dir).isDirectory();
        } catch (er) {
          code = er.code;
        } finally {
          if (!ok)
            throw new CwdError(dir, code);
        }
        done();
        return;
      }
      if (preserve)
        return done(mkdirp.sync(dir, mode));
      const sub = path.relative(cwd, dir);
      const parts = sub.split(/\/|\\/);
      let created = null;
      for (let p = parts.shift(), part = cwd; p && (part += "/" + p); p = parts.shift()) {
        if (cache.get(part))
          continue;
        try {
          fs.mkdirSync(part, mode);
          created = created || part;
          cache.set(part, true);
        } catch (er) {
          if (er.path && path.dirname(er.path) === cwd && (er.code === "ENOTDIR" || er.code === "ENOENT"))
            return new CwdError(cwd, er.code);
          const st = fs.lstatSync(part);
          if (st.isDirectory()) {
            cache.set(part, true);
            continue;
          } else if (unlink) {
            fs.unlinkSync(part);
            fs.mkdirSync(part, mode);
            created = created || part;
            cache.set(part, true);
            continue;
          } else if (st.isSymbolicLink())
            return new SymlinkError(part, part + "/" + parts.join("/"));
        }
      }
      return done(created);
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/path-reservations.js
var require_path_reservations = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/path-reservations.js"(exports2, module2) {
    var assert = require("assert");
    module2.exports = () => {
      const queues = new Map();
      const reservations = new Map();
      const { join } = require("path");
      const getDirs = (path) => join(path).split(/[\\/]/).slice(0, -1).reduce((set, path2) => set.length ? set.concat(join(set[set.length - 1], path2)) : [path2], []);
      const running = new Set();
      const getQueues = (fn) => {
        const res = reservations.get(fn);
        if (!res)
          throw new Error("function does not have any path reservations");
        return {
          paths: res.paths.map((path) => queues.get(path)),
          dirs: [...res.dirs].map((path) => queues.get(path))
        };
      };
      const check = (fn) => {
        const { paths, dirs } = getQueues(fn);
        return paths.every((q) => q[0] === fn) && dirs.every((q) => q[0] instanceof Set && q[0].has(fn));
      };
      const run = (fn) => {
        if (running.has(fn) || !check(fn))
          return false;
        running.add(fn);
        fn(() => clear(fn));
        return true;
      };
      const clear = (fn) => {
        if (!running.has(fn))
          return false;
        const { paths, dirs } = reservations.get(fn);
        const next = new Set();
        paths.forEach((path) => {
          const q = queues.get(path);
          assert.equal(q[0], fn);
          if (q.length === 1)
            queues.delete(path);
          else {
            q.shift();
            if (typeof q[0] === "function")
              next.add(q[0]);
            else
              q[0].forEach((fn2) => next.add(fn2));
          }
        });
        dirs.forEach((dir) => {
          const q = queues.get(dir);
          assert(q[0] instanceof Set);
          if (q[0].size === 1 && q.length === 1)
            queues.delete(dir);
          else if (q[0].size === 1) {
            q.shift();
            next.add(q[0]);
          } else
            q[0].delete(fn);
        });
        running.delete(fn);
        next.forEach((fn2) => run(fn2));
        return true;
      };
      const reserve = (paths, fn) => {
        const dirs = new Set(paths.map((path) => getDirs(path)).reduce((a, b) => a.concat(b)));
        reservations.set(fn, { dirs, paths });
        paths.forEach((path) => {
          const q = queues.get(path);
          if (!q)
            queues.set(path, [fn]);
          else
            q.push(fn);
        });
        dirs.forEach((dir) => {
          const q = queues.get(dir);
          if (!q)
            queues.set(dir, [new Set([fn])]);
          else if (q[q.length - 1] instanceof Set)
            q[q.length - 1].add(fn);
          else
            q.push(new Set([fn]));
        });
        return run(fn);
      };
      return { check, reserve };
    };
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/get-write-flag.js
var require_get_write_flag = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/get-write-flag.js"(exports2, module2) {
    var platform = process.env.__FAKE_PLATFORM__ || process.platform;
    var isWindows = platform === "win32";
    var fs = global.__FAKE_TESTING_FS__ || require("fs");
    var { O_CREAT, O_TRUNC, O_WRONLY, UV_FS_O_FILEMAP = 0 } = fs.constants;
    var fMapEnabled = isWindows && !!UV_FS_O_FILEMAP;
    var fMapLimit = 512 * 1024;
    var fMapFlag = UV_FS_O_FILEMAP | O_TRUNC | O_CREAT | O_WRONLY;
    module2.exports = !fMapEnabled ? () => "w" : (size) => size < fMapLimit ? fMapFlag : "w";
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/unpack.js
var require_unpack = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/unpack.js"(exports2, module2) {
    "use strict";
    var assert = require("assert");
    var Parser = require_parse();
    var fs = require("fs");
    var fsm = require_fs_minipass();
    var path = require("path");
    var mkdir = require_mkdir();
    var wc = require_winchars();
    var pathReservations = require_path_reservations();
    var ONENTRY = Symbol("onEntry");
    var CHECKFS = Symbol("checkFs");
    var CHECKFS2 = Symbol("checkFs2");
    var ISREUSABLE = Symbol("isReusable");
    var MAKEFS = Symbol("makeFs");
    var FILE = Symbol("file");
    var DIRECTORY = Symbol("directory");
    var LINK = Symbol("link");
    var SYMLINK = Symbol("symlink");
    var HARDLINK = Symbol("hardlink");
    var UNSUPPORTED = Symbol("unsupported");
    var CHECKPATH = Symbol("checkPath");
    var MKDIR = Symbol("mkdir");
    var ONERROR = Symbol("onError");
    var PENDING = Symbol("pending");
    var PEND = Symbol("pend");
    var UNPEND = Symbol("unpend");
    var ENDED = Symbol("ended");
    var MAYBECLOSE = Symbol("maybeClose");
    var SKIP = Symbol("skip");
    var DOCHOWN = Symbol("doChown");
    var UID = Symbol("uid");
    var GID = Symbol("gid");
    var crypto = require("crypto");
    var getFlag = require_get_write_flag();
    var neverCalled = () => {
      throw new Error("sync function called cb somehow?!?");
    };
    var unlinkFile = (path2, cb) => {
      if (process.platform !== "win32")
        return fs.unlink(path2, cb);
      const name = path2 + ".DELETE." + crypto.randomBytes(16).toString("hex");
      fs.rename(path2, name, (er) => {
        if (er)
          return cb(er);
        fs.unlink(name, cb);
      });
    };
    var unlinkFileSync = (path2) => {
      if (process.platform !== "win32")
        return fs.unlinkSync(path2);
      const name = path2 + ".DELETE." + crypto.randomBytes(16).toString("hex");
      fs.renameSync(path2, name);
      fs.unlinkSync(name);
    };
    var uint32 = (a, b, c) => a === a >>> 0 ? a : b === b >>> 0 ? b : c;
    var Unpack = class extends Parser {
      constructor(opt) {
        if (!opt)
          opt = {};
        opt.ondone = (_) => {
          this[ENDED] = true;
          this[MAYBECLOSE]();
        };
        super(opt);
        this.reservations = pathReservations();
        this.transform = typeof opt.transform === "function" ? opt.transform : null;
        this.writable = true;
        this.readable = false;
        this[PENDING] = 0;
        this[ENDED] = false;
        this.dirCache = opt.dirCache || new Map();
        if (typeof opt.uid === "number" || typeof opt.gid === "number") {
          if (typeof opt.uid !== "number" || typeof opt.gid !== "number")
            throw new TypeError("cannot set owner without number uid and gid");
          if (opt.preserveOwner) {
            throw new TypeError("cannot preserve owner in archive and also set owner explicitly");
          }
          this.uid = opt.uid;
          this.gid = opt.gid;
          this.setOwner = true;
        } else {
          this.uid = null;
          this.gid = null;
          this.setOwner = false;
        }
        if (opt.preserveOwner === void 0 && typeof opt.uid !== "number")
          this.preserveOwner = process.getuid && process.getuid() === 0;
        else
          this.preserveOwner = !!opt.preserveOwner;
        this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : null;
        this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : null;
        this.forceChown = opt.forceChown === true;
        this.win32 = !!opt.win32 || process.platform === "win32";
        this.newer = !!opt.newer;
        this.keep = !!opt.keep;
        this.noMtime = !!opt.noMtime;
        this.preservePaths = !!opt.preservePaths;
        this.unlink = !!opt.unlink;
        this.cwd = path.resolve(opt.cwd || process.cwd());
        this.strip = +opt.strip || 0;
        this.processUmask = opt.noChmod ? 0 : process.umask();
        this.umask = typeof opt.umask === "number" ? opt.umask : this.processUmask;
        this.dmode = opt.dmode || 511 & ~this.umask;
        this.fmode = opt.fmode || 438 & ~this.umask;
        this.on("entry", (entry) => this[ONENTRY](entry));
      }
      warn(code, msg, data = {}) {
        if (code === "TAR_BAD_ARCHIVE" || code === "TAR_ABORT")
          data.recoverable = false;
        return super.warn(code, msg, data);
      }
      [MAYBECLOSE]() {
        if (this[ENDED] && this[PENDING] === 0) {
          this.emit("prefinish");
          this.emit("finish");
          this.emit("end");
          this.emit("close");
        }
      }
      [CHECKPATH](entry) {
        if (this.strip) {
          const parts = entry.path.split(/\/|\\/);
          if (parts.length < this.strip)
            return false;
          entry.path = parts.slice(this.strip).join("/");
          if (entry.type === "Link") {
            const linkparts = entry.linkpath.split(/\/|\\/);
            if (linkparts.length >= this.strip)
              entry.linkpath = linkparts.slice(this.strip).join("/");
          }
        }
        if (!this.preservePaths) {
          const p = entry.path;
          if (p.match(/(^|\/|\\)\.\.(\\|\/|$)/)) {
            this.warn("TAR_ENTRY_ERROR", `path contains '..'`, {
              entry,
              path: p
            });
            return false;
          }
          if (path.win32.isAbsolute(p)) {
            const parsed = path.win32.parse(p);
            entry.path = p.substr(parsed.root.length);
            const r = parsed.root;
            this.warn("TAR_ENTRY_INFO", `stripping ${r} from absolute path`, {
              entry,
              path: p
            });
          }
        }
        if (this.win32) {
          const parsed = path.win32.parse(entry.path);
          entry.path = parsed.root === "" ? wc.encode(entry.path) : parsed.root + wc.encode(entry.path.substr(parsed.root.length));
        }
        if (path.isAbsolute(entry.path))
          entry.absolute = entry.path;
        else
          entry.absolute = path.resolve(this.cwd, entry.path);
        return true;
      }
      [ONENTRY](entry) {
        if (!this[CHECKPATH](entry))
          return entry.resume();
        assert.equal(typeof entry.absolute, "string");
        switch (entry.type) {
          case "Directory":
          case "GNUDumpDir":
            if (entry.mode)
              entry.mode = entry.mode | 448;
          case "File":
          case "OldFile":
          case "ContiguousFile":
          case "Link":
          case "SymbolicLink":
            return this[CHECKFS](entry);
          case "CharacterDevice":
          case "BlockDevice":
          case "FIFO":
          default:
            return this[UNSUPPORTED](entry);
        }
      }
      [ONERROR](er, entry) {
        if (er.name === "CwdError")
          this.emit("error", er);
        else {
          this.warn("TAR_ENTRY_ERROR", er, { entry });
          this[UNPEND]();
          entry.resume();
        }
      }
      [MKDIR](dir, mode, cb) {
        mkdir(dir, {
          uid: this.uid,
          gid: this.gid,
          processUid: this.processUid,
          processGid: this.processGid,
          umask: this.processUmask,
          preserve: this.preservePaths,
          unlink: this.unlink,
          cache: this.dirCache,
          cwd: this.cwd,
          mode,
          noChmod: this.noChmod
        }, cb);
      }
      [DOCHOWN](entry) {
        return this.forceChown || this.preserveOwner && (typeof entry.uid === "number" && entry.uid !== this.processUid || typeof entry.gid === "number" && entry.gid !== this.processGid) || (typeof this.uid === "number" && this.uid !== this.processUid || typeof this.gid === "number" && this.gid !== this.processGid);
      }
      [UID](entry) {
        return uint32(this.uid, entry.uid, this.processUid);
      }
      [GID](entry) {
        return uint32(this.gid, entry.gid, this.processGid);
      }
      [FILE](entry, fullyDone) {
        const mode = entry.mode & 4095 || this.fmode;
        const stream = new fsm.WriteStream(entry.absolute, {
          flags: getFlag(entry.size),
          mode,
          autoClose: false
        });
        stream.on("error", (er) => this[ONERROR](er, entry));
        let actions = 1;
        const done = (er) => {
          if (er)
            return this[ONERROR](er, entry);
          if (--actions === 0) {
            fs.close(stream.fd, (er2) => {
              fullyDone();
              er2 ? this[ONERROR](er2, entry) : this[UNPEND]();
            });
          }
        };
        stream.on("finish", (_) => {
          const abs = entry.absolute;
          const fd = stream.fd;
          if (entry.mtime && !this.noMtime) {
            actions++;
            const atime = entry.atime || new Date();
            const mtime = entry.mtime;
            fs.futimes(fd, atime, mtime, (er) => er ? fs.utimes(abs, atime, mtime, (er2) => done(er2 && er)) : done());
          }
          if (this[DOCHOWN](entry)) {
            actions++;
            const uid = this[UID](entry);
            const gid = this[GID](entry);
            fs.fchown(fd, uid, gid, (er) => er ? fs.chown(abs, uid, gid, (er2) => done(er2 && er)) : done());
          }
          done();
        });
        const tx = this.transform ? this.transform(entry) || entry : entry;
        if (tx !== entry) {
          tx.on("error", (er) => this[ONERROR](er, entry));
          entry.pipe(tx);
        }
        tx.pipe(stream);
      }
      [DIRECTORY](entry, fullyDone) {
        const mode = entry.mode & 4095 || this.dmode;
        this[MKDIR](entry.absolute, mode, (er) => {
          if (er) {
            fullyDone();
            return this[ONERROR](er, entry);
          }
          let actions = 1;
          const done = (_) => {
            if (--actions === 0) {
              fullyDone();
              this[UNPEND]();
              entry.resume();
            }
          };
          if (entry.mtime && !this.noMtime) {
            actions++;
            fs.utimes(entry.absolute, entry.atime || new Date(), entry.mtime, done);
          }
          if (this[DOCHOWN](entry)) {
            actions++;
            fs.chown(entry.absolute, this[UID](entry), this[GID](entry), done);
          }
          done();
        });
      }
      [UNSUPPORTED](entry) {
        entry.unsupported = true;
        this.warn("TAR_ENTRY_UNSUPPORTED", `unsupported entry type: ${entry.type}`, { entry });
        entry.resume();
      }
      [SYMLINK](entry, done) {
        this[LINK](entry, entry.linkpath, "symlink", done);
      }
      [HARDLINK](entry, done) {
        this[LINK](entry, path.resolve(this.cwd, entry.linkpath), "link", done);
      }
      [PEND]() {
        this[PENDING]++;
      }
      [UNPEND]() {
        this[PENDING]--;
        this[MAYBECLOSE]();
      }
      [SKIP](entry) {
        this[UNPEND]();
        entry.resume();
      }
      [ISREUSABLE](entry, st) {
        return entry.type === "File" && !this.unlink && st.isFile() && st.nlink <= 1 && process.platform !== "win32";
      }
      [CHECKFS](entry) {
        this[PEND]();
        const paths = [entry.path];
        if (entry.linkpath)
          paths.push(entry.linkpath);
        this.reservations.reserve(paths, (done) => this[CHECKFS2](entry, done));
      }
      [CHECKFS2](entry, done) {
        this[MKDIR](path.dirname(entry.absolute), this.dmode, (er) => {
          if (er) {
            done();
            return this[ONERROR](er, entry);
          }
          fs.lstat(entry.absolute, (er2, st) => {
            if (st && (this.keep || this.newer && st.mtime > entry.mtime)) {
              this[SKIP](entry);
              done();
            } else if (er2 || this[ISREUSABLE](entry, st))
              this[MAKEFS](null, entry, done);
            else if (st.isDirectory()) {
              if (entry.type === "Directory") {
                if (!this.noChmod && (!entry.mode || (st.mode & 4095) === entry.mode))
                  this[MAKEFS](null, entry, done);
                else {
                  fs.chmod(entry.absolute, entry.mode, (er3) => this[MAKEFS](er3, entry, done));
                }
              } else
                fs.rmdir(entry.absolute, (er3) => this[MAKEFS](er3, entry, done));
            } else
              unlinkFile(entry.absolute, (er3) => this[MAKEFS](er3, entry, done));
          });
        });
      }
      [MAKEFS](er, entry, done) {
        if (er)
          return this[ONERROR](er, entry);
        switch (entry.type) {
          case "File":
          case "OldFile":
          case "ContiguousFile":
            return this[FILE](entry, done);
          case "Link":
            return this[HARDLINK](entry, done);
          case "SymbolicLink":
            return this[SYMLINK](entry, done);
          case "Directory":
          case "GNUDumpDir":
            return this[DIRECTORY](entry, done);
        }
      }
      [LINK](entry, linkpath, link, done) {
        fs[link](linkpath, entry.absolute, (er) => {
          if (er)
            return this[ONERROR](er, entry);
          done();
          this[UNPEND]();
          entry.resume();
        });
      }
    };
    var UnpackSync = class extends Unpack {
      [CHECKFS](entry) {
        const er = this[MKDIR](path.dirname(entry.absolute), this.dmode, neverCalled);
        if (er)
          return this[ONERROR](er, entry);
        try {
          const st = fs.lstatSync(entry.absolute);
          if (this.keep || this.newer && st.mtime > entry.mtime)
            return this[SKIP](entry);
          else if (this[ISREUSABLE](entry, st))
            return this[MAKEFS](null, entry, neverCalled);
          else {
            try {
              if (st.isDirectory()) {
                if (entry.type === "Directory") {
                  if (!this.noChmod && entry.mode && (st.mode & 4095) !== entry.mode)
                    fs.chmodSync(entry.absolute, entry.mode);
                } else
                  fs.rmdirSync(entry.absolute);
              } else
                unlinkFileSync(entry.absolute);
              return this[MAKEFS](null, entry, neverCalled);
            } catch (er2) {
              return this[ONERROR](er2, entry);
            }
          }
        } catch (er2) {
          return this[MAKEFS](null, entry, neverCalled);
        }
      }
      [FILE](entry, _) {
        const mode = entry.mode & 4095 || this.fmode;
        const oner = (er) => {
          let closeError;
          try {
            fs.closeSync(fd);
          } catch (e) {
            closeError = e;
          }
          if (er || closeError)
            this[ONERROR](er || closeError, entry);
        };
        let fd;
        try {
          fd = fs.openSync(entry.absolute, getFlag(entry.size), mode);
        } catch (er) {
          return oner(er);
        }
        const tx = this.transform ? this.transform(entry) || entry : entry;
        if (tx !== entry) {
          tx.on("error", (er) => this[ONERROR](er, entry));
          entry.pipe(tx);
        }
        tx.on("data", (chunk) => {
          try {
            fs.writeSync(fd, chunk, 0, chunk.length);
          } catch (er) {
            oner(er);
          }
        });
        tx.on("end", (_2) => {
          let er = null;
          if (entry.mtime && !this.noMtime) {
            const atime = entry.atime || new Date();
            const mtime = entry.mtime;
            try {
              fs.futimesSync(fd, atime, mtime);
            } catch (futimeser) {
              try {
                fs.utimesSync(entry.absolute, atime, mtime);
              } catch (utimeser) {
                er = futimeser;
              }
            }
          }
          if (this[DOCHOWN](entry)) {
            const uid = this[UID](entry);
            const gid = this[GID](entry);
            try {
              fs.fchownSync(fd, uid, gid);
            } catch (fchowner) {
              try {
                fs.chownSync(entry.absolute, uid, gid);
              } catch (chowner) {
                er = er || fchowner;
              }
            }
          }
          oner(er);
        });
      }
      [DIRECTORY](entry, _) {
        const mode = entry.mode & 4095 || this.dmode;
        const er = this[MKDIR](entry.absolute, mode);
        if (er)
          return this[ONERROR](er, entry);
        if (entry.mtime && !this.noMtime) {
          try {
            fs.utimesSync(entry.absolute, entry.atime || new Date(), entry.mtime);
          } catch (er2) {
          }
        }
        if (this[DOCHOWN](entry)) {
          try {
            fs.chownSync(entry.absolute, this[UID](entry), this[GID](entry));
          } catch (er2) {
          }
        }
        entry.resume();
      }
      [MKDIR](dir, mode) {
        try {
          return mkdir.sync(dir, {
            uid: this.uid,
            gid: this.gid,
            processUid: this.processUid,
            processGid: this.processGid,
            umask: this.processUmask,
            preserve: this.preservePaths,
            unlink: this.unlink,
            cache: this.dirCache,
            cwd: this.cwd,
            mode
          });
        } catch (er) {
          return er;
        }
      }
      [LINK](entry, linkpath, link, _) {
        try {
          fs[link + "Sync"](linkpath, entry.absolute);
          entry.resume();
        } catch (er) {
          return this[ONERROR](er, entry);
        }
      }
    };
    Unpack.Sync = UnpackSync;
    module2.exports = Unpack;
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/extract.js
var require_extract = __commonJS({
  "../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/lib/extract.js"(exports2, module2) {
    "use strict";
    var hlo = require_high_level_opt();
    var Unpack = require_unpack();
    var fs = require("fs");
    var fsm = require_fs_minipass();
    var path = require("path");
    module2.exports = (opt_, files, cb) => {
      if (typeof opt_ === "function")
        cb = opt_, files = null, opt_ = {};
      else if (Array.isArray(opt_))
        files = opt_, opt_ = {};
      if (typeof files === "function")
        cb = files, files = null;
      if (!files)
        files = [];
      else
        files = Array.from(files);
      const opt = hlo(opt_);
      if (opt.sync && typeof cb === "function")
        throw new TypeError("callback not supported for sync tar functions");
      if (!opt.file && typeof cb === "function")
        throw new TypeError("callback only supported with file option");
      if (files.length)
        filesFilter(opt, files);
      return opt.file && opt.sync ? extractFileSync(opt) : opt.file ? extractFile(opt, cb) : opt.sync ? extractSync(opt) : extract(opt);
    };
    var filesFilter = (opt, files) => {
      const map = new Map(files.map((f) => [f.replace(/\/+$/, ""), true]));
      const filter = opt.filter;
      const mapHas = (file, r) => {
        const root = r || path.parse(file).root || ".";
        const ret = file === root ? false : map.has(file) ? map.get(file) : mapHas(path.dirname(file), root);
        map.set(file, ret);
        return ret;
      };
      opt.filter = filter ? (file, entry) => filter(file, entry) && mapHas(file.replace(/\/+$/, "")) : (file) => mapHas(file.replace(/\/+$/, ""));
    };
    var extractFileSync = (opt) => {
      const u = new Unpack.Sync(opt);
      const file = opt.file;
      const stat = fs.statSync(file);
      const readSize = opt.maxReadSize || 16 * 1024 * 1024;
      const stream = new fsm.ReadStreamSync(file, {
        readSize,
        size: stat.size
      });
      stream.pipe(u);
    };
    var extractFile = (opt, cb) => {
      const u = new Unpack(opt);
      const readSize = opt.maxReadSize || 16 * 1024 * 1024;
      const file = opt.file;
      const p = new Promise((resolve, reject) => {
        u.on("error", reject);
        u.on("close", resolve);
        fs.stat(file, (er, stat) => {
          if (er)
            reject(er);
          else {
            const stream = new fsm.ReadStream(file, {
              readSize,
              size: stat.size
            });
            stream.on("error", reject);
            stream.pipe(u);
          }
        });
      });
      return cb ? p.then(cb, cb) : p;
    };
    var extractSync = (opt) => new Unpack.Sync(opt);
    var extract = (opt) => new Unpack(opt);
  }
});

// ../../../../.kawi/packages/5675d6018ac964f8db77754fe0555413/node_modules/tar/index.js
"use strict";
exports.c = exports.create = require_create();
exports.r = exports.replace = require_replace();
exports.t = exports.list = require_list();
exports.u = exports.update = require_update();
exports.x = exports.extract = require_extract();
exports.Pack = require_pack();
exports.Unpack = require_unpack();
exports.Parse = require_parse();
exports.ReadEntry = require_read_entry();
exports.WriteEntry = require_write_entry();
exports.Header = require_header();
exports.Pax = require_pax();
exports.types = require_types();
