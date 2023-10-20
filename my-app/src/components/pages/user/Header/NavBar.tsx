import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="nav-bar-list col-xl-6 col-md-4">
            <NavLink className="nav-bar-item" to="/">
                Home
            </NavLink>
            <NavLink className="nav-bar-item" to="/nike">
                Nike
            </NavLink>
            <NavLink className="nav-bar-item" to="/adidas">
                Adidas
            </NavLink>
            <NavLink className="nav-bar-item" to="/about">
                About
            </NavLink>
        </div>
    );
}

export default NavBar;