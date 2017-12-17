import React, {Component} from 'react';
import UserAPI from '../api';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            },
            user: ''
        }
    }

    SignIn() {
        const {email, password} = this.state;
        UserAPI.login(email, password)
            .then(user => {
                this.setState({user});
            })
            .catch(error => {
                this.setState({error});
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center">Sign in</h1>
                    <div>
                        <div className="form-group">
                            <label htmlFor="email" className="font-weight-bold">Email address</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email"
                                   onChange={event => this.setState({email: event.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="font-weight-bold">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   aria-describedby="passwordHelp"
                                   placeholder="Enter password"
                                   onChange={event => this.setState({password: event.target.value})}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.SignIn()}>Submit</button>
                    </div>
                    <div>{this.state.error.message}</div>
                </div>
            </div>
        )
    }
}

export default Login;