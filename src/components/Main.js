import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Redirect from="*" to="/" />
        </Switch>
    </main>
)
