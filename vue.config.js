// vue.config.js
module.exports = {
    runtimeCompiler: true,
    pages: {
      // 目录页
      index: {
        entry: './src/main.js',
        template: './public/index.html',
        filename: 'index.html'
      }
      
    },
   
    devServer: {
      port:1024
    },
    chainWebpack: (config) => {
    
        
    },
    configureWebpack: {
      output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
      },
      plugins: [
        // new UglifyJSPlugin(),
        
      ]
    },
    pluginOptions: {
     
    }
  }
  