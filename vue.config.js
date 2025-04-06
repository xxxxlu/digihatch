module.exports = {
  // publicPath for production deployment
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // Output directory for the build process
  outputDir: 'dist',
  // Configure which files to lint
  lintOnSave: process.env.NODE_ENV !== 'production',
  // Disable source maps in production to reduce build size
  productionSourceMap: false,
  // Configure the dev server
  devServer: {
    port: 8080,
    open: true,
    // Enable gzip compression for faster loading
    compress: true
  }
}
