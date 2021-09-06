package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html"
)

func main() {

	engine := html.New("./templates", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Static("/static", "./static")
	app.Use(logger.New())
	app.Get("/", index)

	app.Listen(":8080")
}

func index(c *fiber.Ctx) error {
	return c.Render("index", fiber.Map{
		"message": "hello vue js!",
	})

}
