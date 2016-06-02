import React from 'react';
import { IndexLink, Link } from 'react-router';

// Top level component. Put any content that you want to persist across all pages here
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="app-wrapper">
                <IndexLink to="/">Home</IndexLink>
                <Link to="/login">Login</Link>
                {this.props.children}
            </div>
        );
    }
}