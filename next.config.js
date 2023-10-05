/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
        "placedog.net"
    ]
  }
}

module.exports = nextConfig
