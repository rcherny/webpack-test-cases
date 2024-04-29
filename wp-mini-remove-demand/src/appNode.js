// import {fetchCSS} from './fetchCSS';

const appNode = {
  async init(data) {
    // undesired: on-demand file is loaded up front
    // also, today this lazy loaded CSS file is generating a JS file that does nothing
    const loadcss = () => import(/* webpackChunkName: "lazy-appNodeStyle" */"./appNode.css");
    // lazy load css with JS module
    loadcss();
    const moduleFile = await import(/* webpackChunkName: "lazy-appNodeStyle2" */'./appNode2.css', {
      assert: {
        type: 'css'
      }
    })
    document.adoptedStyleSheets = [moduleFile.default];
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
