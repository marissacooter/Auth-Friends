import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/friendslist");
        this.setState({
          isLoading: false,
        });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div className="Login">
        {this.state.isLoading && <p>Loading...</p>}
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
