import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header__">
            <nav className="header__nav">
                <Link to={"/"} className="header__logo">RetroStore</Link>
                <ul className="header__nav__ul">
                    <li><NavLink to={"/category/computers"} className="header__nav__ul__a">Computadoras</NavLink></li>
                    <li><NavLink to={"/category/consoles"} className="header__nav__ul__a">Consolas</NavLink></li>
                    <li><NavLink to={"/category/games"} className="header__nav__ul__a">Juegos</NavLink></li>
                    <li><NavLink to={"/cart"}><CartWidget/></NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;