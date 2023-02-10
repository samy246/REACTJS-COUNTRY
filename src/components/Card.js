import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Card({country}) {
  // const  { darkMode } = useContext(Context);

    return(
      
        <div className="country-card">

            <div className="country-preview">
                <Link to={`/singlecountry/${country.name}`}
                      aria-label="click on the flag country to get acces to more info"
                >
                    <img src={country.flag} 
                         alt= {`${country.name} flag`} 
                         className="image"
                    /> 
                </Link>
            </div>

            <div className= "country-info">

                <div className="country-detail">

                <div className="country-title">
                  <h2>{country.name}</h2>
                </div>

                <p>Population: <span>{country.population.toLocaleString('en-US')}</span></p>
                <p>Region: <span>{country.region !== undefined ?  country.region : "This country has no region"}</span></p>
                <p>Capital: <span>{country.capital !== undefined ?  country.capital : "This country has no capital"}</span></p>
              </div>
            </div>
        </div>
       
    );
};

export default Card;