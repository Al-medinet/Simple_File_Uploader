const express = require("express");
const app = express();

const upload = require("./router/upload");

app.use("/api", upload.router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Api is running on port", PORT);
});
