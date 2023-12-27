const express = require('express')
const app = express()
const todos = require('./routes/todo')
require('./db/connect')

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1/todo', todos)


app.listen(4000, (req, res) => {
    console.log('server initialized on port 4000')
})