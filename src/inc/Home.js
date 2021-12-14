import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Home({url,category,addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null) {
      axios.get(url + 'product/getproducts.php/' + category?.id)
        .then((response) => {
          const json = response.data;
          setProducts(json);
        }).catch (error => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        })
    } 
  },[category])

  return (
    <div style={{'padding-top': '100px','padding-left': '100px'}}>
    <h1 style={{"paddingBottom": "50px", marginTop: "50px"}}>Tilausehdot</h1>
      <p style={{fontSize: 20}}>Tilataksesi meiltä sinun tulee olla vähintään 18-vuotias, täysjärkinen ja muutakin kuin kärpäsiä lompakossa.</p>
      <p style={{fontSize: 20}}>Asuinpaikka Suomessa on myös suotavaa, sillä emme toimita ulkomaille. Mukavia ostoshetkiä!</p>
      <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#F6F6E3", "paddingTop": "100px", fontSize: 30}}> {category?.name}</h3>
        {products.map(product => (
          <div key={product.id} style={{textAlign: "center", display: 'inline-block',marginRight:"50px", "paddingTop": "50px"}}>
            <p style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#F6F6E3", fontSize: 20}}>
              {product.name }
            </p>
            <div>
            <img src={url + 'images/' + product.image + '.png'} alt="" />
            </div>
            <button style={{marginTop: "20px", backgroundColor: 'transparent'}}class="btn btn-secondary" type="button" onClick={e => addToCart(product)}>Lisää</button>
          </div>
        ))}
    </div>
  )
  
}




//vanha sivu alla, pitää katsoa toi parallax ja tekstit vielä, kunhan sivut saa yhdistettyä
/* import React from "react";
import "./bootstrap.min.css"
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar1 from "./Navbar";

export default function Home() {
    return (
      <div class="parallax" style={{ height: "1500px" }}>
        <Navbar1 />
        <h3 style={{ textAlign: "center", paddingTop: 350, color: "#F6F6E3"}}>Saunakaljat? Ruoan kanssa? Naama täyteen?</h3>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>Joka makuun vaikka olisi paska maku</p>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>- Vuodesta 2021</p>
  
        <p style={{ textAlign: "center", paddingTop: 150, color: "#F6F6E3" }}>TIK21KM Ryhmä1</p>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>Emilia, Pekka, Eero, Mikko L, Mikko R</p>
  
  
      </div>
    );
  } */
