/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "unsplash.com",
                pathname: "/photos/**",
            }
        ]
    },
}

module.exports = nextConfig
