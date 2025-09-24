import ProductCard from "./ProductCard.jsx"

export default function ProductList({ products, onProductClick }) {
  return (
    <div className="product-list" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  )
}
