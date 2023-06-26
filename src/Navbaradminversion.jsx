import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbaradminprojet.css';
import logoacm from './images/logoacm.png';
import logout from './images/logout.png';
import settings from './images/settings.png';
import commande from './images/commande.png';

class Navbaradminversio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: true,
      showForm: false,
      sitewebName: '',
      newVersion: '',
      oldVersion: ''
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      navbarVisible: !prevState.navbarVisible
    }));
  };

  handleAjout = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm
    }));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { sitewebName, newVersion, oldVersion } = this.state;

    // Pass the new version details to the parent component
    this.props.addVersion({ sitewebName, newVersion, oldVersion });

    // Reset the form
    this.setState({
      showForm: false,
      sitewebName: '',
      newVersion: '',
      oldVersion: ''
    });
  };

  render() {
    const { navbarVisible, showForm, sitewebName, newVersion, oldVersion } = this.state;

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
              <button className="Ajout" onClick={this.handleAjout}>Ajout</button><br />

              <img className="logout" src={logout} alt="ACM Logo" />
              <Link exact to="https://acm-marketing.tn/" className="parametre">ACM Page</Link><br />
              <img className="settings" src={settings} alt="ACM Logo" />
              <Link exact to="/" className="Déconnexion">Déconnexion</Link><br />
            </div>
          </nav>
        )}
        {showForm && (
          <form className='fomrpro' onSubmit={this.handleSubmit}>
            <p>Nom de siteweb:</p>
            <input
              type="text"
              name="sitewebName"
              placeholder="Nom de siteweb"
              value={sitewebName}
              onChange={this.handleChange}
            />
            <p>Nouvelle version:</p>
            <input
              type="text"
              name="newVersion"
              placeholder="Nouvelle version"
              value={newVersion}
              onChange={this.handleChange}
            />
            <p>Ancienne version:</p>
            <input
              type="text"
              name="oldVersion"
              placeholder="Ancienne version"
              value={oldVersion}
              onChange={this.handleChange}
            />
            <button type="submit">Ajouter</button>
          </form>
        )}
      </div>
    );
  }
}

export default Navbaradminversio;
