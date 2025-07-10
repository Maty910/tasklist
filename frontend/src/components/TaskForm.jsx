import { useEffect, useState } from 'react'
import './../TaskForm.css'

function TaskForm ({ onSubmit, initialData = null, cancelEdit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setDescription(initialData.description)
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) {
      setError('Todos los campos son obligatorios.')
      return
    }

    setError(null)
    onSubmit({ title, description })

    if(!initialData) {
      setTitle('')
      setDescription('')
    }
  }
  
  return (
    <form className='form-container' onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>{initialData ? 'Editar tarea' : 'Crear nueva tarea'}</h2>

      {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}

      <div>
        <input 
          id='title'
          name='title'
          type='text'
          placeholder='Título'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <textarea 
          name="description" 
          id="description" 
          placeholder='Descripción'
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <button type='submit'>{initialData ? 'Guardar cambios' : 'Crear tarea'}</button>

      {initialData && (
        <button type="button" onClick={cancelEdit} style={{ marginLeft: '1rem' }}>
          Cancelar
        </button>
      )}
    </form>
  )
}

export default TaskForm