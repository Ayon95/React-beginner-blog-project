import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function Edit() {
	const { id } = useParams();
	const history = useHistory();

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [body, setBody] = useState("");
	const [date, setDate] = useState("");
	const [addingBlog, setAddingBlog] = useState(false);

	useEffect(() => {
		// wait for the data to be fetched, and then updating the state
		(async () => {
			const response = await fetch(`http://localhost:8000/blogs/${id}`);
			const blog = await response.json();

			// the values need to be set equal to the current values of the blog's details as soon as this component is rendered
			setTitle(blog.title);
			setAuthor(blog.author);
			setBody(blog.body);
			setDate(blog.date);
		})();
	}, []); // we only want this to run after the first render of this component

	async function handleSubmit(event) {
		event.preventDefault();
		const blog = { title, author, body, date };
		setAddingBlog(true);
		await fetch(`http://localhost:8000/blogs/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		});
		setAddingBlog(false); // at this point, the blog has been added

		// redirecting the user to the updated blog page after submitting the form
		history.push(`/blogs/${id}`);
	}
	return (
		<div className="create-blog">
			<h2 className="create-blog__heading">Edit Blog</h2>
			<form className="create-blog__form" onSubmit={handleSubmit}>
				<label className="create-blog__label">Blog title:</label>
				<input
					className="create-blog__input-box"
					type="text"
					required
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>

				<label className="create-blog__label">Blog author:</label>
				<input
					className="create-blog__input-box"
					type="text"
					required
					value={author}
					onChange={(event) => setAuthor(event.target.value)}
				/>

				<label className="create-blog__label">Blog body:</label>
				<textarea
					className="create-blog__input-box"
					type="text"
					required
					value={body}
					onChange={(event) => setBody(event.target.value)}
				></textarea>

				{addingBlog ? (
					<button disabled className="create-blog__btn-submit">
						Adding Blog...
					</button>
				) : (
					<button className="create-blog__btn-submit">Save</button>
				)}
			</form>
		</div>
	);
}

export default Edit;
