const path = require( 'path' );

// Modes can be specified from commands --mode development, --mode production
module.exports = {
  mode: 'development',
  /* Key will be the name of the Js file and value should be exist in the path */
  entry: {
    'index': './react-src/index/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve( './public/react-dist' )
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // sass-loader
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};

