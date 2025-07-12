# TaskList - Challenge Academia ForIT 2025

## Descripción

Aplicación de lista de tareas desarrollada como parte del **Challenge de ingreso a Academia ForIT 2025**. Demuestra conocimientos básicos de:

* **Git**
* **JavaScript**
* **Node.js** (Express)
* **React** (Vite)
* **SQLite3** (persistencia opcional en backend)

---

## Estructura del repositorio

```
/ (raíz)
├── backend/           # Servidor API con Express
├── frontend/          # App frontend con React y Vite
├── netlify.toml       # Configuración de deploy en Netlify
├── .gitignore
├── package.json       # Configuración monorepo básica
└── pnpm-lock.yaml     # Lockfile de dependencias
```

---

## Descripción del Challenge

**Objetivo:** Crear una aplicación básica de lista de tareas que demuestre:

* Uso de Git en un proyecto Node.js
* Conocimientos de Express y creación de endpoints REST:

  * GET `/api/tasks`
  * POST `/api/tasks`
  * PUT `/api/tasks/:id`
  * DELETE `/api/tasks/:id`
* Almacenamiento en memoria (o SQLite3 opcional)
* Manejo básico de errores
* React con Vite y Hooks
* Componentes:

  * `TaskList` - Lista de tareas
  * `TaskItem` - Elemento individual
  * `TaskForm` - Formulario de crear/editar
* Consumo de la API con `fetch`
* Variables de entorno configuradas
* CSS básico para estilos

**Bonus implementados (opcionales):**

* Persistencia con SQLite3 en el backend
* Validación simple de formularios
* Separación entre tareas pendientes y completadas

---

## Despliegue en Netlify

La app frontend está desplegada en Netlify (solo UI, datos simulados). Podés verla en:

> **URL de deploy:** `[TaskList](https://tasklistmaty.netlify.app/)`

---

## Instalación y ejecución local

### Pre-requisitos

* Node.js v16+ (recomendado)
* npm o yarn

### 1. Clonar el repositorio

```bash
git clone https://github.com/Maty910/tasklist.git
cd tasklist
```

### 2. Backend

```bash
cd backend
npm install
npm start
```

El servidor se levantará en `http://localhost:3001`.

### 3. Frontend

Abrí otra terminal:

```bash
cd frontend
npm install
npm run dev
```

La app se servirá en `http://localhost:5173` (o el puerto que indique Vite).

---

## Variables de entorno

* **Backend:** Crea un archivo `.env` en `backend/` si necesitas configurar variables (por ejemplo, puerto).
* **Frontend:** En `frontend/.env` define:

  ```ini
  VITE_API_URL=http://localhost:3000/api
  ```

---

## Uso de Git

Se siguió un flujo básico:

1. `git init` en la raíz del repo (monorepo frontend/backend)
2. Commits claros para cada funcionalidad
3. Ramas de feature (si correspondiera)

---

## Capturas de pantalla

Agrega en `screenshots/` imágenes de la app en funcionamiento:

* Lista de tareas y Formulario de creación/edición
<img width="1897" height="1080" alt="image" src="https://github.com/user-attachments/assets/82368cfe-ee91-4ecb-b7d7-ecbb068d9eee" />

* Tareas pendientes y Footer
<img width="1896" height="1080" alt="image" src="https://github.com/user-attachments/assets/f2c824a7-762f-429d-8c1a-0823fd73f29f" />

* Modal eliminación de tarea
<img width="1897" height="1080" alt="image" src="https://github.com/user-attachments/assets/915919c5-8c9d-40d7-a49e-5e7533bac2ef" />

