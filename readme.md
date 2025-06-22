# 🌐 Microfrontend Architecture with Webpack

This repository demonstrates a simple **Microfrontend (MFE)** architecture built using **Webpack 5** and **Module Federation**. The goal is to create independently deployable frontend applications that can be composed into a single UI.

---

## 🛠️ Tech Stack

- ⚙️ Webpack 5 + Module Federation
- ⚛️ React & Vue (for individual microfrontends)
- 📦 JavaScript / TypeScript (configurable)
- 🔧 Webpack Dev Server (for local development)

---

## 📁 Project Structure

/root
├── container # Main host application
├── auth
├── marketing
├── dashboard # mfe - Vue

Each microfrontend is developed and served independently, then integrated by the container application using Module Federation.

---

## 🚀 Getting Started

### 1. Install Dependencies

Run the following for each project (`container`, `mfe-auth`, `mfe-marketing`, `mfe-dashboard`):

```bash
npm install


2. Start All Applications
Each project should be started in its own terminal tab:

# Start container
cd container
npm run start

# Start Auth microfrontend
cd mfe-auth
npm run start

# Start Marketing microfrontend
cd mfe-marketing
npm run start

# Start Dashboard microfrontend
cd mfe-dashboard
npm run start



🔗 Module Federation Overview
The container app consumes remote components from mfe-header and mfe-footer.

Remote apps expose their components via Webpack's ModuleFederationPlugin.

Shared dependencies (like React) are marked as singleton to prevent duplication.

Each app is independently deployable and maintainable.
```
