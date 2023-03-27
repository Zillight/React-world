import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Try from './components/try';

class App extends Component {
  render (){
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Hello />
        <Try />
      </div>
    );
  }     
}

export default App;
