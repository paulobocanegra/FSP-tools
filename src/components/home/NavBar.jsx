import "./nav-bar.css"

const NavBar = () => {
    return (
        <div className="nav-bar-wrapper">
            <div className="logo-container">
                <h1>LOGO</h1>
            </div>
            <div className="nav-links-container">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">About</a>
            </div>
            <div  className="nav-session-links-container">
                <a href="">Sign Up</a>
                <a href="">Sign Sign</a>
            </div>
        </div>
    )
}

export default NavBar;