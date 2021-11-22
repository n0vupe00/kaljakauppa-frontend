import React from "react";
import Row from "react-bootstrap/Row";
import { data } from " ";
import Product from "./Product";


const Shop = () => {
  return (
    <div className="row-wrapper">
      <Row>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default Shop;
