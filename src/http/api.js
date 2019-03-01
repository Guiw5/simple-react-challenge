import { delay } from 'q'
// import axios from 'axios'

// const http = axios.create({
//   baseURL: 'http://localhost:55337/api',
//   responseType: 'json'
// })

export const initItems = () => {
  let firstItem = { id: 1, value: 'Frits & Cheese' }
  localStorage.setItem('items', JSON.stringify([firstItem]))
}

export const getAllItems = async () => {
  let items = JSON.parse(localStorage.getItem('items'))
  delay(2000)
  return items
}

export const addItem = async item => {
  let prevItems = JSON.Parse(localStorage.getItem('items'))
  let items = [...prevItems, item]
  localStorage.setItem('items', JSON.stringify(items))
}

export const deleteItem = async id => {
  let prevItems = JSON.parse(localStorage.getItem('items'))
  let items = prevItems.filter(i => i.id !== id)
  localStorage.setItem('items', JSON.stringify(items))
}
