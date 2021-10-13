(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3278],{38586:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>a});var t=r(94015),o=r.n(t),c=r(23645),i=r.n(c)()(o());i.push([e.id,"/*\n\n    Name:       yeti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)\n\n*/\n\n\n.cm-s-yeti.CodeMirror {\n  background-color: #ECEAE8 !important;\n  color: #d1c9c0 !important;\n  border: none;\n}\n\n.cm-s-yeti .CodeMirror-gutters {\n  color: #adaba6;\n  background-color: #E5E1DB;\n  border: none;\n}\n.cm-s-yeti .CodeMirror-cursor { border-left: solid thin #d1c9c0; }\n.cm-s-yeti .CodeMirror-linenumber { color: #adaba6; }\n.cm-s-yeti.CodeMirror-focused div.CodeMirror-selected { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::selection, .cm-s-yeti .CodeMirror-line > span::selection, .cm-s-yeti .CodeMirror-line > span > span::selection { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::-moz-selection, .cm-s-yeti .CodeMirror-line > span::-moz-selection, .cm-s-yeti .CodeMirror-line > span > span::-moz-selection { background: #DCD8D2; }\n.cm-s-yeti span.cm-comment { color: #d4c8be; }\n.cm-s-yeti span.cm-string, .cm-s-yeti span.cm-string-2 { color: #96c0d8; }\n.cm-s-yeti span.cm-number { color: #a074c4; }\n.cm-s-yeti span.cm-variable { color: #55b5db; }\n.cm-s-yeti span.cm-variable-2 { color: #a074c4; }\n.cm-s-yeti span.cm-def { color: #55b5db; }\n.cm-s-yeti span.cm-operator { color: #9fb96e; }\n.cm-s-yeti span.cm-keyword { color: #9fb96e; }\n.cm-s-yeti span.cm-atom { color: #a074c4; }\n.cm-s-yeti span.cm-meta { color: #96c0d8; }\n.cm-s-yeti span.cm-tag { color: #96c0d8; }\n.cm-s-yeti span.cm-attribute { color: #9fb96e; }\n.cm-s-yeti span.cm-qualifier { color: #96c0d8; }\n.cm-s-yeti span.cm-property { color: #a074c4; }\n.cm-s-yeti span.cm-builtin { color: #a074c4; }\n.cm-s-yeti span.cm-variable-3, .cm-s-yeti span.cm-type { color: #96c0d8; }\n.cm-s-yeti .CodeMirror-activeline-background { background: #E7E4E0; }\n.cm-s-yeti .CodeMirror-matchingbracket { text-decoration: underline; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/yeti.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;AACA,gCAAgC,+BAA+B,EAAE;AACjE,oCAAoC,cAAc,EAAE;AACpD,wDAAwD,mBAAmB,EAAE;AAC7E,8IAA8I,mBAAmB,EAAE;AACnK,6JAA6J,mBAAmB,EAAE;AAClL,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yBAAyB,cAAc,EAAE;AACzC,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,0BAA0B,cAAc,EAAE;AAC1C,yBAAyB,cAAc,EAAE;AACzC,+BAA+B,cAAc,EAAE;AAC/C,+BAA+B,cAAc,EAAE;AAC/C,8BAA8B,cAAc,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,yDAAyD,cAAc,EAAE;AACzE,+CAA+C,mBAAmB,EAAE;AACpE,yCAAyC,0BAA0B,EAAE",sourcesContent:["/*\n\n    Name:       yeti\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original yeti color scheme by Jesse Weed (https://github.com/jesseweed/yeti-syntax)\n\n*/\n\n\n.cm-s-yeti.CodeMirror {\n  background-color: #ECEAE8 !important;\n  color: #d1c9c0 !important;\n  border: none;\n}\n\n.cm-s-yeti .CodeMirror-gutters {\n  color: #adaba6;\n  background-color: #E5E1DB;\n  border: none;\n}\n.cm-s-yeti .CodeMirror-cursor { border-left: solid thin #d1c9c0; }\n.cm-s-yeti .CodeMirror-linenumber { color: #adaba6; }\n.cm-s-yeti.CodeMirror-focused div.CodeMirror-selected { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::selection, .cm-s-yeti .CodeMirror-line > span::selection, .cm-s-yeti .CodeMirror-line > span > span::selection { background: #DCD8D2; }\n.cm-s-yeti .CodeMirror-line::-moz-selection, .cm-s-yeti .CodeMirror-line > span::-moz-selection, .cm-s-yeti .CodeMirror-line > span > span::-moz-selection { background: #DCD8D2; }\n.cm-s-yeti span.cm-comment { color: #d4c8be; }\n.cm-s-yeti span.cm-string, .cm-s-yeti span.cm-string-2 { color: #96c0d8; }\n.cm-s-yeti span.cm-number { color: #a074c4; }\n.cm-s-yeti span.cm-variable { color: #55b5db; }\n.cm-s-yeti span.cm-variable-2 { color: #a074c4; }\n.cm-s-yeti span.cm-def { color: #55b5db; }\n.cm-s-yeti span.cm-operator { color: #9fb96e; }\n.cm-s-yeti span.cm-keyword { color: #9fb96e; }\n.cm-s-yeti span.cm-atom { color: #a074c4; }\n.cm-s-yeti span.cm-meta { color: #96c0d8; }\n.cm-s-yeti span.cm-tag { color: #96c0d8; }\n.cm-s-yeti span.cm-attribute { color: #9fb96e; }\n.cm-s-yeti span.cm-qualifier { color: #96c0d8; }\n.cm-s-yeti span.cm-property { color: #a074c4; }\n.cm-s-yeti span.cm-builtin { color: #a074c4; }\n.cm-s-yeti span.cm-variable-3, .cm-s-yeti span.cm-type { color: #96c0d8; }\n.cm-s-yeti .CodeMirror-activeline-background { background: #E7E4E0; }\n.cm-s-yeti .CodeMirror-matchingbracket { text-decoration: underline; }\n"],sourceRoot:""}]);const a=i},23645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},94015:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}e.exports=function(e){var r,t,o=(t=4,function(e){if(Array.isArray(e))return e}(r=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(e){o=!0,c=e}finally{try{t||null==a.return||a.return()}finally{if(o)throw c}}return r}}(r,t)||function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[1],i=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),A="/*# ".concat(s," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[c].concat(l).concat([A]).join("\n")}return[c].join("\n")}},83278:(e,n,r)=>{var t=r(38586);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);r(93379)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},93379:(e,n,r)=>{"use strict";var t,o={},c=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}();function i(e,n){for(var r=[],t={},o=0;o<e.length;o++){var c=e[o],i=n.base?c[0]+n.base:c[0],a={css:c[1],media:c[2],sourceMap:c[3]};t[i]?t[i].parts.push(a):r.push(t[i]={id:i,parts:[a]})}return r}function a(e,n){for(var r=0;r<e.length;r++){var t=e[r],c=o[t.id],i=0;if(c){for(c.refs++;i<c.parts.length;i++)c.parts[i](t.parts[i]);for(;i<t.parts.length;i++)c.parts.push(y(t.parts[i],n))}else{for(var a=[];i<t.parts.length;i++)a.push(y(t.parts[i],n));o[t.id]={id:t.id,refs:1,parts:a}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var t=r.nc;t&&(e.attributes.nonce=t)}if(Object.keys(e.attributes).forEach((function(r){n.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(n);else{var o=c(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var A,l=(A=[],function(e,n){return A[e]=n,A.filter(Boolean).join("\n")});function m(e,n,r,t){var o=r?"":t.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var c=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(c,i[n]):e.appendChild(c)}}function d(e,n,r){var t=r.css,o=r.media,c=r.sourceMap;if(o&&e.setAttribute("media",o),c&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var u=null,p=0;function y(e,n){var r,t,o;if(n.singleton){var c=p++;r=u||(u=s(n)),t=m.bind(null,r,c,!1),o=m.bind(null,r,c,!0)}else r=s(n),t=d.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=i(e,n);return a(r,n),function(e){for(var t=[],c=0;c<r.length;c++){var s=r[c],A=o[s.id];A&&(A.refs--,t.push(A))}e&&a(i(e,n),n);for(var l=0;l<t.length;l++){var m=t[l];if(0===m.refs){for(var d=0;d<m.parts.length;d++)m.parts[d]();delete o[m.id]}}}}}}]);
//# sourceMappingURL=3278.63331d62d0268f8b4d82.js.map