import "./login.css"

type LoginProps = {
	setUser: (username: string) => void;
}

export default function Login(
	{ setUser }: LoginProps
) {

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
					Don't have an account? <a href="#">Register here</a>
				</div>
			</form>
		</>
	)
}
