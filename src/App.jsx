import './App.scss';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Entry';
import Protected from "./components/Protected";

function App()
{
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () =>
  {
    setisLoggedIn(true);
  };
  const logOut = () =>
  {
    setisLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Login logIn={ logIn } /> } >
        </Route>
        <Route path="/home" element={
          <Protected isLoggedIn={ isLoggedIn }>
            <Home logOut={ logOut } />
          </Protected>
        } >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
