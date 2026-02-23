import express from 'express'
import { requireAuth , isLoggedIn } from '../middlewares/auth.middlewares.js'

const router = express.Router()

// cookie

router.get('/cookie_name' , (req , res) => {
  res.json({
    allCookies:req.cookies,
    signedCookie:req.signedCookies,
    isAuthenticated:!!req.signedCookies.authToken
  })
})

// dashboard

router.get('/dashboard' , (req , res) => {
  if(!res.locals.user){
    return res.redirect('/auth/login')
  }

  res.render('dashboard' , {user:res.locals.user})
})

// home

router.get('/home' , requireAuth ,  (req , res) => {
  res.render('home' , {user:res.locals.user} , req.signedCookies.authToken)
})

export default router


