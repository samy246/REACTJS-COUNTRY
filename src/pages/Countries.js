import React, { useContext, useState } from "react";
import { Context } from "../Context";

import Card from "../components/Card";
import SearchFilterCountry from "../components/SearchFilterCountry";

function Countries() {
    const { allCountries,
            query, 
            filterData,
            darkMode 
          } = useContext(Context);

    const searchField = ["name"];
    
    const [visibleCards, setVisibleCards] = useState(59);

    
    
    const showMoreCountries = () => {
        setVisibleCards (prevVisibleCards => prevVisibleCards + 57);
    };

    const handleScroll = () => {
        window.scrollTo({behavior: 'smooth', top: 0 });
    };

    const countries = allCountries.filter((item) => {
      if (filterData === "All" || item.region === filterData) {
         return searchField.some((newItem) => {
            return (item[newItem].toString().toLowerCase().indexOf(query)) > -1;
         });
     }
     return false
   }).slice(0, visibleCards).map((country) => (
    <Card key={country.alpha2Code} country= {country} />
 ));


    return (
        <>
        <main className="main-content">
             <SearchFilterCountry />
             <section className="cards-container">
                {countries}
            </section>
            
            <div className="place-loadmore-btn">
            
                <button className= {`
                                    ${countries.length !== allCountries.length  ? "loadmore-btn" : "hide"}
                                    ${darkMode ? "loadmore-btn-dark" : "loadmore-btn"}
                                    `}
                    onClick={showMoreCountries}
                >
                Load More
               </button> 
           </div>
        </main>

        <div onClick={handleScroll}
             className="top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
            <footer>
              <span  className="screen-reader-text">Back to top</span>
            </footer>
        </div>
     </>
    );
};

export default Countries;