const express = require('express')
const dotenv = require('dotenv')
const fetch = require('./utils/fetch')

dotenv.config()
console.log(process.env.API_KEY)

const app = express();
const port = 3000;

app.use(express.json()) //Habilitamos datos a recibir 

app.get('/api/film/:title?', async (req, res) => {
    let peli = await fetch(req.params.title, process.env.API_KEY)
    res.status(200).json(peli)
})


app.post('/api/film/', (req, res) => {
    res.status(201).json({ message: `Se ha guardado ${req.body.Title}` })
})

app.put("/api/film/", (req, res) => {
    res.status(200).json({ id: req.body.imdbID, message: `Se ha actualizado ${req.body.Title}` })
})

app.delete("/api/film/", (req, res) => {
    res.status(200).json({ id: req.body.imdbID, message: `Se ha borrado ${req.body.Title}` })
})

// 404
app.use(function (req, res, next) {
    return res.status(404).send({ message: 'Route ' + req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
});


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})