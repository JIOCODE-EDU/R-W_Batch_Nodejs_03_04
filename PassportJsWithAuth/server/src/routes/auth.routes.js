import { Router } from "express";
import { register , login , googleLogin , googleCallback , logout } from "../controllers/auth.controllers.js";

const router = Router()

router.post('/register' , register)
router.post('/login' , login)
router.get('/google' , googleLogin)
router.get('/google/callback' , googleCallback)
router.post('/logout', logout);


export default router;