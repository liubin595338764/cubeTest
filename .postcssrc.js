// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('autoprefixer')({ browsers: ['last 8 versions', 'Safari >= 6', 'ie > 7'] })
  ]
}
