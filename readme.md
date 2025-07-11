# 🌐 Microfrontend Architecture with Webpack & Module Federation

This repository demonstrates a modular **Microfrontend (MFE)** architecture using **Webpack 5** and **Module Federation**. Each microfrontend is independently developed, built, and deployed, then composed into a single UI via the container app.

---

## 🛠️ Tech Stack

- ⚙️ Webpack 5 + Module Federation
- ⚛️ React (container, auth, marketing) & Vue (dashboard)
- 📦 JavaScript (ES6+)
- 🎨 Material-UI (React apps)
- 📊 PrimeVue, Chart.js (dashboard)
- 🔧 Webpack Dev Server (for local development)

---

## 📁 Project Structure

```
packages/
  container/   # Main host application (React)
  auth/        # Authentication microfrontend (React)
  marketing/   # Marketing microfrontend (React)
  dashboard/   # Dashboard microfrontend (Vue)
```

Each microfrontend is developed and served independently, then integrated by the container app using Module Federation.

---

## 🚀 Getting Started

### 1. Install Dependencies

Install dependencies for each microfrontend:

```bash
cd packages/container && npm install
cd ../auth && npm install
cd ../marketing && npm install
cd ../dashboard && npm install
```

### 2. Start All Applications

Start each app in its own terminal tab:

```bash
# Start container (host)
cd packages/container && npm run start

# Start Auth microfrontend
cd packages/auth && npm run start

# Start Marketing microfrontend
cd packages/marketing && npm run start

# Start Dashboard microfrontend (Vue)
cd packages/dashboard && npm run start
```

---

## 🔗 Module Federation Overview

- The **container** app consumes remote components from the `auth`, `marketing`, and `dashboard` microfrontends.
- Each remote app exposes its components via Webpack's `ModuleFederationPlugin`.
- Shared dependencies (like React) are marked as `singleton` to prevent duplication and version conflicts.
- Each app is independently deployable and maintainable.

### Main Dependencies

**container, auth, marketing (React):**

- react, react-dom, react-router-dom, @material-ui/core, @material-ui/icons

**dashboard (Vue):**

- vue, primevue, primeicons, chart.js

## 🤖 Continuous Integration and Deployment

GitHub Actions is used for CI/CD:

- Linting and testing on every push
- Automatic build and deployment

See `.github/workflows` for details.
