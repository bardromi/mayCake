import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {register} from '../actions/Authentication';
import {flushErrors} from '../actions/HelpersAction';

class RegisterAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.user) {
            nextProps.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.flushErrors();
    }

    signUp() {
        const {email, password} = this.state;
        this.props.register(email, password);
    }

    render() {
        //for validation error
        const errStyle = {
            borderColor: 'red'
        };

        if (this.props.auth.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="text-center">Register</h1>
                        <div>
                            <div className="form-group">
                                <label htmlFor="email" className="font-weight-bold">Email address</label>
                                <input type="email"
                                       className="form-control"
                                       id="email"
                                       placeholder="Enter email"
                                       style={this.props.auth.registerHasFailed ? errStyle : null}
                                       onChange={event => this.setState({email: event.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="font-weight-bold">Password</label>
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       placeholder="Enter password"
                                       style={this.props.auth.registerHasFailed ? errStyle : null}
                                       onChange={event => this.setState({password: event.target.value})}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => this.signUp()}>Submit
                            </button>
                        </div>
                        <div>{this.props.auth.registerHasFailed}</div>
                        <div>
                            <Link to='/login'>Already a user?</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(store) {
    return {
        auth: store.auth
    };
}

export default connect(mapStateToProps, {register, flushErrors})(RegisterAccount);