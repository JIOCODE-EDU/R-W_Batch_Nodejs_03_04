export const requireAuth = (req , res , next) => {
  if(!req.signedCookies.authToken){
    return res.redirect('/auth/login')
  }
  next()
}

export const isLoggedIn = (req , res , next) => {
  res.locals.user = req.signedCookies.authToken || null
  next()
}