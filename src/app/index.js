import React from "react";
import { render } from "react-dom";
import { Router, Route} from "react-router" 

/* Import component from Header.js */
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {

    /* Called by React.js whenever React thinks it needs to render the Component */
    render() {

        return(
            <Router>
                <Route path={"user"} component={User}/>
                <Route path={"home"} component={Home}/>
            </Router>
        );
    }
}

/* Render takes two arguments: what you want to render and where you want to render the component */
render(<App/>, window.document.getElementById("app"));