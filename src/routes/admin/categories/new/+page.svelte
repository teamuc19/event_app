<h1>Create a new Category</h1>

<form method="POST" action="?/createCategory">
    <label for="name">Name</label>
    <input type="text" placeholder="Name" name="name" required />

    <label for="description">Description</label>
    <textarea placeholder="Description" name="description" required></textarea>
    
    <button type="submit">Create Category</button>
</form>

<style>
	h1 {
		text-align: center;
		color: #333;
		font-family: Arial, sans-serif;
	}

	label {
		font-weight: normal;
		display: block;
		margin: 10px 0 5px;
		color: #333;
		font-family: Arial, sans-serif;
	}

	input[type='text'],
	textarea {
		width: 100%;
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #aaa;
		border-radius: 4px;
		font-family: Arial, sans-serif;
		font-size: 14px;
	}

	button {
		padding: 10px 15px;
		border: 1px solid #aaa;
		border-radius: 4px;
		background-color: #f4f4f4;
		color: #333;
		font-size: 14px;
		cursor: pointer;
		font-family: Arial, sans-serif;
	}

	button:hover {
		background-color: #e0e0e0;
	}
</style>
