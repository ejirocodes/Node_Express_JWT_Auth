const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const router = Router();

router
  .route('/signup')
  .get(authController.signupGet)
  .post(authController.signupPost);
router
  .route('/logn')
  .get(authController.loginGet)
  .post(authController.loginPost);

module.exports = router;
