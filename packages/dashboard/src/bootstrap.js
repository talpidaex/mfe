import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export function mount(element) {
  const app = createApp(Dashboard);
  app.mount(element);
}
