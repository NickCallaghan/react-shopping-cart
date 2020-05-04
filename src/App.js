import React from "react";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Add from "./pages/Add/Add";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";

import "./App.scss";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <NavBar />
      <div className="App">
        <Wrapper>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <Shop {...routeProps} />}
            />
            <Route
              exatch
              path="/cart"
              render={(routeProps) => <Cart {...routeProps} />}
            />
            <Route
              exatch
              path="/add"
              render={(routeProps) => <Add {...routeProps} />}
            />
          </Switch>
        </Wrapper>
      </div>
    </>
  );
}
export default App;
