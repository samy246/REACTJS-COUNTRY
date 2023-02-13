import React, { useContext } from "react";
import { Context } from "../Context";

// The two filters in which resides the target value
function SearchFilterCountry() {
    const { query, setQuery, setFilterData } = useContext(Context);

    return (
    
        <form className= "form"
              onSubmit={(e) => e.preventDefault()}
        >
            <div className="search-icon-position">

            <i className="fa fa-search icon"></i>

              <label htmlFor="search" className="hide">Search for a country</label>
                <input type="search"
                       id="search"
                       name=  "search-form"
                       className=  "search-field"
                       placeholder="Search for a country..." 
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            
            <select className= "select"
                    aria-label="filter by region"
                    onChange={e => setFilterData(e.target.value)}
            >

                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
       </form>
    );
};

export default SearchFilterCountry;