import React from "react";
import Cart from "./Cart";
import Shop from "./Shop";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {reducer} from "./reducer"
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialStore = {
  count: 0,
  total: 0,
  cartItems: [],
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <main>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};



export default App
