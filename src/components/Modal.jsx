import "./Modal.css"

export default function Modal({ show, onClose, title, children }) {
  if (!show) return null

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {title && <h3>{title}</h3>}
        <div>{children}</div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
