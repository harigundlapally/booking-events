import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menu,setMenu] = useState(false);

    const toggleHamburger = () => {
        setMenu(!menu);
    }
    return (
        <nav className="navbar">
            <div className="navbar__hamburger">
                <a href="#" onClick={toggleHamburger}>
                    <img src="/images/menu-icon.svg" alt="menu icon"/>
                </a>
            </div>
            <ul className={`navbar__menu ${menu ? 'navbar__menu--active' : ''}`}>
                <li>
                    <NavLink to="/dashboard" onClick={toggleHamburger}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/events" onClick={toggleHamburger}>Events</NavLink>
                </li>
                <li>
                    <NavLink to="/help" onClick={toggleHamburger}>Help</NavLink>
                </li>
                <li>
                    <NavLink to="/logout" onClick={toggleHamburger}>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;