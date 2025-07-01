// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ad-portfolio/", // 🔥 This is crucial
  plugins: [react()],
});
