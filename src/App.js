import React, { Component } from 'react'

import CartContainer from './components/Cart/CartContainer';

import './App.scss'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <CartContainer />
      </div>
    )
  }
}

export default App
