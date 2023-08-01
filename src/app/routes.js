import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../components/withRouter"
import { Home } from "../components/pages/home";
import { Portfolio } from "../components/pages/portfolio";
import { ContactUs } from "../components/pages/contact";
import { About } from "../components/pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="Social_i">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
