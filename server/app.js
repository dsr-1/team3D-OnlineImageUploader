const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router")
const port = 8004;

require("dotenv").config();


app.use(express.json());
app.use(cors());
app.use(router);
app.use("/uploads",express.static("./uploads"))

app.listen(port,()=>{
    console.log("server start ")
})