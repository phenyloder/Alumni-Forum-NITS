const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const batchData = require("./models/databaseSchema");
const connectToMongo = require("./db");
const bcrypt = require("bcrypt");
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

app.post('/user', RegisterUser);


app.get('/admin', (req,res)=>{
    res.render("adminPage");
})
app.post('/login', (req,res)=>{
    const loginDetails = req.body;
    const loginPassword = loginDetails.loginPassword;
    const loginUsername = loginDetails.loginUsername;

    // const saltRounds = 10;

    // bcrypt
    // .hash(loginPassword, saltRounds)
    // .then(hash => {
    //     console.log('Hash: ', hash)
    // })
    // .catch(err => console.error(err.message))
    
})

const comparePass = (passwordReceived) => {
    const hash = '$2b$10$gIYOLc9clzBYNeVd6nNVJuVwnNDm54Ni5KwdM8q2EndVNSvLGOgAK'

    bcrypt.compare(passwordReceived, hash)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

app.get("/updateDatabase", async(req, res)=>{
    try{
        res.render("updateDatabase");
        // const data = await batchData.find({});
        // res.json(data);
    }catch(error){
        console.log(error);
    }
})
app.post("/updateDatabase", async(req, res)=>{
    const databaseContent = req.body;
    const newBatch = databaseContent.content;
    batchData.insertMany(newBatch, (err)=>{
        if(err){
            console.log(err);
            res.status(500).send("DataInsertFail");
        }else{
            console.log("Data Inserted Successfully!");
            res.status(200).send('DataInsertSuccess');
        }
    })
})
app.listen(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`);
})
