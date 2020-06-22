const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// build an express application
const app = express()  // will build an express server
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})
app.listen(process.env.PORT || 8081)