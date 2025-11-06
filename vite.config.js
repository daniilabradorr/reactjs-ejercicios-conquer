import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//configuración de Vite
export default defineConfig({
  //para GitHub Pages
  base: '/reactjs-ejercicios-conquer/',
  plugins: [react()],
});