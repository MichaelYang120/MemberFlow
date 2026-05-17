import { useEffect, useState, type SubmitEvent } from "react"
import type { AuthMode } from "../../App"
import "./Register.css"

type RegisterProps = {
	setUser: (username: string) => void
	setAuthMode: (mode: AuthMode) => void
	setToken: (token: string) => void
}

export default function Register({
	setUser,
	setAuthMode,
	setToken
}: RegisterProps) {
	const [errorMessage, setErrorMessage] = useState("")

	const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
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



		const serverUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"; 
		const response = await fetch(`${serverUrl}/api/auth/register`, { 
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (!response.ok) {
			setErrorMessage(data.message || "Registration failed.")
			return
		}

		setUser(username)
		setToken(data.token)
		//setUser(data.user.username)
	}

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	useEffect(() => {
		setTimeout(() => {
			setErrorMessage("")
		}, 15000)
	}, [errorMessage])

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
				<div className="error-message">
					{/* Display error messages here */}
					{errorMessage && <p>{errorMessage}</p>}
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
