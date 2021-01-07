import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./HomePage/Home";
import AboutSection from "./AboutSection/AboutSection";
import Specialities from "./Specialities/Specialities";
import About from "./AboutPage/About";
import Contact from "./ContactPage/Contact";
import Services from "./ServicesPage/Services";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path='/services'>
          <Header />
          <Services />
          <Footer />
        </Route>
        <Route path='/about'>
          <Header />
          <About />
          <Footer />
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
