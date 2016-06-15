import React from 'react';
import DocumentTitle from "react-document-title";
import Paragraph from "common/Paragraph.js";
require("./index.scss");

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="React Webpack Template">
                <div className="index-wrapper wrapper">
                    <h1>Home Page</h1>
                    <Paragraph/>
                </div>
            </DocumentTitle>
        );
    }
}

