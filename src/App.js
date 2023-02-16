import React, { Component } from 'react';
import { Age, CheckBoxF, CheckBoxM, DateBirth, Name, State } from './components';


class App extends Component {
  state = {
    male: false,
    women: false,
    name: '',
    age: '',
    dateOfBirth: '',
    estado: 'Estado',
  };


  handleChange = ({target}) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
  
    this.setState({ 
      [name]: value
    })
  }
 
  
  render(){
    return(
      <>
        <form>
          <CheckBoxF handleChange={ this.handleChange}/>
          <CheckBoxM handleChange={ this.handleChange}/>
          <Name value={this.state.name} handleChange={this.handleChange}/>
          <Age value={this.state.age} handleChange={this.handleChange}/>
          <DateBirth value={this.state.dateOfBirth} handleChange={this.handleChange}/>
          <State value={this.state.estado} handleChange={this.handleChange}/>
        </form>
      </>
    )
  }
}

export default App;
