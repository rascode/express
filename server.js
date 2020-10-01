const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World from Express 5')
})

app.listen(300, () => console.log('Express 5 Server now listening on Port 3000'))