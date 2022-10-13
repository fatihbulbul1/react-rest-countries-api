const Search = ({darkMode, setSearch , setFilter}) => {
    return(
        <div className={`${darkMode && 'dark-search'} search`}>
            <input className={`${darkMode && 'dark'}`} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search for a country..." />
            <select className={`${darkMode && 'dark'}`} onChange={e => {
                if(e.target.value === 'All') setFilter('')
                else setFilter(e.target.value)
                }}>
                <option hidden disabled selected>Filter by Region</option>
                <option>All</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}
export default Search