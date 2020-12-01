import React, { useState } from "react";
import "../css/SearchToFlag.css";
import { Link } from "react-router-dom";

//A traves de destructurin recibo mi estado donde posee mis datos de la API
const SearchToFlag = ({ ParamFlags }) => {

  const [Load, setLoad] = useState("true"); //Hooks para cargar mi render de API
  const [filter, setFilter] = useState(""); //Hooks para guardar el dato y buscar el nombre de mi País

const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="Container">
      <div className="container_search">
        <input
                id="filtro"
                className="button-search"
                type="text"
                placeholder="Busca tu bandera => Nota: primera letra en Mayuscula"
                onChange={handleSearchChange}
              />
      </div>
      <div className="container_div_flags">
      {Load ? (
        <p>Loading...</p>
      ) : (

        ParamFlags.map((data, i) => data.name.includes(filter) && 
          
            <div key={i} className="container_Flags">
              <div>
                <img
                  className="img_flag"
                  src={data.flag}
                  alt={data.name}
                  
                />
              </div>
              <div><b>Nombre:</b> {data.name}</div>
              <div><b>Capital:</b> {data.capital}</div>
              <div>
               <b> Moneda:</b>
                {data.currencies?.map((dat, y) => {
                  return (
                    <ul key={y}>
                      <li>{dat.code}</li>
                      <li>{dat.name}</li>
                      <li>{dat.symbol}</li>
                    </ul>
                  );
                })}
              </div>
              <Link to={`/${data.name}`}>
                <button className="button_mas">Leer Mas</button>
              </Link>

            </div>
          
        )
      )}
      </div>
    </div>
  );
};

export default SearchToFlag;
