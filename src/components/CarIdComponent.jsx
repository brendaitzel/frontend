import { Component } from 'react';
import CarsService from '../service/CarsService';



class CarIdComponent extends Component{
    constructor(props){
        super(props)
      this.state = {
        id: this.props.match.params.id,
        car: {}
      }
    }

    componentDidMount(){
        CarsService.getCarId(this.state.id).then(res => {
            this.setState({car: res.data});
        })
      }

      render(){
        return(
                <div className='card col-md-3 offset-md-0'>
                    <h4 className = "text-center">  View Car Details </h4>
                    <div className='card-body'>
                        <div className='row'>
                            <label> ID Car: </label>
                            <div>{this.state.car.id_car}</div>
                        </div>
                        <div className='row'>
                            <label> Color: </label>
                            <div>{this.state.car.color}</div>
                        </div>
                        <div className='row'>
                            <label> Marca: </label>
                            <div>{this.state.car.marca}</div>
                        </div>
                        <div className='row'>
                            <label> Modelo: </label>
                            <div>{this.state.car.modelo}</div>
                        </div>
                        <div className='row'>
                            <label> Modelo: </label>
                            <div>{this.state.car.modelo}</div>
                        </div>
                        <div className='row'>
                            <label> Número de pasajeros: </label>
                            <div>{this.state.car.num_pasajeros}</div>
                        </div>
                        <div className='row'>
                            <label> Número de puertas: </label>
                            <div>{this.state.car.num_puertas}</div>
                        </div>
                        <div className='row'>
                            <label> Consumo de gasolina: </label>
                            <div>{this.state.car.consumo_gasolina}</div>
                        </div>
                        <div className='row'>
                            <label> Velocidad máxima: </label>
                            <div>{this.state.car.velocidad_max}</div>
                        </div>
                        <div className='row'>
                            <label> Peso máximo: </label>
                            <div>{this.state.car.peso_max}</div>
                        </div>
                        <div className='row'>
                            <label> Precio por día: </label>
                            <div>{this.state.car.precio_dia}</div>
                        </div>
                        <div className='row'>
                            <label> Precio por semana: </label>
                            <div>{this.state.car.precio_semana}</div>
                        </div>
                        <div className='row'>
                            <label> Carga techo: </label>
                            <div>{this.state.car.carga_techox}</div>
                        </div>
                        <div className='row'>
                            <label> Disponibilidad: {this.state.car.disponibilidad} </label>
                        </div>
                    </div>
                </div>
           
           )
      }
}
export default CarIdComponent