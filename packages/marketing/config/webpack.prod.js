const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
