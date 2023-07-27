const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


app.get('/js',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/main.js'))
})

app.get('/css',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/styles.css'))
})
app.listen(5000, () => console.log(`server running on 5000`))

