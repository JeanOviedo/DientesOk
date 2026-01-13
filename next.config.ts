import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/DientesOk",
  assetPrefix: "/DientesOk/",
};

export default nextConfig;
