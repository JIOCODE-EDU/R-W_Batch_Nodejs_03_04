import express from 'express'
import { register , login , logout } from '../controllers/auth.controllers.js'

// register

const router = express.Router()

router.get('/register' , (req , res) => {
  res.render('register' , {error:null})
})

router.post('/register' , register)

// login

router.get('/login' , (req , res) => {
  res.render('login' , {error:null})
})

router.post('/login' , login)

// logout

router.post('/logout' ,  logout)

export default router