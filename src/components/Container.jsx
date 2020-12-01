import React, { useEffect, useState } from 'react'
import SerchToFlag from './SearchToFlag';

const url="https://restcountries.eu/rest/v2/all";

const Container = () => {

    const [Flags, setFlags] = useState([]);

    useEffect(() => {
        getApi();
    }, [])

    //Hago consumo de mi API y la envio como parametros a mi componente SearchToFlag para ser utilizada allí
    const getApi= async ()=>{

        let data = await fetch(url);
        let respuesta = await data.json();
        setFlags(respuesta);
        
    }

    return (
        <div>
            <div>
                <SerchToFlag
                    ParamFlags={Flags}
                />
            </div>
        </div>
    )
}

export default Container;
