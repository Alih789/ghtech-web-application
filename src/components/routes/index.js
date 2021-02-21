import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import Route from "./Route";
import signIn from '../signIn';
import landingPage from '../landingPage';
import contacts from "../contactsPage";
import messeng from "../messengPage";

export default function Routes(){
    return (
    <Switch>
        <Route path="/signIn" component={signIn} />
        <Route path="/msg"  component={messeng} />
        <Route path="/contacts"  component={contacts} />
        <Route component={landingPage}/>
    </Switch>
    )
}