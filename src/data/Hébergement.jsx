import React, { Component } from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import './Hébergement.css';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';

class Header extends Component {
  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { title, sectionId } = this.props;
    return (
      <h1 className="header" onClick={() => this.scrollToSection(sectionId)}>
        {title}
      </h1>
    );
  }
}

class Hébergement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        adminAccount: {
          login: '',
          password: '',
        },
        superAdminAccount: {
          login: '',
          password: '',
        },
        ftp: {
          login: '',
          password: '',
          rootFolder: '',
          host: '',
        },
        sql: {
          login: '',
          password: '',
          database: '',
          host: '',
          phpMyAdmin: '',
        },
      },
      moduleContent: '',
      ftpContent: '',
      sqlContent: '',
    };
  }

  componentDidMount() {
    // Load form data from localStorage if available
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      this.setState({ userData: JSON.parse(savedUserData) });
    }

    // Load generated content from localStorage if available
    const savedModuleContent = localStorage.getItem('moduleContent');
    const savedFtpContent = localStorage.getItem('ftpContent');
    const savedSqlContent = localStorage.getItem('sqlContent');
    if (savedModuleContent && savedFtpContent && savedSqlContent) {
      this.setState({
        moduleContent: savedModuleContent,
        ftpContent: savedFtpContent,
        sqlContent: savedSqlContent,
      });
    }
  }

  componentDidUpdate() {
    // Save form data and generated content in localStorage
    localStorage.setItem('userData', JSON.stringify(this.state.userData));
    localStorage.setItem('moduleContent', this.state.moduleContent);
    localStorage.setItem('ftpContent', this.state.ftpContent);
    localStorage.setItem('sqlContent', this.state.sqlContent);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { userData } = this.state;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      this.setState({
        userData: {
          ...userData,
          [parent]: {
            ...userData[parent],
            [child]: value,
          },
        },
      });
    } else {
      this.setState({
        userData: {
          ...userData,
          [name]: value,
        },
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Generate the content based on the submitted form data
    const moduleContent = (
      <div id="module">
        <h4>Compte administrateur:</h4>
        <p>Login: <span>{this.state.userData.adminAccount.login}</span></p>
        <p>Mot de passe: <span>{this.state.userData.adminAccount.password}</span></p>

        <h4>Compte Super-administrateur:</h4>
        <p>Login: <span>{this.state.userData.superAdminAccount.login}</span></p>
        <p>Mot de passe: <span>{this.state.userData.superAdminAccount.password}</span></p>
      </div>
    );

    const ftpContent = (
      <div id="ftp">
        <p>Login: <span>{this.state.userData.ftp.login}</span></p>
        <p>Mot de passe: <span>{this.state.userData.ftp.password}</span></p>
        <p>Dossier racine: <span>{this.state.userData.ftp.rootFolder}</span></p>
        <p>Hôte: <span>{this.state.userData.ftp.host}</span></p>
      </div>
    );

    const sqlContent = (
      <div id="sql">
        <p>Login: <span>{this.state.userData.sql.login}</span></p>
        <p>Mot de passe: <span>{this.state.userData.sql.password}</span></p>
        <p>Base: <span>{this.state.userData.sql.database}</span></p>
        <p>Hôte: <span>{this.state.userData.sql.host}</span></p>
        <p>Interface de gestion: <span><a href={this.state.userData.sql.phpMyAdmin}>{this.state.userData.sql.phpMyAdmin}</a></span></p>
      </div>
    );

    // Update the state with the generated content
    this.setState({
      moduleContent,
      ftpContent,
      sqlContent,
    });
  };

  render() {
    const { userData, moduleContent, ftpContent, sqlContent } = this.state;
    return (
      <div>
        <div className="heb">
          <img className="hind" src={userimg} alt="bd" />
          <p className="usr">client 444</p>
          <p className="mailuser">client444@gmail.com</p>
          <img className="notif" src={bell} alt="bd" />
        </div>

        <div className="head">
          <Link to="/bduseradmin" className="Retour">
            Retour
          </Link>
          <a href="#module">Module</a>
          <a href="#ftp">FTP</a>
          <a href="#sql">SQL</a>
        </div>

        <div className="container">
          <div className="content">
            <Header title="Module" sectionId="module" />
            {moduleContent && (
              <div id="module">
                {moduleContent}
              </div>
            )}

            <Header title="FTP" sectionId="ftp" />
            {ftpContent && (
              <div id="ftp">
                {ftpContent}
              </div>
            )}

            <Header title="SQL" sectionId="sql" />
            {sqlContent && (
              <div id="sql">
                {sqlContent}
              </div>
            )}

            <form onSubmit={this.handleSubmit}>
              <div className="form-section">
                <h4>Compte administrateur:</h4>
                <label>
                  Login:
                  <input
                    type="text"
                    name="adminAccount.login"
                    value={userData.adminAccount.login}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Mot de passe:
                  <input
                    type="password"
                    name="adminAccount.password"
                    value={userData.adminAccount.password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-section">
                <h4>Compte Super-administrateur:</h4>
                <label>
                  Login:
                  <input
                    type="text"
                    name="superAdminAccount.login"
                    value={userData.superAdminAccount.login}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Mot de passe:
                  <input
                    type="password"
                    name="superAdminAccount.password"
                    value={userData.superAdminAccount.password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-section">
                <h4>FTP</h4>
                <label>
                  Login:
                  <input
                    type="text"
                    name="ftp.login"
                    value={userData.ftp.login}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Mot de passe:
                  <input
                    type="password"
                    name="ftp.password"
                    value={userData.ftp.password}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Dossier racine:
                  <input
                    type="text"
                    name="ftp.rootFolder"
                    value={userData.ftp.rootFolder}
                    onChange={this.handleChange}
                  />
                </label>
                <label><br />
                  Hôte:
                  <input
                    type="text"
                    name="ftp.host"
                    value={userData.ftp.host}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-section">
                <h4>SQL</h4>
                <label>
                  Login:
                  <input
                    type="text"
                    name="sql.login"
                    value={userData.sql.login}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Mot de passe:
                  <input
                    type="password"
                    name="sql.password"
                    value={userData.sql.password}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Base:
                  <input
                    type="text"
                    name="sql.database"
                    value={userData.sql.database}
                    onChange={this.handleChange}
                  />
                </label>
                <label><br />
                  Hôte:
                  <input
                    type="text"
                    name="sql.host"
                    value={userData.sql.host}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Interface de gestion:
                  <input
                    type="text"
                    name="sql.phpMyAdmin"
                    value={userData.sql.phpMyAdmin}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <Navbar />
      </div>
    );
  }
}

export default Hébergement;
