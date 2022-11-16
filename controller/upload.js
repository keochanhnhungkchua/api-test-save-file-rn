const { v4: uuidv4 } = require("uuid");
const Resize = require("../utils/resize");
const path = require("path");

module.exports.index = async (req, res) => {
  const randomId = await uuidv4();
  res.send(`upload file test :${randomId}`);
};

module.exports.upload = async (req, res) => {
  // folder upload
  const imagePath = path.join(__dirname, "../public/images");
  // call class Resize
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: "Please provide an image" });
  }

  try {
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ name: filename });
  } catch (error) {
    return res.status(200).json("error");
  }
};
