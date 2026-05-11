import { useState } from "react"
import Login from "./components/Login/login"
import MemberDetails from "./pages/MemberDetails/MemberDetails"
import Register from "./pages/Register/Register"

export type AuthMode = "login" | "register"

function App() {
	const [user, setUser] = useState("")
	const [authMode, setAuthMode] = useState<AuthMode>("login")

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
