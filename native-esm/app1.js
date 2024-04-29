// only supported in Blink
// import styles from "./app1.css" with { type: 'css' };
import {fetchCSS} from './fetchCSS.js';

fetchCSS('./app1.css');

console.log(">> app1.js (native-esm)");

const appNodeLoader = {
  init() {
    console.log("00");
    const nodeEl = document.querySelector(".appNode");
    if (nodeEl) {
      console.log("01");
      nodeEl.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        const aData = e.target?.dataset.info;
        console.log("02");
        function loadStuff(d) {
          import("./lazy-appNode.chunk.js").then(
            (module) => {
              module.appNode.init(d);
              console.log(">> app1 >> done");
            },
          );
        }
        loadStuff(aData);
      });
    } else {
      console.log("03");
    }
  },
};
appNodeLoader.init();

export default appNodeLoader;
