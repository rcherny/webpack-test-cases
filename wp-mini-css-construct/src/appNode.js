import { adoptCSS } from "./fetchCSS";

const appNode = {
  async init(data) {
    // undesired: on-demand file is loaded up front
    // also, today this lazy loaded CSS file is generating a JS file that does nothing
    const loadcss = await import("./appNode.css", {
      assert: { type: "css" },
    });
    adoptCSS(loadcss);
    console.log(">> app1 >> appNode.js >> init(), data:", data);
  },
};

export { appNode };
