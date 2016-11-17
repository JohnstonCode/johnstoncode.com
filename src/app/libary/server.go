package server

import (
    "net/http"
)

func Run(httpHandlers http.Handler) {
    http.ListenAndServe(":80", httpHandlers)
}
