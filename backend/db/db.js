require('dotenv').config()

const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbFile = process.env.DB_PATH
  ? path.resolve(__dirname, process.env.DB_PATH)
  : path.resolve(__dirname, 'tasks.db')

const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error('❌ Error al conectar con SQLite:', err.message)
  } else {
    console.log('✅ Conectado a la base de datos SQLite.')
  }
})

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      done INTEGER DEFAULT 0,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP  
    )
  `)
})

module.exports = db
