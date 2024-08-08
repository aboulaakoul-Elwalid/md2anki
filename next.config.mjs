/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Add fallback for Node.js modules in the browser environment
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }

        return config;
    },
    experimental: {
        instrumentationHook: true,
    },
};
export default nextConfig;
