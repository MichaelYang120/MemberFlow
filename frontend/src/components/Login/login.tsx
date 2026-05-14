import "./login.css"
import type { AuthMode } from "../../App"
import { useEffect, useState, type SubmitEvent } from "react";

type LoginProps = {
	setUser: (username: string) => void;
	setAuthMode?: (mode: AuthMode) => void;
	setToken: (token: string) => void;
}

export default function Login({
	setUser,
	setAuthMode,
	setToken
}: LoginProps) {
	const [errorMessage, setErrorMessage] = useState("")
	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const username = formData.get("username") as string;
		const password = formData.get("password") as string;

		// For demonstration, we will just check if the username and password are not empty
		if(!username || !password) {
			setErrorMessage("Please enter both username and password.");
			return;
		}

		// Simulate successful login
		const response = await fetch(`http://localhost:5000/api/auth/login`, { // todo: needs global config
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username, password })
		})

		const data = await response.json()
		if(!response.ok) {
			setErrorMessage(data.message || "Login failed. Please try again.")
			return
		}
		setToken(data.token);
		setUser(username)

	}

	const handleRegisterClick = () => {
		if (setAuthMode) {
			setAuthMode("register");
		}
	}

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage("")
			}, 15000)
		}
	}, [errorMessage])
	
	return (
		<>
		{/* login page */}
			<form className="login-container" onSubmit={handleSubmit}>
				<h1>Welcome back</h1>
				<p>Please enter your details</p>
				<input type="text" name="username" placeholder="Username" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Login</button>
				{errorMessage && 
					<div className="error-message-container">
						<p className="error-message">{errorMessage}</p>
					</div>
				}
				<div className="register-link">
					Don't have an account? <a href="#" onClick={handleRegisterClick}>Register</a>
				</div>
			</form>
		</>
	)
}
