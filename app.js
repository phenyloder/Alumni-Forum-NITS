const express = require("express");
const bodyParser = require("body-parser");
const batchData = require("./public/database")
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render("index");
})
app.get('/alumni/:batch', (req,res)=>{
    var batch = req.params.batch;
    res.render("batchPage", {batch:batch, batchData:batchData});
})
app.get('/user', (req,res)=>{
    res.render("signin_signup");
})
app.get('/admin', (req,res)=>{
    res.render("adminPage");
})
app.get("/updateDatabase", (req, res)=>{
    res.render("updateDatabase");
})
app.listen(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`);
})
