import React, { useState, useEffect } from "react";
import "./App.css";
import { Card, SearchBar } from "./Components";
import clienteAxios from "./config/axios";
import shortid from "shortid";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const consultaApi = async () => {
    const respuesta = await clienteAxios.get(`/name/${search}`);
    console.log(respuesta);
    setCountries(respuesta.data);
  };
  useEffect(() => {
    if (search.trim() === "") {
      setCountries([]);
    }
    if (search.length > 2) {
      consultaApi();
    }
  }, [search]);

  return (
    <div className="App">
      <div className="container-app">
        <h1 className="title">Paises del mundo</h1>
        <div className="container-searchbar">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="container-card">
          {countries.map((country) => (
            <Card key={shortid.generate()} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
