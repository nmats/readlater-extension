import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.js';

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}`;

export default merge.smart( baseConfig, {

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}/`,
    `webpack/hot/only-dev-server`,
    path.join( __dirname, 'src/index.js' )
  ],

  output: {
    publicPath: `http://localhost:${port}/`
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

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' ),
      'process.env.API_KEY': JSON.stringify( process.env.API_KEY )
    }),

    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.LoaderOptionsPlugin({
      debug: true
    })

  ],

  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join( __dirname, 'src' ),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false
    }
  }
});