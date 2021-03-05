import { useState, useEffect } from "react";
import BlogList from "./BlogList.js";

function Home() {
	const [blogs, setBlogs] = useState(null);

	function handleDelete(id) {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		// updating blogs state
		setBlogs(newBlogs);
	}

	// using the effect hook to fetch data after the first render
	// no need to worry about starting infinite loop due to changing state because we are using an empty dependency array
	useEffect(() => {
		// fetching and loading data
		fetch("http://localhost:8000/blogs")
			.then((response) => response.json())
			.then((data) => {
				setBlogs(data);
				console.log(data);
			});
	}, []);

	// here we are conditionally templating BlogList component
	return (
		<div className="home">{blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}</div>
	);
}

export default Home;
