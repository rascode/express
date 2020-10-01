require('dotenv').config()
const express = require('express')

//Create Express App
const app = express()

//Define route for homepage
app.get('/', (req, res)=> {
    res.send('Hello World from Express 5')
})

//Start Express Server
app.listen(process.env.PORT, () => console.log('Express 5 Server now listening on Port ' + process.env.PORT))