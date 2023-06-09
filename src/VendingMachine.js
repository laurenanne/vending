import React from "react";

import Home from "./Home";
import Chips from "./Chips";
import Candy from "./Candy";
import Water from "./Water";
import Navbar from "./Navbar";

import { BrowserRouter, Route, NavLink } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>

        <Route exact path="/candy">
          <NavLink exact to="/">
            Go Back
          </NavLink>
          <Candy />
        </Route>

        <Route exact path="/chips">
          <NavLink exact to="/">
            Go Back
          </NavLink>
          <Chips />
        </Route>

        <Route exact path="/water">
          <NavLink exact to="/">
            Go Back
          </NavLink>
          <Water />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
