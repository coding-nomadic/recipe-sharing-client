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
  const token = localStorage.getItem("token");
  const [recall, setRecall] = useState()
  
  const myFunction = async () =>
  {
    let result3;
    try
    {
      result3 = await RCService.GetRecipes(token)
    } catch (e)
    {
      console.log('e', e)
    }
    console.log("result 333 3 is", result3);
  }

  useEffect(() =>
  {
    myFunction()
  }, [recall])

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
        <Header setRecall={setRecall} />
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
