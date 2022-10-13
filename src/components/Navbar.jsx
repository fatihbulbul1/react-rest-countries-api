const Navbar = ({darkMode, setDarkMode}) => {
    return (
        <nav className={`${darkMode && 'dark-nav'}`}>
            <div className="nav-container">
                <h1>Where in the world?</h1>
                <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">Dark Mode</button>
            </div>
        </nav>
    )
}

export default Navbar;