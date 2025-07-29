import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react()
	],
	resolve: {
    	alias: {
      	'@': path.resolve(__dirname, 'src'),
      	'$': path.resolve(__dirname, 'src/components'),
      	'&': path.resolve(__dirname, 'src/pages'),
      	'~': path.resolve(__dirname, 'src/assets'),
    	},
  	},
})