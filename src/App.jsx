import './App.scss';
import grill from "./images/delish.jpeg";
import React, { useEffect, useState } from "react";
import Header from "./components/header/header"
import Items from "./components/items"
import Footer from "./components/footer"
import RCServiceComponent from "./context/RCService";

function App()
{
  const [data, setData] = useState()
  const RCService = React.useContext(RCServiceComponent);

  const myFunction = async () =>
  {

    let result2;
    try
    {
      result2 = await RCService.SignUp("tenzin", "tenzin@12345", "tenzin@gmail.com", "tenzin thinley", "1234567890")
    } catch (e)
    {
      console.log('e', e)
    }
    console.log("result 22222 is", result2)
    let result3;
    try
    {
      result3 = await RCService.GetRecipes()
    } catch (e)
    {
      console.log('e', e)
    }
    console.log("result 333 3 is", result3);
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
