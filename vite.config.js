import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/frontend-semana7-coello/", // Nombre exacto del repositorio
});