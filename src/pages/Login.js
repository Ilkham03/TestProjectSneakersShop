import React, { Component } from 'react';
import './login.scss';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
  
    const { username, password } = this.state;
  
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
      
    })
      .then(response => {
        if (response.ok) {
          // Если запрос успешен, сохраняем токен авторизации в localStorage
          return response.json().then(data => {
            localStorage.setItem('token', data.token);
          });
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  
  render() {
    return (
      <div className='form'>
         <form className='form__content' >

          <label>
            <input placeholder='Username' className='input__block' type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
          <label>
            
            <input placeholder='Password' className='input__block'  type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
          <button onSubmit={this.handleSubmit} type="submit">Login</button>
          </form>

      </div>
     
    );
  }
}
