/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Fix asset paths for GitHub Pages
  assetPrefix: './',
  // Disable trailing slash to avoid routing issues
  trailingSlash: true,
  // Ensure webpack optimizations don't break the build
  webpack: (config) => {
    // Optimize bundle size
    config.optimization.minimize = true;
    
    // Avoid issues with specific modules
    config.resolve.fallback = { 
      fs: false,
      path: false,
      os: false,
    };
    
    return config;
  },
};

export default nextConfig;

