["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/inputtype.js"],"~:js","goog.provide(\"goog.dom.InputType\");\ngoog.dom.InputType = {BUTTON:\"button\", CHECKBOX:\"checkbox\", COLOR:\"color\", DATE:\"date\", DATETIME:\"datetime\", DATETIME_LOCAL:\"datetime-local\", EMAIL:\"email\", FILE:\"file\", HIDDEN:\"hidden\", IMAGE:\"image\", MENU:\"menu\", MONTH:\"month\", NUMBER:\"number\", PASSWORD:\"password\", RADIO:\"radio\", RANGE:\"range\", RESET:\"reset\", SEARCH:\"search\", SELECT_MULTIPLE:\"select-multiple\", SELECT_ONE:\"select-one\", SUBMIT:\"submit\", TEL:\"tel\", TEXT:\"text\", TEXTAREA:\"textarea\", TIME:\"time\", URL:\"url\", WEEK:\"week\"};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Defines the goog.dom.InputType enum.  This enumerates all\n * input element types (for INPUT, BUTTON, SELECT and TEXTAREA elements) in\n * either the W3C HTML 4.01 index of elements or the HTML5 draft specification.\n *\n * References:\n * http://www.w3.org/TR/html401/sgml/dtd.html#InputType\n * http://www.w3.org/TR/html-markup/input.html#input\n * https://html.spec.whatwg.org/multipage/forms.html#dom-input-type\n * https://html.spec.whatwg.org/multipage/forms.html#dom-button-type\n * https://html.spec.whatwg.org/multipage/forms.html#dom-select-type\n * https://html.spec.whatwg.org/multipage/forms.html#dom-textarea-type\n */\ngoog.provide('goog.dom.InputType');\n\n\n/**\n * Enum of all input types (for INPUT, BUTTON, SELECT and TEXTAREA elements)\n * specified by the W3C HTML4.01 and HTML5 specifications.\n * @enum {string}\n */\ngoog.dom.InputType = {\n  BUTTON: 'button',\n  CHECKBOX: 'checkbox',\n  COLOR: 'color',\n  DATE: 'date',\n  DATETIME: 'datetime',\n  DATETIME_LOCAL: 'datetime-local',\n  EMAIL: 'email',\n  FILE: 'file',\n  HIDDEN: 'hidden',\n  IMAGE: 'image',\n  MENU: 'menu',\n  MONTH: 'month',\n  NUMBER: 'number',\n  PASSWORD: 'password',\n  RADIO: 'radio',\n  RANGE: 'range',\n  RESET: 'reset',\n  SEARCH: 'search',\n  SELECT_MULTIPLE: 'select-multiple',\n  SELECT_ONE: 'select-one',\n  SUBMIT: 'submit',\n  TEL: 'tel',\n  TEXT: 'text',\n  TEXTAREA: 'textarea',\n  TIME: 'time',\n  URL: 'url',\n  WEEK: 'week'\n};\n","~:compiled-at",1634036045060,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.inputtype.js\",\n\"lineCount\":3,\n\"mappings\":\"AAmBAA,IAAKC,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAQAD,IAAKE,CAAAA,GAAIC,CAAAA,SAAT,GAAqB,CACnBC,OAAQ,QADW,EAEnBC,SAAU,UAFS,EAGnBC,MAAO,OAHY,EAInBC,KAAM,MAJa,EAKnBC,SAAU,UALS,EAMnBC,eAAgB,gBANG,EAOnBC,MAAO,OAPY,EAQnBC,KAAM,MARa,EASnBC,OAAQ,QATW,EAUnBC,MAAO,OAVY,EAWnBC,KAAM,MAXa,EAYnBC,MAAO,OAZY,EAanBC,OAAQ,QAbW,EAcnBC,SAAU,UAdS,EAenBC,MAAO,OAfY,EAgBnBC,MAAO,OAhBY,EAiBnBC,MAAO,OAjBY,EAkBnBC,OAAQ,QAlBW,EAmBnBC,gBAAiB,iBAnBE,EAoBnBC,WAAY,YApBO,EAqBnBC,OAAQ,QArBW,EAsBnBC,IAAK,KAtBc,EAuBnBC,KAAM,MAvBa,EAwBnBC,SAAU,UAxBS,EAyBnBC,KAAM,MAzBa,EA0BnBC,IAAK,KA1Bc,EA2BnBC,KAAM,MA3Ba,CAArB;;\",\n\"sources\":[\"goog/dom/inputtype.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Defines the goog.dom.InputType enum.  This enumerates all\\n * input element types (for INPUT, BUTTON, SELECT and TEXTAREA elements) in\\n * either the W3C HTML 4.01 index of elements or the HTML5 draft specification.\\n *\\n * References:\\n * http://www.w3.org/TR/html401/sgml/dtd.html#InputType\\n * http://www.w3.org/TR/html-markup/input.html#input\\n * https://html.spec.whatwg.org/multipage/forms.html#dom-input-type\\n * https://html.spec.whatwg.org/multipage/forms.html#dom-button-type\\n * https://html.spec.whatwg.org/multipage/forms.html#dom-select-type\\n * https://html.spec.whatwg.org/multipage/forms.html#dom-textarea-type\\n */\\ngoog.provide('goog.dom.InputType');\\n\\n\\n/**\\n * Enum of all input types (for INPUT, BUTTON, SELECT and TEXTAREA elements)\\n * specified by the W3C HTML4.01 and HTML5 specifications.\\n * @enum {string}\\n */\\ngoog.dom.InputType = {\\n  BUTTON: 'button',\\n  CHECKBOX: 'checkbox',\\n  COLOR: 'color',\\n  DATE: 'date',\\n  DATETIME: 'datetime',\\n  DATETIME_LOCAL: 'datetime-local',\\n  EMAIL: 'email',\\n  FILE: 'file',\\n  HIDDEN: 'hidden',\\n  IMAGE: 'image',\\n  MENU: 'menu',\\n  MONTH: 'month',\\n  NUMBER: 'number',\\n  PASSWORD: 'password',\\n  RADIO: 'radio',\\n  RANGE: 'range',\\n  RESET: 'reset',\\n  SEARCH: 'search',\\n  SELECT_MULTIPLE: 'select-multiple',\\n  SELECT_ONE: 'select-one',\\n  SUBMIT: 'submit',\\n  TEL: 'tel',\\n  TEXT: 'text',\\n  TEXTAREA: 'textarea',\\n  TIME: 'time',\\n  URL: 'url',\\n  WEEK: 'week'\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"dom\",\"InputType\",\"BUTTON\",\"CHECKBOX\",\"COLOR\",\"DATE\",\"DATETIME\",\"DATETIME_LOCAL\",\"EMAIL\",\"FILE\",\"HIDDEN\",\"IMAGE\",\"MENU\",\"MONTH\",\"NUMBER\",\"PASSWORD\",\"RADIO\",\"RANGE\",\"RESET\",\"SEARCH\",\"SELECT_MULTIPLE\",\"SELECT_ONE\",\"SUBMIT\",\"TEL\",\"TEXT\",\"TEXTAREA\",\"TIME\",\"URL\",\"WEEK\"]\n}\n"]