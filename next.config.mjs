/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
   assetPrefix: '',
  images: {
    unoptimized: true,
  },
  // Fix asset paths for GitHub Pages
  //assetPrefix: isProd ? 'https://ghazanfaridrees.com/' : '',
 
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

