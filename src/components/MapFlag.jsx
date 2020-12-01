import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/MapFlag.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//Por medio de react-router recibo como parametro el nombre (name) de mi pais para plasmar mas informacion 
// y poder obtener el dato de mi latitud y longitud del pais, para ser render en el mapa

const MapFlag = (props) => {
  const { match } = props;
  const { params } = match;
  const { name } = params;

  const [Banderas, setBanderas] = useState([]);
  // const [Pos, setPos] = useState([])
  // const [Latitudes, setLatitudes] = useState([])

  useEffect(() => {
    const obtenerBanderas = async () => {
      let respuesta = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
      let banderas = await respuesta.json();
      let obj = banderas[0];
      setBanderas(obj);
      
      // let lat= parseInt(obj.latlng[0]);
      // let lng= parseInt(obj.latlng[1]);
      // const position=[lat,lng]
      // setPos(position);

      
      
    };
    obtenerBanderas()

   
    
  }, [name]);

 
  // Problemas para obtener la Lat y Lng del pais

  // if(Banderas.latlng!=="") {
  //   var position =[Banderas.latlng[0],Banderas.latlng[1]]
  // }else{
  //   var position=null
  // }
  
  console.log(Banderas && Banderas.length>0?[Banderas.latlng[0],Banderas.latlng[1]]:[40.71427,-74.00597])
  console.log(Banderas.latlng)
  
  return (
    <div className="container_general">
      <div className="container_about">
        <div className="container_flag_name">
          <h1>
            <b>{Banderas.name}</b>
          </h1>
        </div>
        <div className="container_content">
          <div className="container_img_flag">
            <img className="img_flag" src={Banderas.flag} alt={Banderas.name} />
          </div>
          <div className="container_info_flag">
            <div>
              <b>Region: </b> {Banderas.region}
            </div>
            <div>
              <b>Capital: </b> {Banderas.capital}
            </div>
            <div>
              <b>Poblacion: </b>
              {Banderas.population} Habitantes
            </div>
            <div>
              <b>Pos Geografica:</b>
              <ul>
                {Banderas.latlng?.map((element, i) => {
                  return <li key={i}>{element}</li>;
                })}
              </ul>
            </div>
          
          </div>
        </div>
        <div className="container_button_back">
          <Link to={`/`}>
            <button className="button-back">BACK</button>
          </Link>
        </div>

        
      </div>

      <div className="container_map">
                <div className="container_title_country">
                        <h2>ubicación geografica</h2> 
                </div>
                <MapContainer
                    className="map"
                    center={Banderas && Banderas.length>0?[Banderas.latlng[0],Banderas.latlng[1]]:[40.71427,-74.00597]}
                    zoom={4}
                    scrollWheelZoom={false}
                    
                >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                </MapContainer>      
            </div>       

                
      
    </div>
  );
};

export default MapFlag;
