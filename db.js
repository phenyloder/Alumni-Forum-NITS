const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.db_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    console.log("Welcome to MongoDB!!");
    console.log(err);
});

mongoose.connection.on('connection', ()=>{
    console.log("Connected to MongoDB Cluster");
})
mongoose.connection.on('error', (error)=>{
    console.log(error.message);
})
mongoose.connection.on('disconnected', ()=>{
    console.log("Disconnected for MongoDB Cluster");
})