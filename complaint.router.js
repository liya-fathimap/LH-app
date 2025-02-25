const router = require("express").Router();
const ComplaintController = require("../controller/complaint.controller");

// **Submit a complaint**
router.post("/submit", ComplaintController.submitComplaint);

// **Get complaints for Warden or Matron**
router.get("/:recipient", ComplaintController.getComplaints);

module.exports = router;
