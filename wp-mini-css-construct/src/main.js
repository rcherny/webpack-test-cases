console.log("main.js");

const main = {
  init() {
    import(/* webpackChunkName: "chunk-js-app1" */ "./app1.js");
  },
};

main.init();
