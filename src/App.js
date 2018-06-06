import React, { Component } from 'react';
import './App.css';
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: "",
      email: "",
      password: "",
      mobilnumber: "",
      newUser: null
    };    
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    event.persist()
    /* if (event.target.id === "username")
    {
      event.persist()
      axios.get('http://localhost:8000/api/register_user/')
      .then(res=>{
          event.persist()
          if (event.target.value === res.data[4].username)
          {
            console.log(event.target.value)
            console.log("already exists")
            console.log(res.data[4].username)
          }
      })
    } */
  }

 

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });

    axios.post('http://localhost:8000/api/register_user/', { email: this.state.email, username: this.state.username, password: this.state.password, mobile_number: this.state.mobilnumber })
    .then(res => {
        console.log(res);
        console.log(res.data);
      })

    this.setState ({
      isLoading: false,
      username: "",
      email: "",
      password: "",
      mobilnumber: "",      
      newUser: null
    });    
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="username"  bsSize="medium">
          <ControlLabel>User Name</ControlLabel>
          <FormControl
            value={this.state.username}
            onChange={this.handleChange}
            type="input"
          />
        </FormGroup>        
        <FormGroup controlId="email" bsSize="medium">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="medium">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"            
          />
        </FormGroup>
        <FormGroup controlId="mobilnumber" bsSize="medium">
          <ControlLabel>Mobile Number</ControlLabel>
          <FormControl
            value={this.state.mobilnumber}
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>        
         <Button simple color="success">Register</Button>
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        { this.renderForm() }
      </div>
    );
  }
}

export default App;
