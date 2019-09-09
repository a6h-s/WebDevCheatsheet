import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./vs2015.css";

import HeaderNav from "./components/HeaderNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ReactHome from "./pages/react/ReactHome";
import JSHome from "./pages/javascript/JSHome";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 * https://overreacted.io/a-complete-guide-to-useeffect/
 */

function App() {
    return (
        <div>
            <Router>
                <HeaderNav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/react' component={ReactHome} />
                    <Route path='/JS' component={JSHome} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
