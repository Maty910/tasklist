import { useEffect, useState } from 'react'
import { /* getTasks, */ createTask, updateTask, deleteTask, toggleTaskDone } from './api/api'
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

  // Usar solo con el backend
  // const loadTasks = async () => {
  //   setError(null)
  //   setLoading(true)
  //   try {
  //     const data = await getTasks()
  //     setTasks(data)
  //   } catch (err) {
  //     setError(err.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }
 
  // Usar solo con el backend
  // useEffect(() =>{
  //   loadTasks()
  // }, [])

  // useEffect para simular tareas en Netlify
  useEffect(() => {
  // Simulamos datos para poder mostrar la app en producción sin backend
  const mockTasks = [
    {
      id: 1,
      title: 'Estudiar React',
      description: 'Repasar useEffect y componentes controlados',
      done: false,
      createdAt: '2025-07-08T10:00:00Z'
    },
    {
      id: 2,
      title: 'Preparar entrevista técnica',
      description: 'Revisar preguntas comunes y practicar una API REST',
      done: true,
      createdAt: '2025-07-06T15:30:00Z'
    },
    {
      id: 3,
      title: 'Leer documentación de SQLite',
      description: 'Entender cómo funciona en Node.js y sus limitaciones',
      done: false,
      createdAt: '2025-07-07T09:20:00Z'
    },
    {
      id: 4,
      title: 'Subir proyecto a GitHub',
      description: 'Agregar README con capturas y descripción del proyecto',
      done: true,
      createdAt: '2025-07-09T14:10:00Z'
    },
    {
      id: 5,
      title: 'Deploy del frontend en Netlify',
      description: 'Configurar build y probar funcionamiento',
      done: false,
      createdAt: '2025-07-10T11:00:00Z'
    },
    {
      id: 6,
      title: 'Actualizar CV',
      description: 'Agregar experiencia práctica con React y Node.js',
      done: false,
      createdAt: '2025-07-11T08:45:00Z'
    },
    {
      id: 7,
      title: 'Escribir post en LinkedIn',
      description: 'Mostrar el proceso del proyecto y link al deploy',
      done: false,
      createdAt: '2025-07-11T17:15:00Z'
    }
  ]
  setTasks(mockTasks)
}, [])

  const handleCreate = async (data) => {
    setError(null)
    setLoading(true)
    try {
      await createTask(data)
      setSuccess('¡Tarea creada con éxito!')
      // loadTasks()
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
      // loadTasks()
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
      // loadTasks()
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