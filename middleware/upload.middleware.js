const multer = require("multer");

/**
 * Accept a key of mimeType 
 * @param target: the mimeType for files 
 */
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
    cb(null, `file - ${Date.now()} . ${getExtension(file.mimetype)}`);
  }
});
const NUMBEROFFILES = 2;
const uploader = multer({ storage }).array("documents", NUMBEROFFILES);
exports.upload = uploader;
