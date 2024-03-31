/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'istockphoto.comm',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  