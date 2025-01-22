<script>
	let { data } = $props();
</script>

Create a new Event

<h1>Create a new Event</h1>

<form method="POST" action="?/createEvent" class="event-form">
	<label for="title">Title</label>
	<input type="text" placeholder="Title" name="title" required />

	<label for="description">Description</label>
	<textarea placeholder="Description" name="description" required></textarea>

	<label for="url">URL</label>
	<textarea placeholder="Url" name="url" required></textarea>

	<label for="startdate">Start Date</label>
	<input type="date" name="startDate" required />

	<label for="enddate">End Date</label>
	<input type="date" name="endDate" required />

	<label for="starttime">Start Time</label>
	<input type="time" name="startTime" required />

	<label for="location">Location</label>
	<select name="locationId" required>
		{#each data.locations as location (location.id)}
			<option value={location.id}>{location.name}</option>
		{/each}
	</select>
	<label for="category">Categories</label>
	<select name="categoryId" required>
		{#each data.categories as category (category.id)}
			<option value={category.id}>{category.name}</option>
		{/each}
	</select>

	<button type="submit">Create Event</button>
</form>

<style>
	h1 {
		text-align: center;
		font-size: 20px;
		color: #2c3e50;
		font-family: 'Arial', sans-serif;
	}

	label {
		display: block;
		margin-bottom: 5px;
		color: #34495e;
		font-size: 14px;
		font-family: 'Verdana', sans-serif;
	}

	input[type='text'],
	textarea {
		width: 100%;
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #bdc3c7;
		border-radius: 4px;
		font-size: 14px;
		font-family: 'Tahoma', sans-serif;
		color: #2c3e50;
		background-color: #ecf0f1;
	}

	button {
		padding: 8px 12px;
		border: none;
		border-radius: 4px;
		background-color: #3498db;
		color: #fff;
		font-size: 14px;
		cursor: pointer;
		font-family: 'Helvetica', sans-serif;
	}

	button:hover {
		background-color: #2980b9;
	}

	form {
		max-width: 400px;
		margin: 20px auto;
		padding: 15px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background-color: #ffffff;
	}
</style>