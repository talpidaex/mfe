import { merge } from "webpack-merge";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import commonConfig from "./webpack.common.js";
import packageJSON from "../package.json";

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  devtool: "source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        //TODO
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
