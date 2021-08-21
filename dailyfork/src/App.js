import { Switch, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
