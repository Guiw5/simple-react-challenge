import React from 'react'

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
