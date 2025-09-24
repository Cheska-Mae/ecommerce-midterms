import { useState } from "react"
import Modal from "./Modal.jsx"
import "./ProductDetail.css"

export default function ProductDetail({ product }) {
  const [showModal, setShowModal] = useState(false)

  if (!product) return <p>Loading...</p>

  const handleBuy = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.discountPercentage && <p>Discount: {product.discountPercentage}%</p>}
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>

      {/* Buy button */}
      <button className="buy-btn" onClick={handleBuy}>
        Buy
      </button>

      {/* Modal */}
      <Modal show={showModal} onClose={closeModal} title="Receipt">
        <p>Your order for <b>{product.title}</b> is successful!</p>
      </Modal>
    </div>
  )
}
