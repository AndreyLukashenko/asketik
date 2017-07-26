import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

export const Menu = () => (
    <nav>
        <ul className="menu">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)
