const { urlencoded } = require("express")
const Express = require('express')
const app = Express()
const mainRoutes = require("./Controllers/mainRoutes")

const PORT = 4000

let staticServer = Express.static(__dirname + "public")
app.use(Express.urlencoded({extended: true}))
app.use(staticServer)
app.use(mainRoutes)

//app.use(Express.static("public"))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})