# React + TypeScript + Vite + MongoDB Atlas

### You can view the site here -> https://cuvette-clone-f7ni.vercel.app/
How to run this project:
1. Clone the Repo:
  ```js
git clone https://github.com/ap441/Cuvette-Clone.git
```
2. Install the necessary dependencies:
```js
npm install
```
3. Run the Server in a powershell in the project's directory:
```js
node app.js
```
4. In another powershell in the same directory start the local server without disturbing the backend:
```js
npm run dev
```
5. Just follow the link and the app should be up

## Note: If the database does not connect try changing the port to whatever port your device's backend server runs on in app.js(line 70)

ScreenShots:
![image](https://github.com/user-attachments/assets/555d6ca5-d99c-4d45-93e5-65faf4b69100)
![image](https://github.com/user-attachments/assets/489ae719-8076-4d41-981f-5a8d3f491983)
![image](https://github.com/user-attachments/assets/7b9b96b2-dcf4-4907-9337-b672939b494a)
![image](https://github.com/user-attachments/assets/5c8411b7-95ef-4c71-8bcf-dc7b2d0e7a33)
![image](https://github.com/user-attachments/assets/9375e3d6-3c23-4597-934b-99eadcefd095)
![image](https://github.com/user-attachments/assets/dc4fbb24-a482-4b3e-8f81-916ab8c0155e)



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
