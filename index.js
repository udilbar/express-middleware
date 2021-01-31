const express = require('express')

const app = express()

const middleware = (req, res, next) => {
  // console.log('a', req.url, req.path, req.pathname)

  console.log('middleware...')

  // if (req.url !== '/login') {
  //   console.log(req.url)
  // } else {
  //   res.end()
  // }

  console.log(req.headers)

  if (req.headers.token === '123') {
    next()
  } else {
    res.status(403).end()
  }
}

app.use(middleware)

app.get('/books', (_, res) => res.send([1, 2, 3]))
app.get('/users', (_, res) => res.send(['a', 'b', 'c']))

app.listen(4002, () => console.log(4002))