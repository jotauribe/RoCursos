const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
require('dotenv').config();

app.use(cors());

const url = process.env.URL_API
  

app.get("/", async function(req, res) {
  try {
    const respuesta = await axios.get(url);
    res.status(200).send(respuesta.data.items);
  } catch (e) {
    console.log(e);
  }
});

app.listen(8282);
