import { Pool } from "pg"

const pool = new Pool({
	connectionString: "postgresql://postgres:postgres@postgres:5432/memberflow",
})

pool.on("connect", () => {
	console.log("Connected to PostgreSQL")
})

pool.on("error", (err) => {
	console.error("PostgreSQL error:", err)
})

export default pool
