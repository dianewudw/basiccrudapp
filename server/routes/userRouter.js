const path = require('path');
const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/',
userController.getUser,
(req, res) => {
  console.log('Testing here ====> <3');
  const { user } = res.locals;
  res.json({ user });
  // res
  // .status(200)
  // .json(res.locals.getUser)
});
module.exports = userRouter;
