import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class AuthenticatedComponent extends Component {
    componentDidUpdate() {
        const {userLoading, user} = this.props;
        if (userLoading === false && !user) {
            this.props.history.push('/Login');
        }
    }

    render() {
        const {user, children, userLoading} = this.props;
        return (userLoading === false && user) ? <div>{children}</div> :  <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    }
}

function mapStateToProps(state) {
    return {user: state.auth.user, userLoading: state.auth.isLoading};
}

export default connect(mapStateToProps)(AuthenticatedComponent);
