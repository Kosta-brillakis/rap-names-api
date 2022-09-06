const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthname': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(rappers)
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]) {
        return res.json(rappers[rapperName])//either need return here or to put res.json below in else statement
    }
    res.json({error: 'name unknown'})
    // res.json(rappers['unknown'])
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}. Better go catch it!`)
})