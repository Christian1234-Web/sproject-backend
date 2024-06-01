const express = require("express");
const router = express.Router();
const {
  getAllWorkshop,
  createWorkshop,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const workshop = await createWorkshop(req.body);
    res.json({
      status: "SUCCESS",
      message: "Worksop created",
      data: workshop,
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
    const workshop = await getAllWorkshop();
  
    res.json({
      status: "SUCCESS",
      data:workshop
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});
module.exports = router;
