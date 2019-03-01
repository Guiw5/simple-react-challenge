import { delay } from 'q'

export const getAllItems = async () => {
  let items = JSON.parse(localStorage.getItem('items'))
  await delay(200)
  return items
}

export const addItem = async item => {
  let prevItems = JSON.parse(localStorage.getItem('items'))
  let items = prevItems ? [...prevItems, item] : [item]
  localStorage.setItem('items', JSON.stringify(items))
  await delay(100)
  return items
}

export const deleteItem = async id => {
  let prevItems = JSON.parse(localStorage.getItem('items'))
  let items = prevItems.filter(i => i.id !== id)
  localStorage.setItem('items', JSON.stringify(items))
  await delay(100)
  return items
}
