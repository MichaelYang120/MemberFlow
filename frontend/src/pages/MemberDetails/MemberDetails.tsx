import Logout from "../../components/Logout/Logout";
import "./memberDetails.css"

type MemberDetailsProps = {
	username: string;
	setUser: (user: string ) => void;

}

export default function MemberDetails(
	{ 
		username,
		setUser
	}: MemberDetailsProps
) {
	return (
		<>
			<Logout 
				setUser={setUser}
			/>
			<div className="member-details">
				<h1>Member Details</h1>
				<p>Welcome, {username}!</p>
			</div>
		</>
	)
}
