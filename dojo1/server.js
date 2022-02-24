const express = require("express");
const {buyRouter} = require("./router/buy");
const {sellRouter} = require("./router/sell");
const offers = require("./router/offers");

const app = express();

const port = 3000;

app.use(express.json());
app.use("/buy", buyRouter);
app.use("/sell", sellRouter);
app.use("/offers", offers);

app.listen(port, () => {
    console.log("Consegui!");
})
