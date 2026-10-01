import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/recycling-program", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
