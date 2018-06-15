import React, { Component } from 'react';
// import axios from 'axios';
import { Button } from 'semantic-ui-react';
import './App.css';
import Login from './components/Login';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     users: [],
  //   };
  // }

  componentDidMount() {
    // tested the api //
    // axios.get('/users')
    //   .then(res => (
    //     this.setState({
    //       users: res.data,
    //     })
    //   ));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Monitr</h1>
          <Button className="ui inverted button blue">Login</Button>
        </div>
        <div className="body">
          <Login />
        </div>
        <div className="footer">FOOTER</div>
      </div>
    );
  }
}

export default App;
