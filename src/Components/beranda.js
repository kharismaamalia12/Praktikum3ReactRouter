import React from 'react';
import './components.css';

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <selection className="banner">
                    <div className="textBx">
                        <h2>
                            Hello, I'm 
                            <br/><span>Kharisma Amalia Putri</span>
                        </h2>
                        <h3>Software Engineering</h3>
                        <button to="/" className="btn btn-dark">Love Yourself</button>
                    </div>
                </selection>
            </div>
        );
    }
}

export default Beranda;