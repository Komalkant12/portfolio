const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const {connectDB} = require("./connection");
const routes = require("./routes/routes")
require("dotenv").config();

//connect to db
connectDB();

//midddle ware
app.use(cors());
app.use(express.json())

//routes
app.use("/api",routes);

app.listen(port, () => console.log ('server is running on port ${port}'));
