import { useState } from "react"
import Login from "./components/Login/login"
import MemberDetails from "./pages/MemberDetails/MemberDetails";

function App() {
	const [user, setUser] = useState(""); // State to hold the logged-in user's name
	return (
		<>
			{!user ?
			<Login 
				setUser={setUser}
			/>
			:
			<MemberDetails
				username={user}
				setUser={setUser}
			/>
			}
		</>
	)
}

export default App
