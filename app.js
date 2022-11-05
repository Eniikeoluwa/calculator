const request = require('postman-request')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// for heroku deployment
const port = process.env.PORT || 3000

//define path and express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './template/views')
const partialsPath = path.join(__dirname, './template/partials')

//setting up handle bars
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Calculator'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found'
    })
})

// app.listen(3000, () => {
//     console.log('Listening port 3000')
// })

app.listen(port, () => {
    console.log('Server is on port '+ port)
})