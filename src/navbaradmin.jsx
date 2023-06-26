import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbaradmin.css';
import profil from './images/profil.png';
import logoacm from './images/logoacm.png';
import logout from './images/logout.png';
import settings from './images/settings.png';
import commande from './images/commande.png';
class navbaradmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: true
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      navbarVisible: !prevState.navbarVisible
    }));
  };

  render() {
    const { navbarVisible } = this.state;

    return (
      <div>
        <button className='tocloseadmin' onClick={this.toggleNavbar}>
          {navbarVisible ? 'Fermer' : 'Ouvrir'}
        </button>
        {navbarVisible && (
          <nav className="navadmin">
            <img className="logoadmin" src={logoacm} alt="ACM Logo" /><br />
            <div className="navsadmin">
            <img className="Ajoutimg" src={commande} alt="ACM Logo" />
            
              <button className="Ajout" onClick={this.props.handleAjout}>Ajout</button><br />
              <img className="profile" src={profil} alt="ACM Logo" />
              <Link exact to="/Admin" className="Profil"> Ajout Client</Link><br />
              
              <img className="logout" src={logout} alt="ACM Logo" />
              <Link exact to="https://acm-marketing.tn/" className="parametre">ACM Page</Link><br />
              <img className="settings" src={settings} alt="ACM Logo" />
              <Link exact to="/" className="Déconnexion">Déconnexion</Link><br />
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default navbaradmin;
