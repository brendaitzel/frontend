import React, { Component } from 'react'
import ReservationService from '../service/ReservationService'

class CreateReservationComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id_reservationr: '',
            id_car: '',
            startDate: '',
            endDate: '',
            
        }
        this.changeIDReservationHandler = this.changeIDReservationHandler.bind(this);
        this.changeIDCarHandler = this.changeIDCarHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.saveReservation = this.saveReservation.bind(this);

    }
    saveReservation = (e) => {
        e.preventDefault();
        let reservation = {id_reservationr: this.state.id_reservationr, id_car: this.state.id_car, startDate: this.state.startDate, endDate: this.state.endDate};
        console.log('reservation => ' + JSON.stringify(reservation));

        ReservationService.createReservation(reservation).then(res => {
            this.props.history.push('/carros');

        });
    }

    changeIDReservationHandler= (event) => {
        this.setState({id_reservationr: event.target.value});

    }
    changeIDCarHandler= (event) => {
        this.setState({id_car: event.target.value});

    }
    changeStartDateHandler= (event) => {
        this.setState({startDate: event.target.value});

    }
    changeEndDateHandler= (event) => {
        this.setState({endDate: event.target.value});

    }
    cancel(){
       this.props.history.push('/carros');
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md offset-md-3">
                            <h3 className="text-center"> Add Reservation </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> ID Reservation:  </label>
                                        <input placeholder=" ID Reservation" name="id_reservationr" classNAme="form-control"
                                        value={this.state.id_reservationr} onChange={this.changeIDReservationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> ID Car:  </label>
                                        <input placeholder=" ID Car" name="id_reservationr" classNAme="form-control"
                                        value={this.state.id_car} onChange={this.changeIDCarHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Start Date:  </label>
                                        <input placeholder=" Start Date" name="startDate" classNAme="form-control"
                                        value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> End Date:  </label>
                                        <input placeholder=" End Date" name="endDate" classNAme="form-control"
                                        value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveReservation}> Save </button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>


                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default CreateReservationComponent