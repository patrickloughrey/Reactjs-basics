import React from "react";

/* Props is what you pass into a Component from outside of it, can ONLY change from outside */
/* State is what happens inside of the Component */

export class Home extends React.Component {

    constructor(props) {
        /* Call super() to execute parent constructor, inheriting from React.Component */
        super();
        this.state = {
            age: props.initialAge
        };
    }

    onBirthday() {
        /* Whenever setState() method is called, React will trigger a re-rendering of the UI */
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        /* We are extending the 'React.Component' and <- has this property */
        /* We do not use 'this.onBirthday()' because then the function will execute immediately */
        /* If clicked, the button has a reference to the method */
        /* Must use 'bind' to ensure 'this' refers to the Home component */
        /* Bind == () => this.onBirthday */
        return(
            <div>
                <h2> Welcome {this.props.name} ! </h2>
                <p> I am {this.state.age} years old! </p>
                <hr/>

                <button onClick={() => this.onBirthday()}className="btn btn-primary"> It's my birthday! </button> 
         
            </div>
        );
    }
}

/* Good practice to let React know what the configuration of each prop is */
/* This also produces errors if you change one of your keys to be a different type than it should be */
Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
};

