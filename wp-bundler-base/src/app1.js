import "./app1.css";

console.log(">> app1.js (wp-bundler-base)");

const appNodeLoader = {
  init() {
    console.log(">> app1 >> appNodeLoader.init()");
  },
};

appNodeLoader.init();

export default appNodeLoader;
