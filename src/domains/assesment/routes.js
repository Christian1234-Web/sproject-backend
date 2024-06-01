const express = require("express");
const router = express.Router();
const {
  createAssesment,
  getAllAssesment,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const assesment = await createAssesment(req.body);
    res.json({
      status: "SUCCESS",
      message: "Assesment  created",
      data: assesment,
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
    const assesment = await getAllAssesment();
    res.json({
      status: "SUCCESS",
      data: assesment,
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});

module.exports = router;
