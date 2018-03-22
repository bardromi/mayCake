import React from 'react';
import Navbar from './Navbar';
import Main from './Main'
// import Footer from './Footer';
import '../my.css';

const App = () => (
    <div>
        <Navbar/>
        <br/>
        <div className="container">
            <Main/>
        </div>
        {/*<Footer/>*/}
    </div>
);

export default App;