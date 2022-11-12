const withWorkbox = require('next-with-workbox');

/** @type {import('next').NextConfig} */
const nextConfig = {
  workbox:{
    
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withWorkbox(nextConfig)
