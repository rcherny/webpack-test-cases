const path = require("path");
const HtmlBundlerWebpackPlugin = require("html-bundler-webpack-plugin");

const ROOT = "wp-bundler-base";

module.exports = {
  mode: "production",
  context: path.join(__dirname, `./${ROOT}`),

  output: {
    path: path.join(__dirname, `${ROOT}/dist/`),
    publicPath: `/${ROOT}/dist/`,
    clean: {
      keep: /log/,
    },
  },

  plugins: [
    new HtmlBundlerWebpackPlugin({
      verbose: true,
      entry: {
        index: path.join(__dirname, `${ROOT}/src/template.html`),
      },
      js: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
      },
      css: {
        filename: "[name].css",
        chunkFilename: "[name].chunk.css",
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(css)/,
        use: ["css-loader"],
      },
    ],
  },
};
