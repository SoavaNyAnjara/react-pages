# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm install gh-pages --save-dev

package.json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
}

vite.config.js
export default defineConfig({
  base: "/react-pages/",
  plugins: [react()],
})
