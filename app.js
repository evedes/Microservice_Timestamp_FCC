//Requirements
const express = require('express')
const app = express()
const path = require('path')

//Server Listening Port definition
const port = process.env.PORT || 8080


app.use('/', express.static(path.join(__dirname,'./public/')))



//Server Listening
app.listen(port, ()=>{
    console.log('Server listening on PORT: ' + port)
})