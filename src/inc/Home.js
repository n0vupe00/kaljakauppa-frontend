import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import Modal from "./Modal";

export default function Home({ url, category, addToCart }) {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  useEffect(() => {
    if (category !== null) {
      axios
        .get(url + "product/getproducts.php/" + category?.id)
        .then((response) => {
          const json = response.data;
          setProducts(json);
        })
        .catch((error) => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        });
    }
  }, [category]);

  return (
    <html>
      <div>
        <h3> {category?.name}</h3>

        {products.map((product) => (
          <div key={product.id} className="row" class="cards" >
            
              <div className="card" style={{ display: "inline-block" }}>
              <h4 className="card-title">{product.name}</h4>
                <img
                  className="card-img-top"
                  src={url + "images/" + product.image + ".png"}
                />
                <div className="card-block">
                  
                  <div className="card-text">{product.info}</div>
                  <div className="card-text">{product.alcohol} %</div>
                  <div className="card-text">{product.price} €</div>
                  <button className="button" onClick={(e) => addToCart(product)}>
                    Lisää koriin
                  </button>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </html>
  );
}
