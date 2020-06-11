process.env.NODE_ENV = process.argv[process.argv.length - 1];
process.env.BABEL_ENV = process.argv[process.argv.length - 1];
const path = require('path');
const webpack = require('webpack');
// const NodemonPlugin = require('nodemon-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

const cssModuleRegex = /\.module\.css$/;
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// const devMode = false;
const ROOT_DIR = path.resolve(__dirname, './');
const BUILD_DIR = path.join(ROOT_DIR, '../dist');

// const devMode = process.argv[process.argv.length - 1] === 'development';

const serverConfig = {
  mode: 'server',
  entry: ['@babel/polyfill', `${__dirname}/index.js`],
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
  stats: {
    all: true,
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    chunkFilename: 'js/server/[name].js',
    publicPath: '/',
    globalObject: 'this'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new PurgecssPlugin({
      paths: [
        ...glob.sync(`${BUILD_DIR}/**/*`,  { nodir: true }),
        ...glob.sync(`${ROOT_DIR}/src/**/**/*`,  { nodir: true }),
      ],
      rejected: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              'react-loadable/babel',
            ],
          },
        },
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
        ],
      },
      { test: /\.(sa|sc|c)ss$/, exclude: /\.module.css$/, loader: 'ignore-loader' },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
        ],
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
};

module.exports = [serverConfig];
