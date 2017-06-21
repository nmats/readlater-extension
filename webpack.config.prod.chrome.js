/**
 * Base webpack config file.
 */
import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.js';

export default merge.smart( baseConfig, {

  entry: {
    main: [
      'babel-polyfill',
      path.join( __dirname, 'src/index.js' )
    ],
    content: [
      path.join( __dirname, 'src/content-script.js' )
    ]
  },

  output: {
    path: path.join( __dirname, 'app/chrome-firefox' ),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              camelCase: true
            }
          }
        ]
      }
    ]
  },

  plugins: [

    new webpack.optimize.UglifyJsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'production' ),
      'process.env.API_KEY': JSON.stringify( process.env.API_KEY )
    }),

    new CopyWebpackPlugin([
      { from: './src/**/*.{html,json}', to: './', flatten: true },
      { 
        from : './src/**/*.{jpg,png,gif,svg}',
        to: './',
        flatten: true
      },
      { 
        from: './src/resources/css/{reset,general}.css',
        to: './resources/css',
        flatten: true
      }
    ],{
      ignore: [
        '*.tpl.html'
      ]
    })

  ]

});
