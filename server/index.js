const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! from Social Media App')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})