import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { List } from './List';
import { Edit } from './Edit';

function Teachers({ match }) {
    const { path } = match;
    
    return (
        <Switch>
            <Route exact path={path} component={List} />
            <Route path={`${path}/edit/:id`} component={Edit} />
        </Switch>
    );
}

export { Teachers };