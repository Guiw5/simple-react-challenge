import React, { Component, PureComponent } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{ id: 1, value: 'Frits & Cheese' }],
      showModal: false
    }
  }

  deleteItem = key => {
    this.setState(prevState => ({
      ...prevState,
      items: prevState.items.filter(i => i.id !== key)
    }))
  }

  addItem = value => {
    let item = {
      id: new Date().getTime(),
      value
    }

    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
      items: [...prevState.items, item]
    }))
  }

  showModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal
    }))
  }

  render() {
    let len = this.state.items.length

    return (
      <div className="App">
        <div className="App-Content">
          <div className="App-Header">
            <div className="App-Title">{'Supermarket List'}</div>
            <div className="App-Subtitle">
              {len === 0
                ? 'LIST IS EMPTY'
                : `${len} ITEM${len !== 1 ? 'S' : ''}`}
            </div>
          </div>
          {this.state.items.map(item => (
            <Item
              key={item.id}
              text={item.value}
              onClick={() => this.deleteItem(item.id)}
            />
          ))}
          <button
            className="btn primary"
            children="Add Item"
            onClick={this.showModal}
          />
          {this.state.showModal ? (
            <Modal onCancel={this.showModal} onOk={this.addItem} />
          ) : null}
        </div>
      </div>
    )
  }
}

export default App

export const Item = props => {
  return (
    <div className="item spacing">
      <li key={props.id}>{props.text}</li>
      <i
        className="far fa-trash-alt"
        style={{ color: '#b8b8b8' }}
        onClick={() => props.onClick(props.id)}
      />
    </div>
  )
}

export class Modal extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.okButton = React.createRef()
  }

  onOk = () => {
    let itemValue = this.input.current.value
    this.props.onOk(itemValue)
  }

  onChange = () => {
    this.okButton.current.className = this.input.current.value
      ? 'btn primary sm'
      : 'btn secondary sm'
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="modal-title" children="Add Item" />
          <input
            className="input"
            type="text"
            ref={this.input}
            onChange={this.onChange}
          />
          <div className="spacing">
            <button
              className="btn default sm"
              children="Cancel"
              onClick={this.props.onCancel}
            />
            <button
              className="btn secondary sm"
              children="Add"
              ref={this.okButton}
              onClick={this.onOk}
            />
          </div>
        </div>
      </div>
    )
  }
}
