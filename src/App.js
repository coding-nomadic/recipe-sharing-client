import logo from './logo.svg';
import './App.scss';
import grill from "./images/delish.jpeg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/header"
import Items from "./components/items"
import Footer from "./components/footer"

const baseURL = "https://recipe-app-service.herokuapp.com/api/v1/recipes";

function App()
{
  const [data, setData] = useState()

  const myFunction = async () =>
  {
    try
    {
      await axios.get(`${baseURL}`).then((res) =>
      {
        setData(res.data)
      })
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
        <i>
          <b>
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
      <div style={ { marginLeft: "%" } }>
        <Items data={ data } />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
