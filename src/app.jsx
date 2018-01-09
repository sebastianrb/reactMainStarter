import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sample from "./components/Sample";
import Navigation from "./components/Navigation";
import "normalize.css";
import "styles/index.scss";

const App = () =>
	<div className="App">
		<Router>
			<div>
				<Navigation />
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/sample" component={Sample} />
			</div>
		</Router>
	</div>;

export default App;
