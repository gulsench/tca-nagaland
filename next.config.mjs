/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Unsplash placeholder imagery used in the demo.
    // Swap these for the client's own hosted images later if desired.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
