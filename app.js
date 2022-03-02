const express = require('express')
const app = express()
let {people} = require('./data')

//static assests


app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())


app.get('/api/people',(req,res)=>{
    res.status(200).json({succes:true,data:people})
})

app.post('/api/people',(req,res)=>{

    res.status(201).send('Succes')
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('please provide credentials')
})



app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
