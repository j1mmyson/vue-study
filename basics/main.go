package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html"
	"github.com/j1mmyson/vueStudy/basics/models"
)

func main() {

	engine := html.New("./templates", ".html")
	engine.Delims("${", "}")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Static("/static", "./static")
	app.Use(logger.New())
	app.Get("/", index)
	app.Get("/basic", basic)

	app.Get("/mock", mockApi)

	app.Listen(":8080")
}

func index(c *fiber.Ctx) error {
	return c.Render("index", nil)
}

func basic(c *fiber.Ctx) error {
	return c.Render("basic", nil)
}

func mockApi(c *fiber.Ctx) error {
	data := models.Data{}
	data.Id = "hello"
	data.Name = "byungwook"
	return c.JSON(data)
}
