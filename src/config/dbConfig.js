const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL);
      console.log("Successfully connected to DB 🔥");
    }
  } catch (error) {
    console.log("Unable to connect to the DB Server 😥");
    console.log(error);
  }
}

module.exports = connectToDB;
