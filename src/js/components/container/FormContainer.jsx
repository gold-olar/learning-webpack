import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from '../presentational/Input.jsx';


class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form id="article-form">
      <Input
          text="Username"
          label="Your Username"
          type="text"
          id="username"
          value={this.state.username}
          handleChange={this.handleChange}
        />

         <Input
          text="Email"
          label="Your Email"
          type="email"
          id="email"
          value={this.state.email}
          handleChange={this.handleChange}
        />


          <Input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default FormContainer;
const wrapper = document.getElementById("create-user-form");
// console.log(wrapper);
wrapper ? ReactDOM.render(<FormContainer/>, wrapper) : false;