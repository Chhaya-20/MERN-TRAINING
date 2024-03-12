const express = require("express");
const router = express.Router();
const ctr = require("../controllers/controler.js");

router.get("/", ctr.retrievingallTASKS);

router.post("/", ctr.creatingtasks);

router.get("/:id", ctr.RetrievingSpecificTask);

router.delete("/:id", ctr.deletingTask);

router.put("/:id", ctr.updatedTasks);

router.patch("/:id",ctr.UpdateStatus);

module.exports = router;
