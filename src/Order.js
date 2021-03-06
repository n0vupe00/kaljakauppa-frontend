import React, { useState } from 'react';
import axios from 'axios';
import './Order.css';

export default function Order({ cart, updateAmount, removeFromCart, empty, url }) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [finished, setFinished] = useState(false);

    function changeAmount(e, product) {
        updateAmount(e.target.value, product);
    }

    function order(e) {
        e.preventDefault();
        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        })
        axios.post(url + 'order/add.php', json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {

                empty();
                setFinished(true);
            }).catch(error => {
                alert(error.response.data.error)
            });
    }

    /* fetch(url + 'order/add.php',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        })
    })
    .then (res => {
        return res.json();
    })
    .then (
        (res) => {
            empty();
            setFinished(true);
        }, (error) => {
            alert(error);
        }
    )
} */

    let sum = 0;

    if (finished === false) {
        return (
            <div class = "order" style={{ 'padding-top': '100px' }}>
                <h1 style={{ "paddingBottom": "50px", marginTop: "20px", fontSize: 42 }}>Tilausehdot</h1>
                <p style={{ fontSize: 20 }}>Tilataksesi meilt?? sinun tulee olla v??hint????n 18-vuotias, t??ysj??rkinen ja olla muutakin kuin k??rp??si?? lompakossa.</p>
                <p style={{marginBottom: "50px", fontSize: 20 }}>Asuinpaikka Suomessa on my??s suotavaa, sill?? emme toimita ulkomaille. Mukavia ostoshetki??!</p>
                <h3> Ostoskori </h3>
                <table style={{width: "900px", marginTop: "20px", marginBottom: "20px" }} className="table">
                    <tbody>
                        {cart.map(product => {
                            sum += parseFloat(product.price * product.amount);
                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price} ???</td>
                                    <td>
                                        <input
                                            style={{ width: '50px' }}
                                            type="number"
                                            step="1"
                                            onChange={e => changeAmount(e, product)}
                                            value={product.amount}
                                        />
                                    </td>
                                    <td><a href="#" style={{ fontFamily: "Courier New", color: "#F6F6E3", }}
                                        onClick={() => removeFromCart(product)}>Poista</a></td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td className="sumrow">Loppusumma:</td>
                            <td className="sumrow">{sum.toFixed(2)} ??? </td>
                            <td className="sumrow"></td>
                            <td className="sumrow"><a href="#"
                                style={{ fontFamily: "Courier New", color: "#F6F6E3", }}
                                onClick={e => empty()}>Tyhjenn??</a></td>
                        </tr>
                    </tbody>
                </table>

                <>
                    <h3 className="header">Tilaajan tiedot</h3>
                    <form onSubmit={order}>
                        <div className="form-group">
                            <label>Etunimi:</label>
                            <input style={{ width: "50%" }} className="form-control" onChange={e => setFirstname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Sukunimi:</label>
                            <input style={{ width: "50%" }} className="form-control" onChange={e => setLastname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Osoite:</label>
                            <input style={{ width: "50%" }} className="form-control" onChange={e => setAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Postinumero:</label>
                            <input style={{ width: "50%" }} className="form-control" onChange={e => setZip(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Kaupunki:</label>
                            <input style={{ width: "50%" }} className="form-control" onChange={e => setCity(e.target.value)} />
                        </div>
                        <div className="buttons">
                            <button style={{ backgroundColor: "transparent", marginTop: "15px", borderColor: "white", fontFamily: "Courier New" }} className="btn btn-primary" >Tilaa</button>
                        </div>

                    </form>
                </>

            </div>
        );
    }
    else {
        return (<div  class = "order"> <h3 style={{ 'padding-top': '200px', fontFamily: "Courier New" }}>Kiitos tilauksestasi!</h3></div>);
    }
}
