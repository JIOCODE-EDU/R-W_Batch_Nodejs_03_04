import passport from "passport";
import * as jwtUtils from "../utils/jwtUtils.js";
import UserModels from "../models/User.models.js";

export const register = async (req, res, next) => {

  console.log("BODY:", req.body);
  
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    let user = await UserModels.findOne({ email });

    if (user) return res.status(400).json({ message: "User Already Exists!" });

    const newUser = new UserModels({ email, password, name });

    await newUser.save();

    const token = jwtUtils.signToken({ id: newUser._id });

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      token,
      user: { id: newUser._id, email: newUser.email, name: newUser.name },
    });
  } catch (err) {
    if (next) return next();
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) return res.status(401).json(info);

    const token = jwtUtils.signToken({ id: user._id });

    res.cookie("token", token, { httpOnly: true, secure: "false" }).json({
      success: true,
      user: { id: user._id, email: user.email, name: user.name, token },
    });
  })(req, res, next);
};

export const googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleCallback = (req, res, next) => {
  passport.authenticate("google", (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect("/login");

    const token = jwtUtils.signToken({ id: user._id });
    res.redirect(`http://localhost:3002?token=${token}`);
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout?.(() => {});
  return res.json({ success: true, message: "Logged out successfully." });
};
