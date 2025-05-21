const express = require("express");
const router = express.Router();
const { handleWebhook } = require("../controllers/zoomController");

const {
  createMeeting,
  getMeeting,
  deleteMeeting,
} = require("../controllers/zoomController");

// POST /zoom/meetings
router.post("/meetings", createMeeting);

// GET /zoom/meetings/:id
router.get("/meetings/:id", getMeeting);

// DELETE /zoom/meetings/:id
router.delete("/meetings/:id", deleteMeeting);

module.exports = router;
