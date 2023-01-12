const express = require('express')
const fetch = require('node-fetch')
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.API_KEY)


const app = express();
const port = 3000;





app.listen(port, ()=> {
    console.log(`Listening on port http://localhost:${port}`)
})