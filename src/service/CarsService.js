import axios from "axios";

 class CarsService{
    baseUrl = "http://localhost:8080/carros/"
    getAll(){
        return axios.get(this.baseUrl + 'catalogo');
    }

    getCarId(car_id){
        return axios.get(this.baseUrl+ car_id);
    }

    getCarMarca(marca){
        return axios.get(this.baseUrl+'marca/query?marca='+ marca)
    }

    getCarModelo(modelo){
        return axios.get(this.baseUrl+'modelo/query?modelo='+ modelo)
    }
}
 export default new CarsService()