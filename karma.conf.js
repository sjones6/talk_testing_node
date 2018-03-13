module.exports = config => config.set({
  basePath: '',
  exclude: [],
  files: [
    {
      pattern: 'tests/client/**/*-test.js',
      watched: true,
      served: true,
      included: true
    }
  ],
  autoWatch: true,
  singleRun: false,
  failOnEmptyTestSuite: false,
  logLevel: config.LOG_INFO,
  frameworks: ['mocha'],
  browsers: ['Chrome'/*,'PhantomJS','Firefox','Edge','ChromeCanary','Opera','IE','Safari'*/],
  reporters: ['mocha'],
  listenAddress: '0.0.0.0',
  hostname: 'localhost',
  port: 9876,
  retryLimit: 0,
  browserDisconnectTimeout: 5000,
  browserNoActivityTimeout: 10000,
  captureTimeout: 60000,

  client: {
    captureConsole: false,
    clearContext: false,
    runInParent: false,
    useIframe: true,
  },

  preprocessors: {
    //use webpack to support require() in test-suits .js files 
    //use babel-loader from webpack to compile es2015 features in .js files 
    //add webpack as preprocessor 
    './tests/**/*.js': ['webpack']
  },

  webpack: require('./webpack.test.js'),

  webpackMiddleware: {
    //turn off webpack bash output when run the tests 
    noInfo: true,
    stats: 'errors-only'
  },

  /*karma-mocha-reporter config*/
  mochaReporter: {
    output: 'noFailures'  //full, autowatch, minimal 
  }
});