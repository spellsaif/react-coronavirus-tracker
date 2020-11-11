import React from 'react';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav className="container">
                <div className="brand-logo">
                    <img src="imgs/logo.svg" alt="logo" />
                    <h1>COVID19</h1>
                </div>
                <ul>
                    <li>Causes</li>
                    <li>Symptoms</li>
                    <li>Cases</li>
                    <li>Precautions</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;