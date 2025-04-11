import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ConsumindoAPI_Chuck_Norris/",
  plugins: [react()],
});
