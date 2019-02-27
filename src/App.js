import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{ id: 1, value: 'Tu Vieja' }],
      showModal: false
    }
  }

  render() {
    let len = this.state.items.length

    return (
      <div className="App">
        <div className="App-Content">
          <div className="App-Header">
            <div className="App-Title">{'Supermarket List'}</div>
            <div className="App-Subtitle">
              {`${len} ITEM${len !== 1 ? 'S' : ''}`}
            </div>
          </div>
          {this.state.items.map(item => (
            <Item key={item.id} text={item.value} />
          ))}
          <button
            onClick={() => this.setState({ showModal: !this.state.showModal })}
          >
            Add Item
          </button>
          {this.state.showModal ? <Modal /> : null}
        </div>
      </div>
    )
  }
}

export default App

export const Item = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '300px',
        padding: '10px',
        backgroundColor: '#fff',
        fontSize: '13px',
        fontWeight: '800'
      }}
    >
      <li key={props.id}>{props.text}</li>
      <i
        className="fas fa-trash-alt"
        onClick={() => props.onClick(props.key)}
      />
    </div>
  )
}

export const Modal = () => {
  return (
    <div>
      <div>Header</div>
      <input type="text" />
      <div>Footer</div>
    </div>
  )
}
