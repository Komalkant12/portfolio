const express = require("express");
const router = express.Router();
//authentication routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
module.exports = router;