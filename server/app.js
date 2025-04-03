const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/api/v1/user', (req, res) => {
    res.json({
        name: 'Hutto',
        age: 20,
        address: 'Jakarta'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})