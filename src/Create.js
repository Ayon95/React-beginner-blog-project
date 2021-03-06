import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
	const [title, setTitle] = useState(""); // the initial value of the title will be an empty string
	const [author, setAuthor] = useState("");
	const [body, setBody] = useState("");
	const [addingBlog, setAddingBlog] = useState(false);

	const history = useHistory();

	function clearInputFields() {
		setTitle("");
		setAuthor("");
		setBody("");
	}

	// this handler will handle form submission; it will make a POST request to the json server to add the new blog to our local database
	async function handleSubmit(event) {
		event.preventDefault(); // prevent the page from refreshing when a form is submitted
		const blog = { title, author, body };
		setAddingBlog(true); // at this point, we are trying to add the blog to the database
		await fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		});
		setAddingBlog(false); // at this point, the blog has been added
		// we want to clear all the input fields
		clearInputFields();
		// redirecting the user to the home page after submitting the form
		history.push("/");
	}
	return (
		<div className="create-blog">
			<h2 className="create-blog__heading">Add a New Blog</h2>
			<form className="create-blog__form" onSubmit={handleSubmit}>
				<label className="create-blog__label">Blog title:</label>
				<input
					className="create-blog__input-box"
					type="text"
					required
					value={title} // the value will be whatever the value of title is
					onChange={(event) => setTitle(event.target.value)} // whenever the input value changes, we are updating title with that value
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
					<button className="create-blog__btn-submit">Add Blog</button>
				)}
			</form>
		</div>
	);
}

export default Create;
