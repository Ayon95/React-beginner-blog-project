import { useState } from "react";

function Home() {
	const [name, setName] = useState("Ayon");
	const [age, setAge] = useState(25);

	function handleClick() {
		console.log("You clicked the button.");
		setName(`${name === "Ayon" ? "Maliat" : "Ayon"}`);
		setAge(`${age === 25 ? 18 : 25}`);
	}

	function greetUser(name) {
		console.log(`Welcome to Dojo Blog, ${name}!`);
	}
	return (
		<div className="home">
			<h2>Home page</h2>
			<p>
				{name} is {age} years old.
			</p>
			<button onClick={handleClick}>Click me!</button>
			<button onClick={() => greetUser("Mushfiq")}>Click me too!</button>
		</div>
	);
}

export default Home;
