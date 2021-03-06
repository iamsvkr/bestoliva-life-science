import { Route, Switch } from "react-router";
import './App.css';
import Home from "./containers/home";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default App;
