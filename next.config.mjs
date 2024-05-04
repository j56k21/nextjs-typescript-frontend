/** @type {import('next').NextConfig} */

const serverApiUrl =
  process.env.NEXT_PUBLIC_TEMP === 'true'
    ? 'http://localhost:3000'
    : process.env.SERVER_API_URL || 'http://localhost:8080/api';
const nextConfig = {
  /* config options here */
};

export default nextConfig;
