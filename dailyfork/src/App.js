import { Switch, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/recipe"}>
          <Show />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
