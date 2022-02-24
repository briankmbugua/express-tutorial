const express = require('express')
const app = express()
const logger = require('./logger')
// req => middleware => res seats in bewtween
// app.use(logger)//this will apply to all routes
app.use('/api',logger)//this will apply to routes beginning
//with api

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
