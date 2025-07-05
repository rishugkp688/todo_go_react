package database

import (
	"backend/models"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open("todos.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Failed to connect to database: ", err)
	}

	err = DB.AutoMigrate(&models.Todo{})
	if err != nil {
		log.Fatal("❌ AutoMigrate failed: ", err)
	}

	log.Println("✅ Connected to SQLite and migrated schema successfully.")
}
