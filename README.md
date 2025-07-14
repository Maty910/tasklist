# TaskList App 📝

Una aplicación full‑stack para gestionar tareas, creada como parte del challenge de ingreso a ForIT.

---

## 📖 Descripción

TaskList App te permite:
- **Crear**, **leer**, **actualizar** y **eliminar** tareas (CRUD).
- Marcar tareas como completadas (`done` boolean).
- Persistir datos en **SQLite3** con Node.js + Express.
- Interfaz en **React** (Vite) con componentes reutilizables.
- Despliegue del frontend en Netlify usando datos mock.

---

## 📂 Estructura del proyecto

```
tasklist/
├── backend/
│   ├── db/
│   │   └── db.js             # Conexión y creación de tabla SQLite
│   ├── utils/
│   │   └── validators.js     # Validaciones de título/descr.
│   ├── .env.example          # Ejemplo de variables de entorno
│   ├── index.js              # Servidor Express y rutas /api/tasks
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js        # Funciones fetch a la API
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── DeleteModal.jsx
│   │   │   ├── FloatingButton.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   ├── .env.example          # Ejemplo de VITE_API_URL
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Instalación y ejecución local

### Backend

1. Entra a la carpeta `backend/`  
2. Crea un archivo `.env` copiando el ejemplo:
   ```ini
   PORT=3001
   DB_PATH=tasks.db
   ```
3. Instala dependencias:
   ```bash
   pnpm install
   ```
4. Arranca el servidor:
   ```bash
   pnpm dev
   ```
   La API quedará disponible en `http://localhost:3001/api/tasks`.

### Frontend

1. Entra a la carpeta `frontend/`  
2. Crea un archivo `.env` copiando el ejemplo:
   ```ini
   VITE_API_URL=http://localhost:3001/api
   ```
3. Instala dependencias:
   ```bash
   pnpm install
   ```
4. Arranca la app:
   ```bash
   pnpm dev
   ```
   La interfaz se abrirá en `http://localhost:5173`.

---

## 🌐 Despliegue

- **Frontend mock** (sin backend):  
  ![Tasklist](https://tasklistmaty.netlify.app/) 

---

## 📝 Endpoints de la API

Todas las rutas usan el prefijo `/api/tasks`:

| Método | Ruta                     | Descripción                            |
| ------ | ------------------------ | -------------------------------------- |
| GET    | `/api/tasks`             | Obtener lista de todas las tareas      |
| POST   | `/api/tasks`             | Crear nueva tarea                      |
| PUT    | `/api/tasks/:id`         | Actualizar título/descr. de una tarea  |
| DELETE | `/api/tasks/:id`         | Borrar una tarea                       |
| PATCH  | `/api/tasks/:id/toggle`  | Alternar estado `done` de la tarea     |

---

## 💾 Variables de entorno

### backend/.env.example
```ini
PORT=3001
DB_PATH=tasks.db
```

### frontend/.env.example
```ini
VITE_API_URL=http://localhost:3001/api
```

---

## 🛠️ Tecnologías

- **Backend**: Node.js, Express, sqlite3  
- **Frontend**: React, Vite, fetch API  
- **Estilos**: CSS moderno con custom properties  
- **Deploy**: Netlify (frontend mock)

---

## 🖼️ Capturas de pantalla

## Screenshots Desktop Web:

<img width="850" height="auto" alt="image" src="https://github.com/user-attachments/assets/61d4e09f-391d-42ef-abde-e49b21667fb6" />

<img width="850" height="auto" alt="image" src="https://github.com/user-attachments/assets/0a424226-0ed2-4a16-956d-6dcb3a2fb413" />

## Screenshots Mobile:

<img width="auto" height="450" alt="image" src="https://github.com/user-attachments/assets/3b16a7d6-1cc4-4143-bef8-04b8bfa5e2c0" />

<img width="auto" height="450" alt="image" src="https://github.com/user-attachments/assets/64cfb15f-af05-4a1a-bc72-42f10941d71a" />

<img width="auto" height="450" alt="image" src="https://github.com/user-attachments/assets/dfb0a8a1-6a7c-434b-b27d-ad98de8d0199" />

---

## 📑 Git Flow

```bash
git init
git add .
git commit -m "feat: backend con SQLite y frontend React"
git branch -M main
git remote add origin https://github.com/Maty910/tasklist.git
git push -u origin main
```

---

## 🎓 Autor

**Matías Chacón**  
– Desarrollador Web FullStack  
[GitHub](https://github.com/Maty910) | [LinkedIn]( https://www.linkedin.com/in/matias-chacon-t934/) | matychacong@gmail.com

---

