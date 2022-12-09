import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="item__detail">
      <img src={item.img} alt={item.name} className="item__detail__img" />
      <h2 className="item__detail__title">{item.name}</h2>
      <p className="item__detail__description">{item.description}</p>
      <p className="item__detail__price">{item.price}</p>
      <ItemCount stock={item.stock} />
    </div>
  );
};

export default ItemDetail;