// create an express app
const express = require("express")
const app = express()
const path = require('path')

// use the express-static middleware
app.use(
  express.urlencoded({
      extended: true,
  })
);
app.use(express.static(__dirname + '/public'))

// define the first route
app.get("/", function (req, res) {
  res.sendFile('index.html');
})

app.get("/test", function (req, res) {
  res.sendFile(__dirname + '/public/sizeTest.html');
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running in port 3000..."));