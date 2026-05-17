import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes"

dotenv.config()

const app = express()

app.use(cors({
	origin: process.env.CLIENT_URL || "http://localhost:5173",
	credentials: true,
}))

app.use(express.json())

app.get("/", (_req, res) => {
	res.json({ message: "MemberFlow API is running" })
})

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
