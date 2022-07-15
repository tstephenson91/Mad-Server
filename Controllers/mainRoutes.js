const router = require("express").Router()

let adjective;
let noun;
let verb;
let noun2;
let adjective2;


router.get("/", (req, res) => {
    res.sendFile( "/public/start-page.html", {root:process.cwd()} )
})

router.get("/firstWord", (req, res) => {
    res.sendFile( "/public/firstWord.html", {root:process.cwd()} )
})

router.post("/secondWord", (req, res) => {
    adjective = (req.body.adjective)
    res.sendFile( "/public/secondWord.html", {root:process.cwd()} )
})

router.post("/thirdWord", (req, res) => {
    noun = req.body.noun
    res.sendFile( "/public/thirdWord.html", {root:process.cwd()} )
})

router.post("/fourthWord", (req, res) => {
    verb = req.body.verb
    res.sendFile( '/public/fourthWord.html', {root:process.cwd()} )
})

router.post("/fifthWord", (req, res) => {
    noun2 = req.body.noun2
    res.sendFile( '/public/fifthWord.html', {root:process.cwd()} )
})

router.post("/end", (req, res) => {
    adjective2 = req.body.adjective2
    res.send(`<h1>The ${adjective} ${noun} ${verb} the ${adjective2} ${noun2}</h1>`)
})

module.exports = router