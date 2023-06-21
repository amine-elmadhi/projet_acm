import React, { Component } from 'react';
import './commande.css';
import Navbar from './navbar';
import Footer from './footer';

class Commande extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputText: ''
    };
  }
// to make message still after refreshing
  componentDidMount() {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      this.setState({ messages: JSON.parse(storedMessages) });
    }
  }

  componentDidUpdate() {
    const { messages } = this.state;
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  sendMessage = () => {
    const { inputText, messages } = this.state;
    if (inputText.trim() !== '') {
      const newMessage = {
        sender: 'client',
        text: inputText,
        date: new Date().toLocaleString() // the date
      };
      const updatedMessages = [...messages, newMessage];
      this.setState({ messages: updatedMessages, inputText: '' });
    }
  }

  renderMessages = () => {
    const { messages } = this.state;
    return messages.map((message, index) => (
      <li key={index} className={message.sender}>
        <div className="message-content">
          <span className="message-text">{message.text}</span>
          <span className="message-date">{message.date}</span> 
        </div>
      </li>
    ));
  }

  render() {
    const { inputText } = this.state;

    return (
      <div>
        <Navbar />
        <div className='activitescnt'>
          <ul className='chat-messages'>
            {this.renderMessages()}
          </ul>
          <div className='chat-input'>
            <input
              type='text'
              value={inputText}
              onChange={this.handleInputChange}
              placeholder='Type your message...'
            />
            <button className='btncm' onClick={this.sendMessage}>
              Send
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Commande;
