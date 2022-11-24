import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header__">
            <nav className="header__nav">
                <a href="#" className="header__logo">RetroStore</a>
                <ul className="header__nav__ul">
                    <li><a href="#" className="header__nav__ul__a">Comprar</a></li>
                    <li><a href="#" className="header__nav__ul__a">Iniciar Sesion</a></li>
                    <li><a href="#"><CartWidget/></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;