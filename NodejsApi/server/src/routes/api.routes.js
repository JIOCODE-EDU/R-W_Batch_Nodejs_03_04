import express from 'express'
import User from '../models/User.models.js'

const router = express.Router()

router.post("/" , async(req , res) => {
  const user = await new User(req.body)
  await user.save()
  res.json(user)
  console.log('user' , user);
})

router.get("/" , async(req , res) => {
  const user = await User.find()
  res.json(user)
  console.log('user' , user);
})

export default router