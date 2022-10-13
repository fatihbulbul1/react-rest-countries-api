import { useEffect, useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
const CountryInfo = ({darkMode, country}) => {
    const [borders, setBorders] = useState([])
    const navigate = useNavigate()
    const back = () => {
        navigate('/')
    }
    useEffect(
        ()=>{
            if(country.borders) setBorders(country.borders)
        }
    )
    return (
        <div className={`${darkMode ? 'dark-info' : ''} country-full-info`}>
            <button className='back-btn' onClick={back}>Back</button>
                <div className="country-full-info-container">
                    <div className="country-full-info-img">
                        <img src={country.flags.svg} alt="" />
                    </div>
                    <div className="country-full-info-details">
                        <div className="wrapper-info">
                            <h2>{country.name.common}</h2>
                            <div className="country-full-info-details-container">
                                <div className="cfid country-full-info-details-left">
                                    <p><span className="bold">Native Name: </span>{country.name.nativeName.common}</p>
                                    <p><span className="bold">Population: </span>{country.population}</p>
                                    <p><span className="bold">Region: </span>{country.region}</p>
                                    <p><span className="bold">Sub Region: </span>{country.subregion}</p>
                                    <p><span className="bold">Capital: </span>{country.capital}</p>
                                </div>
                                <div className="cfid country-full-info-details-right">
                                    <p><span className="bold">Top Level Domain: </span>{country.tld}</p>
                                    <p><span className="bold">Currencies: </span>{
                                        Object.values(country.currencies).map((currency, index) => {
                                            return(
                                                <span key={index}>{currency.name}{index == Object.values(country.currencies).length - 1 ? ' ' : ', '} </span>
                                            )
                                        })
                                    }</p>
                                    <p><span className="bold">Languages: </span>{
                                    Object.values(country.languages).map((language, index) => {
                                        return(
                                            <span key={index}>{language}{index == Object.values(country.languages).length - 1 ? ' ' : ', '} </span>
                                        )
                                    })
                                    }</p>
                                </div>
                            </div>
                            <div className="country-full-info-borders">
                                <p><span className="bold">Border Countries: {
                                    borders.join(', ')
                                }</span></p>
                            </div>
                    </div>
                    </div>
                </div>
        </div>
    );
}
export default CountryInfo