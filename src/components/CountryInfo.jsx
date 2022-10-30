import { useEffect, useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
const CountryInfo = ({darkMode, country}) => {
    const [borders, setBorders] = useState([])
    const [nativeName, setNativeName] = useState('')
    const navigate = useNavigate()
    const back = () => {
        navigate('/')
    }
    useEffect(
        ()=>{
            if(country.borders) setBorders(country.borders)
            if(country.name.nativeName) setNativeName(Object.values(country.name.nativeName)[0].official)
            console.log(country);
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
                                    <p><span className="bold">Native Name: </span>{nativeName ? nativeName : ''}</p>
                                    <p><span className="bold">Population: </span>{country.population ? country.population : ''}</p>
                                    <p><span className="bold">Region: </span>{country.region ? country.region : ''}</p>
                                    <p><span className="bold">Sub Region: </span>{country.subregion ? country.subregion : ''}</p>
                                    <p><span className="bold">Capital: </span>{country.capital ? country.capital : ''}</p>
                                </div>
                                <div className="cfid country-full-info-details-right">
                                    <p><span className="bold">Top Level Domain: </span>{country.tld ? country.tld : ''}</p>
                                    <p><span className="bold">Currencies: </span>{
                                        country.currencies ?
                                        Object.values(country.currencies).map((currency, index) => {
                                            return(
                                                <span key={index}>{currency.name}{index == Object.values(country.currencies).length - 1 ? ' ' : ', '} </span>
                                            )
                                        })
                                        :
                                        ''
                                    }</p>
                                    <p><span className="bold">Languages: </span>{
                                        country.languages ?
                                    Object.values(country.languages).map((language, index) => {
                                        return(
                                            <span key={index}>{language}{index == Object.values(country.languages).length - 1 ? ' ' : ', '} </span>
                                        )
                                    })
                                    :
                                    ''
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