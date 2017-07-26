import React from 'react';

import { Main } from './Main';
import { Header } from './Header';
import { Menu } from './Menu';

export const App = () => (
    <div>
        <Header />
        <div className="wrapper">
            <Menu />
            <Main />
        </div>
    </div>
)
