import "./app1.css";

console.log(">> app1.js (wp-bundler-base)");

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
          import(/* webpackChunkName: "lazy-appNode" */ "./appNode.js").then(
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
