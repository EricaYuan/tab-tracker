const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// build an express application
const app = express()  // will build an express server
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.post('/register', (req, res) => {
    res.send({
        message: `hello ${req.body.email} world`
    })
})
app.listen(process.env.PORT || 8081)