function validateTaskData (data) {
  const { title, description } = data

  if (typeof title !== 'string' || title.trim() === '') {
    return 'El título debe ser un string y no estar vacío.'
  }

  if (title.length > 120) {
    return 'El título no puede superar los 120 caracteres.'
  }

  if (typeof description !== 'string' || description.trim() === '') {
    return 'La descripción debe ser un string y no estar vacío.'
  }

  if (description.length > 600) {
    return 'La descripción no puede superar los 600 caracteres.'
  }

  return null
}

module.exports = { validateTaskData }
