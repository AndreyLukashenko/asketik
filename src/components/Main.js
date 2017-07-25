import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './Home';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
        </Switch>
    </main>
)
