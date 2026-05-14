import jwt from "jsonwebtoken"

export function generateToken(userId: number) {
	return jwt.sign(
		{ userId },
		process.env.JWT_SECRET || "dev_secret",
		{ expiresIn: "1h" }
	)
}
