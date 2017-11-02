import React, { Component } from 'react';

import './RegistrationForm.css';

class RegistrationForm extends Component {
  submit(event) {
    event.preventDefault();
    console.log('submit', this.testInput.value );
  }
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(event) {
    console.log('email was changed', event.target.value);
    this.setState({email: event.target.value});
  }

  render() {
    return (
        <form>
          <input
            type="text"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="emailField"
            ref={(input) => this.testInput = input}
          />
          <button onClick={this.submit.bind(this)} className='submitBtn'>Save</button>
        </form>
    );
  }

}

export default RegistrationForm;