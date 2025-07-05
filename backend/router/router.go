package router

import (
	"backend/handlers"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/todos", handlers.GetTodos).Methods("GET")
	router.HandleFunc("/todo/{id}", handlers.GetTodo).Methods("GET")
	router.HandleFunc("/todo", handlers.CreateTodo).Methods("POST")
	router.HandleFunc("/todo/{id}", handlers.UpdateTodo).Methods("PUT")
	router.HandleFunc("/todo/{id}", handlers.DeleteTodo).Methods("DELETE")
	return router
}
