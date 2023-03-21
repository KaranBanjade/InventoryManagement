
const { Router } = require("express")
const express = require("express")

const cors = require("cors")
//Add port in an env file
const port = process.env.PORT || 5002

require("../src/db/conn")

const app = express()
app.use(express.json())
app.use(cors());
app.use("/",(req,res)=>{res.send("yo")})
require("./routers")(app);

app.listen(port, () => console.log('connection setup at 5000'));
