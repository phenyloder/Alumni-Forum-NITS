const express = require("express");
const bodyParser = require("body-parser");
const batchData = require("./public/database");
const validateUser = require("./validateUser");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
app.post('/login', (req,res)=>{
    const loginDetails = req.body;
    const loginUsername = loginDetails.loginUsername;
    const loginPassword = loginDetails.loginPassword;

    const isValidUser = validateUser(loginUsername, loginPassword);

    if(isValidUser.isValid===true){
        res.redirect("/dashboard");
    }
})
app.get("/dashboard", (req, res)=>{
    res.render("dashboard");
})

app.listen(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`);
})
