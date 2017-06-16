import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  output: {
    path: path.join( __dirname, 'app' ),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    modules: [
      path.join( __dirname, 'src' ),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      template: path.join( __dirname, 'src', 'index.tpl.html' ),
      inject: 'body',
      filename: 'index.html'
    })
    
  ]

}