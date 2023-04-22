import React, { Component } from 'react'

export default class CounterWithNameClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: 0,
      name: ''
    }
  }

  render() {
    const incrementAge = () => {
      this.setState((currentAge) => {
        return { age: currentAge.age + 1 }
      })
    }

    const decrementAge = () => {
      this.setState((currentAge) => {
        return { age: currentAge.age - 1 }
      })
    }

    return (
      <>
        <span>Class Component:</span>
        <br />
        <br />
        <input
          type='text'
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <br />
        <br />
        <button onClick={incrementAge}>+</button>
        {this.state.age}
        <button onClick={decrementAge}>-</button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old
      </>
    )
  }
}
