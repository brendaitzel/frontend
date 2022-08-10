import axios from "axios";


class ReservationService{

    baseUrlRes = "http://localhost:8080/reservacion/"
    getReservationId(id_reservationr){
        return axios.get(this.baseUrlRes + id_reservationr);
    }

    createReservation(reservation){
        return axios.post(this.baseUrlRes + 'crearReserva', reservation)
    }

}

export default new ReservationService()
