import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router';
import './App.css';
import Navbar from './inc/Navbar';
import Footer from './inc/Footer';
import Home from './Home';

const URL = 'http://localhost/kaljakauppa-backend/';

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])


  useEffect(() => {

    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name });
    }
  }, [location.state])

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <>
      <div class="parallax" style={{ height: "1500px" }}>
        <Navbar url={URL} setCategory={setCategory} cart={cart} />
        <div id="content" className="container-fluid">
          <Switch>
            <Route
              path="/"
              render={() =>
                <Home
                  url={URL}
                  category={category}
                  addToCart={addToCart}
                />
              }
              exact
            />
          </Switch>
        </div>
        <h3 style={{ textAlign: "center", paddingTop: 350, color: "#F6F6E3" }}>Saunakaljat? Ruoan kanssa? Naama täyteen?</h3>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>Joka makuun vaikka olisi paska maku</p>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>- Vuodesta 2021</p>

        <p style={{ textAlign: "center", paddingTop: 150, color: "#F6F6E3" }}>TIK21KM Ryhmä1</p>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>Emilia, Pekka, Eero, Mikko L, Mikko R</p>
      </div>

      <Footer />
    </>
  )
}

export default App;








