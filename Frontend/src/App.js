import React, { useState, useEffect } from "react";
import axios from "axios";

import Curso from "./components/Curso";
import TextInput from "./components/TextInput";
import Load from "./components/Load/Load";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data: respuesta } = await axios.get("http://localhost:8282/");
      setData(respuesta);
    };
    getData();
    setLoading(false);
  }, []);

  if (loading === true) {
    return <Load></Load>;
  } else {
    return (
      <div className="contenedorTextClase">
        <div>
          <TextInput></TextInput>
        </div>

        <div className="divClase">
          {data.map((curso, i) => (
            <Curso curso={curso} key={i}></Curso>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
