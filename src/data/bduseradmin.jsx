import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bduseradmin.css';
import Navbaradminprojet from '../navbaradminprojet';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import bd from '../images/bd.png';

class bduseradmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projects: [],
      showForm: false,
      modifiedProjectIndex: null,
      modifiedProjectName: ''
    };
  }

  componentDidMount() {
    // Retrieve projects from localStorage when the component mounts
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      this.setState({
        projects: JSON.parse(storedProjects)
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      projectName: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { projectName, modifiedProjectIndex } = this.state;
    if (projectName) {
      if (modifiedProjectIndex !== null) {
        this.setState(
          (prevState) => {
            const updatedProjects = [...prevState.projects];
            updatedProjects[modifiedProjectIndex].name = projectName;
            return {
              projectName: '',
              projects: updatedProjects,
              showForm: false,
              modifiedProjectIndex: null
            };
          },
          () => {
            // Update localStorage with the updated projects array
            localStorage.setItem('projects', JSON.stringify(this.state.projects));
          }
        );
      } else {
        const newProject = {
          name: projectName
        };

        this.setState(
          (prevState) => ({
            projectName: '',
            projects: [...prevState.projects, newProject]
          }),
          () => {
            // Update localStorage with the updated projects array
            localStorage.setItem('projects', JSON.stringify(this.state.projects));
          }
        );
      }
    }
  };

  handleDeleteProject = (index) => {
    this.setState(
      (prevState) => {
        const updatedProjects = [...prevState.projects];
        updatedProjects.splice(index, 1);
        return {
          projects: updatedProjects
        };
      },
      () => {
        // Update localStorage with the updated projects array
        localStorage.setItem('projects', JSON.stringify(this.state.projects));
      }
    );
  };

  handleModifyProject = (index) => {
    const { projects } = this.state;
    const modifiedProjectName = projects[index].name;
    this.setState({
      showForm: true,
      modifiedProjectIndex: index,
      modifiedProjectName: modifiedProjectName
    });
  };

  handleFormChange = (event) => {
    this.setState({
      modifiedProjectName: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { modifiedProjectIndex, modifiedProjectName } = this.state;
    if (modifiedProjectName) {
      this.setState(
        (prevState) => {
          const updatedProjects = [...prevState.projects];
          updatedProjects[modifiedProjectIndex].name = modifiedProjectName;
          return {
            projects: updatedProjects,
            showForm: false,
            modifiedProjectIndex: null,
            modifiedProjectName: ''
          };
        },
        () => {
          // Update localStorage with the updated projects array
          localStorage.setItem('projects', JSON.stringify(this.state.projects));
        }
      );
    }
  };

  render() {
    const { projectName, projects, showForm, modifiedProjectName } = this.state;

    return (
      <div className="bduseradminbody">
        <Navbaradminprojet handleSubmit={this.handleSubmit} />

        <div className="not">
          <img className="hind" src={userimg} alt="bd" />
          <p className="usr">client 444</p>
          <p className="mailuser">client444@gmail.com</p>
          <img className="notif" src={bell} alt="bd" />
        </div>
        <p className="activitsps">les activités avec ACM :</p>
        <div className="activit1ps">
          <Link exact to="/" className="voirbd">
            Retour
          </Link>
          <div className="bg">
            <img className="bd" src={bd} alt="bd" />
          </div>
          <p className="text">Hébergement</p>
          <p className="dis">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="activitepss">
          {projects.map((project, index) => (
            <div className="activit2ps" key={index}>
              <p className="nomproj">{project.name}</p>
              <button className="delete" onClick={() => this.handleDeleteProject(index)}>
                Delete
              </button>
              <button className="modif" onClick={() => this.handleModifyProject(index)}>
                Modifier
              </button>
              <Link exact to="/Admin" className="accée">
                Voir accée
              </Link>
            </div>
          ))}
        </div>

        {showForm ? (
          <form className="fomrpro" onSubmit={this.handleFormSubmit}>
            <p>Modifier le nom du projet:</p>
            <input
              type="text"
              name="modifiedProjectName"
              placeholder="Nom du projet"
              value={modifiedProjectName}
              onChange={this.handleFormChange}
            />
            <button className="subbd" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <form className="fomrpro" onSubmit={this.handleSubmit}>
            <p>Ajouter un projet:</p>
            <input
              type="text"
              name="projectName"
              placeholder="Nom du projet"
              value={projectName}
              onChange={this.handleChange}
            />
            <button className="subbd" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default bduseradmin;
