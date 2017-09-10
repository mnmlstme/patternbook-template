var path = require('path')
const webpack = require('webpack')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
    entry: './book.js',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader']
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svg-inline-loader',
                    query: {
                        idPrefix: true,
                        classPrefix: true,
                        removingTagAttrs: ['xmlns', 'xmlns:xlink', 'version']
                    }
                }
            },
            {
                test: /\.md$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'es2015', 'stage-0']
                        }
                    },
                    {
                        loader: 'patternbook'
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            TARGET: path.resolve(__dirname, 'patterns')
        },
        modules: ['node_modules'],
        extensions: ['.js']
    },

    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js'],
        mainFields: ['loader', 'main']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true // Tell the dev-server we're using HMR
    }
}
