import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "northy-cf",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        dir: "lib",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
