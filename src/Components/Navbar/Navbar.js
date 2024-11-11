import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); // Track menu visibility

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle menu visibility
    };

    return (
        <div className='nav'>
            <div className='nav-container'>
                <div className='navbar'>
                    <div className='logo'>
                        <Link to="/">RadiantSkin</Link>
                    </div>


                    <div className='nav-btn'>
                      <nav>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/">FAQs</Link></li>
                      </nav>
                    
                        <button>
                            <Link to="/">Get in touch</Link>
                        </button>
                    </div>

                    <div className='menu-toggle' onClick={toggleMenu}>
                        <div className={showMenu ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={showMenu ? "lineTop spin" : "lineTop"}></span>
                            <span className={showMenu ? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>

                    {showMenu && (
                        <div className="fixed-component">
                            <div className='menu-con'>
                                <p>MENU</p>
                                <Link to="/">About Us</Link>
                                <Link to="/">Features</Link>
                                <Link to="/">Products</Link>
                                <button>Contact Us</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
