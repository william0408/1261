(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{LixI:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("ERkP"),i=n.n(r),o=n("ABxZ"),a=(n("gz9i"),i.a.createElement);function s(e){switch(e.statusCode){case 404:return a(o.a,{pageTitle:"Linktree | Page Not Found",message:"The page you\u2019re looking for doesn\u2019t exist."});default:return a(o.a,{pageTitle:"Linktree",message:"Linktree is currently undergoing maintenance. Back soon!",cta:{title:"Get updates",url:"https://systems.linktr.ee/"}})}}s.getInitialProps=function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:404}}},gz9i:function(e,t,n){"use strict";n.d(t,"a",(function(){return ye})),n.d(t,"b",(function(){return at}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function a(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}var s,u,c,f=1e3,l=60*f,d=60*l;!function(e){e.BEFORE_UNLOAD="beforeunload",e.CLICK="click",e.KEY_DOWN="keydown",e.LOAD="load",e.POP_STATE="popstate",e.SCROLL="scroll",e.TOUCH_START="touchstart",e.VISIBILITY_CHANGE="visibilitychange",e.DOM_CONTENT_LOADED="DOMContentLoaded"}(s||(s={})),function(e){e.DOCUMENT="document",e.XHR="xhr",e.BEACON="beacon",e.FETCH="fetch",e.CSS="css",e.JS="js",e.IMAGE="image",e.FONT="font",e.MEDIA="media",e.OTHER="other"}(u||(u={})),function(e){e.FETCH="fetch",e.XHR="xhr"}(c||(c={}));var p,h=function(e){return Array.isArray(e)},g=function(e){return!Array.isArray(e)&&"object"===typeof e&&null!==e};function v(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=t.length-1;r>=0;r-=1){var i=t[r];if(void 0!==i){if(void 0===e)if(g(i))e={};else{if(!h(i)){e=i;break}e=[]}if(g(e)&&g(i))for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=v(i[o],e[o]));else{if(!h(e)||!h(i))break;e.length=Math.max(e.length,i.length);for(var a=0;a<i.length;a+=1)e[a]=v(i[a],e[a])}}}return e}function m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return v.apply(void 0,a([e],t.filter((function(e){return null!==e}))))}function y(e){return e?(parseInt(e,10)^16*Math.random()>>parseInt(e,10)/4).toString(16):(1e7+"-1000-4000-8000-100000000000").replace(/[018]/g,y)}function b(){}function w(e,t,n){if(null===e||void 0===e)return JSON.stringify(e);var r=[!1,void 0];E(e)&&(r=[!0,e.toJSON],delete e.toJSON);var i,o,a=[!1,void 0];"object"===typeof e&&E(i=Object.getPrototypeOf(e))&&(a=[!0,i.toJSON],delete i.toJSON);try{o=JSON.stringify(e,void 0,n)}catch(s){o="<error: unable to serialize object>"}finally{r[0]&&(e.toJSON=r[1]),a[0]&&(i.toJSON=a[1])}return o}function E(e){return"object"===typeof e&&null!==e&&e.hasOwnProperty("toJSON")}function T(){return void 0===p&&(p=performance.timing.navigationStart),p}function x(e){if(e.origin)return e.origin;var t=e.host.replace(/(:80|:443)$/,"");return e.protocol+"//"+t}var O,S,k=f;function L(e,t,n,r){var i=new Date;i.setTime(i.getTime()+n);var o="expires="+i.toUTCString(),a=r&&r.crossSite?"none":"strict",s=r&&r.domain?";domain="+r.domain:"",u=r&&r.secure?";secure":"";document.cookie=e+"="+t+";"+o+";path=/;samesite="+a+s+u}function M(e){return function(e,t){var n=e.match("(?:^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return n?n[1]:void 0}(document.cookie,e)}function R(e){if(void 0===document.cookie||null===document.cookie)return!1;try{var t="dd_cookie_test_"+y();return L(t,"test",f,e),"test"===M(t)}catch(n){return console.error(n),!1}}function C(e){return B(e,x(window.location)).href}function _(e,t){return I(e)===I(t)}function I(e){return x(B(e))}function B(e,t){if(function(){if(void 0!==S)return S;try{var e=new URL("http://test/path");return S="http://test/path"===e.href}catch(t){S=!1}return S}())return void 0!==t?new URL(e,t):new URL(e);if(void 0===t&&!/:/.test(e))throw new Error("Invalid URL: '"+e+"'");var n=document,r=n.createElement("a");if(void 0!==t){var i=(n=document.implementation.createHTMLDocument("")).createElement("base");i.href=t,n.head.appendChild(i),n.body.appendChild(r)}return r.href=e,r}var N={allowedTracingOrigins:[],maxErrorsByMinute:3e3,maxInternalMonitoringMessagesPerPage:15,resourceSampleRate:100,sampleRate:100,silentMultipleInit:!1,trackInteractions:!1,requestErrorResponseLengthLimit:32768,flushTimeout:30*f,maxBatchSize:50,maxMessageSize:262144,batchBytesLimit:16384};function A(e){var t={};return t.secure=function(e){return!!e.useSecureSessionCookie||!!e.useCrossSiteSessionCookie}(e),t.crossSite=!!e.useCrossSiteSessionCookie,e.trackSessionAcrossSubdomains&&(t.domain=function(){if(void 0===O){for(var e="dd_site_test_"+y(),t=window.location.hostname.split("."),n=t.pop();t.length&&!M(e);)n=t.pop()+"."+n,L(e,"test",f,{domain:n});O=n}return O}()),t}function D(e,t,n){var r="sdk_version:"+t.sdkVersion+(t.env?",env:"+t.env:"")+(t.service?",service:"+t.service:"")+(t.version?",version:"+t.version:""),i=e+"-http-intake.logs."+t.site,o=t.proxyHost?t.proxyHost:i,a=t.proxyHost?"ddhost="+i+"&":"",s=""+(t.applicationId?"_dd.application_id="+t.applicationId+"&":"")+a+"ddsource="+(n||"browser")+"&ddtags="+r;return"https://"+o+"/v1/input/"+t.clientToken+"?"+s}function j(e,t){return-1!==function(e){var t=B(e).pathname;return"/"===t[0]?t:"/"+t}(e).indexOf("/v1/input/")&&(_(e,t.logsEndpoint)||_(e,t.rumEndpoint)||_(e,t.traceEndpoint)||!!t.internalMonitoringEndpoint&&_(e,t.internalMonitoringEndpoint)||!!t.replica&&(_(e,t.replica.logsEndpoint)||_(e,t.replica.rumEndpoint)||_(e,t.replica.internalMonitoringEndpoint)))}var P=/[^\u0000-\u007F]/,z=function(){function e(e,t,n){void 0===n&&(n=!1),this.endpointUrl=e,this.bytesLimit=t,this.withBatchTime=n}return e.prototype.send=function(e,t){var n=this.withBatchTime?function(e){return e+(-1===e.indexOf("?")?"?":"&")+"batch_time="+(new Date).getTime()}(this.endpointUrl):this.endpointUrl;if(navigator.sendBeacon&&t<this.bytesLimit&&navigator.sendBeacon(n,e))return;var r=new XMLHttpRequest;r.open("POST",n,!0),r.send(e)},e}();var U=function(){function e(e,t,n,r,i,o){void 0===o&&(o=b),this.request=e,this.maxSize=t,this.bytesLimit=n,this.maxMessageSize=r,this.flushTimeout=i,this.beforeUnloadCallback=o,this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0,this.flushOnVisibilityHidden(),this.flushPeriodically()}return e.prototype.add=function(e){this.addOrUpdate(e)},e.prototype.upsert=function(e,t){this.addOrUpdate(e,t)},e.prototype.flush=function(){if(0!==this.bufferMessageCount){var e=a(this.pushOnlyBuffer,function(e){var t=[];return Object.keys(e).forEach((function(n){t.push(e[n])})),t}(this.upsertBuffer));this.request.send(e.join("\n"),this.bufferBytesSize),this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0}},e.prototype.sizeInBytes=function(e){return P.test(e)?void 0!==window.TextEncoder?(new TextEncoder).encode(e).length:new Blob([e]).size:e.length},e.prototype.addOrUpdate=function(e,t){var n=this.process(e),r=n.processedMessage,i=n.messageBytesSize;i>=this.maxMessageSize?console.warn("Discarded a message whose size was bigger than the maximum allowed size "+this.maxMessageSize+"KB."):(this.hasMessageFor(t)&&this.remove(t),this.willReachedBytesLimitWith(i)&&this.flush(),this.push(r,i,t),this.isFull()&&this.flush())},e.prototype.process=function(e){var t=w(e);return{processedMessage:t,messageBytesSize:this.sizeInBytes(t)}},e.prototype.push=function(e,t,n){this.bufferMessageCount>0&&(this.bufferBytesSize+=1),void 0!==n?this.upsertBuffer[n]=e:this.pushOnlyBuffer.push(e),this.bufferBytesSize+=t,this.bufferMessageCount+=1},e.prototype.remove=function(e){var t=this.upsertBuffer[e];delete this.upsertBuffer[e];var n=this.sizeInBytes(t);this.bufferBytesSize-=n,this.bufferMessageCount-=1,this.bufferMessageCount>0&&(this.bufferBytesSize-=1)},e.prototype.hasMessageFor=function(e){return void 0!==e&&void 0!==this.upsertBuffer[e]},e.prototype.willReachedBytesLimitWith=function(e){return this.bufferBytesSize+e+1>=this.bytesLimit},e.prototype.isFull=function(){return this.bufferMessageCount===this.maxSize||this.bufferBytesSize>=this.bytesLimit},e.prototype.flushPeriodically=function(){var e=this;setTimeout((function(){e.flush(),e.flushPeriodically()}),this.flushTimeout)},e.prototype.flushOnVisibilityHidden=function(){var e=this;navigator.sendBeacon&&(window.addEventListener(s.BEFORE_UNLOAD,Q(this.beforeUnloadCallback)),document.addEventListener(s.VISIBILITY_CHANGE,Q((function(){"hidden"===document.visibilityState&&e.flush()}))),window.addEventListener(s.BEFORE_UNLOAD,Q((function(){return e.flush()}))))},e}(),H="?",F=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function G(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var K,q=function(){var e,t,n,r,i,o,a=[];function s(e,t,n){var r;for(var i in a)if(G(a,i))try{a[i](e,t,n)}catch(o){r=o}if(r)throw r}function u(e,r,i,o,a){if(t)$.augmentStackTraceWithInitialElement(t,r,i,""+e),f();else if(a)s($(a),!0,a);else{var u,c={url:r,column:o,line:i},l=e;if("[object String]"==={}.toString.call(e)){var d=l.match(F);d&&(u=d[1],l=d[2])}s({name:u,message:l,stack:[c]},!0)}return!!n&&n.apply(this,arguments)}function c(e){var t=e.reason||"Empty reason";s($(t),!0,t)}function f(){var n=t,r=e;t=void 0,e=void 0,s(n,!1,r)}function l(n){if(t){if(e===n)return;f()}var r=$(n);throw t=r,e=n,setTimeout((function(){e===n&&f()}),r.incomplete?2e3:0),n}return l.subscribe=function(e){!function(){if(r)return;n=window.onerror,window.onerror=Q(u),r=!0}(),function(){if(o)return;i=null!==window.onunhandledrejection?window.onunhandledrejection:void 0,window.onunhandledrejection=Q(c),o=!0}(),a.push(e)},l.unsubscribe=function(e){for(var t=a.length-1;t>=0;t-=1)a[t]===e&&a.splice(t,1);0===a.length&&(r&&(window.onerror=n,r=!1),o&&(window.onunhandledrejection=i,o=!1))},l.traceKitWindowOnError=u,l}(),$=function(){var e=!1;function t(e){if(e.stack){for(var t,n,r,i,o=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,a=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,u=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,f=e.stack.split("\n"),l=[],d=0,p=f.length;d<p;d+=1){if(o.exec(f[d])){var h=(r=o.exec(f[d]))[2]&&0===r[2].indexOf("native");t=r[2]&&0===r[2].indexOf("eval"),n=c.exec(r[2]),t&&n&&(r[2]=n[1],r[3]=n[2],r[4]=n[3]),i={args:h?[r[2]]:[],column:r[4]?+r[4]:void 0,func:r[1]||H,line:r[3]?+r[3]:void 0,url:h?void 0:r[2]}}else if(s.exec(f[d]))i={args:[],column:(r=s.exec(f[d]))[4]?+r[4]:void 0,func:r[1]||H,line:+r[3],url:r[2]};else{if(!a.exec(f[d]))continue;t=(r=a.exec(f[d]))[3]&&r[3].indexOf(" > eval")>-1,n=u.exec(r[3]),t&&n?(r[3]=n[1],r[4]=n[2],r[5]=void 0):0!==d||r[5]||"undefined"===typeof e.columnNumber||(l[0].column=e.columnNumber+1),i={args:r[2]?r[2].split(","):[],column:r[5]?+r[5]:void 0,func:r[1]||H,line:r[4]?+r[4]:void 0,url:r[3]}}!i.func&&i.line&&(i.func=H),l.push(i)}if(l.length)return{stack:l,message:e.message,name:e.name}}}function n(e,t,n,r){var i={url:t,line:n?+n:void 0};if(i.url&&i.line){e.incomplete=!1;var o=e.stack;if(o.length>0&&o[0].url===i.url){if(o[0].line===i.line)return!1;if(!o[0].line&&o[0].func===i.func)return o[0].line=i.line,o[0].context=i.context,!1}return o.unshift(i),e.partial=!0,!0}return e.incomplete=!0,!1}function r(e,t){for(var i,o,a=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],u={},c=!1,f=r.caller;f&&!c;f=f.caller)f!==$&&f!==q&&(o={args:[],column:void 0,func:H,line:void 0,url:void 0},i=a.exec(f.toString()),f.name?o.func=f.name:i&&(o.func=i[1]),"undefined"===typeof o.func&&(o.func=i?i.input.substring(0,i.input.indexOf("{")):void 0),u[""+f]?c=!0:u[""+f]=!0,s.push(o));t&&s.splice(0,t);var l={stack:s,message:e.message,name:e.name};return n(l,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),l}function i(n,i){var o,a=void 0===i?0:+i;try{if(o=function(e){var t=e.stacktrace;if(t){for(var n,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,i=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,o=t.split("\n"),a=[],s=0;s<o.length;s+=2){var u=void 0;r.exec(o[s])?u={args:[],column:void 0,func:(n=r.exec(o[s]))[3],line:+n[1],url:n[2]}:i.exec(o[s])&&(u={args:(n=i.exec(o[s]))[5]?n[5].split(","):[],column:+n[2],func:n[3]||n[4],line:+n[1],url:n[6]}),u&&(!u.func&&u.line&&(u.func=H),u.context=[o[s+1]],a.push(u))}if(a.length)return{stack:a,message:e.message,name:e.name}}}(n))return o}catch(s){if(e)throw s}try{if(o=t(n))return o}catch(s){if(e)throw s}try{if(o=function(e){var t=e.message.split("\n");if(!(t.length<4)){var n,r=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,i=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of function script\s*$/i,a=[],s=window&&window.document&&window.document.getElementsByTagName("script"),u=[];for(var c in s)G(s,c)&&!s[c].src&&u.push(s[c]);for(var f=2;f<t.length;f+=2){var l=void 0;if(r.exec(t[f]))l={args:[],column:void 0,func:(n=r.exec(t[f]))[3],line:+n[1],url:n[2]};else if(i.exec(t[f]))l={args:[],column:void 0,func:(n=i.exec(t[f]))[4],line:+n[1],url:n[3]};else if(o.exec(t[f])){n=o.exec(t[f]),l={url:window.location.href.replace(/#.*$/,""),args:[],column:void 0,func:"",line:+n[1]}}l&&(l.func||(l.func=H),l.context=[t[f+1]],a.push(l))}if(a.length)return{stack:a,message:t[0],name:e.name}}}(n))return o}catch(s){if(e)throw s}try{if(o=r(n,a+1))return o}catch(s){if(e)throw s}return{message:n.message,name:n.name,stack:[]}}return i.augmentStackTraceWithInitialElement=n,i.computeStackTraceFromStackProp=t,i.ofCaller=function(e){var t=1+(void 0===e?0:+e);try{throw new Error}catch(n){return $(n,t+1)}},i}();!function(e){e.info="info",e.error="error"}(K||(K={}));var J,X,V,W={maxMessagesPerPage:0,sentMessageCount:0};function Y(e){if(e.internalMonitoringEndpoint){var t=function(e){var t,n=r(e.internalMonitoringEndpoint);void 0!==e.replica&&(t=r(e.replica.internalMonitoringEndpoint));function r(t){return new U(new z(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return{add:function(e){var r=function(e){return m({date:(new Date).getTime(),view:{referrer:document.referrer,url:window.location.href}},void 0!==J?J():{},e)}(e);n.add(r),t&&t.add(r)}}}(e);!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];t.forEach((function(t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))}(W,{batch:t,maxMessagesPerPage:e.maxInternalMonitoringMessagesPerPage,sentMessageCount:0})}return{setExternalContextProvider:function(e){J=e}}}function Z(e,t,n){var r=n.value;n.value=function(){var e=W.batch?Q(r):r;return e.apply(this,arguments)}}function Q(e){return function(){try{return e.apply(this,arguments)}catch(t){re(t);try{ee(t)}catch(t){re(t)}}}}function ee(e){te(r(r({},function(e){if(e instanceof Error){var t=$(e);return{error:{kind:t.name,stack:Te(t)},message:t.message}}return{error:{stack:"Not an instance of error"},message:"Uncaught "+w(e)}}(e)),{status:K.error}))}function te(e){W.batch&&W.sentMessageCount<W.maxMessagesPerPage&&(W.sentMessageCount+=1,W.batch.add(e))}function ne(e){W.debugMode=e}function re(e){W.debugMode&&console.warn("[INTERNAL ERROR]",e)}var ie,oe=[],ae=[];function se(){return X||(!function(){if(!window.fetch)return;V=window.fetch,window.fetch=Q((function(e,t){var n=this,r=t&&t.method||"object"===typeof e&&e.method||"GET",a=C("object"===typeof e&&e.url||e),s={init:t,method:r,startTime:performance.now(),url:a},u=function(e){return i(n,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return s.duration=performance.now()-s.startTime,"stack"in e||e instanceof Error?(s.status=0,s.response=Te($(e)),ae.forEach((function(e){return e(s)})),[3,6]):[3,1];case 1:if(!("status"in e))return[3,6];t=void 0,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,e.clone().text()];case 3:return t=r.sent(),[3,5];case 4:return n=r.sent(),t="Unable to retrieve response: "+n,[3,5];case 5:s.response=t,s.responseType=e.type,s.status=e.status,ae.forEach((function(e){return e(s)})),r.label=6;case 6:return[2]}}))}))};oe.forEach((function(e){return e(s)}));var c=V.call(this,e,s.init);return c.then(Q(u),Q(u)),c}))}(),X={beforeSend:function(e){oe.push(e)},onRequestComplete:function(e){ae.push(e)}}),X}var ue,ce,fe=[],le=[];function de(){return ie||(ue=XMLHttpRequest.prototype.open,ce=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=Q((function(e,t){return this._datadog_xhr={method:e,startTime:-1,url:C(t)},ue.apply(this,arguments)})),XMLHttpRequest.prototype.send=Q((function(e){var t=this;if(this._datadog_xhr){this._datadog_xhr.startTime=performance.now();var n=this.onreadystatechange;this.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&Q(i)(),n&&n.apply(this,arguments)};var r=!1,i=function(){r||(r=!0,t._datadog_xhr.duration=performance.now()-t._datadog_xhr.startTime,t._datadog_xhr.response=t.response,t._datadog_xhr.status=t.status,le.forEach((function(e){return e(t._datadog_xhr)})))};this.addEventListener("loadend",Q(i)),fe.forEach((function(e){return e(t._datadog_xhr,t)}))}return ce.apply(this,arguments)})),ie={beforeSend:function(e){fe.push(e)},onRequestComplete:function(e){le.push(e)}}),ie}var pe,he,ge,ve,me,ye,be=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.notify=function(e){this.observers.forEach((function(t){return t(e)}))},e}();function we(e){if(!he){var t=new be;!function(e,t){function n(n,r){j(r.url,e)||!function(e){return 0===e.status&&"opaque"!==e.responseType}(r)&&!function(e){return e.status>=500}(r)||t.notify({context:{error:{origin:pe.NETWORK,stack:xe(r.response,e)||"Failed to load"},http:{method:r.method,status_code:r.status,url:r.url}},message:Oe(n)+" error "+r.method+" "+r.url,startTime:r.startTime})}de().onRequestComplete((function(e){return n(c.XHR,e)})),se().onRequestComplete((function(e){return n(c.FETCH,e)}))}(e,t),function(e){ge=console.error,console.error=Q((function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];ge.apply(console,a([t],n)),e.notify({context:{error:{origin:pe.CONSOLE}},message:a(["console error:",t],n).map(Ee).join(" "),startTime:performance.now()})}))}(t),function(e){ve=function(t,n,r){var i=function(e,t,n){if(!e||void 0===e.message&&!(t instanceof Error))return{kind:e&&e.name,message:n+" "+w(t),stack:"No stack, consider using an instance of Error"};return{kind:e.name,message:e.message||"Empty message",stack:Te(e)}}(t,r,"Uncaught"),o=i.stack,a=i.message,s=i.kind;e.notify({message:a,context:{error:{kind:s,stack:o,origin:pe.SOURCE}},startTime:performance.now()})},q.subscribe(ve)}(t),he=function(e,t){var n=0,r=new be;return t.subscribe((function(t){n<e.maxErrorsByMinute?(n+=1,r.notify(t)):n===e.maxErrorsByMinute&&(n+=1,r.notify({context:{error:{origin:pe.AGENT}},message:"Reached max number of errors by minute: "+e.maxErrorsByMinute,startTime:performance.now()}))})),setInterval((function(){return n=0}),l),r}(e,t)}return he}function Ee(e){return"string"===typeof e?e:e instanceof Error?Te($(e)):w(e,0,2)}function Te(e){var t=(e.name||"Error")+": "+e.message;return e.stack.forEach((function(e){var n="?"===e.func?"<anonymous>":e.func,r=e.args&&e.args.length>0?"("+e.args.join(", ")+")":"",i=e.line?":"+e.line:"",o=e.line&&e.column?":"+e.column:"";t+="\n  at "+n+r+" @ "+e.url+i+o})),t}function xe(e,t){return e&&e.length>t.requestErrorResponseLengthLimit?e.substring(0,t.requestErrorResponseLengthLimit)+"...":e}function Oe(e){return c.XHR===e?"XHR":"Fetch"}!function(e){e.AGENT="agent",e.CONSOLE="console",e.NETWORK="network",e.SOURCE="source",e.LOGGER="logger",e.CUSTOM="custom"}(pe||(pe={})),function(e){e.US="us",e.EU="eu"}(ye||(ye={}));var Se,ke=((me={})[ye.EU]="datadoghq.eu",me[ye.US]="datadoghq.com",me);function Le(e,t,n){var i=function(e,t){var n={applicationId:e.applicationId,buildMode:t.buildMode,clientToken:e.clientToken,env:e.env,proxyHost:e.proxyHost,sdkVersion:t.sdkVersion,service:e.service,site:e.site||ke[e.datacenter||t.datacenter],version:e.version},i=Array.isArray(e.enableExperimentalFeatures)?e.enableExperimentalFeatures:[],o=r({cookieOptions:A(e),isEnabled:function(e){return t=e,-1!==i.indexOf(t);var t},logsEndpoint:D("browser",n),proxyHost:e.proxyHost,rumEndpoint:D("rum",n),service:e.service,traceEndpoint:D("public-trace",n)},N);if(e.internalMonitoringApiKey&&(o.internalMonitoringEndpoint=D("browser",n,"browser-agent-internal-monitoring")),"allowedTracingOrigins"in e&&(o.allowedTracingOrigins=e.allowedTracingOrigins),"sampleRate"in e&&(o.sampleRate=e.sampleRate),"resourceSampleRate"in e&&(o.resourceSampleRate=e.resourceSampleRate),"trackInteractions"in e&&(o.trackInteractions=!!e.trackInteractions),n.buildMode===Se.E2E_TEST&&(o.internalMonitoringEndpoint="<<< E2E INTERNAL MONITORING ENDPOINT >>>",o.logsEndpoint="<<< E2E LOGS ENDPOINT >>>",o.rumEndpoint="<<< E2E RUM ENDPOINT >>>"),n.buildMode===Se.STAGING&&void 0!==e.replica){var a=r(r({},n),{applicationId:e.replica.applicationId,clientToken:e.replica.clientToken,site:ke[ye.US]});o.replica={applicationId:e.replica.applicationId,internalMonitoringEndpoint:D("browser",a,"browser-agent-internal-monitoring"),logsEndpoint:D("browser",a),rumEndpoint:D("rum",a)}}return o}(e,t),o=Y(i);return{configuration:i,errorObservable:n?we(i):new be,internalMonitoring:o}}function Me(){return"file:"!==window.location.protocol||(console.error("Execution is not allowed in the current context."),!1)}!function(e){e.RELEASE="release",e.STAGING="staging",e.E2E_TEST="e2e-test"}(Se||(Se={}));var Re,Ce,_e=function(){return(_e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function Ie(){var e={};return{get:function(){return e},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},set:function(t){e=t}}}!function(e){e.debug="debug",e.info="info",e.warn="warn",e.error="error"}(Ce||(Ce={}));var Be,Ne=((Re={})[Ce.debug]=0,Re[Ce.info]=1,Re[Ce.warn]=2,Re[Ce.error]=3,Re);Object.keys(Ce);!function(e){e.http="http",e.console="console",e.silent="silent"}(Be||(Be={}));var Ae=function(){function e(e,t,n,r){void 0===t&&(t=Be.http),void 0===n&&(n=Ce.debug),void 0===r&&(r={}),this.sendLog=e,this.handlerType=t,this.level=n,this.contextManager=Ie(),this.contextManager.set(r)}return e.prototype.log=function(e,t,n){if(void 0===n&&(n=Ce.info),Ne[n]>=Ne[this.level])switch(this.handlerType){case Be.http:this.sendLog(_e({message:e,status:n},m(this.contextManager.get(),t)));break;case Be.console:console.log(n+": "+e);break;case Be.silent:}},e.prototype.debug=function(e,t){this.log(e,t,Ce.debug)},e.prototype.info=function(e,t){this.log(e,t,Ce.info)},e.prototype.warn=function(e,t){this.log(e,t,Ce.warn)},e.prototype.error=function(e,t){var n={error:{origin:pe.LOGGER}};this.log(e,m(n,t),Ce.error)},e.prototype.setContext=function(e){this.contextManager.set(e)},e.prototype.addContext=function(e,t){this.contextManager.add(e,t)},e.prototype.removeContext=function(e){this.contextManager.remove(e)},e.prototype.setHandler=function(e){this.handlerType=e},e.prototype.setLevel=function(e){this.level=e},function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);o>3&&a&&Object.defineProperty(t,n,a)}([Z],e.prototype,"log",null),e}(),De=1e4,je=function(){function e(e){void 0===e&&(e=De),this.limit=e,this.buffer=[]}return e.prototype.add=function(e){this.buffer.push(e)>this.limit&&this.buffer.splice(0,1)},e.prototype.drain=function(e){this.buffer.forEach((function(t){return e(t)})),this.buffer.length=0},e}(),Pe="_dd",ze="_dd_r",Ue="_dd_l",He="rum",Fe="logs";var Ge="_dd_s",Ke=15*l,qe=4*d,$e=l;function Je(e,t,n){var r=function(e,t){var n,r,i=!1,o=function(){i=!0,window.clearTimeout(n),n=window.setTimeout((function(){i=!1}),k)};return{get:function(){return i?r:(r=M(e),o(),r)},set:function(n,i){L(e,n,i,t),r=n,o()}}}(Ge,e);!function(e){var t=e.get(),n=M(Pe),r=M(ze),i=M(Ue);if(!t){var o={};n&&(o.id=n),i&&/^[01]$/.test(i)&&(o[Fe]=i),r&&/^[012]$/.test(r)&&(o[He]=r),Ye(o,e)}}(r);var i=new be,o=We(r).id,a=function(e,t,n){var r,i=!n||void 0===n.leading||n.leading,o=!n||void 0===n.trailing||n.trailing,a=!1,s=!1;return{throttled:function(){var n=this;a?s=!0:(i?e.apply(this):s=!0,a=!0,r=window.setTimeout((function(){o&&s&&e.apply(n),a=!1,s=!1}),t))},cancel:function(){window.clearTimeout(r),a=!1,s=!1}}}((function(){var e=We(r),a=n(e[t]),s=a.trackingType,u=a.isTracked;e[t]=s,u&&!e.id&&(e.id=y(),e.created=String(Date.now())),Ye(e,r),u&&o!==e.id&&(o=e.id,i.notify())}),k).throttled;return a(),function(e){var t=Q(e),n={capture:!0,passive:!0};[s.CLICK,s.TOUCH_START,s.KEY_DOWN,s.SCROLL].forEach((function(e){document.addEventListener(e,t,n),Qe.push((function(){return document.removeEventListener(e,t,n)}))}))}(a),function(e){var t=Q((function(){"visible"===document.visibilityState&&e()})),n=window.setInterval(t,$e);document.addEventListener(s.VISIBILITY_CHANGE,t),Qe.push((function(){clearInterval(n),document.removeEventListener(s.VISIBILITY_CHANGE,t)}))}((function(){Ye(We(r),r)})),{getId:function(){return We(r).id},getTrackingType:function(){return We(r)[t]},renewObservable:i}}var Xe=/^([a-z]+)=([a-z0-9-]+)$/,Ve="&";function We(e){var t=function(e){var t=e.get(),n={};(function(e){return void 0!==e&&(-1!==e.indexOf(Ve)||Xe.test(e))})(t)&&t.split(Ve).forEach((function(e){var t=Xe.exec(e);if(null!==t){var r=t[1],i=t[2];n[r]=i}}));return n}(e);return function(e){return(void 0===e.created||Date.now()-Number(e.created)<qe)&&(void 0===e.expire||Date.now()<Number(e.expire))}(t)?t:(Ze(e),{})}function Ye(e,t){if(n=e,0!==Object.keys(n).length){var n;e.expire=String(Date.now()+Ke);var r=function(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}(e).map((function(e){return e[0]+"="+e[1]})).join(Ve);t.set(r,Ke)}else Ze(t)}function Ze(e){e.set("",0)}var Qe=[];var et,tt="logs";function nt(e,t){if(!t){var n=rt(e)===et.TRACKED;return{getId:function(){},isTracked:function(){return n}}}var r=Je(e.cookieOptions,tt,(function(t){return function(e,t){var n=function(e){return e===et.NOT_TRACKED||e===et.TRACKED}(t)?t:rt(e);return{trackingType:n,isTracked:n===et.TRACKED}}(e,t)}));return{getId:r.getId,isTracked:function(){return r.getTrackingType()===et.TRACKED}}}function rt(e){return 0!==(t=e.sampleRate)&&100*Math.random()<=t?et.TRACKED:et.NOT_TRACKED;var t}!function(e){e.NOT_TRACKED="0",e.TRACKED="1"}(et||(et={}));var it={buildMode:"release",datacenter:"us",sdkVersion:"1.25.0"};function ot(e){var t=window.DD_RUM;return t&&t.getInternalContext?t.getInternalContext(e):void 0}var at=function(e){var t=!1,n=Ie(),i={},o=new je,a=function(e,t){o.add([e,t])},s=new Ae(u);return function(e){var t=r(r({},e),{onReady:function(e){e()}});return Object.defineProperty(t,"_setDebug",{get:function(){return ne},enumerable:!1}),t}({logger:s,init:Q((function(r){Me()&&function(e){if(t)return e.silentMultipleInit||console.error("DD_LOGS is already initialized."),!1;if(!e||!e.publicApiKey&&!e.clientToken)return console.error("Client Token is not configured, we will not send any data."),!1;if(void 0!==e.sampleRate&&(n=e.sampleRate,!(function(e){return"number"===typeof e}(n)&&n>=0&&n<=100)))return console.error("Sample Rate should be a number between 0 and 100"),!1;var n;return!0}(r)&&(r.publicApiKey&&(r.clientToken=r.publicApiKey,console.warn("Public API Key is deprecated. Please use Client Token instead.")),a=e(r,s,n.get),o.drain((function(e){var t=e[0],n=e[1];return a(t,n)})),t=!0)})),setLoggerGlobalContext:Q(n.set),addLoggerGlobalContext:Q(n.add),removeLoggerGlobalContext:Q(n.remove),createLogger:Q((function(e,t){return void 0===t&&(t={}),i[e]=new Ae(u,t.handler,t.level,_e(_e({},t.context),{logger:{name:e}})),i[e]})),getLogger:Q((function(e){return i[e]}))});function u(e){a(e,m({date:Date.now(),view:{referrer:document.referrer,url:window.location.href}},n.get()))}}((function(e,t,n){var r=!1!==e.forwardErrorsToLogs,i=Le(e,it,r),o=i.configuration,a=i.internalMonitoring;return function(e,t,n,r,i,o){n.setExternalContextProvider((function(){return m({session_id:r.getId()},o(),ot())}));var a=function(e,t){var n,r=i(e.logsEndpoint);void 0!==e.replica&&(n=i(e.replica.logsEndpoint));function i(t){return new U(new z(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return{add:function(i,o){var a=function(e,t,n,r){return m(e,t,n,r)}({service:e.service,session_id:t.getId()},o,ot(),i);r.add(a),n&&n.add(a)}}}(e,r);return t.subscribe((function(e){return i.error(e.message,m({date:(t=e.startTime,Math.floor(T()+t))},e.context,ot(e.startTime)));var t})),function(e,t){r.isTracked()&&a.add(e,t)}}(o,i.errorObservable,a,nt(o,R(o.cookieOptions)),t,n)}));!function(e,t,n){var r=e[t];e[t]=n,r&&r.q&&r.q.forEach((function(e){return e()}))}(function(){if("object"===typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0});var e=_dd_temp_;return delete Object.prototype._dd_temp_,"object"!==typeof e&&(e="object"===typeof self?self:"object"===typeof window?window:{}),e}(),"DD_LOGS",at)}}]);