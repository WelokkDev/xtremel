/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: '', // ← important: blank string
  basePath: '', 
};

export default nextConfig;
