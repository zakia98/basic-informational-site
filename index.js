const http = require('http')
const fs = require('fs')
const url = require('url')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const router = express.Router()


router.get('/', function(req, res) {
  console.log('hi')
  const data = fs.readFileSync('./index.html', 'utf8')
  res.send(data)
})

router.get('/about', function(req, res) {
  const data = fs.readFileSync('./about.html', 'utf8')
  res.send(data)
})

router.get('/contact', function(req, res) {
  const data = fs.readFileSync('./contact-me.html', 'utf8')
  res.send(data)
})

router.get('*', function(req, res) {
  const data = fs.readFileSync('./404.html', 'utf8')
  res.send(data)
})

app.use(router)
app.listen(port)