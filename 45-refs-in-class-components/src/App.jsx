import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    this.input.focus()
  }

  render() {
    return (
      <>
        <label>
          Name:{' '}
          <input
            ref={(input) => (this.input = input)}
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </label>
      </>
    )
  }
}

export default App
