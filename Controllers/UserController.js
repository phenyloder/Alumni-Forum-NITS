const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const userData = require('../models/userSchema');

const RegisterUser = expressAsyncHandler(async (req, res) => {
    const { email, username, password, rights } = req.body;

    if (!email || !username || !password ) {
        res.status(400);
        throw new Error("Please Enter all the Feilds ");
    }

    const userExists = await userData.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await userData.create({
        email, username, password, rights
    });

    if (user) {
        res.status(201).json({
            email: user.email,
            username: user.username,
            password: user.password,
            rights: user.rights,
        });
    }
    else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }
});

module.exports = { RegisterUser };