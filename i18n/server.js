const express = require('express')
const path = require('path')
const port = process.env.PORT || 7777
const app = express()
var bodyParser = require('body-parser');
 
var router = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
})
);
app.use(bodyParser.json());
app.use(express.static('app'));
// app.use(express.static('locale'));
 

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'app', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
