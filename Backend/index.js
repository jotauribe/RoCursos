const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(cors());
const url =
  "https://mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=";

app.get("/", async function(req, res) {
  try {
    const respuesta = await axios.get(url);
    res.status(200).send(respuesta.data.items);
  } catch (e) {
    console.log(e);
  }
});

app.listen(8282);
