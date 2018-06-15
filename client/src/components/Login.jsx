
import React, { Component } from 'react';
// import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';
import './Login.css';

class Login extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="login">
        <h1>Join to stay on top of your</h1>
        <h1>credit card balances!</h1>
        <Form>
          <Form.Field>
            <Input icon="user outline" iconPosition="left" placeholder="User Name" />
          </Form.Field>
          <Form.Field>
            <Input icon="envelope outline" iconPosition="left" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <Input icon="key" iconPosition="left" type="password" placeholder="Password" />
          </Form.Field>
          <Button type="submit" className="ui inverted button blue">Join</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
