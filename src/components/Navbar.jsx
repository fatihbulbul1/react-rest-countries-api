const Navbar = ({darkMode, setDarkMode}) => {
    return (
        <nav className={`${darkMode && 'dark-nav'}`}>
            <div className="nav-container">
                <h1>Where in the world?</h1>
                <button onClick={() => { 
                    if(!darkMode) document.querySelector('body').style.backgroundColor = 'hsl(207, 26%, 17%)';
                    else document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 98%)'; 
                    setDarkMode(!darkMode)
                    }} className="dark-mode-btn">Dark Mode</button>
            </div>
        </nav>
    )
}

export default Navbar;
