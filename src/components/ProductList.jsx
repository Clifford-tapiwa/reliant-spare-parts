import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import ProductCard from './ProductCard'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (!error) setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
