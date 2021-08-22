import { Switch, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Recipes from "./Components/Recipes";
import Recipes1 from "./Components/Recipes1";
import Recipes2 from "./Components/Recipes2";
import Recipes3 from "./Components/Recipes3";
import Recipes4 from "./Components/Recipes4";
import Recipes5 from "./Components/Recipes5";
import Recipes6 from "./Components/Recipes6";
// import Show from "./Pages/Show";
require("dotenv").config();

function App() {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/recipe/0"}>
          <Recipes />
        </Route>
        <Route exact path={"/recipe/1"}>
          <Recipes1 />
        </Route>
        <Route exact path={"/recipe/2"}>
          <Recipes2 />
        </Route>
        <Route exact path={"/recipe/3"}>
          <Recipes3 />
        </Route>
        <Route exact path={"/recipe/4"}>
          <Recipes4 />
        </Route>
        <Route exact path={"/recipe/5"}>
          <Recipes5 />
        </Route>
        <Route exact path={"/recipe/6"}>
          <Recipes6 />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
