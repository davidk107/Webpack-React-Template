import React from 'react';
import DocumentTitle from "react-document-title";
require("./login.scss");

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="Login">
                <div className="login-wrapper wrapper">
                    <h1>Login Page</h1>
                </div>
            </DocumentTitle>
        );
    }
}

