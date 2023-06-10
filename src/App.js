import logo from './logo.svg';
import './App.css';
import grill from "./images/grill.jpeg";
import axios from "axios";
import React, { useEffect } from "react";

function App()
{
  useEffect(async () =>
  {
    const baseURL = "https://recipe-app-service.herokuapp.com/api/v1/recipes";
    try
    {
      let responseData = await axios.get(`${baseURL}`).then((res) =>
      {
        console.log('response', res);
      })
      console.log("response ", responseData)

    } catch (e)
    {
      console.log(e)
    }
  }, [])

  return (
    <div className="App">
      <h1>
        Recipe Sharing
      </h1>
      <img src={ grill } alt="grill" />
    </div>
  );
}

export default App;
