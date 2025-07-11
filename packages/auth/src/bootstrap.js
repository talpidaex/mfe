import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history/cjs/history.min";

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export function mount(element, { defaultHistory, onNavigate, initialPath, onSignIn }) {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, element);

  return {
    onParentNavigate: ({ pathname: hostPathname }) => {
      console.log(hostPathname);
      if (history.location.pathname !== hostPathname) {
        history.push(hostPathname);
      }
    },
  };
}
