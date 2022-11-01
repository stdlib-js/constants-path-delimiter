// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof e.setTimeout&&setTimeout,"function"==typeof e.clearTimeout&&clearTimeout;function o(e,o){this.fun=e,this.array=o}o.prototype.run=function(){this.fun.apply(null,this.array)};var t=e.performance||{};t.now||t.mozNow||t.msNow||t.oNow||t.webkitNow;new Date;var n="win32"==="browser"?";":":";export{n as default};
//# sourceMappingURL=mod.js.map
