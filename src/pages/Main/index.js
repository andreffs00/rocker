import React, {useState, useEffect} from 'react';
import Terramoto from '../../components/Terramoto';
import { Link } from 'react-router-dom';
import './style.css';

const Main = () => {

    const [terramotos, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch ('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-05-11&endtime=2020-05-12')
            const response = await data.json();
            console.log(response.features);
            const features = await response.features;
           setData(features);
           
        }
        fetchData();
    
    }, []);
        



    return(
        <main>
            {terramotos.map((terramoto, index) => (
                <Link key={index} to = {`terramotos/${terramoto.id}`}>
                <Terramoto name={terramoto.properties["place"]} mag={terramoto.properties["mag"]} />
                </Link>
            ))}
        </main>
    )
}

export default Main;