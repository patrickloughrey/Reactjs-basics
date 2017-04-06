import React from "react";

/* Props is what you pass into a Component from outside of it, can ONLY change from outside */
/* State is what happens inside of the Component */

export class Home extends React.Component {

    constructor(props) {
        /* Call super() to execute parent constructor, inheriting from React.Component */
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };

        setTimeout(() => {
            this.setState({
                status: 1
            });   
        },3000)

        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update ", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update ", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update ", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onBirthday() {
        /* Whenever setState() method is called, React will trigger a re-rendering of the UI */
        this.setState({
            age: this.state.age + 1
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        /* We are extending the 'React.Component' and <- has this property */
        /* We do not use 'this.onBirthday()' because then the function will execute immediately */
        /* If clicked, the button has a reference to the method */
        /* Must use 'bind' to ensure 'this' refers to the Home component */
        /* Bind == () => this.onBirthday */
        /* Add two-way binding in form to listen for user changing the input */
        return(
            <div>
                <h2> Welcome {this.props.name} ! </h2>
                <p> I am {this.state.age} years old! </p>
                <p> Status: {this.state.status} </p>
                <hr/>
                <button onClick={() => this.onBirthday()} className="btn btn-primary"> It's my birthday! </button> 
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={() => this.onChangeLink()} className="btn btn-primary"> Change Header Link</button>
            </div>
        );
    }
}

/* Good practice to let React know what the configuration of each prop is */
/* This also produces errors if you change one of your keys to be a different type than it should be */
Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    initialLinkName: React.PropTypes.string
};

