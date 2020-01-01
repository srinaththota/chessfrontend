const path=require('path');
const autoprefixer=require('autoprefixer');
const htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={

    entry:{
        app:path.resolve(__dirname,'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                        {loader:'style-loader'},
                        {loader:'css-loader',options:{
                            importLoaders:1,
                            modules:{
                                localIdentName:'[name]__[local]__[hash:base64:5]'
                            }
                        }
                        
                    },
                        {loader:'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins:()=>[autoprefixer()]
                        }
                    }
                    
                ]
            },
            {
                test:/\.(png|jpe?g|gif)/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin(
            {
                template:__dirname+'/index.html',
                filename:'index.html',
                inject:'body'
            }
        )
    ],
    devtool:'cheap-eval-source-map'
}