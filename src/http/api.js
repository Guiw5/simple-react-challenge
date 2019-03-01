import { delay } from 'q'

export const initItems = async () => {
  let items = [{ id: 1, value: 'Frits & Cheese' }]
  localStorage.setItem('items', JSON.stringify(items))
  delay(2000)
  return items
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
  delay(2000)
  return items
}

export const deleteItem = async id => {
  let prevItems = JSON.parse(localStorage.getItem('items'))
  let items = prevItems.filter(i => i.id !== id)
  localStorage.setItem('items', JSON.stringify(items))
  delay(2000)
  return items
}
