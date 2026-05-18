import { useEffect, useState } from "react"
import Login from "./components/Login/login"
import MemberDetails from "./pages/MemberDetails/MemberDetails"
import Register from "./pages/Register/Register"

export type AuthMode = "login" | "register"

function App() {
	const [user, setUser] = useState("")
	const [authMode, setAuthMode] = useState<AuthMode>("login")
	const [token, setToken] = useState("")
	const localUser = localStorage.getItem("user")

	useEffect(() => {
		if (localUser) {
			setUser(localUser)
		}
	}, [localUser])

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", user)
			if(authMode === "register") {
				setAuthMode("login")
			}
		} else {
			localStorage.removeItem("user")
			setToken("");
			localStorage.removeItem("token")
		}
	}, [user])

	useEffect(() => {
		if (token) {
			localStorage.setItem("token", token)
		}
	}, [token])

	return (
		<>
			{!user ? (
				authMode === "login" ? (
					<Login
						setUser={setUser}
						setAuthMode={setAuthMode}
						setToken={setToken}
					/>
				) : (
					<Register
						setUser={setUser}
						setAuthMode={setAuthMode}
						setToken={setToken}
					/>
				)
			) : (
				<MemberDetails
					username={user}
					setUser={setUser}
				/>
			)}
		</>
	)
}

export default App
