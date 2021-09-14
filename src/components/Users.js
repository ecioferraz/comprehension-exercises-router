import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage, match: { params: { id } }  } = this.props;
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Users</h2>
        <p> { greetingsMessage }, my awesome Users component { id }</p>
      </div>
    );
  }
};

export default Users;
