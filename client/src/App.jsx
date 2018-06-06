import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('/users')
      .then(res => {
        this.setState({
          users: res.data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>{user.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
