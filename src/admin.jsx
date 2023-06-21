import React, { Component, createRef } from 'react';
import Navbaradmin from './navbaradmin';
import Footer from './footer';
import './admin.css';
import { Link } from 'react-router-dom';

class FormInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      birthday: '',
      dateOfAjout: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAjout(this.state);
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      birthday: '',
      dateOfAjout: ''
    });
  };

  render() {
    return (
      <div className="form-interface">
        <form onSubmit={this.handleSubmit}>
          <div className='one'>
          <p> Name :</p> 
          <input
            type="text"
            name="name"
            placeholder="Nom du client"
            value={this.state.name}
            onChange={this.handleChange}
          />  
          <p> Email: :</p>
          <input
            type="email"
            name="email"
            placeholder="Email du client"
            value={this.state.email}
            onChange={this.handleChange}
          />
          </div>
          <br />
          <div className='two'>
          <p> PhoneNumber:</p>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Numéro de téléphone"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <p> Birthday:</p>
          <input
            type="text"
            name="birthday"
            placeholder="Date de naissance"
            value={this.state.birthday}
            onChange={this.handleChange}
          />
           </div>
           <div className='three'>
          <p className='dateOfAjouttext'> Date d'ajout :</p>
          <input
          className='dateOfAjout'
            type="text"
            name="dateOfAjout"
            placeholder="Date d'ajout"
            value={this.state.dateOfAjout}
            onChange={this.handleChange}
          />
         
          <button className='last' type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      showForm: false,
      selectedClientIndex: null
    };
    this.formInterfaceRef = createRef(); // Create a ref for the form interface element
  }

  componentDidMount() {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      this.setState({ clients: JSON.parse(storedClients) });
    }
  }

  handleAjout = (newClient) => {
    const { selectedClientIndex, clients } = this.state;
    if (selectedClientIndex !== null) {
      const updatedClients = [...clients];
      updatedClients[selectedClientIndex] = newClient;
      this.setState(
        {
          clients: updatedClients,
          showForm: false,
          selectedClientIndex: null
        },
        () => {
          localStorage.setItem('clients', JSON.stringify(this.state.clients));
        }
      );
    } else {
      this.setState(
        (prevState) => ({
          clients: [...prevState.clients, newClient],
          showForm: false
        }),
        () => {
          localStorage.setItem('clients', JSON.stringify(this.state.clients));
        }
      );
    }
  };

  handleSuppression = (index) => {
    this.setState((prevState) => {
      const updatedClients = [...prevState.clients];
      updatedClients.splice(index, 1);
      return { clients: updatedClients };
    }, () => {
      localStorage.setItem('clients', JSON.stringify(this.state.clients));
    });
  };

  handleModif = (index) => {
    const { clients } = this.state;
    if (index >= 0 && index < clients.length) {
      const selectedClient = clients[index];
      this.setState({
        showForm: true,
        selectedClientIndex: index,
        ...selectedClient
      }, () => {
        // Scroll to the form interface element
        if (this.formInterfaceRef.current) {
          this.formInterfaceRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Navbaradmin
          handleAjout={() => this.setState({ showForm: true })}
          handleSuppression={this.handleSuppression}
          handleModif={this.handleModif}
        />
        <p className="activits">les clients de ACM:</p>

        <div className="activitesadmin">
          {this.state.clients.map((client, index) => (
            <div className="activit1admin" key={index}>
              <div className="activitadmin">
                <p className="text0">{client.name}</p>
                <p className="text1">{client.email}</p>
                <Link className="btn1" exact to="/">
                  Voir plus
                </Link>
                <button
                  className="Supprimer"
                  type="button"
                  onClick={() => this.handleSuppression(index)}
                >
                  Supprimer
                </button>
                <button
                  className="Modifier"
                  type="button"
                  onClick={() => this.handleModif(index)}
                >
                  Modifier
                </button>
              </div>
            </div>
          ))}
        </div>

        <div ref={this.formInterfaceRef} />
        {this.state.showForm && <FormInterface handleAjout={this.handleAjout} />}
        <Footer />
      </div>
    );
  }
}

export default Admin;
