const express = require('express');

const app= express();


app.get("/", (req, res) => {
    res.send("Ugh buck buck bitch");
})

app.get("/about", (req, res) => {
    res.send("Ugh buck buck bitch whatcha about");
})

app.get("/contact", (req, res) => {
    res.send("Talk to me buck buck bitch");
})

app.get("/signin", (req, res) => {
    res.send("signin u lil shit ");
})

app.get("/signup", (req, res) => {
    res.send("sign up boo ");
})


app.listen(9000, () => {
    console.log("Server running on port 8000")
})


console.log("work u whore");