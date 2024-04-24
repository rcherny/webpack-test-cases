function loadCSSLazy(url) {
  const style = document.createElement("link");
  style.href = url;
  style.rel = "stylesheet";
  document.head.appendChild(style);
}

const appNode = {
  init(data) {
    // undesired: on-demand file is loaded up front
    // also, today this lazy loaded CSS file is generating a JS file that does nothing
    const loadcss = () => import(/* webpackChunkName: "lazy-appNodeStyle" */"./appNode.css");
    // lazy load css with JS module
    loadcss();
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
