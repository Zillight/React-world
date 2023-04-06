import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import User from './components/User';
import Job from './components/Jobs';

function App () {
  const age = 13;
  const pick = false;
  return (
    <div className="App">
     <Greet />
     <Hello />
     <User name="Banji" age={36} aim="Hungry frontend developer"/>
     <User name="Doyin" age={31} aim="Life is Good"/>
     <User name="Ara" age={2} aim="Here to discover life and enjoy it"/>
    //  <Job salary={90000} position="Senior SDE" company="Amazon"/>
    //  <Job salary={60000} position="Junior SDE" company="Google"/>
    //  <Job salary={50000} position="Project Manager" company="Netflix"/>
    {(age>=18) ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    <h1 style={{color: pick ? "green" : "blue"}}>COLOR PICKER</h1>
    {pick && <button>Click Here</button>}
   </div>
 );  
}

export default App;
 