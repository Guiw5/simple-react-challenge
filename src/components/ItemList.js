import React, { Component } from 'react'
import { Item } from './Item'
import { Modal } from './Modal'

export class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  addItem = value => {
    this.props.addItem(value)
    this.toogleModal()
  }

  toogleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
  }

  render() {
    return (
      <div className="App-Body">
        {this.props.items !== null &&
          this.props.items.map(item => (
            <Item
              key={item.id}
              text={item.value}
              onClick={() => this.props.deleteItem(item.id)}
            />
          ))}
        <button
          className="btn primary"
          children="Add Item"
          onClick={this.toogleModal}
        />
        {this.state.showModal ? (
          <Modal onCancel={this.toogleModal} onOk={this.addItem} />
        ) : null}
      </div>
    )
  }
}
