import './App.scss';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Entry';

function App()
{
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Login /> } >
        </Route>
        <Route  path="/home" element={<Home/>} >
          </Route>
      </Routes>
    </div>
  );
}

export default App;
