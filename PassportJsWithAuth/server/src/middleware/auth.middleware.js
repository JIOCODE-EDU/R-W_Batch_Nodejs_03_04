import { verifyToken } from '../utils/jwtUtils.js';
import User from '../models/User.models.js';

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = await User.findById(decoded.id).select('-password -googleId');

    if (!req.user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

export default protect;