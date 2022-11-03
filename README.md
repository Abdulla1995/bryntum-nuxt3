# Nuxt 3 and bryntum
## Setup
## - Make sure to use node +16 version - I tested on v16.15.1

If there is an error login bryntum trial:
```bash
npm login --registry=https://npm.bryntum.com
Username: user..yourdomain.com
Password: trial
Email: (this IS public) user@yourdomain.com
```
Make sure to install the dependencies:

```bash
# npm
npm install

```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```
## ERROR CASE MAY BE HAPPENED!!!
Uncaught Error: The Bryntum Grid bundle was loaded multiple times by the application.
```bash
on pages/grid.vue change BryntumGrid to Grid and save. Then change it back. Error resolved.
```
