const express = require("express");
const router = express.Router();
const {
  getAllProfile,
  createProfile,
  getUserProfile,
  updateProfile,
} = require("./controller");

router.post("/create", async (req, res) => {
  try {
    const profile = await createProfile(req.body);
    res.json({
      status: "SUCCESS",
      message: "Profile created successfully",
      data: profile,
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
    const profile = await getAllProfile();
  
    res.json({
      status: "SUCCESS",
      data:profile
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
    const profile = await getUserProfile(req.params.userId);
  
    res.json({
      status: "SUCCESS",
      data:profile
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
    const response = await updateProfile(req.params.id, req.body);

    res.json({
      status: "SUCCESS",
      message: "Profile Updated",
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
