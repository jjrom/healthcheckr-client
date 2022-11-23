import solidPlugin from 'vite-plugin-solid';

export default {
  plugins: [solidPlugin()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    host: "0.0.0.0",
    hmr: {
      clientPort: 5173
    },
    port: 5173, 
    watch: {
      usePolling: true
    }
  }
};
