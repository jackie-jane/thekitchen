const db = require("../db/connection");
const Art = require("../models/content");

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

const main = async () => {
  const arts = [
    {
      text: "We are what we eat",
      image: "https://i.imgur.com/3krDEcS.png",
      number: 1,
    },
    {
      text: "I've never had a prune",
      image: "https://i.imgur.com/aPFcNj4.jpg",
      number: 2,
    },
    {
      text: "Je voudrais un pizza por favor",
      image: "https://i.imgur.com/ywLUBaL.png",
      number: 3,
    },
  ];

  await Art.insertMany(arts);
  console.log("Arts Created");
};

const run = async () => {
  await main();
  db.close();
};

run();
