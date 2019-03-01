import React, { PureComponent } from 'react'

export class Modal extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.okButton = React.createRef()
  }
  componentDidMount() {
    this.input.current.focus()
  }
  onOk = () => {
    let itemValue = this.input.current.value
    this.props.onOk(itemValue)
  }
  onChange = () => {
    let className = this.okButton.current.className
    if (this.input.current.value) {
      //change to enable color
      if (!className.includes('primary'))
        this.okButton.current.className = 'btn primary sm'
    } else {
      //change to disable color
      if (!className.includes('secondary'))
        this.okButton.current.className = 'btn secondary sm'
    }
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
            onKeyPress={e => e.charCode === 13 && this.onOk()}
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
