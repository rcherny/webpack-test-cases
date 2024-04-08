import css from "./appNode2.css?url";

function loadCSSLazy(url) {
  const style = document.createElement("link");
  style.href = url;
  style.rel = "stylesheet";
  document.head.appendChild(style);
}

const appNode = {
  init(data) {
    // undesired: on-demand file is loaded up front
    const loadcss = () => import("./appNode.css");
    loadcss();
    console.log("css?", css);
    // lazy load css
    loadCSSLazy(css);
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
