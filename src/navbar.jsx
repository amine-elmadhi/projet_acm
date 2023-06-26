import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logoacm from './images/logoacm.png';
import acceuil from './images/accueil.png';
import commande from './images/commande.png';
import profil from './images/profil.png';
import logout from './images/logout.png';
import settings from './images/settings.png';

class Navbar extends Component {
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
        <button className='toclose' onClick={this.toggleNavbar} >
          {navbarVisible ? 'Fermer' : 'Ouvrir'}
        </button>
        {navbarVisible && (
          <nav className="nav">
            <img className="logo" src={logoacm} alt="ACM Logo" /><br />
            <div className="navs">
              <img className="acceuil" src={acceuil} alt="ACM Logo" />
              <Link exact to="/Principale" className="Principale">   Accueil </Link><br />
              <img className="profile" src={profil} alt="ACM Logo" />
              <Link exact to="/profiluser" className="Profil"> Profil</Link><br />
              <img className="command" src={commande} alt="ACM Logo" />
              <Link exact to="/Commande" className="Commande"> Contact</Link><br />
              <img className="logout" src={logout} alt="ACM Logo" />
              <Link exact to="https://acm-marketing.tn/" className="parametre"> ACM Page </Link><br />
              <img className="settings" src={settings} alt="ACM Logo" />
              <Link exact to="/" className="Déconnexion">Déconnexion</Link><br />
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default Navbar;
