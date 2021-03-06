import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails.js";
import PageNotFound from "./PageNotFound.js";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/create">
							<Create />
						</Route>

						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>

						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

/* The PageNotFound component has path of asterisk (*). The * means "catch any route". By putting this at the bottom, we are telling react router
to match this path regardless and render the PageNotFound component if none of the other paths match. */

export default App;
