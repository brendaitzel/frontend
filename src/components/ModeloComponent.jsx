import { Component } from 'react';
import CarsService from '../service/CarsService';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';

import 'primereact/resources/themes/arya-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class ModeloComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            modelo: this.props.match.params.modelo,
            CarsModelo: []

        }
    }

    componentDidMount(){
        CarsService.getCarModelo(this.state.modelo).then(res => {
            this.setState({CarsModelo: res.data});
        });
    }

    render(){
        return(
          <Panel header = "Marca" style={{width:'90%', marginTop: '20px', margin: '0 auto' }}>
            <DataTable value={this.state.CarsModelo} paginator={true} rows="15">
              <Column field="id_car" header="ID "></Column>
              <Column field="color" header="Color "></Column>
              <Column field="marca" header="Marca "></Column>
              <Column field="modelo" header="Modelo "></Column>
              <Column field="num_pasajeros" header="Numero de pasajeros "></Column>
              <Column field="num_puertas" header="Puertas"></Column>
              <Column field="consumo_gasolina" header="Consumo "></Column>
              <Column field="velocidad_max" header="Velocidad maxima "></Column>
              <Column field="peso_max" header="Peso maximo "></Column>
              <Column field="precio_dia" header="Precio/dia "></Column>
              <Column field="precio_semana" header="Precio/semana "></Column>
              <Column field="disponibilidad"  header="Disponibilidad "></Column>
              <Column field="carga_techox" header="Carga/techo "></Column>
          </DataTable>
          </Panel>
        );
      }
}
export default ModeloComponent