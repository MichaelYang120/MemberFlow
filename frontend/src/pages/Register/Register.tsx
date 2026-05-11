import type { SubmitEvent } from "react"
import type { AuthMode } from "../../App"
import "./Register.css"

type RegisterProps = {
	setUser: (username: string) => void
	setAuthMode: (mode: AuthMode) => void
}

export default function Register({
	setUser,
	setAuthMode
}: RegisterProps) {
	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const username = formData.get("username")?.toString().trim()
		const password = formData.get("password")?.toString().trim()
		const confirmPassword = formData.get("confirm-password")?.toString().trim()
		const email = formData.get("email")?.toString().trim()

		if(!username) {
			alert("Username is required.")
			return
		}

		if(!password) {
			alert("Password is required.")
			return
		}

		if(!confirmPassword) {
			alert("Please confirm your password.")
			return
		}

		if(password !== confirmPassword) {
			alert("Passwords do not match.")
			return
		}

		if(!email) {
			alert("Email is required.")
			return
		}

		if(!validateEmail(email)) {
			alert("Please enter a valid email address.")
			return
		}

		setUser(username)
	}

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	return (
		<div className="register-page">
			<h1 className="register-title">Register</h1>

			<form className="register-form" onSubmit={handleSubmit}>

				<div className="form-group">
					<label className="form-label" htmlFor="username">
						Username
					</label>

					<input
						className="form-input"
						name="username"
						id="username"
						type="text"
						placeholder="Username"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="email">
						Email
					</label>

					<input
						className="form-input"
						name="email"
						id="email"
						type="text"
						placeholder="Email"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="password">
						Password
					</label>

					<input
						className="form-input"
						name="password"
						id="password"
						type="password"
						placeholder="******************"
						required
					/>

					<label className="form-label" htmlFor="confirm-password">
						Confirm Password
					</label>
					<input
						className="form-input"
						name="confirm-password"
						id="confirm-password"
						type="password"
						placeholder="******************"
						required
					/>
				</div>

				<div className="form-actions">
					<button className="register-button" type="submit">
						Register
					</button>
				</div>

				<div className="register-link">
					Already have an account?{" "} <a href="#" onClick={() => setAuthMode("login")} >Login</a>
				</div>
			</form>
		</div>
	)
}
