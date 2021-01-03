import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import ContactBar from "./ContactBar/ContactBar";
import Home from "./HomePage/Home";
import AboutSection from "./AboutSection/AboutSection";
import Specialities from "./Specialities/Specialities";

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
          <Home />
          <Specialities />
          <AboutSection />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
