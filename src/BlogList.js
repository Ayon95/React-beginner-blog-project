import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
	// generating the template for all the blogs
	const blogsTemplate = blogs.map((blog) => (
		<div className="blog-preview" key={blog.id}>
			<Link to={`/blogs/${blog.id}`}>
				<h2>{blog.title}</h2>
				<p>Written by {blog.author}</p>
			</Link>
		</div>
	));

	return (
		<div className="blog-list">
			<h2 className="blog-list__title">{title}</h2>
			{blogsTemplate}
		</div>
	);
}

export default BlogList;
