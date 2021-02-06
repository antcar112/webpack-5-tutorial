const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const PORT = 5000

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html')
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8')
  res.send(contentFromHtmlFile)
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
