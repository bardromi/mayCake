import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../containers/Login';
import Home from '../containers/Home';
import RegisterAccount from '../containers/RegisterAccount';
import CakePage from '../containers/CakePage';
import PrivateRoute from '../containers/PrivateRoute';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={RegisterAccount}/>
            <PrivateRoute path='/cake/:id' component={CakePage}/>
        </Switch>
    </main>
);

export default Main