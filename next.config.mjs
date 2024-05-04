/** @type {import('next').NextConfig} */

import { createRequire } from 'module';

import express from 'express';
import path from 'path';

const app = express();
//__dirname 선언
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '../public')));

const withBundleAnalyzer = createRequire(import.meta.url)('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = createRequire(import.meta.url)('next-compose-plugins');
const { i18n } = createRequire(import.meta.url)('./next-i18next.config');

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
