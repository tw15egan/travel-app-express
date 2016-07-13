const path = require('path');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

module.exports = {
  // Entry accepts a path or an object of entries.
  context: path.resolve(__dirname, '../'),

  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loaders: ['eslint'],
    //     exclude: '/node_modules/',
    //     include: [
    //       path.resolve(__dirname, '../app/scripts'),
    //     ],
    //   },
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loaders: ['babel?cacheDirectory'],
        include: [
          path.resolve(__dirname, '../app/scripts'),
        ],
      },
    ],
  },
};
