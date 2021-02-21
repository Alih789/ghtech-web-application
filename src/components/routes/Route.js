import React from 'react';
import PropTypes from 'prop-types'
import {Route, Redirect } from "react-router-dom";

export default function RouteWrapper({component: Component, isPrivate, ... rest}) {
    const signed = false;

    //Route is private and user isn't logged in
    if(isPrivate && !signed){
        return <Redirect to="/signIn" />;
    }
    return< Route {...rest} component={Component}/>;
};

RouteWrapper.propTypes ={
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false
};