import React, { ReactElement } from "react";
import { Provider } from "react-redux";
// import { BrowserRouter, Switch } from "react-router-dom";
import store from "./redux/store";

const App = (): ReactElement => (
  <Provider store={store}>
    Hello world
    {/* <BrowserRouter>
      <Switch><MainLayout /></Switch>
    </BrowserRouter> */}
  </Provider>
);

export default App;
