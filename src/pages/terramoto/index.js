import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Terramoto = ({ match }) => {

    const id = match.params.id;
    console.log(id);


    const [terramotos, setData] = useState([]);


    useEffect( () => {
        const fetchData = async () => {
            const data = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=${id}&format=geojson`);
            const response = await data.json();
            setData(response);
            console.log(response.properties);
        }
        fetchData();
    },[])



      
    return(
        <main id = "terramoto">
        <article className="terramoto detalhe">
            <div className="info">

                <h2>Epicentro</h2>
                <p>{terramotos.properties ? terramotos.properties.place : null}</p>

                <h2>Tipo</h2>
                <p>{terramotos.properties ? terramotos.properties.type : null}</p>
               
                <h2>Magnitude</h2>
                <p>{terramotos.properties ? terramotos.properties.mag : null}</p>

                <h2>Tempo</h2>
                <p>{terramotos.properties ? terramotos.properties.time : null}</p>
                
                <h2>Tsunami</h2>
                <p>{terramotos.properties ? terramotos.properties.tsunami : null}</p>
            </div>
    
        </article>

        <Link to = "/">
        <div className="btn-home">
            Todos os terramotos
        </div>
        </Link>
        
        </main>
    )

}
    export default Terramoto;