// import dependencies
const express = require("express")


// create express App object
const app = express()


// Routes
app.get('/', (req, res) => {
    res.json({ response: "hello world" })
})


// turn server on
app.listen(3005, () => {
    console.log(`Listening on port 3005`)
})