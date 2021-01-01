import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <Header />
        </Route>
        <Route path='/services'>
          <Header />
        </Route>
        <Route path='/about'>
          <Header />
        </Route>

        <Route path='/'>
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
