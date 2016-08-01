import React from 'react';
import HTMLDocument from 'react-html-document';

// Maps page pathname to page metadata (description, etc)
const PATHNAME_TO_PAGE_METADATA = {
    "/" : {
        "description": "This is a webpack template that uses React, React Router, and sass"
    },
    "/login": {
        "description": "Template Login Page"
    }
}

export default class RootTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Determine description for this page
        let pageMetadata = PATHNAME_TO_PAGE_METADATA[this.props.location.pathname];
        if (!pageMetadata) {
            pageMetadata = PATHNAME_TO_PAGE_METADATA["/"];
        }
        let metatags = [
            { name: 'charset', content: "utf-8" },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { name: 'description', content: pageMetadata.description }
        ];
        return(
            <HTMLDocument 
                metatags = {metatags}
                scripts={['/bundle.js']}
                stylesheets={['/main.css']} >

                <div id="react-app">
                    {this.props.children}
                </div>
            </HTMLDocument>
        );
    }
}

RootTemplate.propTypes = {
    location: React.PropTypes.object.isRequired
}