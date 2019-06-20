import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayPopularNewsContainer from "./containers/DisplayPopularNewsContainer";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={DisplayPopularNewsContainer} />
        {/*
            This app has a single screen. 
            Please add more routes here, in future if require. 
        */}
    </Switch>
);

export default Routes;