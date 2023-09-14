import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;
  
    try {
      // Make an API request to your registration endpoint
      const response = await fetch("http://localhost:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });
  
      if (response.ok) {
        const json = await response.json();
        window.localStorage.setItem("token", json.token);
        alert(`Token: ${json.token}`);

        // Everything else goes here
        // Todo: Redirect to feed page
      } else {
        // Oh no, It appears the response is not ok
        // Do some error handling here
        alert("Failed to register: Response is not OK");
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle network or other errors
    }
  };

  render() {
    return (
      <div>
        <h2>Registration Page</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;