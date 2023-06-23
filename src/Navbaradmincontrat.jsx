import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbaradminprojet.css';
import logoacm from './images/logoacm.png';
import logout from './images/logout.png';
import settings from './images/settings.png';
import commande from './images/commande.png';

class Navbaradmincontrat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: true,
      showForm: false,
      projectName: '',
      selectedFile: null
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
      projectName: event.target.value
    });
  };

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { projectName } = this.state;

    // Create a new contract object
    const newContract = {
      projectName,
      date: new Date().toLocaleDateString()
    };

    // Pass the new contract to the parent component
    this.props.addContract(newContract);

    // Reset the form
    this.setState({
      showForm: false,
      projectName: '',
      selectedFile: null
    });
  };

  render() {
    const { navbarVisible, showForm } = this.state;

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
              <Link exact to="/Login" className="Déconnexion">Déconnexion</Link><br />
            </div>
          </nav>
        )}
        {showForm && (
          <form className='fomrpro' onSubmit={this.handleSubmit}>
            <p>Nom du projet:</p>
            <input
              type="text"
              name="projectName"
              placeholder="Nom du projet"
              value={this.state.projectName}
              onChange={this.handleChange}
            />
            <input
              type="file"
              name="selectedFile"
              onChange={this.handleFileChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Navbaradmincontrat;
