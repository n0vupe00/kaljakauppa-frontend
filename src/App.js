import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import "./App.css";
import Navbar from "./inc/Navbar";
import Footer from "./inc/Footer";
import Home from "./inc/Home";
import Order from "./Order";
import Modal from "./inc/Modal";


const URL = "http://localhost/kaljakauppa-backend/";

function App() {
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  let location = useLocation();

  useEffect(() => {
    if ("cart" in localStorage) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    if (location.state !== undefined) {
      if (location.pathname === "/") {
        setCategory({ id: location.state.id, name: location.state.name });
      } else if (location.pathname === "/product") {
        setProduct({
          id: location.state.id,
          name: location.state.name,
          price: location.state.price,
        });
      }
    }
  }, [location.state]);

  function addToCart(product) {
    if (cart.some((item) => item.id === product.id)) {
      const existingProduct = cart.filter((item) => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);
    } else {
      product["amount"] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item) => item.id === product.id);
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem("cart", JSON.stringify(modifiedCart));
  }

  function emptyCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter((item) => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem("cart", JSON.stringify(itemsWithoutRemoved));
  }

  return (
    <>
      <div className="App">
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div class="parallax" style={{ height: "1500px" }}>
        <Navbar url={URL} setCategory={setCategory} cart={cart} />
        <div id="content" className="container-fluid">
          <Switch>
            <Route
              path="/"
              render={() => (
                <Home url={URL} category={category} addToCart={addToCart} />
              )}
              exact
            />
            <Route
              path="/order"
              render={() => (
                <Order
                  cart={cart}
                  updateAmount={updateAmount}
                  empty={emptyCart}
                  removeFromCart={removeFromCart}
                  url={URL}
                />
              )}
            />
          </Switch>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default App;
