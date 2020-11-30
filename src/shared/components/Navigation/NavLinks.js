import React from 'react';
import { NavLink } from 'react-router-dom'

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" className="" exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places" className="">MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/places/new" className="">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/auth" className="">AUTHENTICATE</NavLink>
        </li>

    </ul>

}

export default NavLinks;