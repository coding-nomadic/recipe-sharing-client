import logo from './logo.svg';
import './App.css';
import grill from "./images/grill.jpeg";

function App()
{
  return (
    <div className="App">
      <h2>
        <i>
          Recipe Sharins        </i>
      </h2>
      <img src={ grill } alt="grill" style={ { borderRadius: "20px" } } />
    </div>
  );
}

export default App;
