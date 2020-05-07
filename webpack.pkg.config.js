/**
 * 编译组件
 * @author veket
 */
'use strict'
const path = require('path')
const webpack = require('webpack')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const glob = require('glob');
const buildPath = path.resolve(process.cwd(),'dist/pkg');
const pkgDir = path.resolve(process.cwd(),'pkg');
const nodeModulesPath = path.resolve(process.cwd(),'node_modules');
const entryFiles = glob.sync(`${pkgDir}/*`);
process.env.NODE_ENV = 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin')


let cssLoaders = function (options) {
    options = options || {}
  
    const cssLoader = {
      loader: 'css-loader',
      options: {
        minimize: process.env.NODE_ENV === 'production',
        sourceMap: options.sourceMap
      }
    }
  
    function generateLoaders (loader, loaderOptions) {
      const loaders = [cssLoader]
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
  
      if (options.extract) {
        return ExtractTextPlugin.extract({
          use: loaders,
          fallback: 'vue-style-loader'
        })
      } else {
        return ['vue-style-loader'].concat(loaders)
      }
    }
  
    return {
      css: generateLoaders(),
      postcss: generateLoaders(),
      less: generateLoaders('less'),
      sass: generateLoaders('sass', { indentedSyntax: true }),
      scss: generateLoaders('sass'),
      stylus: generateLoaders('stylus'),
      styl: generateLoaders('stylus')
    }
}

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let getWebpackConfig = (componentName,_entry)=>{

    let webpackConfig = {
        entry:_entry,
        output: {
            path:buildPath,
            filename:'[name]/[name].min.js',
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': `${nodeModulesPath}/vue/dist/vue.js`,
                '@':`${pkgDir}`,
            }
        },
        externals: {
            vue: 'vue',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        esModule: false,
                        loaders: cssLoaders({
                            sourceMap: true,
                            extract: false          // css 不做提取
                        }),
                        transformToRequire: {
                            video: 'src',
                            source: 'src',
                            img: 'src',
                            image: 'xlink:href'
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [resolve('pkg')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'dist/pkg/',
                        name: componentName+'/[name].[ext]',
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'dist/pkg/',
                        name: componentName+'/[name].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'dist/pkg/',
                        name: componentName+'/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: false,
                sourceMap: true
            }),
            new OptimizeCSSPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            })
        ]
    }

    return webpackConfig;
}

entryFiles.forEach((filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('/')+1,filePath.length);
    let entry = {};
    entry[filename] = `${filePath}/${filename}.vue`;

    var compiler = webpack(getWebpackConfig(filename,entry));
    console.log('start compiler componnet:'+filename);
    compiler.run(function(err, stats){
        console.log('end compiler componnet:'+filename);
    });
});

