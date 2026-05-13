import "./Logout.css"

type LogoutProps = {
	setUser: (user: string) => void;
}

export default function Logout({ setUser }: LogoutProps) {
	function handleLogout() {
		setUser("")
		localStorage.removeItem("user")
	}
	return (
		<>
			<nav className="logout-nav">
				<button onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</>
	)
}
