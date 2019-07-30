const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.join(__dirname, 'src', 'components'),
      '@root': path.join(__dirname, 'src'),
      '@styles': path.join(__dirname, 'src', 'styles')
    }
  }
}
