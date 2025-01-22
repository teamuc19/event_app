import { createConnection } from '$lib/db/mysql';

export async function load() {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM locations LIMIT 10');

	return {
		locations: rows
	};
}
