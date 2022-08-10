import { Component } from 'react';
import CarsService from '../service/CarsService';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';

import 'primereact/resources/themes/arya-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


 class ListCarComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        cars :[]
      }
     
    }
    componentDidMount(){
      CarsService.getAll().then((res) => {
        this.setState({cars: res.data});
      });
    }
    render(){
      return(
        <Panel header = "Catalogo" style={{width:'90%', marginTop: '20px', margin: '0 auto' }}>
          <DataTable value={this.state.cars} paginator={true} rows="15">
            <Column field="id_car" header="ID "></Column>
            <Column field="color" header="Color "></Column>
            <Column field="marca" header="Marca "></Column>
            <Column field="modelo" header="Modelo "></Column>
            <Column field="precio_dia" header="Precio/dia "></Column>
            <Column field="precio_semana" header="Precio/semana "></Column>
            <Column field="disponibilidad"  header="Disponibilidad "></Column>
        </DataTable>
        </Panel>
      );
    }
  }

  export default ListCarComponent
  