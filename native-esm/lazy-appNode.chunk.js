import {fetchCSS} from './fetchCSS.js';

const appNode = {
  init(data) {
    // undesired: on-demand file is loaded up front
    // also, today this lazy loaded CSS file is generating a JS file that does nothing
    const loadcss = () => fetchCSS("./lazy-appNodeStyle.css");
    // lazy load css with JS module
    loadcss();
    // fetch('./appNode2.css')
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
