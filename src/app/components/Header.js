import React from "react";

/* Because the Header is a "stateless component" we do not need to extend the React.Component */
/* We can instead use use it as a function that may or may not use props */
export const Header = (props) => {

    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};