import React, { Component } from 'react';

class HeaderComponent extends Component{
    constructor(props){
        super(props)
        this.state= {

        }
    }

    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-md navbar-dark bg-dark">
                        <div><a href='https://www.netcracker.com/' className='navbar-brand'> App Cars </a></div>
                    </nav>
                </header>      
            </div>
        )
    }
    
}
export default HeaderComponent