import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header/header.component';
import Homepage from '../../pages/homepage/homepage.component';
import Footer from '../footer/footer.component';
import Page from '../page/page.component';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact>
        <Homepage />
      </Route>
      <Route path='/past-trials'>
        <Page title={'Past trials'}/>
      </Route>
      <Route path='/how-it-works'>
        <Page title={'How it works'}/>
      </Route>
      <Route path='/login'>
        <Page title={'Login'}/>
      </Route>
      <Route path='/terms-and-conditions'>
        <Page title={'Terms and conditions'}/>
      </Route>
      <Route path='/privacy-policy'>
        <Page title={'Privacy policy'}/>
      </Route>      
      <Route path='/contact-us'>
        <Page title={'Contact us'}/>
      </Route>      
    </Switch>
    <Footer />    
  </Router>
);

export default Routes;