import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //TODO : Use remotePatterns to allow
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.",
    //     port: "",
    //     search: "",
    //   },
    // ],
    domains: [""],
  },
};

export default nextConfig;
