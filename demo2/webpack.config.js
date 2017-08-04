module.exports = {
    entry: {
        bundle1: './profile.js',
        bundle2: './main.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            },
        ]
    }
};
