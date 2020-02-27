import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import Curso from "./components/Curso";
import Texto from "./components/InputText";
import "./components/Curso/style.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async  () => {
      const { data: respuesta } = await axios.get("http://localhost:8282/");
      setData(respuesta);
    }
    getData();
  });

  return (
    <div className="contenedorTextClase">
      <div>
        <Texto></Texto>
      </div>

      <div className="divClase">
        {data.map((curso, i) => (
          <Curso curso={curso} key={i}></Curso>
        ))}
      </div>
    </div>
  );
}

export default App;
