import React from "react";
import "./bootstrap.min.css"
import "./App.css";
import Navbar1 from "./Navbar";
export default function App() {
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
}



