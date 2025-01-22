<script>
	import { enhance } from '$app/forms';

    let { data } = $props();
</script>
 
<h1>Admin Dashboard</h1>

<a href="/admin/events/new">Create a new event!</a>
 
{#each data.events as event (event.id)}
    <div class="box" transition:slide> 
    <p>{event.id} - {event.title} - {event.locationName}</p>

    <form action="?/deleteEvent" method="POST" use:enhance>
        <input type="hidden" name="id" value="{event.id}"/>
        <button type="submit">Delete</button>
    </form>2



    </div>

{/each}

<style>
    .box{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 1 rem 0; 
    }


</style>