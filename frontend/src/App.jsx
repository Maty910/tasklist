import { useEffect, useState } from 'react'
import { getTasks, createTask, updateTask, deleteTask, toggleTaskDone } from './api/api'
import TaskForm from './components/TaskForm'
import DeleteModal from './components/DeleteModal'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function App () {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState(null)

  const loadTasks = async () => {
    setError(null)
    setLoading(true)
    try {
      const data = await getTasks()
      setTasks(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() =>{
    loadTasks()
  }, [])

  const handleCreate = async (data) => {
    setError(null)
    setLoading(true)
    try {
      await createTask(data)
      setSuccess('¡Tarea creada con éxito!')
      loadTasks()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
      setTimeout(() => setSuccess(null), 3000)
    }
  }

  const handleUpdate = async (data) => {
    setError(null)
    setLoading(true)
    try {
      await updateTask(editingTask.id, data)
      setSuccess('¡Tarea actualizada!')
      setEditingTask(null)
      loadTasks()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
      setTimeout(() => setSuccess(null), 3000)
    }
  }

  const confirmDelete = async () => {
    try {
      await deleteTask(taskToDelete)
      setSuccess('Tarea eliminada')
      loadTasks()
    } catch (err) {
      setError(err.message)
    } finally {
      setShowModal(false)
      setTaskToDelete(null)
      setTimeout(() => setSuccess(null), 3000)
    }
  }

  const openModal = (id) => {
    setTaskToDelete(id)
    setShowModal(true)
  }

  const handleToggleDone = async (id) => {
    setError(null)
    try {
      setTasks(prev =>
        prev.map(task => task.id === id ? {...task, done: !task.done } : task)
      )
      await toggleTaskDone(id)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const pendingTasks = tasks.filter(t => !t.done)
  const completedTasks = tasks.filter(t => t.done)

  return (
    <div className='app-container'>
      <Header />

      <div className='task-container'>
        {error && <div className="message message--error">{error}</div>}
        {success && <div className="message message--success">{success}</div>}
        {loading && <div className="loader"></div>}

        <TaskForm
          onSubmit={editingTask ? handleUpdate : handleCreate}
          initialData={editingTask}
          cancelEdit={() => setEditingTask(null)}
        />

        <TaskList 
          tasks={pendingTasks}
          title={"Tareas pendientes"}
          emptyMessage={"🎉 ¡No tenés tareas pendientes!"}
          onToggleDone={handleToggleDone}
          onEdit={setEditingTask}
          onDelete={openModal}
        />
        
        {completedTasks.length > 0 && (
          <TaskList 
            tasks={completedTasks}
            title={"Tareas terminadas"}
            emptyMessage={"No tenés ninguna tarea terminada, ponete con eso"}
            onToggleDone={handleToggleDone}
            onEdit={null}
            onDelete={openModal}
          />
        )}
      </div>

      <FloatingButton />
      <Footer />

      <DeleteModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default App