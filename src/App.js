import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent/HomeComponent'
import NavComponent from './components/NavComponent/NavComponent'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App' id='home'>
        <HomeComponent />
        <NavComponent />
      </div>
    )
  }
}

export default App
