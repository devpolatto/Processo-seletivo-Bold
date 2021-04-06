const { json } = require('express');
const express = require('express');

const app = express()

let port = process.env.PORT || 3000;

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(port, () => {
    console.log("server running on port " + port)
})