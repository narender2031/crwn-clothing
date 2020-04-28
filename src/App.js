import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
