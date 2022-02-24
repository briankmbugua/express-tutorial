const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res seats in bewtween
app.use([logger,authorize]) //this is how you execute multiple
//middleware functions,order also matters here

app.get('/',(req,res)=>{
res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
