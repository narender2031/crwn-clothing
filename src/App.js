import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOut from './page/sign-in-and-sign-out/sign-in-and-sign-out.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
