import "./login.css"
import type { AuthMode } from "../../App"
import type { SubmitEvent } from "react";

type LoginProps = {
	setUser: (username: string) => void;
	setAuthMode?: (mode: AuthMode) => void;
}

export default function Login({
	setUser,
	setAuthMode
}: LoginProps) {
	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const username = formData.get("username") as string;
		const password = formData.get("password") as string;

		// For demonstration, we will just check if the username and password are not empty
		if (username && password) {
			setUser(username);
		} else {
			alert("Please enter both username and password.");
		}
	}

	const handleRegisterClick = () => {
		if (setAuthMode) {
			setAuthMode("register");
		}
	}
	
	return (
		<>
		{/* login page */}
			<form className="login-container" onSubmit={handleSubmit}>
				<h1>Welcome back</h1>
				<p>Please enter your details</p>
				<input type="text" name="username" placeholder="Username" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit">Login</button>
				<div className="register-link">
					Don't have an account? <a href="#" onClick={handleRegisterClick}>Register</a>
				</div>
			</form>
		</>
	)
}
