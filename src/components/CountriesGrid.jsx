import Country from "./Country"
import { BrowserRouter as Link } from 'react-router-dom';
import CountryInfo from "./CountryInfo";
import { useState } from "react";

const CountriesGrid = ({showDetails, darkMode, countries}) =>{
    return(
            <div className={`${darkMode && 'dark-grid'} countries-grid`}>
            {countries.map(country => {
                return(
                    <Country showDetails={showDetails} darkMode={darkMode} key={country.cca3} country={country} />
                )
            })}
            </div>
    )
}
export default CountriesGrid
//<Country darkMode={darkMode} key={country.cca3} country={country} />