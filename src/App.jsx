import { useMenuData } from './hooks/useMenuData'
import MenuPage        from './components/Menu/MenuPage'
import './index.css'

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#0b0804] flex items-center justify-center">
      <div className="text-center">
        <img src="/logo.svg" alt="ChiguireFood" className="h-20 w-auto mx-auto mb-6 opacity-40" />
        <div className="flex justify-center mb-3">
          <div className="spinner" />
        </div>
        <p className="label-caps">Cargando menú…</p>
      </div>
    </div>
  )
}

export default function App() {
  const { categories, items, loading } = useMenuData()
  if (loading) return <LoadingScreen />
  return <MenuPage categories={categories} items={items} />
}
