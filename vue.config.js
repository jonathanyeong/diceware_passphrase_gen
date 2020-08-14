module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            delimiter: " ",
            dynamicTyping: true,
            header: false,
            skipEmptyLines: true,
            transform: function(value, header) {
              console.log("==> transforming the value with value", value)
              console.log("==> transforming the value with header", header)
              return
            }
          }
        }
      ]
    }
  }
}
