const express = require("express");

const router = express.Router();

const sellOffers = [109, 110, 110, 114, 115, 119];

const post = (req, res) => {
    const value = req.body.value;

    if (!Number.isInteger(value)) {
        return res.status(400).send("value precisa ser um número");
    }   

    sellOffers.push(value);

    console.log(sellOffers);

    res.status(200).send("ok");
}

const get = (req, res) => {    
    res.status(200).send(sellOffers);
}

router.post('/', post);
router.get('/', get)

module.exports = {
    sellRouter: router,
    sellOffers
}