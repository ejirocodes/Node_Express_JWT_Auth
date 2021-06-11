const { User } = require('../mode/models/user.model');

const signupGet = async (req, res) => {
  res.render('signup');
};
const loginGet = async (req, res) => {
  res.render('login');
};
const signupPost = async (req, res) => {
  res.send('new signup');
};
const loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const user = await User.create({ email, password });
    res.status(201).send({ data: user });
    if (!email || !password) {
      console.log('');
      throw new Error('email and password is required ');

      return next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signupGet,
  loginGet,
  signupPost,
  loginPost,
};
