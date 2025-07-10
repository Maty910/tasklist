import TaskItem from './TaskItem'

function TaskList({ tasks, title, emptyMessage, onToggleDone, onEdit, onDelete }) {
  return (
    <>
      <h2>{title}</h2>
      {tasks.length === 0 ? (
        <div className='empty-state'>
          <p>{emptyMessage}</p>
        </div>
      ) : (
        <ul className='task-list'>
          {tasks.map(task => (
            <TaskItem 
              key={task.id}
              task={task}
              onToggleDone={onToggleDone}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default TaskList