import { Component } from 'react';
import ReservationService from '../service/ReservationService';

class ReservationIdComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            idres: this.props.match.params.idres,
            reservation: {}
        }
    }

    componentDidMount(){
        ReservationService.getReservationId(this.state.idres).then(res =>{
            this.setState({reservation: res.data});
        })
    }

    render(){
        return(
            <div className='card col-md-3 offset-md-0'>
                    <h4 className = "text-center">  View Reservation Details </h4>
                    <div className='card-body'>
                        <div className='row'>
                            <label> ID Reservation: </label>
                            <div>{this.state.reservation.id_reservationr}</div>
                        </div>
                        <div className='row'>
                            <label> Start Date: </label>
                            <div>{this.state.reservation.startDate}</div>
                        </div>
                        <div className='row'>
                            <label> End Date </label>
                            <div>{this.state.reservation.endDate}</div>
                        </div>
                        <div className='row'>
                            <label> ID Car </label>
                            <div>{this.state.reservation.id_car}</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ReservationIdComponent