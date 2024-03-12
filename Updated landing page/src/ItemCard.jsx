import React from 'react';
import './App.css'

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt="" />
      <div className="container">
        
       
        <h4><b>{item.name}</b></h4>
        <p>{item.brand}</p>
        <p>{item.price}</p>
        <p>{item.descirption}</p>
        <p>{item.brand}</p>
       
       
      </div>
    </div>
  );
};

export default ItemCard;
