import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="item__card__link">
      <div className="item__card">
        <img src={item.img} alt={item.name} className="item__card__img" />
        <p className="item__card__text">
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default Item;
