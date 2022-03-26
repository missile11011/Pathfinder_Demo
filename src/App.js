import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid.js";

function App() {
	return (
		<div className="App">
			<nav className="navbar navbar-light bg-dark p-3">
				<h3 className="navbar-text text-white">Pathfinder</h3>
				<button
					className="btn btn-sm btn-outline-secondary"
					type="button"
				>
					Smaller button
				</button>
			</nav>
			<Grid />
		</div>
	);
}

export default App;
