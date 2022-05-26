const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//Toda a configuração
module.exports = {
    //Ponto de entrada
    entry: './src/index.jsx',

    //Saída
    output: {
        // __dirname do NODE e /public a pasta do front
        path: __dirname + '/public',
        filename: './app.js'
    },

    devServer: {
        port: 8080,
        contentBase: './public',
    },

    //Extensões
    resolve: {
        //Por não reconhecer, é necessáiro usar as extensões
        extensions: ['', '.js', '.jsx'],

        //Apelido para o Node Modules, para não referenciar direto e gerando textão
        alias: {
            modules: __dirname + '/node_modules'
        }
    },

    //Noss CSS. Nova instância
    plugins: [ 
        new ExtractTextPlugin('app.css')
    ],

    //Configuração dos loaders (ou módulos)
    module: {
        loaders: [{
            //Sintaxe que faz parse em .js e .jsx
            test: /.js[x]?$/,
            loader: 'babel-loader',

            //Ignora o Node Modules
            exclude: /node_modules/,

            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            //Loaders para o CSS
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            //Loader para fontes como o Font Awesome e Font Extractor
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}