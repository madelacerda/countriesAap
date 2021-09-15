import React, { useState } from "react";
import "./styles.css";

export default function Card({ country }) {
  const { capital, nativeName, flag, region, borders, languages, currencies } =
    country;

  const _borders = borders.map((border) => border).toString();
  const _currencies = currencies
    .map((currency) => currency.symbol + " " + currency.name)
    .toString();

  const _languages = languages.map((language) => language.name).toString();

  return (
    <div className="card">
      <div className="container-flag">
        <img className="img-flag" src={flag} />
      </div>
      <div className="column-left">
        <div className="container-item">
          <p>Nombre pais</p>
          <p>{nativeName}</p>
        </div>
        <div className="container-item">
          <p>Region</p>
          <p>{region}</p>
        </div>
        <div className="container-item">
          <p>Capital</p>
          <p>{capital}</p>
        </div>
      </div>
      <div className="column-right">
        <div className="container-item large">
          <p>Bordes</p>
          <p>{_borders}</p>
        </div>
        <div className="container-item large">
          <p>Moneda</p>
          <p>{_currencies}</p>
        </div>
        <div className="container-item large">
          <p>Lengua</p>
          <p>{_languages}</p>
        </div>
      </div>
    </div>
  );
}
