module.exports = {
  context: __dirname,
  entry: {
    index: './src/main.js',
    test: './test/test.js',
  },
  output: {
    path: __dirname + '/js',
    filename: '[name].js',
    publicPath: '/js/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
}
