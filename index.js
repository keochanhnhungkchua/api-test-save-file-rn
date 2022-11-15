const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
let app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello word");
});
app.post("/", (req, res) => {
  console.log(req.body);
  // const newpath = __dirname + "/files/";
  // const file = req.files.file;
  // const filename = file.name;

  // file.mv(`${newpath}${filename}`, (err) => {
  //   if (err) {
  //     res.status(500).send({ message: "File upload failed", code: 200 });
  //   }
  //   res.status(200).send({ message: "File Uploaded", code: 200 });
  // });
});

app.listen(3000, () => console.log("Server Started  : http://localhost:3000/"));
