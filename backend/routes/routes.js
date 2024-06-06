const express = require("express");
const{signup , login , logout} = require("../controllers/AuthController")
const {getUser, authUser} = require("../controllers/userController");
const { verifyToken } = require("../middleware/VerifyToken");
const{refreshToken} = require("../middleware/refreshToken")
const {checkUser} = require("../middleware/checkUser")
const router = express.Router();

//authentication routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//user routes
router.get("/getUser", getUser);
router.get("/authUser", verifyToken, authUser);
router.get("/refresh", refreshToken, verifyToken, authUser);
router.get("/checkUser", checkUser);
module.exports = router;