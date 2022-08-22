// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send('index.html')
})

// start the server listening for requests
app.listen(process.env.PORT || 9015, 
	() => console.log("Server is running..."));