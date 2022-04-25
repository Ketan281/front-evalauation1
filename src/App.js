import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import One from './components/One';
import Two from './components/Two';
import Users from './components/Users'
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path='/one' element={<One/>}/>
         <Route path='/two' element={<Two/>}/>
         <Route path='/users' element={<Users/>}/>
       </Routes>

    </div>
  );
}

export default App;
