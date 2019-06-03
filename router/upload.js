const router = require("express").Router();
const multer = require("multer");
const { upload } = require("../middleware/upload.middleware");

router.get("/", (req, res) => {
  res.json({ message: "Success" }).end();
});

router.post("/upload", (req, res, next) => {
  upload(req, res, err => {
    if (err instanceof multer.MulterError) {
      throw new Error(err);
    } else {
      return res
        .status(201)
        .json({ message: "Files Completely Uploaded" });
    }
  });
});
exports.router = router;
