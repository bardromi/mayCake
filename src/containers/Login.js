import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {login} from '../actions/UserActions';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    componentWillMount() {
        console.log(this.props.auth);
        if (this.props.auth.user) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.user) {
            nextProps.history.push('/');
        }
    }

    SignIn() {
        const {email, password} = this.state;
        this.props.login(email, password);
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
                {/*{this.props.auth.hasFailed && <h3>An Error occurred Look down</h3>}*/}
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="text-center">Sign in</h1>
                        <div>
                            <div className="form-group">
                                <label htmlFor="email" className="font-weight-bold">Email address</label>
                                <input type="email"
                                       className="form-control"
                                       id="email"
                                       placeholder="Enter email"
                                       style={this.props.auth.hasFailed ? errStyle : null}
                                       onChange={event => this.setState({email: event.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="font-weight-bold">Password</label>
                                <input type="password"
                                       className="form-control"
                                       id="password"
                                       placeholder="Enter password"
                                       style={this.props.auth.hasFailed ? errStyle : null}
                                       onChange={event => this.setState({password: event.target.value})}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => this.SignIn()}>Submit
                            </button>
                        </div>
                        <div>{this.props.auth.hasFailed}</div>
                        <div>
                            <Link to='/signup'>Sign up instead</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToPops(store) {
    return {
        auth: store.auth
    };
}

export default connect(mapStateToPops, {login})(Login);