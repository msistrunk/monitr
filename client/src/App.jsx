import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
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
      .then(res => (
        this.setState({
          users: res.data,
        })
      ));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Monitr</h1>
          <button className="ui inverted button blue">Login</button>
        </div>
        <div className="body">
          <Button>TEST BUTTON</Button>
          {this.state.users.map(user =>
            <li key={user.id} > { user.username }</li>)}
        </div>
        <div className="footer">FOOTER</div>
      </div>
    );
  }
}

export default App;
