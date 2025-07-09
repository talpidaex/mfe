import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
