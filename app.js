let countries = require('./countries.json');
const cors = require('cors')

const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/suggest', (req, res) => {
    // console.log(req.query['continent'])
    let suggested_countries=countries.filter(function(item){
        return item['continent'] === req.query['continent'];
    })
    let country_picked_position=Math.floor(Math.random()*suggested_countries.length)
    let country_picked=suggested_countries[country_picked_position]
    return res.send(country_picked)
})

app.listen(port, () => {
    console.log(`Vacation Suggestions App is listening on port ${port}`)
})