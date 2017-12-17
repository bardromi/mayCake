import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link className="navbar-brand" to='/'> May Cake</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/home'>Home<span
                            className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Navbar;