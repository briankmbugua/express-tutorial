const express = require('express')
const app = express()
const {products} = require('./data')
app.get('/', (req, res) => {
  res.send('<h1>HomePage</h1><a href="/api/products">products</a>')
})
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const{productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct) 
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const{search,limit} = req.query;
    let sortedProducts = [...products];
    if(search) {
        sortedProducts = sortedProducts.filter((product)=>{
            
        })
    }
    res.send('hello worldd')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})