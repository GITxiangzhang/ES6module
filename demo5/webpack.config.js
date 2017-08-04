module.exports = {
    entry: ['./export-default.js','./extend.js','./import-default.js']

    /*{
        bundle1: './export-default.js',
        bundle2: './extend.js',//'./import-default.js'
        bundle3: './import-default.js'
    }*/,
    output: {
        filename: 'bundle.js'
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
