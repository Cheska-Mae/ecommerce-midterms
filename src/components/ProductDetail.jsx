export default function ProductDetail({ product }) {
  if (!product) return <p>Loading...</p>

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.thumbnail} alt={product.title} width="300" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.discountPercentage && <p>Discount: {product.discountPercentage}%</p>}
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
    </div>
  )
}
