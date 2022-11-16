const express = require("express");
const router = express.Router();
const controller = require("../controller/upload");
const upload = require("../utils/uploadMiddleware");

router.get("/", controller.index);
router.post("/", upload.single("image"), controller.upload);

module.exports = router;
