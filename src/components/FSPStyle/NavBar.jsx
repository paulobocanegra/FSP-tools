import "./nav-bar.css"

const NavBar = () => {
    return (
        <div className="nav-bar-wrapper">
            <div className="logo-container">
                <h1>LOGO</h1>
            </div>
            <div className="nav-links-container">
                <p>Home</p>
                <p>Products</p>
                <p>About</p>
            </div>
            <div  className="nav-session-links-container">
                <p>Sign Up</p>
                <p>Sign Sign</p>
            </div>
        </div>
    )
}

export default NavBar;