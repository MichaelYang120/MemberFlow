import { useEffect, useState } from "react"
import Login from "./components/Login/login"
import MemberDetails from "./pages/MemberDetails/MemberDetails"
import Register from "./pages/Register/Register"

export type AuthMode = "login" | "register"

function App() {
	const [user, setUser] = useState("")
	const [authMode, setAuthMode] = useState<AuthMode>("login")
	const localUser = localStorage.getItem("user")

	useEffect(() => {
		if (localUser) {
			setUser(localUser)
		}
	}, [localUser])

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", user)
		} else {
			localStorage.removeItem("user")
		}
	}, [user])

	return (
		<>
			{!user ? (
				authMode === "login" ? (
					<Login
						setUser={setUser}
						setAuthMode={setAuthMode}
					/>
				) : (
					<Register
						setUser={setUser}
						setAuthMode={setAuthMode}
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
