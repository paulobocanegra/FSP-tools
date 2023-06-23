import { Link } from "react-router-dom";
import "./nav-bar.css"


const NavBar = () => {
    return (
        <header className="nav-bar-wrapper">
            <div className="logo-container">
                <h1>LOGO</h1>
            </div>
            <div className="nav-links-container">
                <Link className="data-link" to="/">FSP Data Flow</Link>
                <p>Products</p>
                <p>About</p>
            </div>
            <div  className="nav-session-links-container">
                <p>Sign Up</p>
                <p>Sign Sign</p>
            </div>
        </header>
    )
}

export default NavBar;