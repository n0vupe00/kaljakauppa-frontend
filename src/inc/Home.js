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
          <div key={product.id} className="row" class="cards">
            <div class="column">
              <div class="card">
                <img
                  class="card-img-top"
                  src={url + "images/" + product.image + ".png"}
                />
                <div class="card-block">
                  <h4 class="card-title">{product.name}</h4>
                  <div class="card-text">{product.info}</div>
                  <button class="button" onClick={(e) => addToCart(product)}>
                    Lisää koriin
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </html>
  );
}
