import logo from './logo.svg';
import './App.css';
import grill from "./images/grill.jpeg";

function App()
{
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
