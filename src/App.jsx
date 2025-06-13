import './App.css'
import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Reliant Spare Parts</h1>
        <p>📍 1924 Chikanga Phase 2, Mutare</p>
        <p>📞 +971529141298 / +263772134516</p>
        <p>
          📱 <a href="https://wa.me/971529141298">WhatsApp</a> |
          <a href="https://instagram.com/reliant_spare_parts" target="_blank">Instagram</a>
        </p>
      </header>

      <AddProductForm />
      <ProductList />

      <footer>
        <p>&copy; 2025 Reliant Spare Parts</p>
      </footer>
    </div>
  )
}

export default App
