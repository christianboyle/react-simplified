import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 21
    }
  }

  render() {
    const handleClick = () => {
      this.setState((currentState) => {
        return { count: currentState.count + 1 }
      })
    }

    return (
      <>
        <button onClick={handleClick}>Increment</button>
        <br />
        <br />
        Count: {this.state.count}
      </>
    )
  }
}
