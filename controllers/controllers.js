const Art = require("../models/content");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

const getAll= async (req, res) => {
  try {
    const content = await Art.find();
    res.json(arts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const art = await Art.findById(id);
    if (art) {
      return res.json(art);
    }
    res.status(404).json({ message: "Art not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArt = async (req, res) => {
  try {
    const art = await new Art(req.body);
    await art.save();
    res.status(201).json(art);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateArt = async (req, res) => {
  console.log("Hello");
  const { id } = req.params;
  await Art.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, art) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!art) {
        return res.status(404).json({ message: "Profile not found!" });
      }
      res.status(200).json(profile);
    }
  );
};

const deleteArt = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Art.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Art Deleted");
    }
    throw new Error("Art was not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getOne,
  createArt,
  updateArt,
  deleteArt,
};
