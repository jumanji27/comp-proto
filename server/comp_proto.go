package main


import (
    "fmt"

    "github.com/go-martini/martini"
    "github.com/martini-contrib/render"
)


type Main struct {}

func (self *Main) route(app *martini.ClassicMartini) {
    const (
        http_success = 200
    )

    app.Get(
        "/",
        func(render render.Render) {
            render.HTML(http_success, "index", nil)
        },
    )

    app.Post(
        "/api/v1/banner",
        func(render render.Render) {
            render.JSON(
                http_success,
                // Mocks
                map[string]interface{}{
                    "success": map[string]interface{}{
                        "title": "MasterCard Monday",
                        "desc": "Get 10% off your purchase storewide when you pay with your MasterCard",
                        "button_text": "Shop now",
                        "img": "storage/banner.jpg",
                        "discount": 10,
                    },
                    "errors": nil,
                },
            )
        },
    )
}


func main() {
    martini_app := martini.Classic()

    martini_app.Use(
        render.Renderer(
            render.Options{
                Directory: "server/views",
            },
        ),
    )
    martini_app.Use(
        martini.Static("client/public"),
    )

    app := Main{}
    app.route(martini_app)

    fmt.Printf("App starting!\n")

    martini_app.Run()
}
