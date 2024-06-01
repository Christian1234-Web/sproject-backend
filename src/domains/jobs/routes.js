const express = require("express");
const router = express.Router();
const {
  getAllJob,
  createJob,
  getSingleJob,
  updateJob,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const job = await createJob(req.body);
    res.json({
      status: "SUCCESS",
      message: "job created",
      data: job,
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
    const job = await getAllJob();
  
    res.json({
      status: "SUCCESS",
      data:job
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});
router.get("/single/:jobId", async (req, res) => {
  try {
    const job = await getSingleJob(req.params.jobId);
  
    res.json({
      status: "SUCCESS",
      data:job
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});
router.put("/update/:id" , async (req, res) => {
  try {
    const response = await updateJob(req.params.id, req.body);

    res.json({
      status: "SUCCESS",
      message: "Job Updated",
      data: response,
    });
  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message,
    });
  }
});
module.exports = router;
