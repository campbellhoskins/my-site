/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    serverComponentsExternalPackages: ['react-markdown']
  }
}

module.exports = nextConfig
