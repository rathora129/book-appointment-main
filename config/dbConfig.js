const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`mongodb connected to backend successfully`);
  } catch (err) {
    console.log("error on connecting to the database");
  }
};

module.exports = dbConfig;
