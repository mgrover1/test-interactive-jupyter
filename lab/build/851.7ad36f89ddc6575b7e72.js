(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[851],{95619:(e,t,s)=>{"use strict";s.d(t,{g:()=>o});var r,n=s(20790),a=s(93315),i=s(41649);class o{constructor(e){this.trusted=!1,this._changed=new i.Signal(this),this._raw={};const t=r.getData(e.value);this._data=new n.ObservableJSON({values:t}),this._rawData=t;const s=e.value;for(const e in s)switch(e){case"data":break;default:this._raw[e]=r.extract(s,e)}}get changed(){return this._changed}dispose(){this._data.dispose(),i.Signal.clearData(this)}get data(){return this._rawData}get metadata(){return{}}setData(e){e.data&&(this._updateObservable(this._data,e.data),this._rawData=e.data),this._changed.emit(void 0)}toJSON(){const e={};for(const t in this._raw)e[t]=r.extract(this._raw,t);return e}_updateObservable(e,t){const s=e.keys(),r=Object.keys(t);for(const t of s)-1===r.indexOf(t)&&e.delete(t);for(const s of r){const r=e.get(s),n=t[s];r!==n&&e.set(s,n)}}}!function(e){e.getData=function(e){return r.getData(e)}}(o||(o={})),function(e){function t(e){return function(e){const t=Object.create(null);for(const r in e)t[r]=s(e,r);return t}(e)}function s(e,t){const s=e[t];return void 0===s||a.JSONExt.isPrimitive(s)?s:a.JSONExt.deepCopy(s)}e.getData=t,e.getBundleOptions=function(e){return{data:t(e.value)}},e.extract=s}(r||(r={}))},79052:(e,t,s)=>{"use strict";s.d(t,{vy:()=>n,Lz:()=>a,hJ:()=>i,xr:()=>o,F:()=>l,BJ:()=>c,nF:()=>d,Nf:()=>u});var r=s(29603);const n={safe:!0,mimeTypes:["text/html"],defaultRank:50,createRenderer:e=>new r.oI(e)},a={safe:!0,mimeTypes:["image/bmp","image/png","image/jpeg","image/gif"],defaultRank:90,createRenderer:e=>new r.UH(e)},i={safe:!0,mimeTypes:["text/latex"],defaultRank:70,createRenderer:e=>new r.FK(e)},o={safe:!0,mimeTypes:["text/markdown"],defaultRank:60,createRenderer:e=>new r.cw(e)},l={safe:!1,mimeTypes:["image/svg+xml"],defaultRank:80,createRenderer:e=>new r.zt(e)},c={safe:!0,mimeTypes:["text/plain","application/vnd.jupyter.stdout","application/vnd.jupyter.stderr"],defaultRank:120,createRenderer:e=>new r.lH(e)},d={safe:!1,mimeTypes:["text/javascript","application/javascript"],defaultRank:110,createRenderer:e=>new r.ND(e)},u=[n,o,i,l,a,d,c]},90851:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AttachmentModel:()=>a.g,htmlRendererFactory:()=>i.vy,imageRendererFactory:()=>i.Lz,javaScriptRendererFactory:()=>i.nF,latexRendererFactory:()=>i.hJ,markdownRendererFactory:()=>i.xr,standardRendererFactories:()=>i.Nf,svgRendererFactory:()=>i.F,textRendererFactory:()=>i.BJ,removeMath:()=>o.D,replaceMath:()=>o.b,MimeModel:()=>l.a,OutputModel:()=>c.M,RenderMimeRegistry:()=>d.D,renderHTML:()=>u.NN,renderImage:()=>u.co,renderLatex:()=>u.K3,renderMarkdown:()=>u.ap,renderSVG:()=>u.KB,renderText:()=>u.IY,ILatexTypesetter:()=>h._,IRenderMimeRegistry:()=>h.Z,RenderedCommon:()=>p.pY,RenderedHTML:()=>p.oI,RenderedHTMLCommon:()=>p.BP,RenderedImage:()=>p.UH,RenderedJavaScript:()=>p.ND,RenderedLatex:()=>p.FK,RenderedMarkdown:()=>p.cw,RenderedSVG:()=>p.zt,RenderedText:()=>p.lH});var r=s(8130),n={};for(const e in r)"default"!==e&&(n[e]=()=>r[e]);s.d(t,n);var a=s(95619),i=s(79052),o=s(48601),l=s(46160),c=s(83379),d=s(20269),u=s(79834),h=s(62059),p=s(29603)},48601:(e,t,s)=>{"use strict";s.d(t,{D:()=>n,b:()=>a});const r=/(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[{}$]|[{}]|(?:\n\s*)+|@@\d+@@|\\\\(?:\(|\)|\[|\]))/i;function n(e){const t=[];let s,n=null,a=null,o=null,l=0;/`/.test(e)?(e=e.replace(/~/g,"~T").replace(/(^|[^\\])(`+)([^\n]*?[^`\n])\2(?!`)/gm,(e=>e.replace(/\$/g,"~D"))),s=e=>e.replace(/~([TD])/g,((e,t)=>"T"===t?"~":"$"))):s=e=>e;let c=e.replace(/\r\n?/g,"\n").split(r);for(let e=1,r=c.length;e<r;e+=2){const r=c[e];"@"===r.charAt(0)?(c[e]="@@"+t.length+"@@",t.push(r)):null!==n?r===a?l?o=e:(c=i(n,e,s,t,c),n=null,a=null,o=null):r.match(/\n.*\n/)?(null!==o&&(e=o,c=i(n,e,s,t,c)),n=null,a=null,o=null,l=0):"{"===r?l++:"}"===r&&l&&l--:"$"===r||"$$"===r?(n=e,a=r,l=0):"\\\\("===r||"\\\\["===r?(n=e,a="("===r.slice(-1)?"\\\\)":"\\\\]",l=0):"begin"===r.substr(1,5)&&(n=e,a="\\end"+r.substr(6),l=0)}return null!==n&&null!==o&&(c=i(n,o,s,t,c),n=null,a=null,o=null),{text:s(c.join("")),math:t}}function a(e,t){return e.replace(/@@(\d+)@@/g,((e,s)=>{let r=t[s];return"\\\\("===r.substr(0,3)&&"\\\\)"===r.substr(r.length-3)?r="\\("+r.substring(3,r.length-3)+"\\)":"\\\\["===r.substr(0,3)&&"\\\\]"===r.substr(r.length-3)&&(r="\\["+r.substring(3,r.length-3)+"\\]"),r}))}function i(e,t,s,r,n){let a=n.slice(e,t+1).join("").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");for(navigator&&"Microsoft Internet Explorer"===navigator.appName&&(a=a.replace(/(%[^\n]*)\n/g,"$1<br/>\n"));t>e;)n[t]="",t--;return n[e]="@@"+r.length+"@@",s&&(a=s(a)),r.push(a),n}},46160:(e,t,s)=>{"use strict";s.d(t,{a:()=>r});class r{constructor(e={}){this.trusted=!!e.trusted,this._data=e.data||{},this._metadata=e.metadata||{},this._callback=e.callback||n.noOp}get data(){return this._data}get metadata(){return this._metadata}setData(e){this._data=e.data||this._data,this._metadata=e.metadata||this._metadata,this._callback(e)}}var n;!function(e){e.noOp=function(){}}(n||(n={}))},83379:(e,t,s)=>{"use strict";s.d(t,{M:()=>l});var r,n=s(71813),a=s(20790),i=s(93315),o=s(41649);class l{constructor(e){this._changed=new o.Signal(this),this._raw={};const{data:t,metadata:s,trusted:i}=r.getBundleOptions(e);this._data=new a.ObservableJSON({values:t}),this._rawData=t,this._metadata=new a.ObservableJSON({values:s}),this._rawMetadata=s,this.trusted=i;const l=e.value;for(const e in l)switch(e){case"data":case"metadata":break;default:this._raw[e]=r.extract(l,e)}this.type=l.output_type,n.isExecuteResult(l)?this.executionCount=l.execution_count:this.executionCount=null}get changed(){return this._changed}dispose(){this._data.dispose(),this._metadata.dispose(),o.Signal.clearData(this)}get data(){return this._rawData}get metadata(){return this._rawMetadata}setData(e){e.data&&(this._updateObservable(this._data,e.data),this._rawData=e.data),e.metadata&&(this._updateObservable(this._metadata,e.metadata),this._rawMetadata=e.metadata),this._changed.emit(void 0)}toJSON(){const e={};for(const t in this._raw)e[t]=r.extract(this._raw,t);switch(this.type){case"display_data":case"execute_result":case"update_display_data":e.data=this.data,e.metadata=this.metadata}return delete e.transient,e}_updateObservable(e,t){const s=e.keys(),r=Object.keys(t);for(const t of s)-1===r.indexOf(t)&&e.delete(t);for(const s of r){const r=e.get(s),n=t[s];r!==n&&e.set(s,n)}}}!function(e){e.getData=function(e){return r.getData(e)},e.getMetadata=function(e){return r.getMetadata(e)}}(l||(l={})),function(e){function t(e){let t={};if(n.isExecuteResult(e)||n.isDisplayData(e)||n.isDisplayUpdate(e))t=e.data;else if(n.isStream(e))"stderr"===e.name?t["application/vnd.jupyter.stderr"]=e.text:t["application/vnd.jupyter.stdout"]=e.text;else if(n.isError(e)){t["application/vnd.jupyter.error"]=e;const s=e.traceback.join("\n");t["application/vnd.jupyter.stderr"]=s||`${e.ename}: ${e.evalue}`}return function(e){const t=Object.create(null);for(const s in e)t[s]=r(e,s);return t}(t)}function s(e){const t=Object.create(null);if(n.isExecuteResult(e)||n.isDisplayData(e))for(const s in e.metadata)t[s]=r(e.metadata,s);return t}function r(e,t){const s=e[t];return void 0===s||i.JSONExt.isPrimitive(s)?s:JSON.parse(JSON.stringify(s))}e.getData=t,e.getMetadata=s,e.getBundleOptions=function(e){return{data:t(e.value),metadata:s(e.value),trusted:!!e.trusted}},e.extract=r}(r||(r={}))},20269:(e,t,s)=>{"use strict";s.d(t,{D:()=>l});var r,n=s(38320),a=s(66763),i=s(24697),o=s(46160);class l{constructor(e={}){if(this._id=0,this._ranks={},this._types=null,this._factories={},this.translator=e.translator||i.nullTranslator,this.resolver=e.resolver||null,this.linkHandler=e.linkHandler||null,this.latexTypesetter=e.latexTypesetter||null,this.sanitizer=e.sanitizer||n.defaultSanitizer,e.initialFactories)for(const t of e.initialFactories)this.addFactory(t)}get mimeTypes(){return this._types||(this._types=r.sortedTypes(this._ranks))}preferredMimeType(e,t="ensure"){if("ensure"===t||"prefer"===t)for(const t of this.mimeTypes)if(t in e&&this._factories[t].safe)return t;if("ensure"!==t)for(const t of this.mimeTypes)if(t in e)return t}createRenderer(e){if(!(e in this._factories))throw new Error(`No factory for mime type: '${e}'`);return this._factories[e].createRenderer({mimeType:e,resolver:this.resolver,sanitizer:this.sanitizer,linkHandler:this.linkHandler,latexTypesetter:this.latexTypesetter,translator:this.translator})}createModel(e={}){return new o.a(e)}clone(e={}){const t=new l({resolver:e.resolver||this.resolver||void 0,sanitizer:e.sanitizer||this.sanitizer||void 0,linkHandler:e.linkHandler||this.linkHandler||void 0,latexTypesetter:e.latexTypesetter||this.latexTypesetter||void 0,translator:this.translator});return t._factories=Object.assign({},this._factories),t._ranks=Object.assign({},this._ranks),t._id=this._id,t}getFactory(e){return this._factories[e]}addFactory(e,t){void 0===t&&void 0===(t=e.defaultRank)&&(t=100);for(const s of e.mimeTypes)this._factories[s]=e,this._ranks[s]={rank:t,id:this._id++};this._types=null}removeMimeType(e){delete this._factories[e],delete this._ranks[e],this._types=null}getRank(e){const t=this._ranks[e];return t&&t.rank}setRank(e,t){if(!this._ranks[e])return;const s=this._id++;this._ranks[e]={rank:t,id:s},this._types=null}}!function(e){e.UrlResolver=class{constructor(e){if(e.path)this._path=e.path;else{if(!e.session)throw new Error("Either 'path' or 'session' must be given as a constructor option");this._session=e.session}this._contents=e.contents}get path(){var e;return null!==(e=this._path)&&void 0!==e?e:this._session.path}set path(e){this._path=e}async resolveUrl(e){if(this.isLocal(e)){const t=encodeURI(a.PathExt.dirname(this.path));e=a.PathExt.resolve(t,e)}return e}async getDownloadUrl(e){return this.isLocal(e)?this._contents.getDownloadUrl(decodeURIComponent(e)):e}isLocal(e){return!this.isMalformed(e)&&(a.URLExt.isLocal(e)||!!this._contents.driveName(decodeURI(e)))}isMalformed(e){try{return decodeURI(e),!1}catch(e){if(e instanceof URIError)return!0;throw e}}}}(l||(l={})),function(e){e.sortedTypes=function(e){return Object.keys(e).sort(((t,s)=>{const r=e[t],n=e[s];return r.rank!==n.rank?r.rank-n.rank:r.id-n.id}))},e.sessionConnection=function(e){return e.sessionChanged?e.session:e}}(r||(r={}))},79834:(e,t,s)=>{"use strict";s.d(t,{NN:()=>p,co:()=>f,K3:()=>m,ap:()=>g,KB:()=>y,IY:()=>v});var r,n=s(87276),a=s(66763),i=s(24697),o=s(58623),l=s(20694),c=s.n(l),d=s(13917),u=s.n(d),h=s(48601);function p(e){let{host:t,source:s,trusted:n,sanitizer:a,resolver:o,linkHandler:l,shouldTypeset:c,latexTypesetter:d,translator:u}=e;u=u||i.nullTranslator;const h=null==u?void 0:u.load("jupyterlab");let p,f=s;if(!s)return t.textContent="",Promise.resolve(void 0);if(n||(f=`${s}`,s=a.sanitize(s)),t.innerHTML=s,t.getElementsByTagName("script").length>0)if(n)r.evalInnerHTMLScriptTags(t);else{const e=document.createElement("div"),s=document.createElement("pre");s.textContent=h.__("This HTML output contains inline scripts. Are you sure that you want to run arbitrary Javascript within your JupyterLab session?");const n=document.createElement("button");n.textContent=h.__("Run"),n.onclick=e=>{t.innerHTML=f,r.evalInnerHTMLScriptTags(t),t.firstChild&&t.removeChild(t.firstChild)},e.appendChild(s),e.appendChild(n),t.insertBefore(e,t.firstChild)}return r.handleDefaults(t,o),p=o?r.handleUrls(t,o,l):Promise.resolve(void 0),p.then((()=>{c&&d&&d.typeset(t)}))}function f(e){const{host:t,mimeType:s,source:r,width:n,height:a,needsBackground:i,unconfined:o}=e;t.textContent="";const l=document.createElement("img");return l.src=`data:${s};base64,${r}`,"number"==typeof a&&(l.height=a),"number"==typeof n&&(l.width=n),"light"===i?l.classList.add("jp-needs-light-background"):"dark"===i&&l.classList.add("jp-needs-dark-background"),!0===o&&l.classList.add("jp-mod-unconfined"),t.appendChild(l),Promise.resolve(void 0)}function m(e){const{host:t,source:s,shouldTypeset:r,latexTypesetter:n}=e;return t.textContent=s,r&&n&&n.typeset(t),Promise.resolve(void 0)}async function g(e){const{host:t,source:s}=e,n=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(s[r[n]]=e[r[n]])}return s}(e,["host","source"]);if(!s)return void(t.textContent="");const a=(0,h.D)(s);let i=await r.renderMarked(a.text);i=(0,h.b)(i,a.math),await p(Object.assign({host:t,source:i},n)),r.headerAnchors(t)}function y(e){let{host:t,source:s,trusted:r,unconfined:n}=e;if(!s)return t.textContent="",Promise.resolve(void 0);if(!r)return t.textContent="Cannot display an untrusted SVG. Maybe you need to run the cell?",Promise.resolve(void 0);s.search("<svg[^>]+xmlns=[^>]+svg")<0&&(s=s.replace("<svg",'<svg xmlns="http://www.w3.org/2000/svg"'));const a=new Image;return a.src=`data:image/svg+xml,${encodeURIComponent(s)}`,t.appendChild(a),!0===n&&t.classList.add("jp-mod-unconfined"),Promise.resolve()}function v(e){const{host:t,sanitizer:s,source:n}=e,a=s.sanitize(r.ansiSpan(n),{allowedTags:["span"]}),i=document.createElement("pre");return i.innerHTML=function(e){const t="\\u0000-\\u0020\\u007f-\\u009f",s=new RegExp("(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s"+t+'"]{2,}[^\\s'+t+"\"'(){}\\[\\],:;.!?]","ug");return e.replace(s,(e=>{const t=e.slice(-3),s=-1!==["&gt","&lt"].indexOf(t),r=s?t:"",n=s?e.length-3:e.length;return`<a href="${e.slice(0,n)}" rel="noopener" target="_blank">${e.slice(0,n)}</a>${r}`}))}(a),t.appendChild(i),Promise.resolve(void 0)}!function(e){async function t(e,t,s){const r=e.getAttribute(t)||"",n=s.isLocal?s.isLocal(r):a.URLExt.isLocal(r);if(r&&n)try{const n=await s.resolveUrl(r);let i=await s.getDownloadUrl(n);"data:"!==a.URLExt.parse(i).protocol&&(i+=(/\?/.test(i)?"&":"?")+(new Date).getTime()),e.setAttribute(t,i)}catch(s){throw e.setAttribute(t,""),s}}function s(e,t,s){let r=e.getAttribute("href")||"";const n=t.isLocal?t.isLocal(r):a.URLExt.isLocal(r);if(!r||!n)return Promise.resolve(void 0);const i=e.hash;if(i){if(i===r)return e.target="_self",Promise.resolve(void 0);r=r.replace(i,"")}return t.resolveUrl(r).then((r=>{const n=decodeURIComponent(r);return s&&s.handleLink(e,n,i),t.getDownloadUrl(r)})).then((t=>{e.href=t+i})).catch((t=>{e.href=""}))}e.evalInnerHTMLScriptTags=function(e){const t=(0,o.toArray)(e.getElementsByTagName("script"));for(const e of t){if(!e.parentNode)continue;const t=document.createElement("script"),s=e.attributes;for(let e=0,r=s.length;e<r;++e){const{name:r,value:n}=s[e];t.setAttribute(r,n)}t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},e.renderMarked=function(e){return r||(r=!0,u().setOptions({gfm:!0,sanitize:!1,langPrefix:`cm-s-${n.CodeMirrorEditor.defaultConfig.theme} language-`,highlight:(e,t,s)=>{const r=(e,t)=>(s&&s(e,t),t);return t?(n.Mode.ensure(t).then((s=>{const a=document.createElement("div");if(!s)return console.error(`No CodeMirror mode: ${t}`),r(null,e);try{return n.Mode.run(e,s.mime,a),r(null,a.innerHTML)}catch(s){return console.error(`Failed to highlight ${t} code`,s),r(s,e)}})).catch((s=>(console.error(`No CodeMirror mode: ${t}`),console.error(`Require CodeMirror mode error: ${s}`),r(null,e)))),e):r(null,e)}})),new Promise(((t,s)=>{u()(e,((e,r)=>{e?s(e):t(r)}))}))},e.handleDefaults=function(e,t){const s=e.getElementsByTagName("a");for(let e=0;e<s.length;e++){const r=s[e];if(!(r instanceof HTMLAnchorElement))continue;const n=r.href,i=t&&t.isLocal?t.isLocal(n):a.URLExt.isLocal(n);r.target||(r.target=i?"_self":"_blank"),i||(r.rel="noopener")}const r=e.getElementsByTagName("img");for(let e=0;e<r.length;e++)r[e].alt||(r[e].alt="Image")},e.handleUrls=function(e,r,n){const a=[],i=e.querySelectorAll("*[src]");for(let e=0;e<i.length;e++)a.push(t(i[e],"src",r));const o=e.getElementsByTagName("a");for(let e=0;e<o.length;e++)a.push(s(o[e],r,n));const l=e.getElementsByTagName("link");for(let e=0;e<l.length;e++)a.push(t(l[e],"href",r));return Promise.all(a).then((()=>{}))},e.headerAnchors=function(e){var t;const s=["h1","h2","h3","h4","h5","h6"];for(const r of s){const s=e.getElementsByTagName(r);for(let e=0;e<s.length;e++){const r=s[e];r.id=(null!==(t=r.textContent)&&void 0!==t?t:"").replace(/ /g,"-");const n=document.createElement("a");n.target="_self",n.textContent="¶",n.href="#"+r.id,n.classList.add("jp-InternalAnchorLink"),r.appendChild(n)}}};let r=!1;const i=["ansi-black","ansi-red","ansi-green","ansi-yellow","ansi-blue","ansi-magenta","ansi-cyan","ansi-white","ansi-black-intense","ansi-red-intense","ansi-green-intense","ansi-yellow-intense","ansi-blue-intense","ansi-magenta-intense","ansi-cyan-intense","ansi-white-intense"];function l(e,t,s,r,n,a,o){if(e){const l=[],c=[];r&&"number"==typeof t&&0<=t&&t<8&&(t+=8),a&&([t,s]=[s,t]),"number"==typeof t?l.push(i[t]+"-fg"):t.length?c.push(`color: rgb(${t})`):a&&l.push("ansi-default-inverse-fg"),"number"==typeof s?l.push(i[s]+"-bg"):s.length?c.push(`background-color: rgb(${s})`):a&&l.push("ansi-default-inverse-bg"),r&&l.push("ansi-bold"),n&&l.push("ansi-underline"),l.length||c.length?(o.push("<span"),l.length&&o.push(` class="${l.join(" ")}"`),c.length&&o.push(` style="${c.join("; ")}"`),o.push(">"),o.push(e),o.push("</span>")):o.push(e)}}function d(e){let t,s,r;const n=e.shift();if(2===n&&e.length>=3){if(t=e.shift(),s=e.shift(),r=e.shift(),[t,s,r].some((e=>e<0||255<e)))throw new RangeError("Invalid range for RGB colors")}else{if(!(5===n&&e.length>=1))throw new RangeError("Invalid extended color specification");{const n=e.shift();if(n<0)throw new RangeError("Color index must be >= 0");if(n<16)return n;if(n<232)t=Math.floor((n-16)/36),t=t>0?55+40*t:0,s=Math.floor((n-16)%36/6),s=s>0?55+40*s:0,r=(n-16)%6,r=r>0?55+40*r:0;else{if(!(n<256))throw new RangeError("Color index must be < 256");t=s=r=10*(n-232)+8}}}return[t,s,r]}e.ansiSpan=function(e){const t=/\x1b\[(.*?)([@-~])/g;let s,r=[],n=[],a=!1,i=!1,o=!1;const u=[],h=[];let p=0;for(e=c()(e),e+="[m";s=t.exec(e);){if("m"===s[2]){const e=s[1].split(";");for(let t=0;t<e.length;t++){const s=e[t];if(""===s)h.push(0);else{if(-1===s.search(/^\d+$/)){h.length=0;break}h.push(parseInt(s,10))}}}for(l(e.substring(p,s.index),r,n,a,i,o,u),p=t.lastIndex;h.length;){const e=h.shift();switch(e){case 0:r=n=[],a=!1,i=!1,o=!1;break;case 1:case 5:a=!0;break;case 4:i=!0;break;case 7:o=!0;break;case 21:case 22:a=!1;break;case 24:i=!1;break;case 27:o=!1;break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:r=e-30;break;case 38:try{r=d(h)}catch(e){h.length=0}break;case 39:r=[];break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:n=e-40;break;case 48:try{n=d(h)}catch(e){h.length=0}break;case 49:n=[];break;case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:r=e-90+8;break;case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:n=e-100+8}}}return u.join("")}}(r||(r={}))},62059:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n,_:()=>a});var r=s(93315);const n=new r.Token("@jupyterlab/rendermime:IRenderMimeRegistry"),a=new r.Token("@jupyterlab/rendermime:ILatexTypesetter")},29603:(e,t,s)=>{"use strict";s.d(t,{pY:()=>i,BP:()=>o,oI:()=>l,FK:()=>c,UH:()=>d,cw:()=>u,zt:()=>h,lH:()=>p,ND:()=>f});var r=s(24697),n=s(18151),a=s(79834);class i extends n.Widget{constructor(e){super(),this.mimeType=e.mimeType,this.sanitizer=e.sanitizer,this.resolver=e.resolver,this.linkHandler=e.linkHandler,this.translator=e.translator||r.nullTranslator,this.latexTypesetter=e.latexTypesetter,this.node.dataset.mimeType=this.mimeType}async renderModel(e){for(;this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.toggleClass("jp-mod-trusted",e.trusted),await this.render(e);const{fragment:t}=e.metadata;t&&this.setFragment(t)}setFragment(e){}}class o extends i{constructor(e){super(e),this.addClass("jp-RenderedHTMLCommon")}setFragment(e){let t;try{t=this.node.querySelector(e)}catch(e){console.warn("Unable to set URI fragment identifier.",e)}t&&t.scrollIntoView()}}class l extends o{constructor(e){super(e),this.addClass("jp-RenderedHTML")}render(e){return a.NN({host:this.node,source:String(e.data[this.mimeType]),trusted:e.trusted,resolver:this.resolver,sanitizer:this.sanitizer,linkHandler:this.linkHandler,shouldTypeset:this.isAttached,latexTypesetter:this.latexTypesetter,translator:this.translator})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class c extends i{constructor(e){super(e),this.addClass("jp-RenderedLatex")}render(e){return a.K3({host:this.node,source:String(e.data[this.mimeType]),shouldTypeset:this.isAttached,latexTypesetter:this.latexTypesetter})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class d extends i{constructor(e){super(e),this.addClass("jp-RenderedImage")}render(e){const t=e.metadata[this.mimeType];return a.co({host:this.node,mimeType:this.mimeType,source:String(e.data[this.mimeType]),width:t&&t.width,height:t&&t.height,needsBackground:e.metadata.needs_background,unconfined:t&&t.unconfined})}}class u extends o{constructor(e){super(e),this.addClass("jp-RenderedMarkdown")}render(e){return a.ap({host:this.node,source:String(e.data[this.mimeType]),trusted:e.trusted,resolver:this.resolver,sanitizer:this.sanitizer,linkHandler:this.linkHandler,shouldTypeset:this.isAttached,latexTypesetter:this.latexTypesetter,translator:this.translator})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class h extends i{constructor(e){super(e),this.addClass("jp-RenderedSVG")}render(e){const t=e.metadata[this.mimeType];return a.KB({host:this.node,source:String(e.data[this.mimeType]),trusted:e.trusted,unconfined:t&&t.unconfined,translator:this.translator})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class p extends i{constructor(e){super(e),this.addClass("jp-RenderedText")}render(e){return a.IY({host:this.node,sanitizer:this.sanitizer,source:String(e.data[this.mimeType]),translator:this.translator})}}class f extends i{constructor(e){super(e),this.addClass("jp-RenderedJavaScript")}render(e){const t=this.translator.load("jupyterlab");return a.IY({host:this.node,sanitizer:this.sanitizer,source:t.__("JavaScript output is disabled in JupyterLab"),translator:this.translator})}}},20694:(e,t,s)=>{var r,n=/[&<>"'`]/g,a=RegExp(n.source),i="object"==typeof s.g&&s.g&&s.g.Object===Object&&s.g,o="object"==typeof self&&self&&self.Object===Object&&self,l=i||o||Function("return this")(),c=(r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},function(e){return null==r?void 0:r[e]}),d=Object.prototype.toString,u=l.Symbol,h=u?u.prototype:void 0,p=h?h.toString:void 0;e.exports=function(e){var t;return(e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return p?p.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t))&&a.test(e)?e.replace(n,c):e}}}]);
//# sourceMappingURL=851.7ad36f89ddc6575b7e72.js.map