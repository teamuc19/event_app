import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
	createLocation: async ({ request }) => {
		const formData = await request.formData(); // Zugriff auf die Daten haben sie speicher n auf formdata
		console.log(formData); // print formdatA
		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO locations (name,description) VALUES(?,?)',
			[formData.get('name'), formData.get('description')]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/locations');
		}
	}
};