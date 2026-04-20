import express from 'express'
import { addAdminPage , addAdmin , viewAllAdmins , deleteAdmin } from '../controller/admin.controller.js'
import uploadImage from '../middleware/uploadImage.js'

const adminRoutes = express.Router()

adminRoutes.get("/add-admin" , addAdminPage)
adminRoutes.post("/add-admin" , uploadImage.single('image')) // image upload 
adminRoutes.get("/view-admin" , viewAllAdmins)
adminRoutes.get("/delete-admin" , deleteAdmin)

export default adminRoutes