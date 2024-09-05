import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

class Login extends React.Component {
  state = initialState;
  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name">Name</label>

        <input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.emailError}
        </div>
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.passwordError}
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }
    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };
}
export default Login;
