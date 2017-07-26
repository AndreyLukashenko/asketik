import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

export const Menu = () => (
    <nav>
        <ul className="menu">
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </nav>
)
