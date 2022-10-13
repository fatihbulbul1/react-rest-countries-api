import { useEffect, useState } from "react"
import CountriesGrid from "./components/CountriesGrid"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import CountryInfo from "./components/CountryInfo"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
const App = () =>{
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const navigate = useNavigate()
const getCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => setCountries(data))
}
const route = countries.map((country) => {
  return(
    <Route path={`/${country.name.common}`} element={<CountryInfo darkMode={darkMode} country={country} />} />
  )
})
const showDetails = (cName) =>{
  navigate(`/${cName}`)
}
useEffect(() => {
  getCountries()
},[])
  return(
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        {route}
        <Route path="/" element={
          <>
          <Search darkMode={darkMode} setSearch={setSearch} setFilter={setFilter}/>
          <CountriesGrid showDetails={showDetails} darkMode={darkMode} countries={
            countries.sort((a,b) => {
              if(a.name.common < b.name.common) { return -1 }
              if(a.name.common > b.name.common) { return 1 }
              return 0
            }).filter(country => country.region.includes(filter) &&
            country.name.common.toLowerCase().includes(search.toLowerCase()))
        } />
          </>
        }/>
      </Routes>
    </>
  )
}

export default App
