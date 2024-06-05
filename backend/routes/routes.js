const express = require("express");
const{signup , login , logout} = require("../controllers/AuthController")
const {getUser} = require("../controllers/userController")
const router = express.Router();

//authentication routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


module.exports = router;