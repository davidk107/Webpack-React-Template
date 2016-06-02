import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from "./js/app.js";
import Index from "./js/components/index/Index.js";
import Login from "./js/components/login/Login.js";
import NotFoundPage from "./js/components/notFoundPage/NotFoundPage.js";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="/login" component={Login}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)