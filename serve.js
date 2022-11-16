const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let app = express();
const port = process.env.PORT || 3000;
const uploadRouter = require("./routes/upload");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("test upload file React native");
});

app.use("/upload", uploadRouter);

app.listen(port, () =>
  console.log(`Server Started at : http://localhost:${port}/`)
);
