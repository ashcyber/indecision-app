const path = require('path');
/*
  @entry: defines the start point of the application file 
  namely the javascript file which renders the main application 
  in our case it is the indecision app.  
  ----------------------------------------------------------------------
  @output: consist of two parameters @@path and @@filename this defines 
  where our single bundle.js would be saved. A bundle.js file is basically 
  the combination of all our js files 
  ----------------------------------------------------------------------
  @module: the main elemnt of this key is rules which further consist of 
  @@test for regex file match, loader to be used when that file is encountered 
  and exclude files such as node_modules that are not required to be compiled 
  
  Similarly @rules contain loaders for scss/css files with regex test expression. 
  This allows webpack to convert the scss file on the go into the bundle.js file 
  itself! 

  ----------------------------------------------------------------------
  @dev-tool allows us to track where the error has occured in the javascript 
  otherwise it is difficult to track the errors through logs given on bundle.js file. 
  ---------------------------------------------------------------------
  @devserver replaces the task of live-server it is easier this way as we only 
  need to unleash webpack devserver to take charge of handling file complilation 
  and starting server. 

   babel + live-server  =  webpack.dev-server
*/

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
