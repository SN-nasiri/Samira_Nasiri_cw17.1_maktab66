import React, { Component } from 'react';
import TodoList from './component/TodoList'
import Timer from './component/Timer';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '1',
      profiles: []
    }
  }

  componentDidMount() {
    fetch('/json/profiles.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({profiles:data})
    })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <Timer />

          <div className='radio-box'>
            {this.state.profiles.map((profile, index) => {
              return (
                <Form.Check 
                  id={profile.id}
                  label={profile.name}
                  name='profile'
                  type='radio'
                  onChange={(e) => {
                    this.setState({currentUser: e.target.id})
                  }}
                />)
            })}
          </div>

          <TodoList user={this.state.currentUser}/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
