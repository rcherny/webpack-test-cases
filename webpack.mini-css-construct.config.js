const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { copyPlugin } = require("./helpers/copyPlugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const ROOT = "wp-mini-css-construct";
// this includes lazy loaded, on demand chunks

module.exports = {
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
    // module: true,
    // chunkFormat: 'module'
  },
  // experiments: {
  //   outputModule: true, // not doing much
  // },

  entry: {
    main: "./src/main.js",
    style: "./src/style.css",
  },

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
      // {
      //   test: /\.(css)/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      //   include: ''
      // },
      {
        // include: ''
        test: /\.(css)/,
        // type: "css/auto",
        // type: "css",
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // assert: { type: "css" },
              // exportType: "css-style-sheet",
            },
          },
        ],
      },
    ],
  },

  // optimization: {
  //   concatenateModules: true,
  //   providedExports: true,
  //   usedExports: true,
  //   splitChunks: {
  //     chunks: 'async'
  //   }
  // }
};
