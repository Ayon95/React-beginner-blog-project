function BlogList({ blogs, title, handleDelete }) {
	// generating the template for all the blogs
	const blogsTemplate = blogs.map((blog) => (
		<div className="blog-preview" key={blog.id}>
			<h2>{blog.title}</h2>
			<p>Written by {blog.author}</p>
			<button onClick={() => handleDelete(blog.id)}>Delete</button>
		</div>
	));

	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blogsTemplate}
		</div>
	);
}

export default BlogList;
