import { useState } from "react";

function Home() {
	const [blogs, setBlogs] = useState([
		{ title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
		{ title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
		{ title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
	]);

	// generating the template for all the blogs
	const blogsTemplate = blogs.map((blog) => (
		<div className="blog-preview" key={blog.id}>
			<h2>{blog.title}</h2>
			<p>Written by {blog.author}</p>
		</div>
	));

	return (
		<div className="home">
			<div className="blogs-container">{blogsTemplate}</div>
		</div>
	);
}

export default Home;
