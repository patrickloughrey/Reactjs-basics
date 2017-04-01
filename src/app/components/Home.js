import React from "react";

export class Home extends React.Component {

    render() {
        /* We are extending the 'React.Component' and <- has this property */
        console.log(this.props);
        var text = "This is your very first React.js application!";
        return(
            <div>
                <h2> Welcome {this.props.name} ! </h2>
                <p> {text} </p>
                <h4> Hobbies: </h4>
                    <ul>
                      {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                    </ul>
            </div>
        );
    }
}