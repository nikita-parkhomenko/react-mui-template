// outsource dependencies
import React, { memo } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// local dependencies
import { HOME } from '../constants/routes';
import { history } from '../constants/history';

// components
import Home from './home';

export default memo(function AppRoot () {
    return <Router history={history}>
        <Switch>
            <Route exact path={HOME} component={Home} />
        </Switch>
    </Router>
});
