import React from "react";
import "./Cartelerastyle.css"
class Pelicula extends React.Component{
    render(){
    return (
        <header>
            <div class="container">             
                    <div class="card">
                        <img src= {this.props.img} />
                            <div class="content" >
                                <h3> {this.props.titulo}</h3>
                                <p><br/>
                                    <b>Reparto:</b>{this.props.reparto}<br/>
                                    <b>Duracion:</b> {this.props.duracion} <br/>
                                    <b>Etiquetas:</b> {this.props.etiqueta}
                                </p> <br/>
                                <p>
                                <b>Descripcion</b><br/>
                                {this.props.descripcion} <br/> <br/>
                                <b>Opiniones</b>
                                </p>
                                <img src={this.props.op1} width="100px" height="50px" alt=""/>
                                <img src={this.props.op2} width="100px" height="50px" alt=""/>
                                <img src={this.props.op3} width="100px" height="50px" alt=""/>
                            </div>
                    </div>         
            </div>
        </header>
     )  
    }                                             
}
export default Pelicula;