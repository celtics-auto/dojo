const express = require("express");
const {buyOffers} = require("./buy")
const {sellOffers} = require("./sell")
const router = express.Router();

const get = (req, res) => {
    res.status(200).send({buyOffers, sellOffers})
}

router.get('/', get)

module.exports = router;