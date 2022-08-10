import React, { Component } from 'react';

class MenuComponent extends Component{
    constructor(props){
        super(props)
        this.state= {

        }
    }

    catalogo(){
        this.props.history.push('/carros');
     }

    render(){
        return(
            <div>
               <h1>Elige una opción</h1> 
               <div><a href='http://localhost:3000/carros' className='navbar-brand'> Ver Catalogo </a></div>
               <div><a href='http://localhost:3000/car/' className='navbar-brand'> Ver por ID </a></div> 
               <div><a href='http://localhost:3000/marca/' className='navbar-brand'> Ver por marca </a></div> 
               <div><a href='http://localhost:3000/modelo/' className='navbar-brand'> Ver por modelo</a></div> 
               <div><a href='http://localhost:3000/nueva' className='navbar-brand'> ¡Reserva! </a></div>   
               <div><a href='http://localhost:3000/reservacion/' className='navbar-brand'> Consulta tu reserva </a></div>    
               <img src="https://trendingmagazine.mx/wp-content/uploads/2019/03/imagenes-de-carros-lujosos-y-deportivos-lamborghini-veneno-roadster-trending-magazine.jpg" />      
            </div>
        )
    }
}
export default MenuComponent