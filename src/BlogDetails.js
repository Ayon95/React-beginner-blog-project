import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
// this is one way of using svg icons in a React application; this only works with create-react-app
import { ReactComponent as IconDelete } from "./images/rubbish-bin.svg";
import { ReactComponent as IconEdit } from "./images/edit.svg";

function BlogDetails() {
	const { id } = useParams();
	// fetching the data of the blog with the specified id
	const { data: blog, fetchingData, error } = useFetch(`http://localhost:8000/blogs/${id}`);
	const history = useHistory();

	async function handleClickDelete() {
		// this will make a DELETE request and the blog with the specified id will be deleted from the server
		await fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" });
		// after deleting the blog, we want to redirect the user to the home page
		history.push("/");
	}

	return (
		<div className="blog-details">
			{fetchingData && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{blog && (
				<article className="blog">
					<h2 className="blog__title">{blog.title}</h2>
					<p className="blog__author">By {blog.author}</p>
					<p className="date">{blog.date}</p>
					<div className="blog__body">{blog.body}</div>
					<div className="icon-container">
						<IconDelete className="icon-delete" onClick={handleClickDelete} />
						<Link to={`/edit/${blog.id}`}>
							<IconEdit className="icon-edit" />
						</Link>
					</div>
				</article>
			)}
		</div>
	);
}

export default BlogDetails;
