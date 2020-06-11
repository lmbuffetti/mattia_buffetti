process.env.NODE_ENV = process.argv[process.argv.length - 1];
process.env.BABEL_ENV = process.argv[process.argv.length - 1];
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const CSSNano = require('cssnano');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

// const devMode = false;
const ROOT_DIR = path.resolve(__dirname, './');
const BUILD_DIR = path.join(ROOT_DIR, '../dist');


const devMode = process.argv[process.argv.length - 1] === 'development';
const getEnvBuild = process.argv[process.argv.length - 3];

const clientConfig = {
  mode: 'client',
  devtool: devMode ? 'inline-source-map' : 'cheap-source-map',
  entry: [
    '@babel/polyfill',
    './src/index.jsx',
    './src/styles/SCSS/general/main.scss',
  ],
  devServer: {
    contentBase: BUILD_DIR,
    compress: devMode,
    port: 4000,
    historyApiFallback: true,
    open: true
  },
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/',
    hotUpdateChunkFilename: 'hot/hot-update.[hash].js',
    hotUpdateMainFilename: 'hot/hot-update.[hash].json',
    globalObject: 'this'
  },
  stats: {
    all: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: devMode,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
              sourceMap: devMode,
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ]
      },
      {
        test: /\.jsx?/,
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
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
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
        use: [{
          loader: 'file-loader?name=images/[name].[ext]',
          options: {
            esModule: false,
          },
        }],
      },
      {
        type: 'javascript/auto',
        exclude: /(node_modules|bower_components|public)/,
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'json/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractCssChunks({
      hot: true,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['*', '!manifest.json'],
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/icons', to: './icons' },
        { from: './public/favicon.ico', to: './' }
      ]},
    ),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      hash: true,
      filename: './index.html',
      template: './public/index.html',
      title: 'Mattia Buffetti - Fullstack Developer',
      meta: {
        'keywords': 'fullstack, web, developer, app, ios, android, react, native, expo',
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      googleAnalyticsId: 'UA-36210943-1',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(devMode ? 'development' : 'production'),
      'process.env': {
        NODE_ENV: JSON.stringify(devMode ? 'development' : 'production'),
      },
      'process.env.client': true,
      'process.env.BROWSER': JSON.stringify(true)
    }),
    new WebpackAssetsManifest(),
    new ImageminWebpWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: devMode ? 'development' : 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    minimize: !devMode,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      minSize: 500,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        styles: {
          name: 'styles',
          test: /\.scss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    removeAvailableModules: !devMode,
    noEmitOnErrors: !devMode,
    checkWasmTypes: false,
    minimizer: [
      new TerserPlugin({
        cache: !devMode,
        parallel: true,
        sourceMap: devMode,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: CSSNano,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }),
    ],
  },
};

module.exports = [clientConfig];
