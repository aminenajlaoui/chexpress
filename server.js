const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080
const date = new Date();
const day = date.getDay()
const hour = date.getHours()

const Middleware = (req, res, next) => {
    if ((day > 0 && day < 6) && (hour > 8 && hour < 17)) {
        return next();
    } else {
        return res.send('We apologize, we are available only from Monday to Friday and from 09h to 17h');
    }

}



app.get('/', (req, res) => {

    res.sendFile(__dirname + '/static/home.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/static/contact.html')
})
app.use(Middleware);
app.get('/service', (req, res) => {
    res.sendFile(__dirname + '/static/service.html')
})


// app.use(express.static(__dirname + '/static'))
app.listen(PORT, (err) => err ? console.log(error) : console.log('server is running on port', PORT))