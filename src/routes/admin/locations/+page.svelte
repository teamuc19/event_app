<h1>Create a new Location</h1>

<form method="POST" action="?/createLocation">
	<label for="name">"Name"</label>
	<input type="text" placeholder="Name" name="name" />

	<label for="description">"Description"</label>
	<textarea placeholder="Description" name="Description"></textarea>
	<button type="submit">Create event</button>
</form>

<style>
	h1 {
		text-align: center;
		color: #333;
	}

	label {
		font-weight: bold;
		margin-top: 10px;
		display: block;
		color: #555;
	}

	input[type='text'],
	textarea {
		width: 100%;
		padding: 10px;
		margin-top: 5px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
	}

	button {
		margin-top: 20px;
		padding: 10px;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: white;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>