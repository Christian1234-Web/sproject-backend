
const express = require("express");
const router = express.Router();

const userRoutes = require("../domains/user");
const workshopRoutes = require("../domains/workshop");
const jobRoutes = require("../domains/jobs");
const applicationRoutes = require("../domains/application");
const professionalLevelRoutes = require("../domains/professional_level");
const jobTypeRoutes = require("../domains/jobtype");
const profileRoutes = require('../domains/profile')
const assessmentRoutes = require('../domains/assesment')



router.use("/user", userRoutes);
router.use("/workshop", workshopRoutes);
router.use("/job", jobRoutes);
router.use("/application", applicationRoutes);
router.use("/profile", profileRoutes);
router.use("/jobtype", jobTypeRoutes);
router.use("/assesment", assessmentRoutes);

router.use("/professional-level", professionalLevelRoutes);





module.exports = router;