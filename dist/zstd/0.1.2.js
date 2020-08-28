(function(global, context){
	var fileData=[]
	var cacheData=[]

	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:24:26.911Z",
			"mtimeMs": 1598588666911.1292,
			"atime": "2020-08-28T04:24:26.939Z",
			"atimeMs": 1598588666939.129,
			"isdirectory": true
		},
		"filename": ""
	}})
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:24:26.899Z",
			"mtimeMs": 1598588666899.1294,
			"atime": "2020-08-28T04:24:26.951Z",
			"atimeMs": 1598588666951.1287,
			"isdirectory": true
		},
		"filename": "zstd-codec"
	}})
	fileData.push(function(){ var item= cacheData[2]; if(!item){ item= cacheData[2]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.951Z",
			"atimeMs": 1598588666951.1287,
			"isfile": true
		},
		"filename": "zstd-codec/index.js",
		"content": "const ZstdCodec = require('./lib/zstd-codec.js');\n\nmodule.ZstdCodec = {};\nmodule.exports.ZstdCodec = ZstdCodec;\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){return 	{
		"stat": {
			"mtime": "2020-08-28T04:24:26.899Z",
			"mtimeMs": 1598588666899.1294,
			"atime": "2020-08-28T04:24:26.955Z",
			"atimeMs": 1598588666955.1287,
			"isdirectory": true
		},
		"filename": "zstd-codec/lib"
	}})
	fileData.push(function(){ var item= cacheData[4]; if(!item){ item= cacheData[4]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.955Z",
			"atimeMs": 1598588666955.1287,
			"isfile": true
		},
		"filename": "zstd-codec/lib/constants.js",
		"content": "exports.DEFAULT_COMPRESSION_LEVEL = 3;\nexports.STREAMING_DEFAULT_BUFFER_SIZE = 512 * 1024;\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[5]; if(!item){ item= cacheData[5]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.955Z",
			"atimeMs": 1598588666955.1287,
			"isfile": true
		},
		"filename": "zstd-codec/lib/helpers.js",
		"content": "class ArrayBufferHelper {\n    static transfer(old_buffer, new_capacity) {\n        const bytes = new Uint8Array(new ArrayBuffer(new_capacity));\n        bytes.set(new Uint8Array(old_buffer.slice(0, new_capacity)));\n        return bytes.buffer;\n    }\n}\n\n\nconst getClassName = (obj) => {\n    if (!obj || typeof obj != 'object') return null;\n\n    // Object.prototype.toString returns '[object ClassName]',\n    // remove prefix '[object ' and suffix ']'\n    return Object.prototype.toString.call(obj).slice('[object '.length, -1);\n};\n\n\nconst isUint8Array = (obj) => {\n    return getClassName(obj) == 'Uint8Array';\n};\n\n\nconst isString = (obj) => {\n    return typeof obj == 'string' || getClassName(obj) == 'String';\n};\n\n\nconst toTypedArray = (chunk, encoding, string_decoder) => {\n    if (isString(chunk)) {\n        chunk = string_decoder(encoding);\n    }\n\n    if (isUint8Array(chunk)) {\n        // NOTE: Buffer is recognized as Uint8Array object.\n        return chunk;\n    }\n    else if (getClassName(chunk) == 'ArrayBuffer') {\n        return new Uint8Array(chunk);\n    }\n    else if (Array.isArray(chunk)) {\n        return new Uint8Array(chunk);\n    }\n\n    return null;\n};\n\n\n// NOTE: only available on Node.js environment\nconst fromTypedArrayToBuffer = (typedArray) => {\n    return Buffer.from(typedArray.buffer);\n};\n\n\nexports.ArrayBufferHelper = ArrayBufferHelper;\nexports.getClassName = getClassName;\nexports.isUint8Array = isUint8Array;\nexports.isString = isString;\nexports.toTypedArray = toTypedArray;\nexports.fromTypedArrayToBuffer = fromTypedArrayToBuffer;\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[6]; if(!item){ item= cacheData[6]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.959Z",
			"atimeMs": 1598588666959.1287,
			"isfile": true
		},
		"filename": "zstd-codec/lib/module.js",
		"content": "// REF: https://stackoverflow.com/a/47880734\nconst wasmSupported = (() => {\n    try {\n        if (typeof WebAssembly === \"object\"\n            && typeof WebAssembly.instantiate === \"function\") {\n            var module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));\n            if (module instanceof WebAssembly.Module)\n                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;\n        }\n    } catch (e) {\n    }\n    return false;\n})();\n\nexports.run = (f) => {\n    const Module = {};\n    Module.onRuntimeInitialized = () => {\n        f(Module);\n    };\n\n    if (wasmSupported) {\n        require('./zstd-codec-binding-wasm.js')(Module);\n    }\n    else {\n        require('./zstd-codec-binding.js')(Module);\n    }\n};\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[7]; if(!item){ item= cacheData[7]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.959Z",
			"atimeMs": 1598588666959.1287,
			"isfile": true
		},
		"filename": "zstd-codec/lib/zstd-codec-binding-wasm.js",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[8]; if(!item){ item= cacheData[8]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.971Z",
			"atimeMs": 1598588666971.1284,
			"isfile": true
		},
		"filename": "zstd-codec/lib/zstd-codec-binding.js",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[9]; if(!item){ item= cacheData[9]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.995Z",
			"atimeMs": 1598588666995.1282,
			"isfile": true
		},
		"filename": "zstd-codec/lib/zstd-codec.js",
		"content": "const ArrayBufferHelper = require('./helpers.js').ArrayBufferHelper;\nconst constants = require('./constants.js');\n\nconst onReady = (binding) => {\n    const codec = new binding.ZstdCodec();\n\n    const withBindingInstance = (instance, callback) => {\n        try {\n            return callback(instance);\n        }\n        finally {\n            instance.delete();\n        }\n    };\n\n    const withCppVector = (callback) => {\n        const vector = new binding.VectorU8();\n        return withBindingInstance(vector, callback);\n    };\n\n    const correctCompressionLevel = (compression_level) => {\n        return compression_level || constants.DEFAULT_COMPRESSION_LEVEL;\n    };\n\n    const compressBoundImpl = (content_size) => {\n        const rc = codec.compressBound(content_size);\n        return rc >= 0 ? rc : null;\n    };\n\n    const contentSizeImpl = (src_vec) => {\n        const rc = codec.contentSize(src_vec);\n        return rc >= 0 ? rc : null;\n    };\n\n    class ArrayBufferSink {\n        constructor(initial_size) {\n            this._buffer = new ArrayBuffer(initial_size);\n            this._array = new Uint8Array(this._buffer);\n            this._offset = 0;\n        }\n\n        concat(array) {\n            if (array.length + this._offset > this._array.length) {\n                this._grow(Math.max(this._array.length, array.length) * 2);\n            }\n\n            this._array.set(array, this._offset);\n            this._offset += array.length;\n        }\n\n        array() {\n            // NOTE: clone buffer to shrink to fit\n            const buffer = ArrayBufferHelper.transfer(this._buffer, this._offset);\n            return new Uint8Array(buffer);\n        }\n\n        _grow(new_size) {\n            this._buffer = ArrayBufferHelper.transfer(this._buffer, new_size);\n            this._array = new Uint8Array(this._buffer);\n        }\n    }\n\n    class Generic {\n        compressBound(content_bytes) {\n            return compressBoundImpl(content_bytes.length);\n        }\n\n        contentSize(compressed_bytes) {\n            return withCppVector((src) => {\n                binding.cloneToVector(src, compressed_bytes);\n                return contentSizeImpl(src);\n            });\n        }\n    }\n\n    class Simple {\n        compress(content_bytes, compression_level) {\n            // use basic-api `compress`, to embed `frameContentSize`.\n\n            const compressBound = compressBoundImpl(content_bytes.length);\n            if (!compressBound) return null;\n\n            compression_level = correctCompressionLevel(compression_level);\n\n            return withCppVector((src) => {\n                return withCppVector((dest) => {\n                    binding.cloneToVector(src, content_bytes);\n                    dest.resize(compressBound, 0);\n\n                    var rc = codec.compress(dest, src, compression_level);\n                    if (rc < 0) return null;    // `rc` is compressed size\n\n                    dest.resize(rc, 0);\n                    return binding.cloneAsTypedArray(dest);\n                });\n            });\n        }\n\n        decompress(compressed_bytes) {\n            // use streaming-api, to support data without `frameContentSize`.\n            return withCppVector((src) => {\n                return withCppVector((dest) => {\n                    binding.cloneToVector(src, compressed_bytes);\n\n                    const contentSize = contentSizeImpl(src);\n                    if (!contentSize) return null;\n\n                    dest.resize(contentSize, 0);\n\n                    var rc = codec.decompress(dest, src);\n                    if (rc < 0 || rc != contentSize) return null;    // `rc` is compressed size\n\n                    return binding.cloneAsTypedArray(dest);\n                });\n            });\n        }\n\n        compressUsingDict(content_bytes, cdict) {\n            // use basic-api `compress`, to embed `frameContentSize`.\n\n            const compressBound = compressBoundImpl(content_bytes.length);\n            if (!compressBound) return null;\n\n            return withCppVector((src) => {\n                return withCppVector((dest) => {\n                    binding.cloneToVector(src, content_bytes);\n                    dest.resize(compressBound, 0);\n\n                    var rc = codec.compressUsingDict(dest, src, cdict.get());\n                    if (rc < 0) return null;    // `rc` is original content size\n\n                    dest.resize(rc, 0);\n                    return binding.cloneAsTypedArray(dest);\n                });\n            });\n        }\n\n        decompressUsingDict(compressed_bytes, ddict) {\n            // use streaming-api, to support data without `frameContentSize`.\n            return withCppVector((src) => {\n                return withCppVector((dest) => {\n                    binding.cloneToVector(src, compressed_bytes);\n\n                    const contentSize = contentSizeImpl(src);\n                    if (!contentSize) return null;\n\n                    dest.resize(contentSize, 0);\n\n                    var rc = codec.decompressUsingDict(dest, src, ddict.get());\n                    if (rc < 0 || rc != contentSize) return null;    // `rc` is compressed size\n\n                    return binding.cloneAsTypedArray(dest);\n                });\n            });\n        }\n    }\n\n    class Streaming {\n        compress(content_bytes, compression_level) {\n            return withBindingInstance(new binding.ZstdCompressStreamBinding(), (stream) => {\n                const initial_size = compressBoundImpl(content_bytes.length);\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (compressed) => {\n                    sink.concat(compressed);\n                };\n\n                const level = correctCompressionLevel(compression_level);\n\n                if (!stream.begin(level)) return null;\n                if (!stream.transform(content_bytes, callback)) return null;\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        compressChunks(chunks, size_hint, compression_level) {\n            return withBindingInstance(new binding.ZstdCompressStreamBinding(), (stream) => {\n                const initial_size = size_hint || constants.STREAMING_DEFAULT_BUFFER_SIZE;\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (compressed) => {\n                    sink.concat(compressed);\n                };\n\n                const level = correctCompressionLevel(compression_level);\n\n                if (!stream.begin(level)) return null;\n                for (const chunk of chunks) {\n                    if (!stream.transform(chunk, callback)) return null;\n                }\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        compressUsingDict(content_bytes, cdict) {\n            return withBindingInstance(new binding.ZstdCompressStreamBinding(), (stream) => {\n                const initial_size = compressBoundImpl(content_bytes.length);\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (compressed) => {\n                    sink.concat(compressed);\n                };\n\n                if (!stream.beginUsingDict(cdict.get())) return null;\n                if (!stream.transform(content_bytes, callback)) return null;\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        compressChunksUsingDict(chunks, size_hint, cdict) {\n            return withBindingInstance(new binding.ZstdCompressStreamBinding(), (stream) => {\n                const initial_size = size_hint || constants.STREAMING_DEFAULT_BUFFER_SIZE;\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (compressed) => {\n                    sink.concat(compressed);\n                };\n\n                if (!stream.beginUsingDict(cdict.get())) return null;\n                for (const chunk of chunks) {\n                    if (!stream.transform(chunk, callback)) return null;\n                }\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        decompress(compressed_bytes, size_hint) {\n            return withBindingInstance(new binding.ZstdDecompressStreamBinding(), (stream) => {\n                const initial_size = size_hint || this._estimateContentSize(compressed_bytes);\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (decompressed) => {\n                    sink.concat(decompressed);\n                };\n\n                if (!stream.begin()) return null;\n                if (!stream.transform(compressed_bytes, callback)) return null;\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        decompressChunks(chunks, size_hint) {\n            return withBindingInstance(new binding.ZstdDecompressStreamBinding(), (stream) => {\n                const initial_size = size_hint || constants.STREAMING_DEFAULT_BUFFER_SIZE;\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (decompressed) => {\n                    sink.concat(decompressed);\n                };\n\n                if (!stream.begin()) return null;\n                for (const chunk of chunks) {\n                    if (!stream.transform(chunk, callback)) return null;\n                }\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        decompressUsingDict(compressed_bytes, size_hint, ddict) {\n            return withBindingInstance(new binding.ZstdDecompressStreamBinding(), (stream) => {\n                const initial_size = size_hint || this._estimateContentSize(compressed_bytes);\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (decompressed) => {\n                    sink.concat(decompressed);\n                };\n\n                if (!stream.beginUsingDict(ddict.get())) return null;\n                if (!stream.transform(compressed_bytes, callback)) return null;\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        decompressChunksUsingDict(chunks, size_hint, ddict) {\n            return withBindingInstance(new binding.ZstdDecompressStreamBinding(), (stream) => {\n                const initial_size = size_hint || constants.STREAMING_DEFAULT_BUFFER_SIZE;\n                const sink = new ArrayBufferSink(initial_size);\n                const callback = (decompressed) => {\n                    sink.concat(decompressed);\n                };\n\n                if (!stream.beginUsingDict(ddict.get())) return null;\n                for (const chunk of chunks) {\n                    if (!stream.transform(chunk, callback)) return null;\n                }\n                if (!stream.end(callback)) return null;\n\n                return sink.array();\n            });\n        }\n\n        _estimateContentSize(compressed_bytes) {\n            // REF: https://code.facebook.com/posts/1658392934479273/smaller-and-faster-data-compression-with-zstandard/\n            // with lzbench, ratio=3.11 .. 3.14. round up to integer\n            return compressed_bytes.length * 4;\n        }\n    }\n\n    class ZstdCompressionDict {\n        constructor(dict_bytes, compression_level) {\n            this.binding = binding.createCompressionDict(dict_bytes, compression_level);\n        }\n\n        get() {\n            return this.binding;\n        }\n\n        close() {\n            if (this.binding) {\n                this.binding.delete();\n            }\n        }\n\n        delete() {\n            this.close();\n        }\n    }\n\n    class ZstdDecompressionDict {\n        constructor(dict_bytes) {\n            this.binding = new binding.createDecompressionDict(dict_bytes);\n        }\n\n        get() {\n            return this.binding;\n        }\n\n        close() {\n            if (this.binding) {\n                this.binding.delete();\n            }\n        }\n\n        delete() {\n            this.close();\n        }\n    }\n\n    const zstd = {};\n    zstd.Generic = Generic;\n    zstd.Simple = Simple;\n    zstd.Streaming = Streaming;\n\n    zstd.Dict = {};\n    zstd.Dict.Compression = ZstdCompressionDict;\n    zstd.Dict.Decompression = ZstdDecompressionDict;\n\n    return zstd;\n};\n\nexports.run = (f) => {\n    return require('./module.js').run((binding) => {\n        const zstd = onReady(binding);\n        f(zstd);\n    });\n};\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[10]; if(!item){ item= cacheData[10]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.995Z",
			"atimeMs": 1598588666995.1282,
			"isfile": true
		},
		"filename": "zstd-codec/lib/zstd-stream.js",
		"content": "const stream = require('stream');\nconst binding = require('./module.js').Binding;\nconst constants = require('./constants.js');\nconst helpers = require('./helpers.js');\n\nconst getClassName = helpers.getClassName;\nconst toTypedArray = helpers.toTypedArray;\nconst fromTypedArrayToBuffer = helpers.fromTypedArrayToBuffer;\n\nconst onReady = (binding) => {\n    class ZstdCompressTransform extends stream.Transform {\n        constructor(compression_level, string_decoder, option) {\n            super(option || {});\n\n            this.string_decoder = string_decoder;\n            this.binding = new binding.ZstdCompressStreamBinding();\n            this.binding.begin(compression_level || constants.DEFAULT_COMPRESSION_LEVEL);\n            this.callback = (compressed) => {\n                this.push(fromTypedArrayToBuffer(compressed), 'buffer');\n            };\n        }\n\n        _transform(chunk, encoding, callback) {\n            const chunkBytes = toTypedArray(chunk, encoding, this.string_decoder);\n            if (!chunkBytes) {\n                const type_name = getClassName(chunk) || typeof chunk;\n                callback(new Error(`unsupported chunk type: ${type_name}`));\n                return;\n            }\n\n            if (this.binding.transform(chunkBytes, this.callback)) {\n                callback();\n            }\n            else {\n                callback(new Error('ZstdDecompressTransform: Error on _transform'));\n            }\n        }\n\n        _flush(callback) {\n            if (this.binding.flush(this.callback)) {\n                callback();\n            }\n            else {\n                callback(new Error('ZstdDecompressTransform: Error on _flush'));\n            }\n        }\n\n        _final(callback) {\n            if (this.binding.end(this.callback)) {\n                callback();\n            }\n            else {\n                callback(new Error('ZstdDecompressTransform: Error on _final'));\n            }\n        }\n    }\n\n\n    class ZstdDecompressTransform extends stream.Transform {\n        constructor(option) {\n            super(option || {});\n\n            this.binding = new binding.ZstdDecompressStreamBinding();\n            this.binding.begin();\n            this.callback = (decompressed) => {\n                this.push(fromTypedArrayToBuffer(decompressed), 'buffer');\n            };\n        }\n\n        _transform(chunk, encoding, callback) {\n            const chunkBytes = toTypedArray(chunk, encoding, this.string_decoder);\n            if (!chunkBytes) {\n                const type_name = getClassName(chunk) || typeof chunk;\n                callback(new Error(`unsupported chunk type: ${type_name}`));\n                return;\n            }\n\n            if (this.binding.transform(chunk, this.callback)) {\n                callback();\n            }\n            else {\n                callback(new Error('ZstdDecompressTransform: Error on _transform'));\n            }\n        }\n\n        _flush(callback) {\n            if (this.binding.flush(this.callback)) {\n                callback();\n            }\n            else {\n                callback(new Error('ZstdDecompressTransform: Error on _flush'));\n            }\n        }\n\n        _final(callback) {\n            if (this.binding.end(this.callback)) {\n                callback();\n            }\n            else {\n                callback(new Error('ZstdDecompressTransform: Error on _final'));\n            }\n        }\n    }\n\n    const streams = {};\n    streams.ZstdCompressTransform = ZstdCompressTransform;\n    streams.ZstdDecompressTransform = ZstdDecompressTransform;\n    return streams;\n};\n\nexports.run = (f) => {\n    return require('./module.js').run((binding) => {\n        const streams = onReady(binding);\n        f(streams);\n    });\n};\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	fileData.push(function(){ var item= cacheData[11]; if(!item){ item= cacheData[11]= 	{
		"stat": {
			"mtime": "2020-08-28T04:13:54.933Z",
			"mtimeMs": 1598588034933,
			"atime": "2020-08-28T04:24:26.943Z",
			"atimeMs": 1598588666943.1287,
			"isfile": true
		},
		"filename": "zstd-codec/package.json",
		"content": "{\n  \"name\": \"zstd-codec\",\n  \"version\": \"0.1.2\",\n  \"description\": \"Zstandard codec powered by Emscripten\",\n  \"main\": \"index.js\",\n  \"repository\": \"https://github.com/yoshihitoh/zstd-codec\",\n  \"author\": \"yoshihitoh\",\n  \"license\": \"MIT\",\n  \"scripts\": {\n    \"build-binding\": \"bash ../update-zstd-binding.sh\",\n    \"build-local\": \"browserify index-local.js -o dist/bundle.js -t [ babelify --presets [ es2015 ] --compact [false ] ]\",\n    \"lint\": \"eslint lib\",\n    \"test\": \"jest\",\n    \"test-coverage\": \"jest --coverage --collectCoverageFrom=lib/**/*.js --collectCoverageFrom=!lib/zstd-codec-binding.js\",\n    \"test-debug\": \"node --inspect-brk node_modules/.bin/jest --runInBand\"\n  },\n  \"devDependencies\": {\n    \"babel-core\": \"^6.26.0\",\n    \"babel-jest\": \"^23.6.0\",\n    \"babel-preset-es2015\": \"^6.22.0\",\n    \"babelify\": \"^8.0.0\",\n    \"eslint\": \"^6.0.0\",\n    \"eslint-plugin-jest\": \"^22.7.1\",\n    \"jest\": \"^24.8.0\",\n    \"regenerator-runtime\": \"^0.13.2\",\n    \"text-encoding\": \"^0.7.0\"\n  }\n}\n",
		"transpiled": true
	}; item.content= context.Buffer.from(item.content,'binary'); } return item; })
	var filenames={
	"": 0,
	"zstd-codec": 1,
	"zstd-codec/index.js": 2,
	"zstd-codec/lib": 3,
	"zstd-codec/lib/constants.js": 4,
	"zstd-codec/lib/helpers.js": 5,
	"zstd-codec/lib/module.js": 6,
	"zstd-codec/lib/zstd-codec-binding-wasm.js": 7,
	"zstd-codec/lib/zstd-codec-binding.js": 8,
	"zstd-codec/lib/zstd-codec.js": 9,
	"zstd-codec/lib/zstd-stream.js": 10,
	"zstd-codec/package.json": 11
}
		var mod1= function(KModule, exports){
			var i=0,main, pe, filecount, pjson
			for(var id in filenames){
				i = filenames[id]
				if(typeof module == "object"){
					
				main= "zstd-codec"
				main= "zstd-codec$0/node_modules" + (main ? ("/"+main) : "")
				
				}
				KModule.addVirtualFile("zstd-codec$0/node_modules" + (id ? ("/"+id) : ""), fileData[i])
			}
			if(pjson){
				main= pjson.main
				if(!main){
					main= "index.js"
				}
				if(main.substring(0,2)=="./"){
					main= main.substring(2)
				}
				main= "zstd-codec$0/node_modules" + (main ? ("/" + main) : "")
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