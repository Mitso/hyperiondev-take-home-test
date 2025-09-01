# HyperionDev Learning Portal - Project Handover

## Project Overview
This is a Nuxt 3 application for HyperionDev's learning portal, featuring user registration, course enrollment, and a multi-step registration process for software engineering bootcamps.

## Tech Stack
- **Frontend Framework:** Nuxt 3 (Vue 3)
- **Language:** TypeScript
- **State Management:** Pinia
- **Styling:** TailwindCSS + SCSS
- **Local Storage:** localforage
- **Animations:** GSAP

## Prerequisites
- Node.js (v18+)
- npm/yarn/pnpm
- Git

## Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone git@github.com:Mitso/hyperiondev-take-home-test.git
   cd hyperiondev-take-home-test
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Project Structure
```
app/
├── pages/                # All route pages
│   ├── index.vue        # Main registration page
│   └── course/
│       └── register/
│           └── software-engineering.vue  # Multi-step registration
├── stores/              # Pinia stores
│   ├── userAuth.ts     # Authentication state
│   └── registrationProgress.ts  # Registration flow state
├── components/         # Reusable components
│   ├── step-one.vue   # Registration step 1
│   └── step-two.vue   # Registration step 2
├── app.vue            # Main app layout
└── assets/
    └── styles/
        └── main.scss  # Global styles
```

## Key Tasks Features
Please note and test the following pages functionality. Any other pages, links or buttons are placeholders and do not function or link somewhere.

1. **Create Account Page** ✅
Landing page - http://localhost:3000/
   - Initial signup form (`pages/index.vue`)
   - Google OAuth integration (not prepared)
   - NB! Form validation and error handling on Create Account form only

2. **Multi-step Course / Bootcamp Registration Page** ✅
Redirects after created account: 
- http://localhost:3000/course/register/software-engineering?step=1
- http://localhost:3000/course/register/software-engineering?step=2
   - Two-step registration process
   - Progress tracking
   - Navigation guards to prevent accidental exits
   - Local state persistence
   - NB! No form validation or form fields 2 way binding

3. **My Profile Placeholder Page**
   - Basic profile page & user info 

4. **Dashboard Page**
   - Basic dashboard page 
   - NB! Skipped this page as per the requirement instruction 

5. **Upgrade Bootcamp Page** ✅
   - Basic updrage to full bootcamp page 

6. **Portal Page** 🚫
   - Not implemented
   

## Common Tasks

### Running Tests
```bash
# No tests configured yet - TODO
```

### Building for Production
```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

### Adding New Pages
1. Create new .vue file in `app/pages/`
2. Use `<script setup>` syntax
3. Add SEO meta with `useHead()`
4. Import and use stores as needed

### State Management
- User authentication &  session management with Pinia: `useUserAuth()` store
- Registration progress: `useRegistrationProgress()` store
- Local storage & persistence: Use localforage for data that needs to persist
- Nuxt / Vue routing and conditional UI

## Known Issues
1. Tailwind module extensibility not working as documented
2. Google OAuth integration is not implemented
3. reCAPTCHA mentioned in UI but not implemented

## Future Improvements
1. Add unit and integration tests
2. Implement actual API endpoints
3. Complete Google OAuth integration
4. Add proper form validation library
5. Implement reCAPTCHA
6. Add error boundaries and better error handling

## Support & Resources
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## Deployment
Currently set up for local server. Follow these to prepare for basic deploynent steps:

1. Build the application
   ```bash
   npm run build
   ```

2. Preview the build
   ```bash
   npm run preview
   ```

3. Deploy the `.output` directory to your hosting provider

## Questions?
For any questions about the project setup or architecture, please refer to:
- The inline code documentation
- `.github/copilot-instructions.md` for AI-assisted development guidelines
- `README.md` for basic setup instructions
