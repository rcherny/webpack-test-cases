const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { copyPlugin } = require("./helpers/copyPlugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const ROOT = "wp-mini-css-construct";
// this includes lazy loaded, on demand chunks

module.exports = {
  // mode: "development",
  mode: "production",
  context: path.join(__dirname, `./${ROOT}`),

  output: {
    path: path.join(__dirname, `${ROOT}/dist/`),
    publicPath: `/${ROOT}/dist/`,
    clean: {
      keep: /log/,
    },
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    module: true, // breaks imports
    chunkFormat: 'module' // breaks imports
  },
  experiments: {
    outputModule: true, // breaks imports
  },

  entry: {
    main: "./src/main.js",
    style: "./src/style.css",
  },

  stats: 'verbose',

  plugins: [
    copyPlugin(CopyPlugin, ROOT),
    new RemoveEmptyScriptsPlugin({
      options: {
        verbose: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].chunk.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        sideEffects: true,
        // use: [
        oneOf: [
          // {
          //   use: [MiniCssExtractPlugin.loader, 'css-loader']
          //   // loader: MiniCssExtractPlugin.loader
          // },
          // CSS in Firefox: "Ruleset ignored due to bad selector."
          // sounds like a module thing ... adoptedStyleSheets shows css objects
          {
            assert: { type: "css" },
            loader: "css-loader",
            options: {
              exportType: "css-style-sheet",
              esModule: true,
              modules: { // specific to css modules
                namedExport: true
              }
            }
          },
          {
            use: [MiniCssExtractPlugin.loader, 'css-loader']
            // loader: MiniCssExtractPlugin.loader
          }
        ]
      },
    ],
  },

  optimization: {
    minimize: true, // can see the css embedded inside of main.js for some reason
    removeEmptyChunks: true,
    removeAvailableModules: false,
    mergeDuplicateChunks: false,
    sideEffects: true,
  //   moduleIds: 'named',
  //   chunkIds: 'named',
  //   runtimeChunk: 'single',
    concatenateModules: false,
    providedExports: false,
    usedExports: false,
    splitChunks: {
      chunks: 'async'
    }
  }
};


  // removeEmptyChunks: true,
  // removeAvailableModules: true,
  // mergeDuplicateChunks: true,
  // flagIncludedChunks: true, // prod default
  // innerGraph: true,
  // moduleIds: 'named',
  // chunkIds: 'named',
  // runtimeChunk: 'single',

  // // need all three for tree shaking to work
  // concatenateModules: true,
  // providedExports: true,
  // usedExports: true,
