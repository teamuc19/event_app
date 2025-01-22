<script>
	let { data } = $props();
</script>

<h1>My Location App</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#each data.locations as location}
	<p>{location.id} {location.title}</p>
{/each}
