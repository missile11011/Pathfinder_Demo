import logo from './logo.svg';
import './App.css';
import Grid from "./components/Grid.js";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-dark p-3">
        <h3 class="navbar-text text-white">Pathfinder</h3>
        <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
      </nav>
      <Grid/>
    </div>
  );
}

export default App;
