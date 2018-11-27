import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { NavBar } from "./NavBar";
import HomePage from "./HomePage";
import { About } from "./About";
import { FindUs } from "./FindUs";
import { NotFoundPage } from "./NotFoundPage";
import { Laser } from "./services/Laser";
import { TeethCare } from "./services/TeethCare";
import { NewHot } from "./services/NewHot";
import { LatestNews } from "./LatestNews";
import { Footer } from "./Footer";
import { Skincare } from "./services/Skincare";
import { Manicure } from "./services/Manicure";

import { BodyFX } from "./services/skincare/BodyFX";
import { FormaPlus } from "./services/skincare/FormaPlus";
import { Fractora } from "./services/skincare/Fractora";
import { Votiva } from "./services/skincare/Votiva";

import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faUserClock from '@fortawesome/fontawesome-free-solid/faUserClock';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';
import faMeh from '@fortawesome/fontawesome-free-solid/faMeh';

fontawesome.library.add(
  brands, faCheckSquare, faCoffee, faEnvelope, faUserClock, faHome,
  faCalendar, faMeh
);

class App extends Component {
  render() {
    return (
      <Router basename="/">
      <div className="App">
        <NavBar/>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/Skincare" component={Skincare} />
          <Route  path="/Manicure" component={Manicure} />
          <Route  path="/LaserHairRemoval" component={Laser} />
          <Route  path="/OrganicTeethWhitening" component={TeethCare} />
          <Route  path="/BodyFX" component={BodyFX} />
          <Route  path="/FormaPlus" component={FormaPlus} />
          <Route  path="/Fractora" component={Fractora} />
          <Route  path="/Votiva" component={Votiva} />
          <Route  path="/NewAndHotServices" component={NewHot} />
          <Route  path="/LatestNews" component={LatestNews} />
          <Route  path="/About" component={About} />
          <Route  path="/FindUs" component={FindUs} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer/>
      </div>
    </Router>
  );}
}

export default App;
