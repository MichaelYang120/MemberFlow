import { Router } from "express";
import { login, register } from "../controllers/authController";

const router = Router();

console.log("Setting up auth routes...")
console.log("register handler:", register)
console.log("login handler:", login)

router.post("/register", register);
router.post("/login", login);

export default router;
