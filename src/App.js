import { Route, Switch } from "react-router";
import './App.css';
import Contact from "./containers/contact";
import Home from "./containers/home";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  );
}

export default App;
