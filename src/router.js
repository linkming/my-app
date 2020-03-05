import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './views/home';
import Config from './views/setting';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/config" component={Config}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;