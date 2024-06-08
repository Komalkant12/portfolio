const express = require("express");
const{signup , login , logout} = require("../controllers/AuthController")
const {getUser, authUser} = require("../controllers/userController");
const { verifyToken } = require("../middleware/VerifyToken");
const{refreshToken} = require("../middleware/refreshToken")
const {checkUser} = require("../middleware/checkUser")
const {getSkills, addSkill , removeSkill} = require("../controllers/SkillController");
 const{getProjects, addProject , removeProject , updateProject} = require("../controllers/projectController")

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

//skillroutes
router.get("/getSkills", getSkills);
router.post("/addSkill", addSkill);
router.delete("/removeSkill/:id", removeSkill)

//projects routes
router.get("/getProjects",getProjects)
router.post("/addProject",addProject)
router.delete("/removeProject/:id", removeProject)
router.get("/updateProject/:id", updateProject)
module.exports = router;