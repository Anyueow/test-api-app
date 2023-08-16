const express = require("express");
const router = express.Router()
const uuid = require("uuid")

let users = require("../../Users")

// geting all users
router.get('/', (req, res)=>
{
    res.json(users);
});


router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if(newUser.name || newUser.email) {
        return res.sendStatus(400)
    }
    users.push(newUser)
    res.json(users)
})

module.exports = router