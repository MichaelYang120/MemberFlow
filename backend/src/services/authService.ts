import bcrypt from 'bcryptjs';
import pool from '../config/db';
import { RegisterInput } from '../types/auth';

async function registerUser(data: RegisterInput) {
	const { username, email, password } = data;

	const existingUser = await pool.query(
		"SELECT id FROM users WHERE username = $1 OR email = $2",
	[username, email]
	);

	if (existingUser.rows.length > 0) {
	throw new Error("User already exists");
	}

	const passwordHash = await bcrypt.hash(password, 10);

	const result = await pool.query(
		`
		INSERT INTO users (username, email, password_hash)
		VALUES ($1, $2, $3)
		RETURNING id, username, email, created_at
		`,
		[username, email, passwordHash]
	);

	return result.rows[0];
}

export default {
	registerUser,
};
