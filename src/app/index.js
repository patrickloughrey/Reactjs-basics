import React from "react";
import { render } from "react-dom";

/* Import component from Header.js */
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    /* Called by React.js whenever React thinks it needs to render the Component */
    render() {
        return(
            /* JSX: Javascript mixed with XML: You can only render one root element */
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                        <Home name={"Patrick"} initialAge={23}/>
                    </div>
                </div>
            </div>
        );
    }
}

/* Render takes two arguments: what you want to render and where you want to render the component */
render(<App/>, window.document.getElementById("app"));