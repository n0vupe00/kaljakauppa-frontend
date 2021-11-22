import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router';
import './App.css';
import Navbar from './inc/Navbar';
import Footer from './inc/Footer';
import Home from './inc/Home';
import Product from './Product';

function Card(props){
    return (
        <div className = 'card'>
            <div className='card_bodfy'>
                <img src="kuva.jpg" class='card_image'/>
                <h2 className="card_title">{Product.name}</h2>
                <p className="card:description">{Product.info}</p>
            </div>
        </div>    )
}