import { useParams } from "react-router";
import useFetch from "./useFetch";

function BlogDetails() {
	const { id } = useParams();
	// fetching the data of the blog with the specified id
	const { data: blog, fetchingData, error } = useFetch(`http://localhost:8000/blogs/${id}`);
	return (
		<div className="blog-details">
			{fetchingData && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{blog && (
				<article className="blog">
					<h2 className="blog__title">{blog.title}</h2>
					<p className="blog__author">Written by {blog.author}</p>
					<div className="blog__body">{blog.body}</div>
				</article>
			)}
		</div>
	);
}

export default BlogDetails;
