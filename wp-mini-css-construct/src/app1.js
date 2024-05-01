// has never been supported
// import /* webpackChunkName: "chunk-css-app1" */ "./app1.css";
import { adoptCSS } from "./fetchCSS";
import sheet from "./app1.css" assert { type: "css" };

adoptCSS(sheet);

console.log(">> app1.js (mini-remove)");

const appNodeLoader = {
  async init() {
    console.log("00");
    const nodeEl = document.querySelector(".appNode");
    if (nodeEl) {
      console.log("01");
      nodeEl.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        const aData = e.target?.dataset.info;
        console.log("02");
        function loadStuff(d) {
          import(/* webpackChunkName: "lazy-appNode" */ "./appNode.js").then(
            (module) => {
              module.appNode.init(d);
              console.log(">> app1 >> done");
            },
          );
        }
        loadStuff(aData);
        // this still generates lazy-appNode2.chunk.js
        const appNode2 = import(/* webpackChunkName: "lazy-appNode2" */'./appNode2.css', {
          assert: { type: "css" },
        });
        adoptCSS(appNode2);
      });
    } else {
      console.log("03");
    }
  },
};
appNodeLoader.init();

export default appNodeLoader;
