// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,

    // The complete HMR configuration to force the connection
    hmr: {
      protocol: "ws",
      host: "localhost",
      // === YEH SABSE ZAROORI LINE HAI ===
      // Force the client to connect on the same port as the server
      clientPort: 8080,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
