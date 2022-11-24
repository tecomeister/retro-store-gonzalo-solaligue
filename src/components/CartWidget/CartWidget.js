import "./CartWidget.css";
import CartWidgetSVG from "./CartWidget.png";

const CartWidget = () => {
    return (
        <div className="cart__widget__container">
            <img src={CartWidgetSVG} alt="Cart Icon" className="cart__widget__container__img"/>
            <p className="cart__widget__container__text">0</p>
        </div>
    );
};

export default CartWidget;