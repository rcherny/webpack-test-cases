var e={456:(e,o,t)=>{t.r(o),t.d(o,{default:()=>r}),t(235),console.log(">> app1.js (mini-remove)");const n={init(){console.log("00");const e=document.querySelector(".appNode");e?(console.log("01"),e.querySelector("a").addEventListener("click",(e=>{e.preventDefault();const o=e.target?.dataset.info;var n;console.log("02"),n=o,Promise.resolve().then(t.bind(t,184)).then((e=>{e.appNode.init(n),console.log(">> app1 >> done")}))}))):console.log("03")}};n.init();const r=n},184:(e,o,t)=>{t.r(o),t.d(o,{appNode:()=>n});const n={init(e){Promise.resolve().then(t.bind(t,64)),console.log(">> app1 >> appNode.js >> init(), data:",e)}}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var l=o[n]={exports:{}};return e[n](l,l.exports,t),l.exports}t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},console.log("main.js"),Promise.resolve().then(t.bind(t,456));