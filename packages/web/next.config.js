/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@abidostransport/shared'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/abidostransport-canada',
}

module.exports = nextConfig