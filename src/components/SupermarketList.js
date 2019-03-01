import React, { PureComponent } from 'react'
import { Header } from './Header'
import { ItemList } from './ItemList'

export const SupermarketList = props => {
  let len = props.items ? props.items.length : 0
  return (
    <div className="App">
      <div className="App-Content">
        <Header
          title={'Supermarket List'}
          subtitle={
            len === 0 ? 'LIST IS EMPTY' : `${len} ITEM${len !== 1 ? 'S' : ''}`
          }
        />
        <ItemList
          items={items}
          deleteItem={props.deleteItem}
          addItem={props.addItem}
        />
      </div>
    </div>
  )
}
