import React from 'react';
import {HashRouter, Switch, Route}from 'react-router-dom';
import Main from './pages/Main';
import Terramoto from './pages/terramoto';

const Routes = () => (

    <HashRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/terramotos/:id" component={Terramoto}></Route>
        </Switch>
    </HashRouter>

)

export default Routes;