/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
const withImages = require('next-images');
module.exports = withImages({
  // Otras configuraciones aquí
  webpack(config, options) {
    return config;
  },
});
