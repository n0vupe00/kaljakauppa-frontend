import React from 'react';
import './Order.css';

export default function Order({cart,updateAmount,removeFromCart, index}) {

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }
    return (
        <div style={{'padding-top': '100px'}}>
            <h3> Shopping cart </h3>
            <table>
            { cart.map((product,index)=> {
                return (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price} €</td>
                    <td>
                        <input 
                        style={{width: '50px'}}
                        type="number" 
                        step="1"
                        onChange={e => changeAmount(e,product)}
                        value={product.amount}
                        />
                    </td>
                    <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                </tr>
                );
            })}
            </table>
        </div>
    )
}
