import { Switch, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
require("dotenv").config();

function App() {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/recipe/:index"}>
          <Show />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
