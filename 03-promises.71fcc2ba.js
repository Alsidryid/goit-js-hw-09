function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector(".form"),u=document.querySelector('.form input[name="delay"]'),s=document.querySelector('.form input[name="step"]'),d=document.querySelector('.form input[name="amount"]');function a(e,o){const n=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(o){const n=Number(u.value),t=Number(s.value),r=Number(d.value);o.preventDefault();for(let o=1;o<=r;o+=1){a(o,n+t*o).then((({position:o,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.71fcc2ba.js.map
