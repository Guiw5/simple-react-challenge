import React, { Component } from 'react'
import { SupermarketList } from './components/SupermarketList'
import './App.css'
import config from './config.json'
import {
  deleteItem as deleteItemApi,
  addItem as addItemApi,
  getAllItems as getAllItemsApi
} from './http/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    let items = await this.getItems()
    this.setState({ items })
  }

  getItems = async () => {
    if (config.apiEnable) return await getAllItemsApi()
    else return await this.state.items
  }

  deleteItem = async id => {
    if (config.apiEnable) {
      let items = await deleteItemApi(id)
      console.log('llamada delete ', items)
      this.setState({ items })
    } else {
      this.setState(prevState => ({
        items: prevState.items.filter(i => i.id !== id)
      }))
    }
  }

  addItem = async value => {
    let id = new Date().getTime()
    let item = { id, value }

    if (config.apiEnable) {
      let items = await addItemApi(item)
      this.setState({ items })
    } else {
      this.setState(prevState => ({
        items: [...prevState.items, item]
      }))
    }
  }

  render() {
    return (
      <SupermarketList
        items={this.state.items}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
      />
    )
  }
}

export default App
