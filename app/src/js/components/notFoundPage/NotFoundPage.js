import React from 'react';
require("./notFound.scss");

export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notFound-wrapper wrapper">
                <h1>Page Not Found</h1>
            </div>
        );
    }
}

