import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";
import { createBrowserHistory } from "history/cjs/history.min";
// Mount function to start up the app
const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, element);

  return {
    onParentNavigate: ({ pathname: hostPathname }) => {
      if (history.location.pathname !== hostPathname) {
        history.push(hostPathname);
      }
    },
  };
};

// If we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

// We are running through container
// and we should export the mount function
