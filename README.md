# Hyperiondev Learning Portal


## Production

Build the application for production:

```bash
# npm
npm run build

```

Locally preview production build:

```bash
# npm
npm run preview

```


---

## Issues

Enviroment specific issues:

- Nuxt/Tailwind module extensibility is not working when implemented as per documentation is https://tailwindcss.nuxtjs.org/tailwindcss/configuration
- Tailwind version documentation show a different Nuxt integration config which is not compatible with the current nuxt app bootstrapped https://tailwindcss.com/docs/adding-custom-styles

---


## Copilot Instructions for HyperionDev Take-Home Test

### Project Overview
- **Framework:** Nuxt 3 (Vue 3, Vite, TypeScript)
- **UI:** TailwindCSS, Google Fonts, custom SCSS (`assets/styles/main.scss`)
- **Pages:** All routes/pages are in `app/pages/` (e.g., `index.vue` for registration)
- **App Shell:** `app/app.vue` defines the main layout, header, footer, and navigation.

### Key Patterns & Conventions
- **Component Structure:** Use `<script setup>` and composition API for logic.
- **Form Handling:** Validation and error state are managed reactively in-page (see `index.vue`).
- **API Calls:** Use `$fetch` for server communication (e.g., `/api/auth/register`).
- **Navigation:** Use `navigateTo()` for client-side routing.
- **Meta/SEO:** Use `useHead()` in each page for meta tags.

### Developer Workflows
- **Development:**
  - Start dev server: `npm run dev`
- **Build for Production:**
  - `npm run build`
  - Preview: `npm run preview`
- **Dependencies:**
  - Install: `npm install`
- **Styling:**
  - Tailwind config is managed by Nuxt module; custom styles in `assets/styles/main.scss`.

### Integration Points
- **Google OAuth:** `/api/auth/google` endpoint for sign-up (see `signUpWithGoogle` in `index.vue`).
- **reCAPTCHA:** UI mentions Google reCAPTCHA, but no explicit integration code is present.
- **Fonts:** Managed via `@nuxtjs/google-fonts` in `nuxt.config.ts`.

### Notable Files
- `.nuxt`: Auto-generated build files (ignore for edits).
- `app/app.vue`: Main layout, navigation, and footer.
- `app/pages/index.vue`: Registration form, validation, and UI patterns.
- `assets/styles/main.scss`: Custom global styles.
- `nuxt.config.ts`: Nuxt, Vite, and module configuration.
- `tsconfig.json`: TypeScript configuration and path aliases.
- `package.json`: Scripts and dependencies.
- `package-lock.json`: Lockfile for npm dependencies.

### Project-Specific Advice
- **Follow the composition API and `<script setup>` for new components.**
- **Use Tailwind utility classes for layout and design.**
- **API endpoints are assumed to exist; mock as needed for local dev.**
- **No test or lint scripts are defined—add as needed.**

---