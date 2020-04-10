import React from "react";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import NavBar from "./components/NavBar/NavBar";

import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Shop {...routeProps} />}
          />
          <Route exatch path="/cart" render={() => <h1>Cart</h1>} />
        </Switch>
      </div>
    </>
  );
}
export default App;
