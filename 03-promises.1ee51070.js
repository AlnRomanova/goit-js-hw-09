!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function u(e,n){var t=Math.random()>.3;return new Promise((function(o,r){t?setTimeout((function(){return o({position:e,delay:n})}),n):setTimeout((function(){return r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget.elements,o=t.delay,r=t.step,a=t.amount,l=Number(o.value),c=1;c<=a.value;c++)u(c,l).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))})),l+=Number(r.value)}))}();
//# sourceMappingURL=03-promises.1ee51070.js.map
