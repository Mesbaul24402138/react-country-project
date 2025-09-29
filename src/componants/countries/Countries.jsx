import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({fetchData}) => {


let [visitcountry,setvisitcountry]=useState([])






let handlevisitcountry=(country)=>{
  
    

  let countryinformation=[...visitcountry,country]
  setvisitcountry(countryinformation)
    
}

    let countriinfo=use(fetchData)
    let countries=countriinfo.countries
 
     

    return (
        <div >
            <h1>Welcome to Countries</h1>
            <h3>total visited country:{visitcountry.length}</h3>
            <ol>
                <li>
                    {
                        visitcountry.map(info=><li>{info.name.common}</li>)
                    }
                </li>
            </ol>
            
            
         
            <div className='countries'>
                     {
                        countries.map((country,index)=><Country key={index} handlevisitcountry={handlevisitcountry}  country={country}></Country>)
                     }
            </div>
            
           
        </div>
    );
};

export default Countries;