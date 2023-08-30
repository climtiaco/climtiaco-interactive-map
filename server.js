const express = require('express')
const app = express()
const port = 6771;


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Im alive on ${port}`)
})