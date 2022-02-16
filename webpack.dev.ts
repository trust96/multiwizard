/* eslint-disable no-undef */

import { merge } from "webpack-merge";
import path from "path";
import common from "./webpack.common";
import TerserPlugin from "terser-webpack-plugin";

export default merge(common, {
  mode: "development",
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
        },
      }),
    ],
  },
  devServer: {
    watchFiles: path.join(__dirname, "src"),
  },

  devtool: "inline-source-map",
  output: {
    filename: "js/[name].bundle.js",
    path: path.join(__dirname, "/dist"),
    clean: true,
  },
});
