import './App.scss';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App()
{
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home /> } >
        </Route>
        {/* <Route exact path="/React" component={} /> */ }
      </Routes>
    </div>
  );
}

export default App;
