const express = require("express");

const router = express.Router();

const buyOffers = [100, 100, 99, 99, 97, 90];

const post = (req, res) => {
    const value = req.body.value;

    if (!Number.isInteger(value)) {
        return res.status(400).send("value precisa ser um número");
    }
    
    buyOffers.push(value);

    console.log(buyOffers);
    res.status(200).send("ok");
}

const get = (req, res) => {    
    res.status(200).send(buyOffers);
}

router.post('/', post);
router.get('/', get)

module.exports = {
    buyRouter: router,
    buyOffers
};