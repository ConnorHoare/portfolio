/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    swcLoader: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            }
        ]
    }
}

module.exports = nextConfig
