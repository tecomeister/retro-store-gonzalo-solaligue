import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productArray from "../../data/stock.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
      const promesa = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(productArray.find(item => item.id === parseInt(id)));
          }, 2000);
      });

      promesa.then((data) => {
          setItem(data);
      });
  }, [id]);

  return(
    <div className="item__detail__container">
      <div className="item__list__menu">
        <h2 className="item__list__menu__text">RetroStore</h2>
      </div>
      <div className="item__list__container">
        <ItemDetail item={item}/>
      </div>
    </div>
  );
}

export default ItemDetailContainer;