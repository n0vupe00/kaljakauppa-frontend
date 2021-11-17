import React from "react";
import "./bootstrap.min.css"
import "./App.css";
import Navbar1 from "./Navbar";

export default function Meista () {
    return (
    <div class="parallax" style={{ height: "1500px" }}>
        <Navbar1 />
        <h3 style={{ textAlign: "center", paddingTop: 350, color: "#F6F6E3" }}>Pieni Olutkauppa</h3>
        <p style={{ textAlign: "center", color: "#F6F6E3" }}>Oulun Ammattikorkeakoulun opiskelijoiden vuonna 2021 perustama
            olutkauppa. Kuten kaikki tietää, opiskelijoilla on aina tiukkaa rahasta. Mietimme, että mistä saisi vähän lisätuloa
            kukkaron pohjalle ja sitä kautta vähän parempaa kinkkua leivän päälle? No mikäs se Suomessa paremmin myisi
            kuin alkoholi! Tervetuloa sivuille!</p>
        <p>Laaja tuotevalikoimamme takaa sen, että jokaiselle löytyy jotain. Olit sitten hifistelevä bissenörtti, joka
            pohtii oluen eri vivahteita tai viikonloppu spurgu. Meiltä homma hoituu!
        </p>



    </div>
    )
};
