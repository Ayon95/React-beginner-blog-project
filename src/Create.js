import { useState } from "react";

function Create() {
	const [title, setTitle] = useState(""); // the initial value of the title will be an empty string
	const [author, setAuthor] = useState("");
	const [blogBody, setBlogBody] = useState("");
	return (
		<div className="create-blog">
			<h2 className="create-blog__heading">Add a New Blog</h2>
			<form className="create-blog__form">
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
					value={blogBody}
					onChange={(event) => setBlogBody(event.target.value)}
				></textarea>

				<button className="create-blog__btn-submit">Add Blog</button>
			</form>
		</div>
	);
}

export default Create;
