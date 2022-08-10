import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCarComponent from './components/ListCarComponent';
import CarIdComponent from './components/CarIdComponent';
import MarcaComponent from './components/MarcaComponent';
import ModeloComponent from './components/ModeloComponent';
import ReservationIdComponent from './components/ReservationIdComponent';
import CreateReservationComponent from './components/CreateReservationComponent';
import { Menu } from 'react-bootstrap/lib/Dropdown';
import MenuComponent from './components/MenuComponent';

function App(){
  return(
    <div style={{background: "#b0bdca"}}>
      <Router>
          <HeaderComponent />
            <div className='container'>
              <Switch>
              <Route path ="/" exact component={MenuComponent}></Route>
                <Route path ="/carros" component={ListCarComponent}></Route>
                <Route path ="/car/:id" component={CarIdComponent}></Route>
                <Route path ="/marca/:marca" component={MarcaComponent}></Route>
                <Route path ="/modelo/:modelo" component={ModeloComponent}></Route>
                <Route path ="/reservacion/:idres" exact component={ReservationIdComponent}></Route>
                <Route path ="/nueva" component={CreateReservationComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
        </Router>
    </div>
  
  );
}
export default App
 



