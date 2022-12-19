import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import presetWind from "@unocss/preset-wind";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetWind()],
    }),
    react(),
  ],
});
