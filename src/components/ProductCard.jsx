export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
