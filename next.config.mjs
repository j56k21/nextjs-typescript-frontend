/** @type {import('next').NextConfig} */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

const plugins = [[withBundleAnalyzer]];
const port = process.env.PORT || '3000';
const serverApiUrl =
  process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === 'true'
    ? `http://localhost:3000`
    : process.env.SERVER_API_URL || 'http://localhost:8080/api';

const nextConfig = {
  i18n,
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  env: {
    SERVER_API_URL: serverApiUrl,
    PORT: port,
    PROXY_HOST: process.env.PROXY_HOST || `http://localhost:${port}`,
    ENV: process.env.ENV || '-',
  },
  webpack: config => {
    const prod = process.env.NODE_ENV === 'production';
    const newConfig = {
      ...config,
      mode: prod ? 'production' : 'development',
    };
    if (prod) {
      newConfig.devtool = 'hidden-source-map';
    }
    return newConfig;
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/server/:path*',
        destination: `${serverApiUrl}/:path*`,
      },
    ];
  },
};

module.exports = withPlugins(plugins, nextConfig);
