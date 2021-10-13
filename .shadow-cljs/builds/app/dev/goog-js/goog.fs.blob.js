["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fs/blob.js"],"~:js","goog.provide(\"goog.fs.blob\");\ngoog.require(\"goog.array\");\ngoog.fs.blob.getBlob = function(var_args) {\n  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;\n  if (BlobBuilder !== undefined) {\n    var bb = new BlobBuilder;\n    for (var i = 0; i < arguments.length; i++) {\n      bb.append(arguments[i]);\n    }\n    return bb.getBlob();\n  } else {\n    return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));\n  }\n};\ngoog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {\n  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;\n  if (BlobBuilder !== undefined) {\n    var bb = new BlobBuilder;\n    for (var i = 0; i < parts.length; i++) {\n      bb.append(parts[i], opt_endings);\n    }\n    return bb.getBlob(opt_type);\n  } else {\n    if (goog.global.Blob !== undefined) {\n      var properties = {};\n      if (opt_type) {\n        properties[\"type\"] = opt_type;\n      }\n      if (opt_endings) {\n        properties[\"endings\"] = opt_endings;\n      }\n      return new Blob(parts, properties);\n    } else {\n      throw new Error(\"This browser doesn't seem to support creating Blobs\");\n    }\n  }\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Wrappers for the HTML5 File API. These wrappers closely mirror\n * the underlying APIs, but use Closure-style events and Deferred return values.\n * Their existence also makes it possible to mock the FileSystem API for testing\n * in browsers that don't support it natively.\n *\n * When adding public functions to anything under this namespace, be sure to add\n * its mock counterpart to goog.testing.fs.\n */\n\ngoog.provide('goog.fs.blob');\n\ngoog.require('goog.array');\n\n/**\n * Concatenates one or more values together and converts them to a Blob.\n *\n * @param {...(string|!Blob|!ArrayBuffer)} var_args The values that will make up\n *     the resulting blob.\n * @return {!Blob} The blob.\n */\ngoog.fs.blob.getBlob = function(var_args) {\n  'use strict';\n  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;\n\n  if (BlobBuilder !== undefined) {\n    var bb = new BlobBuilder();\n    for (var i = 0; i < arguments.length; i++) {\n      bb.append(arguments[i]);\n    }\n    return bb.getBlob();\n  } else {\n    return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));\n  }\n};\n\n\n/**\n * Creates a blob with the given properties.\n * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.\n *\n * @param {!Array<string|!Blob|!ArrayBuffer>} parts The values that will make up\n *     the resulting blob (subset supported by both BlobBuilder.append() and\n *     Blob constructor).\n * @param {string=} opt_type The MIME type of the Blob.\n * @param {string=} opt_endings Specifies how strings containing newlines are to\n *     be written out.\n * @return {!Blob} The blob.\n */\ngoog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {\n  'use strict';\n  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;\n\n  if (BlobBuilder !== undefined) {\n    var bb = new BlobBuilder();\n    for (var i = 0; i < parts.length; i++) {\n      bb.append(parts[i], opt_endings);\n    }\n    return bb.getBlob(opt_type);\n  } else if (goog.global.Blob !== undefined) {\n    var properties = {};\n    if (opt_type) {\n      properties['type'] = opt_type;\n    }\n    if (opt_endings) {\n      properties['endings'] = opt_endings;\n    }\n    return new Blob(parts, properties);\n  } else {\n    throw new Error('This browser doesn\\'t seem to support creating Blobs');\n  }\n};\n","~:compiled-at",1634036044941,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fs.blob.js\",\n\"lineCount\":38,\n\"mappings\":\"AAgBAA,IAAKC,CAAAA,OAAL,CAAa,cAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,YAAb,CAAA;AASAF,IAAKG,CAAAA,EAAGC,CAAAA,IAAKC,CAAAA,OAAb,GAAuBC,QAAQ,CAACC,QAAD,CAAW;AAExC,MAAIC,cAAcR,IAAKS,CAAAA,MAAOD,CAAAA,WAA1BA,IAAyCR,IAAKS,CAAAA,MAAOC,CAAAA,iBAAzD;AAEA,MAAIF,WAAJ,KAAoBG,SAApB,CAA+B;AAC7B,QAAIC,KAAK,IAAIJ,WAAb;AACA,SAAK,IAAIK,IAAI,CAAb,EAAgBA,CAAhB,GAAoBC,SAAUC,CAAAA,MAA9B,EAAsCF,CAAA,EAAtC;AACED,QAAGI,CAAAA,MAAH,CAAUF,SAAA,CAAUD,CAAV,CAAV,CAAA;AADF;AAGA,WAAOD,EAAGP,CAAAA,OAAH,EAAP;AAL6B,GAA/B;AAOE,WAAOL,IAAKG,CAAAA,EAAGC,CAAAA,IAAKa,CAAAA,qBAAb,CAAmCjB,IAAKkB,CAAAA,KAAMC,CAAAA,OAAX,CAAmBL,SAAnB,CAAnC,CAAP;AAPF;AAJwC,CAA1C;AA4BAd,IAAKG,CAAAA,EAAGC,CAAAA,IAAKa,CAAAA,qBAAb,GAAqCG,QAAQ,CAACC,KAAD,EAAQC,QAAR,EAAkBC,WAAlB,CAA+B;AAE1E,MAAIf,cAAcR,IAAKS,CAAAA,MAAOD,CAAAA,WAA1BA,IAAyCR,IAAKS,CAAAA,MAAOC,CAAAA,iBAAzD;AAEA,MAAIF,WAAJ,KAAoBG,SAApB,CAA+B;AAC7B,QAAIC,KAAK,IAAIJ,WAAb;AACA,SAAK,IAAIK,IAAI,CAAb,EAAgBA,CAAhB,GAAoBQ,KAAMN,CAAAA,MAA1B,EAAkCF,CAAA,EAAlC;AACED,QAAGI,CAAAA,MAAH,CAAUK,KAAA,CAAMR,CAAN,CAAV,EAAoBU,WAApB,CAAA;AADF;AAGA,WAAOX,EAAGP,CAAAA,OAAH,CAAWiB,QAAX,CAAP;AAL6B,GAA/B;AAMO,QAAItB,IAAKS,CAAAA,MAAOe,CAAAA,IAAhB,KAAyBb,SAAzB,CAAoC;AACzC,UAAIc,aAAa,EAAjB;AACA,UAAIH,QAAJ;AACEG,kBAAA,CAAW,MAAX,CAAA,GAAqBH,QAArB;AADF;AAGA,UAAIC,WAAJ;AACEE,kBAAA,CAAW,SAAX,CAAA,GAAwBF,WAAxB;AADF;AAGA,aAAO,IAAIC,IAAJ,CAASH,KAAT,EAAgBI,UAAhB,CAAP;AARyC,KAApC;AAUL,YAAM,IAAIC,KAAJ,CAAU,qDAAV,CAAN;AAVK;AANP;AAJ0E,CAA5E;;\",\n\"sources\":[\"goog/fs/blob.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Wrappers for the HTML5 File API. These wrappers closely mirror\\n * the underlying APIs, but use Closure-style events and Deferred return values.\\n * Their existence also makes it possible to mock the FileSystem API for testing\\n * in browsers that don't support it natively.\\n *\\n * When adding public functions to anything under this namespace, be sure to add\\n * its mock counterpart to goog.testing.fs.\\n */\\n\\ngoog.provide('goog.fs.blob');\\n\\ngoog.require('goog.array');\\n\\n/**\\n * Concatenates one or more values together and converts them to a Blob.\\n *\\n * @param {...(string|!Blob|!ArrayBuffer)} var_args The values that will make up\\n *     the resulting blob.\\n * @return {!Blob} The blob.\\n */\\ngoog.fs.blob.getBlob = function(var_args) {\\n  'use strict';\\n  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;\\n\\n  if (BlobBuilder !== undefined) {\\n    var bb = new BlobBuilder();\\n    for (var i = 0; i < arguments.length; i++) {\\n      bb.append(arguments[i]);\\n    }\\n    return bb.getBlob();\\n  } else {\\n    return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));\\n  }\\n};\\n\\n\\n/**\\n * Creates a blob with the given properties.\\n * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.\\n *\\n * @param {!Array<string|!Blob|!ArrayBuffer>} parts The values that will make up\\n *     the resulting blob (subset supported by both BlobBuilder.append() and\\n *     Blob constructor).\\n * @param {string=} opt_type The MIME type of the Blob.\\n * @param {string=} opt_endings Specifies how strings containing newlines are to\\n *     be written out.\\n * @return {!Blob} The blob.\\n */\\ngoog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {\\n  'use strict';\\n  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;\\n\\n  if (BlobBuilder !== undefined) {\\n    var bb = new BlobBuilder();\\n    for (var i = 0; i < parts.length; i++) {\\n      bb.append(parts[i], opt_endings);\\n    }\\n    return bb.getBlob(opt_type);\\n  } else if (goog.global.Blob !== undefined) {\\n    var properties = {};\\n    if (opt_type) {\\n      properties['type'] = opt_type;\\n    }\\n    if (opt_endings) {\\n      properties['endings'] = opt_endings;\\n    }\\n    return new Blob(parts, properties);\\n  } else {\\n    throw new Error('This browser doesn\\\\'t seem to support creating Blobs');\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"fs\",\"blob\",\"getBlob\",\"goog.fs.blob.getBlob\",\"var_args\",\"BlobBuilder\",\"global\",\"WebKitBlobBuilder\",\"undefined\",\"bb\",\"i\",\"arguments\",\"length\",\"append\",\"getBlobWithProperties\",\"array\",\"toArray\",\"goog.fs.blob.getBlobWithProperties\",\"parts\",\"opt_type\",\"opt_endings\",\"Blob\",\"properties\",\"Error\"]\n}\n"]