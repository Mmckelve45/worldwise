# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// Install ES Lint for React
npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev
// Get react router dom installed
npm i react-router-dom

// to run this
npm run dev

Backend
install Json Server
npm i json-server

add script to package.json file to run server
// Add artificial delay of half a second
"server": "json-server --watch data/cities.json --port 8000 --delay 500"
