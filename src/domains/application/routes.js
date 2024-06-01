const express = require("express");
const router = express.Router();
const {
  getAllApplication,
  createApplication,
  getUserApplication,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const application = await createApplication(req.body);
    res.json({
      status: "SUCCESS",
      message: "Applied successfully",
      data: application,
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
})
router.get("/all", async (req, res) => {
  try {
    const application = await getAllApplication();
  
    res.json({
      status: "SUCCESS",
      data:application
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});
router.get("/user/:userId", async (req, res) => {
  try {
    const application = await getUserApplication(req.params.userId);
  
    res.json({
      status: "SUCCESS",
      data:application
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});
module.exports = router;
