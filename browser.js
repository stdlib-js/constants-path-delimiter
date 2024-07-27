// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).PATH_DELIMITER=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}var o=n,i=r;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===n||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var f,c=[],l=!1,a=-1;function s(){l&&f&&(l=!1,f.length?c=f.concat(c):a=-1,c.length&&d())}function d(){if(!l){var e=u(s);l=!0;for(var t=c.length;t;){for(f=c,c=[];++a<t;)f&&f[a].run();a=-1,t=c.length}f=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(d)}function h(e,t){this.fun=e,this.array=t}h.prototype.run=function(){this.fun.apply(null,this.array)};var m="browser",w="browser",v={},y=[],g={},T={},b={};function _(){}var E=_,L=_,j=_,k=_,O=_,D=_,M=_;function x(e){throw new Error("process.binding is not supported")}function A(){return"/"}function N(e){throw new Error("process.chdir is not supported")}function P(){return 0}var z=t.performance||{},I=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};function R(e){var t=.001*I.call(z),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var H=new Date;function q(){return(new Date-H)/1e3}var B={nextTick:p,title:m,browser:true,env:v,argv:y,version:"",versions:g,on:E,addListener:L,once:j,off:k,removeListener:O,removeAllListeners:D,emit:M,binding:x,cwd:A,chdir:N,umask:P,hrtime:R,platform:w,release:T,config:b,uptime:q};return"win32"===e(Object.freeze({__proto__:null,addListener:L,argv:y,binding:x,browser:true,chdir:N,config:b,cwd:A,default:B,emit:M,env:v,hrtime:R,nextTick:p,off:k,on:E,once:j,platform:w,release:T,removeAllListeners:D,removeListener:O,title:m,umask:P,uptime:q,version:"",versions:g})).platform?";":":"}));
//# sourceMappingURL=browser.js.map