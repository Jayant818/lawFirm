import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "**.dropboxusercontent.com", // This allows all subdomains for Dropbox
      },
    ],
  },
};

export default nextConfig;
