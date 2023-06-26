import React, { Component, createRef } from 'react';
import Navbaradmin from './navbaradmin';
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

  componentDidMount() {
    // Check if props contain a selected client
    const { selectedClient } = this.props;
    if (selectedClient) {
      this.setState({ ...selectedClient });
    }
  }

  componentDidUpdate(prevProps) {
    // Check if props have changed and update the state accordingly
    if (prevProps.selectedClient !== this.props.selectedClient) {
      const { selectedClient } = this.props;
      if (selectedClient) {
        this.setState({ ...selectedClient });
      } else {
        this.setState({
          name: '',
          email: '',
          phoneNumber: '',
          birthday: '',
          dateOfAjout: ''
        });
      }
    }
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
          <div className='input1'>
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
          <div className='input2'>
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
          <div className='input3'>
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
    this.formInterfaceRef = createRef();
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
        selectedClientIndex: index
      }, () => {
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
    const { selectedClientIndex, clients } = this.state;
    const selectedClient = selectedClientIndex !== null ? clients[selectedClientIndex] : null;

    return (
      <div>
        <Navbaradmin
          handleAjout={() => this.setState({ showForm: true })}
          handleSuppression={this.handleSuppression}
          handleModif={this.handleModif}
        />
        <p className="activits">les clients de ACM:</p>

        <div className="activitesadmin">
          {clients.map((client, index) => (
            <div className="activit1admin" key={index}>
              <div className="activitadmin">
                <p className="text0">{client.name}</p>
                <p className="text1">{client.email}</p>
                <Link className="btn1" exact to="/Principaleadmin">
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
        {this.state.showForm && (
          <FormInterface
            handleAjout={this.handleAjout}
            selectedClient={selectedClient}
          />
        )}
      </div>
    );
  }
}

export default Admin;
