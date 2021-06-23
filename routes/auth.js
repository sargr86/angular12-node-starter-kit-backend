const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateRegister = require('../validators/validateRegister');
const validateLogin = require('../validators/validateLogin');
const validateVerificationCode = require('../validators/validateVerificationCode');

router.post('/send-verification-code', validateRegister.rules, authController.sendVerificationCode);
router.post('/verify-code', validateVerificationCode.rules, authController.verifyCode);
router.post('/send-forgot-pass-email', authController.sendForgotPassEmail);
router.post('/reset-password', validateResetPass.rules, authController.resetPassword);
router.post('/login', validateLogin.rules, authController.login);

module.exports = router;
