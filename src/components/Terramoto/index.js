import React from 'react';
import './style.css';

const Terramoto = (props) => {

    
    return(
        <article className="terramoto">
            <div className="info">

                <h2>Epicentro</h2>
                <p>{props.name}</p>
                <br>
                </br>

                <h2>Magnitude</h2>
                <p>{props.mag}</p>
            </div>

           
        </article>
    )
}

export default Terramoto;