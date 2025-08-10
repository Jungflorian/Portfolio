# Portfolio React avec Vite

Ce projet a été créé avec [Vite](https://vitejs.dev/) et le template React.

## Démarrage local

```bash
npm run dev
```

## Déploiement sur GitHub Pages

1. Installez le package de déploiement :
	```bash
	npm install --save-dev gh-pages
	```
2. Ajoutez les scripts suivants dans le fichier `package.json` :
	```json
	"scripts": {
	  ...,
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d dist"
	}
	```
3. Modifiez la propriété `base` dans `vite.config.js` pour correspondre à votre dépôt GitHub :
	```js
	// vite.config.js
	export default defineConfig({
	  base: '/<nom-du-repo>/',
	  ...
	})
	```
4. Lancez le déploiement :
	```bash
	npm run deploy
	```

Remplacez `<nom-du-repo>` par le nom de votre dépôt GitHub.

---

Pour toute question, consultez la documentation officielle de Vite et GitHub Pages.
