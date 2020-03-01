import React from "react";
import "./App.css";

const DUMMY_DATA = [
  {
    senderId: "Joanna",
    text: "Hello, I need more information!"
  },
  {
    senderId: "Admin Sara",
    text: "We are here to help!"
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA
    };
  }

  sendMessage(message) {
    this.printUserMessage(message);
    this.getChatResponse(message);
  }

  printUserMessage(message) {
    console.log(this.state.messages);
    console.log("user");
    const newMessage = { senderId: "user", text: message };
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage]
    }));
  }

  getChatResponse(message) {
    console.log(this.state.messages);
    console.log("BOT");
    // fetch istead of echoing user message
    const newMessage = { senderId: "bot", text: message };
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage]
    }));
  }

  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
            <li key={message.id} className={`message-${message.senderId}`}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

export default App;
