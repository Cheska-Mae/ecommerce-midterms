export default function ProductCard({ product, onClick }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }} onClick={onClick}>
      <img src={product.thumbnail} alt={product.title} width="100%" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}
