import logo from './logo.svg';
import './App.scss';
import grill from "./images/delish.jpeg";
import axios from "axios";
import React, { useEffect } from "react";

function App()
{
  // useEffect(async () =>
  // {
  //   const baseURL = "https://recipe-app-service.herokuapp.com/api/v1/recipes";
  //   try
  //   {
  //     let responseData = await axios.get(`${baseURL}`).then((res) =>
  //     {
  //       console.log('response', res);
  //     })
  //     console.log("response ", responseData)

  //   } catch (e)
  //   {
  //     console.log(e)
  //   }
  // }, [])

  return (
    <div className="App">
      <h1 className="heading"
        style={ { position: "absolute", marginLeft: "190px", zIndex: "2" } }
      >
        <i><b>
          Recipe Sharing
        </b>
        </i>
      </h1>
      <img src={ grill } alt="grill"
        className="images"
      // style={ { width: "100%", position: "relative", height: '600px', objectFit: "cover" } }
      />
      <div style={ {} }>
        <h1>
        </h1>
      </div>
    </div>
  );
}

export default App;
