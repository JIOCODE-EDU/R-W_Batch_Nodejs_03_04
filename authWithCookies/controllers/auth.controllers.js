import UserModels from "../models/User.models.js";

// register

export const register = async(req , res) => {
  try{
    const {username , password} = req.body

    if(!username || !password){
      return res.render('register' , {error:"All field are Required!!"})
    }

    const existingUser = await UserModels.findOne({username});

    if(existingUser){
      return res.render('register' , {error:"User are exists!!"})
    }

    const user = new UserModels({username , password})

    await user.save()

    res.cookie('authToken' , user.username , {
      httpOnly:true,
      maxAge:24 * 60 * 60 * 1000,
      sameSite:'strict',
      signed:true
    })

    res.redirect('/dashboard')

  }catch(err){
    res.render('register' , {error:err.message})
  }
}

// login

export const login = async(req , res) => {
  try{
    const {username , password} = req.body

    const user = await UserModels.findOne({username})

    if(!user || !(await user.comparePassword(password))){
      return res.render('login' , {error:'Invalid Credentials'})
    }

    res.cookie('authToken' , user.username , {
      httpOnly:true,
      signed:true,
      maxAge:60 * 60 * 1000
    })

    res.redirect('/dashboard')

  }catch(err){
    return res.render('login' , {error:res.message})
  }
}

// logout

export const logout = (req , res) => {
  res.clearCookie('authToken')
  res.redirect('/auth/login')
}