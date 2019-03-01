import React from 'react'

export const Item = props => {
  let { id, value } = props.item
  return (
    <div className="item spacing">
      <li key={id}>{value}</li>
      <i
        className="far fa-trash-alt"
        style={{ color: '#b8b8b8' }}
        title="Remove Item"
        onClick={() => props.onClick(id)}
      />
    </div>
  )
}
