# 🧠 Cyberpunk Todo App

A full-stack **Cyberpunk-themed Todo App** built with:

* ⚙️ **Backend**: Golang + Gorilla Mux + SQLite + GORM
* 🌐 **Frontend**: React + Vite + Axios + Tailwind CSS
* 🗃️ **Database**: SQLite
* 🔗 **API**: RESTful endpoints for todo CRUD operations

---

## 🚀 Features

* Add, delete todos
* Mark as completed
* Stylish **Cyberpunk UI**
* CORS-enabled for frontend/backend communication
* Lightweight setup (no external DBs needed)

---

## 🧱 Project Structure

```
TodoApp/
├── backend/           # Go server
│   ├── main.go
│   ├── handlers/
│   ├── models/
│   ├── router/
│   ├── database/
│   └── todo.db        # SQLite DB
├── frontend/          # React app
│   ├── src/
│   ├── public/
│   ├── vite.config.js
```

---

## 📆 Backend Setup (Go + SQLite)

### ✅ Prerequisites

* Go installed (v1.24+)
* SQLite

### ▶️ Run Backend

```bash
cd backend
go run main.go
```

* Server runs on `http://localhost:8000`
* REST API endpoints available at `/todo` and `/todos`

---

## 💻 Frontend Setup (React + Vite)

### ✅ Prerequisites

* Node.js (v22+)
* npm or yarn

### ▶️ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

* App runs on `http://localhost:5173`

---

## 🔀 API Endpoints

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/todos`     | Get all todos |
| GET    | `/todo/{id}` | Get one todo  |
| POST   | `/todo`      | Create a todo |
| PUT    | `/todo/{id}` | Update a todo |
| DELETE | `/todo/{id}` | Delete a todo |

> JSON Format:

```json
{
  "title": "Finish Cyberpunk UI",
  "done": false
}
```

---

## 🔒 CORS

Handled using `github.com/rs/cors` to allow React frontend (`http://localhost:5173`) to access the Go backend.

---

## 🛠️ TODOs

* Add First Todo Here

---

## 📄 License

MIT License – [Open Source](LICENSE)

---

## 🧠 Author

Made by [@rishugkp688](https://github.com/rishugkp688) with caffeine and cyberpunk inspiration.
