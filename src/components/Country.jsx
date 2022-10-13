const Country = ({showDetails, darkMode, country}) => {
    return(
        <div onClick={() => showDetails(country.name.common)} className={`${darkMode && 'dark-country'} country`}>
            <div className="img-container">
                <img className="flag" src={country.flags.svg} alt="" />
            </div>
            <div className="country-info">
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-population"><span className="bold"> Population: </span> {country.population}</p>
                <p className="country-region"><span className="bold"> Region: </span> {country.region}</p>
                <p className="country-capital"><span className="bold"> Capital: </span> {country.capital}</p>
            </div>
        </div>
    )
}
export default Country