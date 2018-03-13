const path = require('path');

module.exports = {
  entry: [
    "./client/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "server/public/js"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "~": path.join(__dirname, "client")
    }
  },
  context: __dirname,
  target: "web"
};
