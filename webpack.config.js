module.exports = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  resolve: {
    modules: ['node_modules', 'app'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css',
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },
};
