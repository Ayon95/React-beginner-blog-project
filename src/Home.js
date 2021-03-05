import { useState, useEffect } from "react";
import BlogList from "./BlogList.js";

function Home() {
	const [blogs, setBlogs] = useState(null);
	const [fetchingData, setFetchingData] = useState(true);
	const [error, setError] = useState(null);

	function handleDelete(id) {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		// updating blogs state
		setBlogs(newBlogs);
	}

	// using the effect hook to fetch data after the first render
	// no need to worry about starting infinite loop due to changing state because we are using an empty dependency array
	useEffect(() => {
		// fetching and loading data
		fetch("http://localhost:8000/blogsz")
			.then((response) => {
				if (!response.ok) throw new Error(`Error ${response.status}: Could not get data ☹`);
				return response.json();
			})
			.then((data) => {
				setBlogs(data);
				setError(null); // if a subsequent fetch request is successful, then we want to make sure the error is not rendered
			})
			.catch((error) => setError(error.message))
			.finally(() => setFetchingData(false)); // no matter if we successfully got data or not, we're no longer fetching data
	}, []);

	// here we are conditionally templating BlogList component and a loading message; conditional rendering
	return (
		<div className="home">
			{error && <p>{error}</p>}
			{fetchingData && <p>Loading...</p>}
			{blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
		</div>
	);
}

export default Home;
