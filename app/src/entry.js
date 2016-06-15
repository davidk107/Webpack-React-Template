import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server';
import {  Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import routes from './routes'
import RootTemplate from "./js/RootTemplate.js"

if (typeof document !== 'undefined') {
    render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('react-app'));
}


// Exported static site renderer: 
export default (locals, callback) => {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);
    
    match({ routes, location }, (error, redirectLocation, renderProps) => {


        var html = renderToString(
            <RootTemplate location={location}>
                <RouterContext {...renderProps} />
            </RootTemplate>
        );

        callback(null, html);
    });
};