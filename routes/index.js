const express = require('express');
const router = express.Router();
const {AllResult,Vote}= require('../controller/resultController');
const verifyToken = require('../utils/jwt_Verify');

// user routes link
router.use('/user', require('./user'));

//get all winners of user 
router.get('/result', verifyToken,AllResult);
//voting by user 
router.post('/vote', verifyToken,Vote);

module.exports = router;