const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 8000;

app.listen(port, () => {
  console.log("server open!");
});
