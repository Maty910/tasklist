import { useState, useEffect } from "react"

function DeleteModal ({ isOpen, onClose, onConfirm }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setVisible(true)
    } else {
      setTimeout(() => setVisible(false), 300)
    }
  }, [isOpen])

  if (!isOpen && !visible) return null

  return (
    <div className="modal-overlay">
      <div className={`modal ${isOpen ? 'fade-in' : 'fade-out'}`}>
        <h3>¿Estás seguro que deseas eliminar la tarea?</h3>
        <p>Esta acción no se puede deshacer.</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-btn">Eliminar</button>
          <button onClick={onClose} className="cancel-btn">Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal