import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Learn from "./Learn";
import Course from "./Course";
import Test from './test';
function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "A River Runs Through It" },
    { id: 2, title: "Se7en" },
    { id: 3, title: "Inception" }
  ]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Learn">
          <Learn movies={Learn} />
        </Route>
        <Route path="/Course">
          <Course movies={Course} />
        </Route>
        <Route path="/test">
          <Test movies={Test} />
        </Route>
        <Route exact path="/">
          <Home movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
