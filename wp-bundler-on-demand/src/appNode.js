import css from "./appNode2.css?url";

function loadCSSLazy(url) {
  const style = document.createElement("link");
  style.href = url;
  style.rel = "stylesheet";
  document.head.appendChild(style);
}
// this works correctly
console.log('appNode.js, css url', css);

const appNode = {
  init(data) {
    // undesired: on-demand file is loaded up front
    // also, today this lazy loaded CSS file is generating a JS file that does nothing
    // this is loaded as part of main.chunk.css for some reason (bundler wants to bundle css with parent chunks before the JS; seems philosophical)
    // https://github.com/webdiscus/html-bundler-webpack-plugin/discussions/86
    const loadcss = () => import(/* webpackChunkName: "lazy-appNodeStyle" */"./appNode.css");
    // lazy load css with JS module
    loadcss();
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
