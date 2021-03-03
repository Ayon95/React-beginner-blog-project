import "./App.css";

function App() {
	const title = "Welcome to Dojo Blog!";
	const likes = 50;
	const link = "http://www.google.com";

	return (
		<div className="App">
			<div className="content">
				<h1>{title}</h1>
				<p>Liked {likes} times</p>
				<a href={link}>Go to Google</a>
			</div>
		</div>
	);
}

export default App;
