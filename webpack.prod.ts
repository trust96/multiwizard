import { merge } from "webpack-merge";
import path from "path";
import common from "./webpack.common";
import TerserPlugin from "terser-webpack-plugin";

export default merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        //cache: true,
        parallel: true,
        // Must be set to true if using source-maps in production
        terserOptions: {
          sourceMap: true,
          ecma: 5,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  devtool: "source-map", // inline-- or eval-- increase the bundle size
  output: {
    filename: "js/[name].bundle.js",
    path: path.join(__dirname, "/dist"),
    clean: true,
  },
});
