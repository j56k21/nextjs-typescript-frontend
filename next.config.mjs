/** @type {import('next').NextConfig} */

const serverApiUrl = "http://localhost:8080/api";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_HOST}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
