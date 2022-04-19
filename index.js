const http = require('http')
const fs = require('fs')
const url = require('url')
const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  console.log('request made')
  const pathname = url.parse(req.url).pathname
  console.log(pathname)
  if (pathname == 'favicon.ico') {
    return null
  }
  if (pathname == '/') {
    const data = fs.readFileSync('./index.html', 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.end(data)  
    
  } else if (pathname == '/about') {
    const data = fs.readFileSync('./about.html', 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  } else if (pathname == '/contact') {
    const data = fs.readFileSync('./contact-me.html', 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  } else {
      const data = fs.readFileSync('./404.html', 'utf8')
      res.setHeader('Content-Type', 'text/html')
      res.end(data)  
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})