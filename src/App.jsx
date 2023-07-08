import './App.scss';
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Entry';
import Dinners from './components/Dinners';
import FoodNews from './components/FoodNews';
import Recipes from './components/Recipes';
import Tips from './components/Tips';
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
        <Route path="/dinners" element={
          <Protected isLoggedIn={ isLoggedIn }>
            <Dinners />
          </Protected>
        } >
        </Route>
        <Route path="/foodnews" element={
          <Protected isLoggedIn={ isLoggedIn }>
            <FoodNews />
          </Protected>
        } >
        </Route>
        <Route path="/recipes" element={
          <Protected isLoggedIn={ isLoggedIn }>
            <Recipes />
          </Protected>
        } >
        </Route>
        <Route path="/tips" element={
          <Protected isLoggedIn={ isLoggedIn }>
            <Tips />
          </Protected>
        } >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
