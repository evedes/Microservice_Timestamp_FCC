//Requirements
const express = require('express')
const moment = require('moment')
const app = express()
const path = require('path')

const port = process.env.PORT || 8080



app.use('/', express.static(path.join(__dirname,'./public/')))

app.get('/time/:timeInput', (req,res)=>{

        let timeInput = req.params.timeInput 
        let regex1 =/^\d+$/g

        if(regex1.test(timeInput)) { 
            let timeInputNatural = moment.unix(timeInput).format("MMMM D, YYYY")
            res.send({"unix-time": timeInput, "natural-time": timeInputNatural})
        }
        else {
           
           if(moment(timeInput).isValid()){
            res.json({"unix-time": moment(timeInput).format("X"), "natural-time": moment(timeInput).format("MMMM D, YYYY")})
           }
           else {
            res.send({"unix-time": 'null', "natural-time": 'null'})
           }
        
        }       
})


app.listen(port, ()=>{
    console.log('Server listening on PORT: ' + port)
})






