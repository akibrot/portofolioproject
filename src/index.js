import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore } from "redux";
import AllReducer from "./redux/reducers/Allreducers";
import { Provider } from "react-redux";

const store = createStore(
  AllReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
