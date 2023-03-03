const express = require("express");
const bodyParser = require("body-parser");
const batchData = require("./models/databaseSchema");
const connectToMongo = require("./db");
const app = express();
connectToMongo()
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render("index");
})
app.get('/alumni/:batch', async (req,res)=>{
    var batch = Number(req.params.batch);
    const batchDataArray = await batchData.find({});
    res.render("batchPage", {batch:batch, batchData:batchDataArray});
})
app.get('/user', (req,res)=>{
    res.render("signin_signup");
})
app.get('/admin', (req,res)=>{
    res.render("adminPage");
})
app.get("/updateDatabase", async(req, res)=>{
    try{
        const data = await batchData.find({});
        res.json(data);
    }catch(error){
        console.log(error);
    }
})
app.post("/updateDatabase", (req, res)=>{
    const databaseContent = req.body;
    console.log(databaseContent);
})
app.listen(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`);
})
