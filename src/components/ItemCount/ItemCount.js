import React, {useState} from 'react';
import "./ItemCount.css";

const ItemCount = ({stock}) => {
  const [counterNum, setCounterNum] = useState(1);

  const increaseQuantity = () => {
    if (counterNum < stock) {
      setCounterNum(counterNum + 1);
    }
  };

  const decreaseQuantity = () => {
    if (counterNum > 0) {
      setCounterNum(counterNum - 1);
    }
  };

  const onAdd = () =>{
    if(stock > 0){
      console.log("El item fue agregado al carrito correctamente");
    }
    else{
      console.log("No hay stock disponible");
    }
  }

  return(
    <div className='item__count'>
      <div className='item__count__counter'>
        <button onClick={decreaseQuantity} className='item__count__counter__minus'>-</button>
        <span className='item__count__counter__text'>{counterNum}</span>
        <button onClick={increaseQuantity} className='item__count__counter__plus'>+</button>
      </div>
      <button onClick={onAdd} className='item__count__cart__btn'>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
