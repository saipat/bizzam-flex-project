import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},
      demo: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

  }

  // Once the user has been authenticated, redirect to the BizZam page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/login');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors});
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
  }

  demoLogin() {
    let userInfo = {
      username: 'DemoUser',
      password: '123456',
    };
    this.setState({demo: true});
    this.props.login(userInfo);
    
  }
  
  // Render the session errors if there are any
  renderErrors() {
      if (this.state.demo === false) {
          return (
            <ul className="form-errors">
              {Object.keys(this.state.errors).map((error, i) => (
                <li key={`error-${i}`}>
                  {this.state.errors[error]}
                </li>
              ))}
            </ul>
          )
      } else {
        return (
          <ul></ul>
        )
      }
    }

  render() {
    return <div className="login-form-container">
			<form onSubmit={this.handleSubmit} className="login-form">
				<div className="log-in">
          <label className="labels">
              USERNAME
              <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username" className="input-fields input-field-1"/>
					</label>
					<br />
          <label className="labels">
              PASSWORD
              <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="input-fields input-field-1"/>
					</label>

					<br />
          <input type="submit" value="Login" className="form-btn login-btn"/>
          <button type='demo-submit' id='demo-login-btn' onClick={this.demoLogin} className='form-btn login-btn demo-btn' value='Sign in as a guest'>Demo Login</button>

					{this.renderErrors()}
				</div>
			</form>
		</div>;
  }
}

export default withRouter(LoginForm);