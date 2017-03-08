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
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: ['./vendor'],
          },
        }],
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
