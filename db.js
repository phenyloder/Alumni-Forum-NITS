const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require('./models/useSchema');

dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.db_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Welcome to MongoDB!!");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB Cluster");
});
mongoose.connection.on("error", (error) => {
  console.log(error.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected for MongoDB Cluster");
});

