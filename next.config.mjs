/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['127.0.0.1','localhost'] 
    // }
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
