import React from 'react';
import {render} from 'react-dom';
import Paragraph from "./js/components/Paragraph";
require("./stylesheets/index.scss");

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index-wrapper wrapper">
                <h1>Index Page</h1>
                <a href="/login.html">Login</a>
                <hr/>
                <br/>
                <Paragraph/>
            </div>
        );
    }
} 

render(<Index/>, document.getElementById("react-container"));
