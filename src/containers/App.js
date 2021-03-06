import React, { Component } from 'react';
import Card from '../components/Card'
import Search from '../components/Search'
import Container from '../components/Container'



class App extends Component {

  constructor() {
    super()
    this.state = {
      searchBox: '',
      users: []
    }
  }







  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ users: user }))
  }


  searchBox = (e) => {
    


    this.setState({ searchBox: e.target.value })
  }

  render() {
    const filteredRobots = this.state.users.filter(user => {
      return user.name.toUpperCase().includes(this.state.searchBox.toUpperCase())
    })



    return (
      <>
        <h1 style={{textAlign: 'center'}}>Robot Friend Search</h1>
        <Search searchBox={this.searchBox} />
        <Container>
        <Card users={filteredRobots} />
        </Container>
      </>
    )
  }
}


export default App;
