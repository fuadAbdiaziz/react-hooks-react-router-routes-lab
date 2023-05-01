import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/directors">
          <Directors/>
        </Route>
        <Route path="/actors">
          <Actors/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;