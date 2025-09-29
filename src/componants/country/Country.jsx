import React, { useState } from 'react';
import './country.css'

const Country = ({country,handlevisitcountry}) => {
   

    let [visited,setvisited]=useState(false)
    let handlevisit=()=>{


        if(visited){
            setvisited(false)
        }
        else{
            setvisited(true)
        }

handlevisitcountry(country)

    }

    return (
        <div className={`'country' ${visited&&'country-bg'}`} >
            
            <img src={country.flags.flags.png}></img>
             <h5>Name:{country.name.common}</h5>
             <p>Populations:{country.population.population}</p>
             <button onClick={handlevisit}>{visited?"Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;