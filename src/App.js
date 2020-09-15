import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tentangsaya">Tentang Saya</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/karya">Karya</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontak">Kontak</Link>
            </li>
          </ul>
          </div>
        </nav>
        <p><Utama/></p>
      </div>
    );
  }
}

export default App;