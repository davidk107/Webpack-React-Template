import React from 'react';
require("./login.scss");

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-wrapper wrapper">
                <h1>Login Page</h1>
            </div>
        );
    }
}

