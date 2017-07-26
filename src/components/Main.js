import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect from="*" to="/" />
        </Switch>
    </main>
)
