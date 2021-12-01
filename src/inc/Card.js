import React from "react";
import Button from '@restart/ui/esm/Button';
import './Card.css';

const Card = ({product}) => (
  <img src= {product.image}/>,
  <h3>{product.name}</h3>,
  <p>{product.price}</p>,
  <p>{product.size}</p>,
  <p>{product.alcohol}</p>
);

export default Card;
