module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-stage-1'],
      },
    }],
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".json", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
