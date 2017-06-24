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
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader']
            },
            {
                test: /\.md$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'es2015']
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
        extensions: ['.js', '.md']
        /*
        mainFields: ['browser', 'module', 'main'],
        mainFiles: ['index', 'README']
        plugins: [
            new DirectoryNamedWebpackPlugin({
                honorPackage: ['browser', 'module', 'main'],
                transformFn: function(dirName) {
                    return dirName + '.md'
                }
            })
        ]
        */
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
