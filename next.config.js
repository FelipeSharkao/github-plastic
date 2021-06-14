const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    if (dev) {
      config.module.rules.push({
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      })
    }
    return config
  },
}
