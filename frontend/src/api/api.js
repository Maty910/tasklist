const API_URL = 'http://localhost:3001/api/tasks'

export async function getTasks () {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error al obtener las tareas.')
  }
  return res.json()
}

export async function createTask (task) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error al crear la tarea')
  }
  return res.json()
}

export async function updateTask (id, task) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Error al actualizar la tarea.')
  }
  return res.json()
}

export async function deleteTask (id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Error al eliminar la tarea.')
}

export async function toggleTaskDone (id) {
  const res = await fetch(`${API_URL}/${id}/toggle`, {
    method: 'PATCH'
  })
  if (!res.ok) throw new Error('Error al cambiar el estado de la tarea.')
  return res.json()
}
