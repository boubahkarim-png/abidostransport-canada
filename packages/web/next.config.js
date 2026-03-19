/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@abidostransport/shared'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig