import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Zillight from './components/Greet';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Zillight/>
      </div>
    );
  }  
}

export default App;
