import React from "react";
import './Cartelerastyle.css';

class Barra extends React.Component {
    render(){
    
    return (
        <div class="navbar">
            <img src="../img/entrada.png" class="logo" alt="main logo" />
            <h2> OMEC </h2>
            <ul>
                <li><a href="Index.html">Inicio</a></li>
                <li><a href="Cartelera.html">Cartelera</a></li>
                <li><a href="Mi Cuenta.html">Mi Cuenta</a></li>
            </ul>
        </div>
    )
}}
export default Barra;