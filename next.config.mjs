/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slash to avoid routing issues
  trailingSlash: false,
  // Make sure assets are properly referenced
  assetPrefix: './',
  // Disable image optimization which can cause issues in static exports
  reactStrictMode: true,
};

export default nextConfig;

