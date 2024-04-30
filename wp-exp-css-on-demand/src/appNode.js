// import {fetchCSS} from './fetchCSS';

const appNode = {
  async init(data) {
    // undesired: on-demand file is loaded up front
    // also, today this lazy loaded CSS file is generating a JS file that does nothing
    // const loadcss = () => import(/* webpackChunkName: "lazy-appNodeStyle" */"./appNode.css");
    // lazy load css with JS module
    // loadcss();
    const url = new URL("./appNode2.css", import.meta.url);
    // const url = new URL(/* webpackChunkName: "lazy-appNodeStyle2" */"./appNode2.css", import.meta.url);
    console.log('appNode.js > appNode2.css new URL()', url);
    const content = fetch(url).then(res => res.text());
    const newStyles = new CSSStyleSheet();
    newStyles.replace(content);
    document.adoptedStyleSheets.push(newStyles);
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
