package main

import (
	"backend/database"
	"backend/router"
	"log"
	"net/http"

	"github.com/rs/cors"
)

func main() {
	// Connect to SQLite DB
	database.ConnectDB()

	// Set up routes
	r := router.Router()

	// CORS middleware for development
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"}, // allow Vite/React dev server
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type"},
	})

	// Wrap router with CORS
	handler := c.Handler(r)

	// Start server
	log.Println("🚀 Server starting at :8000")
	err := http.ListenAndServe(":8000", handler)
	if err != nil {
		log.Fatalf("❌ Failed to start server: %v", err)
	}
}
