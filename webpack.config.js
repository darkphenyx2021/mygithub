/**
 * Created by joshua.fair on 7/12/2016.
 */
module.exports = {
    entry:[
        './src/index.js'
    ],
    output:{
        path: __dirname,
        filename: 'app/js/main.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}