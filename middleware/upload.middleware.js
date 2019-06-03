const multer = require("multer");

function getExtension(target) {
  const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "application/pdf": "pdf"
  };
  return MIME_TYPE_MAP[target];
}

// Start Config Storage for multer
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "file - " + Date.now() + "." + getExtension(file.mimetype));
  }
});
const uploader = multer({ storage }).array("documents", 2);
exports.upload = uploader;
