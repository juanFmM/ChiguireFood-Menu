import { useState, useEffect } from 'react'
import { initialCategories, initialItems } from '../data/initialMenu'

const STORAGE_KEY = 'chiguirefood_menu'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function saveToStorage(categories, items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ categories, items }))
}

export function useMenuData() {
  const [categories, setCategories] = useState([])
  const [items,      setItems]      = useState([])
  const [loading,    setLoading]    = useState(true)

  useEffect(() => {
    const stored = loadFromStorage()
    if (stored) {
      setCategories(stored.categories)
      setItems(stored.items)
    } else {
      setCategories(initialCategories)
      setItems(initialItems)
      saveToStorage(initialCategories, initialItems)
    }
    setLoading(false)
  }, [])

  return { categories, items, loading }
}
