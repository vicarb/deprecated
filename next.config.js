/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  image: {
    loader: 'akamai',
    path: ''
    
  },
  basePath: '/vicarb.github.io',
  assetPrefix: '/vicarb.github.io',
};

module.exports = nextConfig
