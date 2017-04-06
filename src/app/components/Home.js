import React from "react";

/* Props is what you pass into a Component from outside of it, can ONLY change from outside */
/* State is what happens inside of the Component */

export class Home extends React.Component {

    render() {
        /* We are extending the 'React.Component' and <- has this property */
        /* We do not use 'this.onBirthday()' because then the function will execute immediately */
        /* If clicked, the button has a reference to the method */
        /* Must use 'bind' to ensure 'this' refers to the Home component */
        /* Bind == () => this.onBirthday */
        /* Add two-way binding in form to listen for user changing the input */
        return(
            <div>
                <h2> Home </h2>
            </div>
        );
    }
}

/* Good practice to let React know what the configuration of each prop is */
/* This also produces errors if you change one of your keys to be a different type than it should be */
/* Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    initialLinkName: React.PropTypes.string
}; */

