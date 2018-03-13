const path = require('path');

module.exports = {
  entry: {
    main: "./client/index.js"
  },
  output: {
    path: path.resolve(__dirname, "server/public/js"),
    filename: "bundle.[name].js",
    publicPath: "/js/",
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: false,
          },
        }
      }
    ],
  },
  resolve: {
    alias: {
      "~": path.join(__dirname, "client")
    }
  },
  context: __dirname,
  target: "web"
};
