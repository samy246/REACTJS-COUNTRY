import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context";

// Get the single country and take advantage of useParams so that
// the variable name can be used to render each country.
// Destructure the country object and pass data in render.
function SingleCountry() {
  const { allCountries,darkMode} = useContext(Context);
  const { name } = useParams();

  const country = allCountries.find((country) => country.name === name);
  console.log("country",country);
  
  const {
    alpha2Code,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders = []
  } = country;



  
  const borderCountries = borders.map(border => {
      const nation = allCountries.find (
        (country) => country.alpha3Code === border
        )
      return {
        name: nation.name
      }
    })

  return (
    <main className="main-content">
      <div className="back-btn-container">
        <Link to="/">
          <button className= {darkMode ? "back-btn-dark" : "back-btn"}>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            Back
          </button>
        </Link>
      </div> 
          <div className="detail-container" key={alpha2Code}>
            <div className="detail-page-img-position">
              <img src={flag} alt={`${country.name} flag`} className="detail-country-img" />
            </div>

            <article className="detail-info-position">
              <h2>Country:{name}</h2>
              <p>Native name: <span>{nativeName}</span></p>
              <p>Population: <span>{population.toLocaleString('en-US')}</span></p>
              <p>Region: <span>{
              // region
              country['region'] !== undefined ? region : "This country has no region"
              }</span></p>
              <p>Subregion: <span>{subregion}</span></p>
              <p>Capital: <span>{
              country['capital'] !== undefined ? capital : "This country has no capital"
              
              }</span></p>
            </article>

            <div className="extra-detail-position">
              <p>Top Level Domain: <span>{topLevelDomain}</span></p>
              {/* antartica error currencies */}
              <p>Currencies: <span>{
                
              country['currencies'] !== undefined ? currencies.map((cur) => cur.name).join(", "):"This Country Has No Currencies"
              }</span></p>
               {/* antartica error currencies */}
              <p>Languages: <span>{languages.map((lan) => lan.name).join(", ")}</span></p>
            </div>
          
    
          <div className="border-countries-position">
            <p>Border Countries: </p>
            {borderCountries.length > 0 ? 
            borderCountries.map((country, index) => {
                      return (
                        <Link
                          to={`/singlecountry/${country.name}`}
                          key={index} 
                        >
                          <button
                             className= {darkMode ? "border-dark" : "border"}>
                            {country.name}
                          </button>
                        </Link>
                      )
                    }) :
                    <p> This nation has no border countries</p>
                 }
        </div>
      </div>
    </main>
  );
}

export default SingleCountry;