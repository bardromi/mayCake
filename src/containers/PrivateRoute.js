import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            user ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

const mapStateToProps = store => ({
    user: store.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);