/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/healthcare',
        destination: '/',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
