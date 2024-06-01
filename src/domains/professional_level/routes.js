const express = require("express");
const router = express.Router();
const {
  getAllProfessionalLevel,
  createProfessionalLevel,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const professionalLevel = await createProfessionalLevel(req.body);
    res.json({
      status: "SUCCESS",
      message: "Professional level created",
      data: professionalLevel,
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
    const professionalLevel = await getAllProfessionalLevel();
    res.json({
      status: "SUCCESS",
      data: professionalLevel,
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});

module.exports = router;
