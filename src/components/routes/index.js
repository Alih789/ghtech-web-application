import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import Route from "./Route";
import signIn from '../signIn';
import landingPage from '../landingPage';

export default function Routes(){
    return (
    <Switch>
        <Route path="/" exact component={landingPage} />
        <Route path="/signIn"  component={signIn} />

        <Route component={landingPage}/>
    </Switch>
    )
}