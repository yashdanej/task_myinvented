require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const productRouter = require("./routes/productRoutes");

app.use('/', productRouter);

app.listen(process.env.PORT, () => {
    console.log("Server Started");
})