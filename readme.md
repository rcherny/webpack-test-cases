# Webpack Test Cases

- [ ] update readme and html bundle test cases

Various simple test configs for using [webpack](https://webpack.js.org/) build set ups with [various plugins](https://webpack.js.org/plugins/).

Each sub-folder should be a standalone test case. Serve is run from the root, however.

## Set Up

- Check out repo
- from a terminal, run:  
  `$ npm install`
- run the desired builds from `package.json`
- inspect the folder ouput in `dist` for each sub-folder
- to browse sample html files as appropriate, execute:  
  `$ npm run server`
- Open web browser and browse desired `dist` folder

## Use Cases

These test cases largely demo the ability to lazy import css via JS. This is not necessarily CSS Modules, but using various solutions.

CSS largely should be imported via a `<link />` tag, but for various "routes" on a SPA application it is not unusual to
load a JS file + its css support simultaneously after the page loads.

<!-- ### baseline webpack build

- `~/wp-base`
- no plugins

### Using webpack with `mini-css-extract-plugin`

- `~/wp-mini-css`
- mini-css-extract-plugin + css-loader

Extract a CSS file from JS and generate a CSS file.

### Native CSS Experiment

- `~/wp-exp-css`
- no plugins
- `experiments.css: true`

### wp-mini-chunk

Native Chunkname - Magic Comments

```
/* webpackChunkName: "chunk-js-app1" */
```

- [Reference Discussion](https://github.com/webdiscus/html-bundler-webpack-plugin/discussions/85)

### HTML-Bundler-Webpack-Plugin - baseline

### mini-chunk-remove
-->
