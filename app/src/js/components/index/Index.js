import React from 'react';
import Paragraph from "common/Paragraph.js";
require("./index.scss");

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index-wrapper wrapper">
                <h1>Home Page</h1>
                <Paragraph/>
            </div>
        );
    }
}

