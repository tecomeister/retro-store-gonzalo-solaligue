import "./ItemListContainer.css";

const ItemListContainer = ({ menu_greeting, greeting }) => {
    return(
        <div>
            <div className="item__list__menu">
                <h2 className="item__list__menu__text">{menu_greeting}</h2>
            </div>
            <div className="item__list__container">
                <p className="item__list__container__text">
                    {greeting}
                </p>
            </div>
        </div>
    );
};

export default ItemListContainer;