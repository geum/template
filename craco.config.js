const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@root': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src', 'components')
    }
  }
}
