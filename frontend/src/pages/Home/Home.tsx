import MemberDetails from "../MemberDetails/MemberDetails"
import "./Home.css"

type HomeProps = {
	username: string;
	setUser: (user: string ) => void;
}

export default function Home(
	{ 
		username,
		setUser
	}: HomeProps
) {

	// sample data for products or plans
	const plans = [
		{ id: 1, name: "Basic Plan", description: "Access to basic features", cost: 9.99 },
		{ id: 2, name: "Pro Plan", description: "Access to all features", cost: 19.99 },
		{ id: 3, name: "Enterprise Plan", description: "Custom solutions for businesses", cost: 49.99 },
	]

	return (
		<>
			<div className="home">
				<h1>Welcome to the back</h1>
				<MemberDetails
					username={username}
					setUser={setUser}
				/>

				<h2 className="products-title">Plans</h2>
				<form className="product-form">
					{plans.map(plan => (
						<label key={plan.id} className="product-item">
							<input type="radio" name="plan" value={plan.id} />
							<div className="product-info">
								<h3>{plan.name}</h3>
								<p>{plan.description}</p>
								<span className="product-cost">${plan.cost.toFixed(2)}</span>
							</div>
						</label>
					))}
				</form>
			</div>
		</>
	)
}
