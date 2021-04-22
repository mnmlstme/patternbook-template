var path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
      book: './book.js'
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'env'],
                        plugins: ['syntax-dynamic-import']
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
                            presets: ['react', 'env']
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
        filename: '[name].bundle.js',
        chunkFilename: 'chunk.[id].js',
        publicPath: '/'
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
