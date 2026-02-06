<<<<<<< HEAD

'Centro de Suscripciones de manera local'

Subscription Manager - Walkthrough
Overview
A local-first, single-page application for managing subscriptions. Key Features:

Privacy First: No cloud, all data stored in your browser (LocalStorage).
Dashboard: Visual breakdown of monthly costs, yearly estimates, and category spending.
Alerts: Upcoming charges (30 days) and potential duplicates.
Dark Mode: Premium "Dashdark" inspired aesthetic.
Tech Stack
Core: React 18 + TypeScript + Vite
Styling: Vanilla CSS (CSS Variables) + Google Fonts (Outfit)
Icons: Lucide React
Testing: Vitest
Validation Results
Build: Production build passed (npm run build).
Tests: Unit tests for cost calculation logic passed (npx vitest run).
User Guide
1. Installation
The project is already set up. To run it:

npm run dev
2. Adding a Subscription
Click "New Subscription" in the sidebar.
Enter Name (e.g., Netflix), Price, Frequency, and Category.
Select the "Start / Billing Date".
Click "Add Subscription".
3. Dashboard
Monthly Cost: Real-time total of all active monthly subs (yearly subs averaged).
Chart: Visual bar chart showing spend by category.
Alerts: Automatically flags upcoming bills and duplicate entries.
4. Editing/Deleting
Go to the "Subscriptions" tab (Sidebar).
Click the Edit (Pencil) icon to modify details.
Click the Trash icon to remove a subscription.

Comment
Ctrl+Alt+M







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Centro-de-suscripciones
Centro de Suscripciones app
>>>>>>> 8e23bf5f206f8ad76f41c670949e504bc2788290
