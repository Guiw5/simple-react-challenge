import React from 'react'

export const Header = props => {
  return (
    <div className="App-Header">
      <div className="App-Title">{props.title}</div>
      <div className="App-Subtitle">{props.subtitle}</div>
    </div>
  )
}
