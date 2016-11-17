package main

import (
    "app/libary/server"
    "app/route/route"
)

func main() {

    //Start server
    server.Run(route.routes())
}
