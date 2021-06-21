import express from "express"

const app = express()

app.get('/', (req, res) => {
  return res.send('olá')
})

app.post('/post', (req, res) => res.send('teste'))

app.listen(3000, () => console.log('server is runnig'))