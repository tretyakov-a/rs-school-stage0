const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  const { mode = 'development', submode='build' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  // const fileName = ext => isDev ? `main.${ext}` : `main-[hash:8].${ext}`;
  const fileName = ext => isDev ? `main.${ext}` : `main.${ext}`;

  const getStyleLoaders = () => [
    isProd
      ? MiniCssExtractPlugin.loader
      : 'style-loader',
    'css-loader'
  ];
  
  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        minify: false,
        template: './index.ejs',
        filename: 'index.html'
      }),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: fileName('css')
        })
      )
    }
    return plugins;
  };

  return {
    context: path.resolve(__dirname, 'src'),
    entry: isProd ? './custom-video-player.js' : './index.js',
    target: isProd ? 'node' : 'web',
    output: isProd 
      ? {
        filename: fileName('js'),
        library: 'customVideoPlayer',
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
      }
      : {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
      },
    mode: isProd ? 'production' : isDev && 'development',
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          terserOptions: {
            mangle: false, // Note `mangle.properties` is `false` by default.
            keep_classnames: true,
            keep_fnames: true,
          },
        })
      ]
    },
    devServer: {
      hot: isDev,
      liveReload: isDev,
      static: isDev,
      watchFiles: [
        './src/templates',
        './src/index.ejs'
      ]
    },
    module: {
      rules: [
        // Loading javascript
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]        
        },
        // Loading html
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                esModule: false,
                sources: true
              }
            }
          ]
        },
        // Loading images
        {
          test: /\.(jpg|png|svg|gif|ico|mp4)$/,
          type: 'asset/resource',
          generator: {
            // filename: 'images/[name]-[hash:8][ext]'
            filename: 'images/[name][ext]'
          }
        },
        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            // filename: 'fonts/[name]-[hash:8][ext]'
            filename: 'fonts/[name][ext]'
          }
        },
        // Loading scss/sass
        {
          test: /\.(s[ca]ss)$/,
          use: [
            ...getStyleLoaders(),
            'sass-loader'
          ]
        },
        // Loading css
        {
          test: /\.css$/,
          use: getStyleLoaders()
        },
        {
          test: /\.(md)$/,
          type: 'asset/source'
        },
        {
          test: /\.(ejs)/,
          loader: 'ejs-compiled-loader'
        }
      ]
    },

    plugins: getPlugins()
  }
};