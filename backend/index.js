const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const { validateTaskData } = require('./utils/validators')

const app = express()
app.use(cors())
app.use(express.json())

//  GET /api/tasks para devolver todas las tareas
app.get('/api/tasks', (req, res) => {
  db.all('SELECT * FROM tasks ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message })

    const tasks = rows.map(t => ({
      ...t,
      done: Boolean(t.done)
    }))

    res.json(tasks)
  })
})

//  POST /api/tasks para crear una nueva tarea
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body

  const error = validateTaskData({ title, description })
  if (error) {
    return res.status(400).json({ error })
  }

  db.run(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [title, description],
    function (err) {
      if (err) return res.status(500).json({ error: err.message })

      res.status(201).json({
        id: this.lastID,
        title,
        description,
        done: false,
        createdAt: new Date().toISOString()
      })
    }
  )
})

//  PUT /api/tasks/:id para actualizar una tarea existente.
app.put('/api/tasks/:id', (req, res) => {
  const { title, description } = req.body
  const { id } = req.params

  const error = validateTaskData({ title, description })
  if (error) return res.status(400).json({ error })

  db.run(
    'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
    [title, description, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message })
      res.json({ id, title, description })
    }
  )
})

//  DELETE /api/tasks/:id para borrar una tarea
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params

  db.run('DELETE FROM tasks WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message })
    res.status(204).end()
  })
})

app.patch('/api/tasks/:id/toggle', (req, res) => {
  const { id } = req.params
  db.get('SELECT done FROM tasks WHERE id = ?', [id], (err, row) => {
    if (err || !row) return res.status(404).json({ error: 'Tarea no encontrada' })

    const newDone = row.done ? 0 : 1

    db.run('UPDATE tasks SET done = ? WHERE id = ?', [newDone, id], function (err) {
      if (err) return res.status(500).json({ error: err.message })

      res.json({ id: Number(id), done: Boolean(newDone) })
    })
  })
})

//  Arrancar servidor
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`)
})
