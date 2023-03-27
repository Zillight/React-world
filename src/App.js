import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import User from './components/User';

function App () {
 return (
   <div className="App">
     <Greet />
     <Welcome />
     <Hello />
     <User />
   </div>
 );  
}

export default App;
 