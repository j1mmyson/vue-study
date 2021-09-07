package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html"
)

func main() {

	engine := html.New("./", ".html")
	engine.Delims("${", "}")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(cors.New())
	app.Static("/", "./")
	app.Use(logger.New())
	app.Get("/", index)

	app.Listen(":8000")
}

func index(c *fiber.Ctx) error {
	return c.Render("index", nil)
}
