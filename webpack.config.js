module.exports = {
  entry: ['./app/index.js'],
  output: {
    filename: './app/dist/bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
  watch: true,
};
