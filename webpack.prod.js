const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: paths.build,
    filename: "[name].[hash].bundle.js",
    publicPath: "./",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${paths.src}/assets/`, to: "./assets/" },
        {
          from: `${paths.public}/service-worker.js`,
          to: "./service-worker.js",
        },
        {
          from: `${paths.public}/manifest.json`,
          to: "./manifest.json",
        },
        {
          from: `${paths.public}/favicon/`,
          to: "./favicon/",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
});
