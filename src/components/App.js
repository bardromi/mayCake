import React from 'react'
import Navbar from './Navbar';
import Main from './Main'

const App = () => (
    <div>
        <Navbar/>
        <br/>
        <div className="container">
            <Main/>
        </div>
    </div>
);

export default App;