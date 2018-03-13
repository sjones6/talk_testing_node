/**
 * This server is useful especially for client-side
 * development with hot module replacement (HMR)
 */
const webpack = require('webpack');
const config = require('./webpack.hmr.js');
const compiler = webpack(config);

// get the express server with all of it's routes.
const app = require('./server/app.js');

// Wire up the dev middleware
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// Wire up the hot middleware
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// Connect the server
app.listen(3000);