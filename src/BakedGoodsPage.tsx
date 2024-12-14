import React, { useState } from "react";
import bakedGoods from "./bakedGoods.json";

interface BakedGood {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const BakedGoodsPage: React.FC = () => {
  const [cart, setCart] = useState<BakedGood[]>([]);

  const addToCart = (item: BakedGood) => {
    setCart([...cart, item]);
  };

  return (
    <div className="baked-goods-container">
      <h1>Baked Goods</h1>
      <div className="baked-goods-list">
        {bakedGoods.map((item: BakedGood) => (
          <div key={item.id} className="baked-goods-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price} SEK</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakedGoodsPage;
