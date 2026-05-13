import { Request, Response } from "express";
import authService from "../services/authService";

export async function register(req: Request, res: Response) {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({
				message: "Username, email, and password are required.",
			});
		}

		const user = await authService.registerUser({
			username,
			email,
			password,
		});

		return res.status(201).json({
			message: "User registered successfully.",
			user,
		});
	} catch (error) {
		return res.status(400).json({
			message: error instanceof Error ? error.message : "Registration failed.",
		});
	}
}

export async function login(req: Request, res: Response) {
	// Implement login logic here
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({
				message: "Username and password are required.",
			});
		}

		const user = await authService.loginUser({
			username,
			password,
		});

		return res.status(200).json({
			message: "User logged in successfully.",
			user,
		});

	} catch (error) {
		return res.status(400).json({
			message: error instanceof Error ? error.message : "Login failed.",
		});
	}

}
