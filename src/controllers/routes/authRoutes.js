const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Validation middleware for registration
const registrationValidation = [
    check('fullName').not().isEmpty().withMessage('Full name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

router.post('/register', registrationValidation, authController.register);

// Validation middleware for login
const loginValidation = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').notEmpty().withMessage('Password is required'),
];

router.post('/login', loginValidation, authController.login);

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
