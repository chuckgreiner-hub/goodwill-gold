import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: path.resolve(__dirname, "client"),
  resolve: {
  alias: [
    { find: "@", replacement: path.resolve(__dirname, "client/src") },
  ],
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
},
build: {
  outDir: path.resolve(__dirname, "client/dist"),
  emptyOutDir: true,
  rollupOptions: {
    external: ["@/components/ui/sonner"],
  },
});



