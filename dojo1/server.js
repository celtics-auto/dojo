const express = require("express");

const app = express()
const port = 3000;

const buyOffers = []
const sellOffers = []

app.use(express.json())

app.route('/buy')
    .get((req, res) => {
        res.send('BUY')
    })
    .post((req, res) => {
        const value = req.body.value

        if (!Number.isInteger(value)) {
            return res.status(400).send("value precisa ser um número")
        }
        
        buyOffers.push(value)

        console.log(buyOffers)
        res.status(200).send("ok") 
    })
    
app.route('/sell') 
    .get((req, res) => {
        res.send('SELL')
    })
    .post((req, res) => {
        const value = req.body.value

        if (!Number.isInteger(value)) {
            return res.status(400).send("value precisa ser um número")
        }   
        sellOffers.push(value)

        console.log(sellOffers)
        res.status(200).send("ok")
    })

app.listen(port, () => {
    console.log("Consegui!")
})
