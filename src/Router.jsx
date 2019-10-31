import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'




function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/page" component={Rank} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
  

export default Router