import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cart from "./Cart";

export default function Navbar({ url, setCategory, cart }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(url)
    axios
      .get(url + "product/getgategories.php")
      .then((response) => {
        const json = response.data;
        setCategories(json);
        setCategory(json[0]);
      })
      .catch((error) => {
        if (error.response === undefined) {
          alert(error);
        } else {
          alert(error.response.data.error);
        }
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{
            fontFamily: 'Courier New',
            fontWeight: "bold",
            fontSize: 50,
            color: "#F6F6E3",
          }}
          to="/"
        >
          A-Team Brewery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">


            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{
                  fontFamily: 'Courier New',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: "#F6F6E3",
                  fontSize: 25,
                }}
                href="#"
                id="dropdown01"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tuotteet

              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown01">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Tuotteet",
                        state: {
                          id: category.id,
                          name: category.name,
                        },
                      }}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Cart cart={cart} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
