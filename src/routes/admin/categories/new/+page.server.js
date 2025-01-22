import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
    createCategory: async ({ request }) => {
        const formData = await request.formData();

        // Hole die Werte korrekt
        const name = formData.get('name');
        const description = formData.get('description');

        if (!name || !description) {
            return { error: 'Both name and description are required.' };
        }

        const connection = await createConnection();
        const [result] = await connection.execute(
            'INSERT INTO categories (name, description) VALUES (?, ?)',
            [name, description]
        );

        if (result.affectedRows) {
            throw redirect(303, '/admin/categories');
        } else {
            return { error: 'Failed to create the category.' };
        }
    }
};
