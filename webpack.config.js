const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  const config = {
    entry: './src/index.js',

    output: {
      library: 'snapsheet-string-utils', // CHANGE THIS TO YOUR PACKAGE NAME
      libraryTarget: 'umd'
    },

    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      }]
    },

    resolve: {
      alias: {
        react: path.resolve(__dirname, './node_modules/react')
      }
    },

    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    ]
  };

  if (env === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      })
    );
  }

  return config;
};
