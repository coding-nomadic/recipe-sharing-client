import logo from './logo.svg';
import './App.scss';
import grill from "./images/delish.jpeg";
import axios from "axios";
import React, { useEffect } from "react";
import Header from "./components/header"

function App()
{
  const baseURL = "https://recipe-app-service.herokuapp.com/api/v1/recipes";

  const myFunction = async () =>
  {
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
  }

  useEffect(() =>
  {
    myFunction()
  }, [])

  return (
    <div className="App">
      <h1 className="heading"
        style={ { position: "absolute", marginLeft: "30px", zIndex: "2" } }
      >
        <i><b>
          Recipe Sharing
        </b>
        </i>
      </h1>
      <img src={ grill } alt="grill"
        className="images"
        style={ { width: "100%", position: "relative", height: '600px', objectFit: "cover" } }
      />
      <div style={ { marginLeft: "%" } }>
        <Header />
      </div>
    </div>
  );
}

export default App;
