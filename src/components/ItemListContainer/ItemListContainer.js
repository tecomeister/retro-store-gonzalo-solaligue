import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productArray from "../../data/stock.json";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? productArray.filter(item => item.category === id) : productArray);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        });
    }, [id]);

    return(
        <div>
            <div className="item__list__menu">
                <h2 className="item__list__menu__text">RetroStore</h2>
            </div>
            <div className="item__list__container">
                <ItemList items={items}/>
            </div>
        </div>
    );
};

export default ItemListContainer;