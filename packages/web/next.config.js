/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@abidostransport/shared'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig