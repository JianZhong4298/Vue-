const { resolve } = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'styles': resolve('src/assets/styles'),
        'js': resolve('./src/assets/js'),
        'components': resolve('./src/assets/components'),
        'data': resolve('./src/assets/data'),
        'utils': resolve('./src/utils'),
      }
    },
  }
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "x"
  //     }
  //   }
  // }
}
