import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayPopularNews from "./containers/DisplayPopularNews";

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={DisplayPopularNews} />
        {/*
            This app has a single screen. 
            Please add more routes here, if require. 
        */}
    </Switch>
);

export default Routes;