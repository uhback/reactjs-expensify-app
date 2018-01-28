import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// login : show Components, logout: redirect to "/"
// ...rest: path, location etc., nedd to match with the path in AppRouter.js
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest,
}) =>(
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                <Component {...props} />
            )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid   // true/false
});

export default connect(mapStateToProps)(PublicRoute);