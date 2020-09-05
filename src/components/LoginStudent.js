import React, {Component} from "react"
import {connect} from "react-redux"
import {loginStudent} from "../actions/loginStudent"
import { Form, Button} from "react-bootstrap";


class LoginStudent extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.login({
        email: this.state.email,
        password: this.state.password,
      });
    }
  
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  
    render() {
      const { email, password } = this.state;
      return (
        <>
            <Form onSubmit={this.handleSubmit} className="loginUser">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.props.emailError}</div>
              </Form.Group>
  
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="password"
                  type="password"
                  name="password"
                  autoComplete={password}
                  value={password}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.props.passwordError}</div>
              </Form.Group>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
        </>
      );
    }
  }
  
  const mapStateToProps = ({ usersReducer }) => {
    return {
      emailError: usersReducer.emailError,
      passwordError: usersReducer.passwordError,
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (formDAta) => dispatch(loginStudent(formDAta, ownProps)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(LoginStudent)
  
//   const customConnectComponent = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Login);
  
//   export default withRouter(customConnectComponent);
  