import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import User from './components/User';

function App () {
 return (
   <div className="App">
     <Greet />
     <Hello />
     <User name="Banji" age={36} aim="Hungry frontend developer"/>
     <User name="Doyin" age={31} aim="Life is Good"/>
     <User name="Ara" age={2} aim="Here to discover life and enjoy it"/>
   </div>
 );  
}

export default App;
 