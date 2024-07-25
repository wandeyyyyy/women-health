const User = require('../models/user.model')
const bcryptjs =  require('bcryptjs')

const signup = async (req, res) => {
 const {username, email, password} = req.body;
 // check for error
 if (!username ||!email || !password || username === "",email === "", password === "" ){
    return res.status(400).json({message: "All field required"})
 }
 const hashedPassword = bcryptjs.hashSync(password, 10);

 const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
try{
  await newUser.save();
  res.json('Signup successful');
} catch (error) {
    res.status(500).json({message: error.message})
}
}

module.exports = signup