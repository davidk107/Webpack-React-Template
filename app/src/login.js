import React from 'react';
import {render} from 'react-dom';
require("./stylesheets/login.scss");

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-wrapper wrapper">
                <h1>Login Page</h1>
                <a href="index.html">Home</a>
            </div>
        );
    }
}

render(<Login/>, document.getElementById("react"));
