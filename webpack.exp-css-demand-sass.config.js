const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { copyPlugin } = require("./helpers/copyPlugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const ROOT = "wp-exp-css-demand-sass";

module.exports = {
  mode: "development",
  context: path.join(__dirname, `./${ROOT}`),
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, `${ROOT}/dist/`),
    publicPath: `/${ROOT}/dist/`,
    clean: {
      keep: /log/,
    },
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    // module: true, // breaks imports
    // chunkFormat: "module" // breaks imports
  },

  experiments: {
    // outputModule: true, // breaks imports
    css: true,
  },

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
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["sass-loader"],
        type: "css/auto",
        sideEffects: true
      },
    ],
  },

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         output: {
  //           comments: false,
  //         },
  //       },
  //       exclude: /\.s?css$/,
  //       extractComments: false,
  //     }),
  //     new CssMinimizerPlugin({
  //       include: /\.s?css$/,
  //       minimizerOptions: {
  //         preset: ["default"],
  //       },
  //     }),
  //   ],
  // },
};