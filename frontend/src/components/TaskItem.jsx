function TaskItem ({ task, onToggleDone, onEdit, onDelete }) {
  const date = new Date(task.createdAt).toLocaleDateString('es-AR', {
    day: '2-digit', month: 'short', year: 'numeric'
  })

  return (
    <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleDone(task.id)}
        />
        <span className="checkmark"></span>
        <span className="task-title">{task.title}</span>
      </label>

      <div className='task-meta'>
        <small>Creada el {date}</small>
      </div>

      <p>{task.description}</p>
             
      <div className='actions'>
        {onEdit && (
          <button onClick={() => onEdit(task)}>Editar</button>
        )}
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </li>
  )
}

export default TaskItem