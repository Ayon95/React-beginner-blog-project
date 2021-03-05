import { useState, useEffect } from "react";
import useFetch from "./useFetch.js";
import BlogList from "./BlogList.js";

function Home() {
	// fetching data and immediately destructuring the object returned by useFetch
	const { data: blogs, fetchingData, error } = useFetch("http://localhost:8000/blogs");

	// here we are conditionally templating BlogList component and a loading message; conditional rendering
	return (
		<div className="home">
			{error && <p>{error}</p>}
			{fetchingData && <p>Loading...</p>}
			{blogs && <BlogList blogs={blogs} title="All blogs" />}
		</div>
	);
}

export default Home;
