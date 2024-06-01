const express = require("express");
const router = express.Router();
const {
  getAllJobType,
  createJobType,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const jobtype = await createJobType(req.body);
    res.json({
      status: "SUCCESS",
      message: "Job type created",
      data: jobtype,
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
    const jobtype = await getAllJobType();
    res.json({
      status: "SUCCESS",
      data: jobtype,
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});

module.exports = router;
