import React, { PureComponent } from 'react'

export class Modal extends PureComponent {
  state = {
    value: ''
  }

  onOk = () => this.props.onOk(this.state.value)

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    let { value } = this.state
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="modal-title" children="Add Item" />
          <input
            className="input"
            type="text"
            value={value}
            autoFocus
            onChange={this.handleChange}
            onKeyPress={e => e.charCode === 13 && this.onOk()}
          />
          <div className="spacing">
            <button
              className="btn default sm"
              children="Cancel"
              onClick={this.props.onCancel}
            />
            <button
              className={`btn ${value ? 'primary' : 'secondary'} sm`}
              disabled={!value}
              children="Add"
              onClick={this.onOk}
            />
          </div>
        </div>
      </div>
    )
  }
}
