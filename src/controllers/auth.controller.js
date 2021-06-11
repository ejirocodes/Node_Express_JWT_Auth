const signupGet = async (req, res) => {
  res.render('signup');
};
const loginGet = async (req, res) => {
  res.render('login');
};
const signupPost = async (req, res) => {
  res.render('new signup');
};
const loginPost = async (req, res) => {
  res.render('user login');
};

module.exports = {
  signupGet,
  loginGet,
  signupPost,
  loginPost,
};
