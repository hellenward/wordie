import logo from './logo.svg';
import './App.css';
import {Game} from './components/Game/Game'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordie!!!</h1>
      </header>
      <div className="Grid-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
